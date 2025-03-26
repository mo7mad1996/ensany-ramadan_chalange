import AES from "crypto-js/aes";
import Utf8 from "crypto-js/enc-utf8";

const secretKey = import.meta.env.VITE_SECRET_KEY || "<u1@*B47J8}-";

export const encryptData = (data: any) => {
  return AES.encrypt(JSON.stringify(data), secretKey).toString();
};

export const decryptData = (cipherText: any) => {
  try {
    const bytes = AES.decrypt(cipherText, secretKey);
    return JSON.parse(bytes.toString(Utf8));
  } catch (e) {
    console.error("Failed to decrypt data:", e);
    return null;
  }
};
