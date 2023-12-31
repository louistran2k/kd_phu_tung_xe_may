import { store } from "store"
import { clearSpinner, hideSpinner, showSpinner } from "store/global"
import { removeFullToken } from "utils/token"
import { userApi } from "api"
import {
  AxiosError,
  AxiosInstance,
  AxiosResponse,
  AxiosRequestConfig,
} from "axios"

interface IRequestAxios extends AxiosRequestConfig {
  skipLoading?: boolean
}

const onRequestConfig = (config: IRequestAxios) => {
  if (config.headers && !config.headers["Authorization"]) {
    const token = localStorage.getItem("accessToken")
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`
    }
  }
  if (config.headers && !config.headers["Content-Type"]) {
    config.headers["Content-Type"] = "application/json"
  }
  config.timeout = 30000
  !config.skipLoading && store.dispatch(showSpinner())
  return config
}

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
  store.dispatch(clearSpinner())
  return Promise.reject(error)
}

const onResponse = (res: AxiosResponse): AxiosResponse => {
  store.dispatch(hideSpinner())
  return res
}

const onResponseError = async (
  err: AxiosError,
  axiosInstance: AxiosInstance
): Promise<AxiosError | undefined> => {
  const originalConfig = err.config as AxiosRequestConfig
  store.dispatch(clearSpinner())

  if (err.response?.status === 401) {
    const currentRefreshToken = localStorage.getItem("refreshToken")
    removeFullToken()
    if (!currentRefreshToken) {
      window.location.href = "/"
      return
    }
    const token = await userApi.refreshToken(currentRefreshToken)
    localStorage.setItem("accessToken", token.accessToken)
    localStorage.setItem("refreshToken", token.refreshToken)
    if (originalConfig.headers) {
      originalConfig.headers.Authorization = `Bearer ${token.accessToken}`
    }

    return axiosInstance(originalConfig) as any;
    // TODO: process expiredApiQueue
    // let token: any = null
    // if (!expiredApiQueue.length) {
    //   token = await userApi.refreshToken(currentRefreshToken)
    //   localStorage.setItem("accessToken", token.data.accessToken)
    //   localStorage.setItem("refreshToken", token.data.refreshToken)
    //   originalConfig.headers.Authorization = `Bearer ${token.data.accessToken}`
    // }

    // return new Promise((resolve, reject) => {
    //   if (!token.data.accessToken || !token.data.refreshToken)
    //     expiredApiQueue.push(reject(err))
    //   else expiredApiQueue.push(resolve(axiosInstance(originalConfig)))
    // })
  }
  return Promise.reject(err?.response?.data)
}

export const setupInterceptors = (axiosInstance: AxiosInstance) => {
  axiosInstance.interceptors.request.use(onRequestConfig, onRequestError)
  axiosInstance.interceptors.response.use(onResponse, (err: AxiosError) =>
    onResponseError(err, axiosInstance)
  )
}
