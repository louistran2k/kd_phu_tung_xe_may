export const digitsOnly = (value: any) => /^\d+$/.test(value);

export const isCitizenIdentification = (value: any) => {
  if (value.length !== 10 || value.length !== 13) {
    return false;
  }
  return true;
};