import { IUserStore, userInit } from "store/user"
import { getLocalStorage, setLocalStorage } from "utils/storage";

export const userReducer = {
  logout: (state: IUserStore) => {
    state.accessToken = '';
    state.refreshToken = '';
    state.user = userInit;
    const storage = getLocalStorage();
    if (storage) {
      delete storage?.accessToken;
      delete storage?.refreshToken;
      delete storage?.user;
      setLocalStorage(storage)
    }
  }
}
