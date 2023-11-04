export interface User {
  id: string;
  firstName: string;
  lastName: string;
  gender: number | null;
  dateOfBirth: Date | null;
  address: string;
  email: string;
  phoneNumber: string;
  taxCode: string;
}