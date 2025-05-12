
export const validateNumber = (value: string) => {
   return /^[0-9]+$/.test(value) || value == '';
};