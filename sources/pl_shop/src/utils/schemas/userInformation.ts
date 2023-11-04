import * as yup from 'yup';
import { digitsOnly } from 'utils/helper';

export const schemaUserInformation = yup.object().shape({
  citizenIdentification: yup
    .string()
    .required('Đây là trường bắt buộc')
    .length(12, 'CCCD phải là 12 số')
    .test('Digits only', 'CCCD chỉ bao gồm ký tự số', digitsOnly),
  firstName: yup.string().required('Đây là trường bắt buộc'),
  lastName: yup.string().required('Đây là trường bắt buộc'),
  gender: yup.number(),
  dateOfBirth: yup.date().nullable(),
  address: yup.string(),
  email: yup
    .string()
    .required('Đây là trường bắt buộc')
    .email('Email không đúng định dạng'),
  phoneNumber: yup
    .string()
    .required('Đây là trường bắt buộc')
    .length(10, 'Số điện thoại phải là 10 số')
    .test('Digits only', 'Số điện thoại chỉ bao gồm ký tự số', digitsOnly),
  taxCode: yup
    .string()
    .required('Đây là trường bắt buộc')
    .min(10, 'Mã số thuế có ít nhất 10 kí tự')
    .max(13, 'Mã số thuế có nhiều nhất 13 kí tự')
    .test('Digits only', 'Mã số thuế chỉ bao gồm ký tự số', digitsOnly),
});
