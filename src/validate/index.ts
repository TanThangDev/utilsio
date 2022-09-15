export const validateNumber = (value: any): boolean => {
  return /^-?\d+$/.test(value);
};

export const validateString = (value: any): boolean => {
  return typeof value === 'string';
};

export const validateArray = (value: any): boolean => {
  return Array.isArray(value);
};

export const validateObject = (value: any): boolean => {
  return typeof value === 'object' && !Array.isArray(value);
};

export const validateEmail = (value: string): boolean => {
  return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value);
};

export const validatePassword = (password: string): boolean => {
  return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);
};

export const validatePhone = (phone: string): boolean => {
  return /^0[0-9]{9,10}$/.test(phone);
};

export const validateDate = (date: string): boolean => {
  return /^\d{4}-\d{2}-\d{2}$/.test(date);
};

export const validateTime = (time: string): boolean => {
  return /^\d{2}:\d{2}$/.test(time);
};

export const validateDateTime = (dateTime: string): boolean => {
  return /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}$/.test(dateTime);
};

export const validateURL = (url: string): boolean => {
  return /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/.test(url);
};

export const validateDomain = (domain: string): boolean => {
  return /^((?!-)[A-Za-z0-9-]{1,63}(?<!-)\\.)+[A-Za-z]{2,6}$/.test(domain);
};

export const validateIP = (ip: string): boolean => {
  return /^([0-9]{1,3}\\.){3}[0-9]{1,3}$/.test(ip);
};

export const validateIPv4 = (ip: string): boolean => {
  return /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(
    ip,
  );
};

export const validateIPv6 = (ip: string): boolean => {
  return /^([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}$/.test(ip);
};

export const validateHex = (hex: string): boolean => {
  return /^[0-9a-fA-F]{6}$/.test(hex);
};

export const validateHexa = (hexa: string): boolean => {
  return /^[0-9a-fA-F]{8}$/.test(hexa);
};

export const validateHexColor = (hex: string): boolean => {
  return /^#?([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.test(hex);
};

export const validateHexaColor = (hexa: string): boolean => {
  return /^#?([0-9a-fA-F]{4}|[0-9a-fA-F]{8})$/.test(hexa);
};

export const validateBase64 = (base64: string): boolean => {
  return /[^A-Za-z0-9+/=]/.test(base64);
};

export const validateBase64Image = (base64: string): boolean => {
  return /^data:image\/[a-z]+;base64,/.test(base64);
};

export const validateCreditCard = (card: string): boolean => {
  return /^(\d{4}[- ]){3}\d{4}|\d{16}$/.test(card);
};
