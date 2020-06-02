import { Injectable } from '@angular/core';
import * as CryptoJS from "crypto-js";
@Injectable({
  providedIn: 'root'
})
export class EncryptionService {

  constructor() { }
  secretKey = "YourSecretKeyForEncryption&Descryption";
  encryptData(data) {
    try {
      return CryptoJS.AES.encrypt(
        JSON.stringify(data),
        this.secretKey
      ).toString();
    } catch (e) {
      console.log(e);
    }
  }
  decryptData(data) {
    try {
      const bytes = CryptoJS.AES.decrypt(data, this.secretKey);
      if (bytes.toString()) {
        return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
      }
      return data;
    } catch (e) {
      console.log(e);
    }
  }
}
