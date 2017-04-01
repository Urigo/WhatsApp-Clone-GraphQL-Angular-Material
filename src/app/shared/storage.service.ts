import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {
  private available: boolean;

  constructor() {
    this.available = this.storageAvailable();
  }

  set(key: string, value: any) {
    if (this.available) {
      return this.storage().setItem(key, JSON.stringify(value));
    }
  }

  get(key: string) {
    if (this.available) {
      const value = this.storage().getItem(key);
      return value && JSON.parse(value);
    }
  }

  remove(key: string) {
    if (this.available) {
      return this.storage().removeItem(key);
    }
  }

  private storage() {
    return window.localStorage;
  }

  private storageAvailable(): boolean {
    try {
      const storage = window.localStorage,
        x = '__storage_test__';
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
    } catch (e) {
      return false;
    }
  }

}
