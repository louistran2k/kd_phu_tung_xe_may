export enum EErrorMessage {
  REQUIRED = 'Đây là trường bắt buộc',
  EMAIL_1 = 'Email không đúng định dạng',
  PASSWORD_1 = 'Mật khẩu phải có độ dài từ 8 - 20 ký tự',
  CONFIRM_PASSWORD = 'Mật khẩu không trùng khớp',
  PHONE_NUMBER = 'Số điện thoại có 10 ký tự số'
}

export enum EStatusCode {
  UNAUTHORIZED = 401,
  BAD_REQUEST = 400,
}