'use client';

class Storage {
  // Helper function to format keys
  static formatKey(name: string): string {
    return `react_app_${name}`;
  }

  // localStorage
  static set(key: string, value: unknown): void {
    if (!value) return;
    typeof window !== 'undefined' &&
      localStorage.setItem(Storage.formatKey(key), JSON.stringify(value));
  }

  static get<T>(key: string): T | null {
    if (!key) return null;
    const item = typeof window !== 'undefined' && localStorage.getItem(Storage.formatKey(key));
    if (!item) return null;
    return JSON.parse(item) as T;
  }

  static remove(key: string): void {
    if (!key) return;
    typeof window !== 'undefined' && localStorage.removeItem(Storage.formatKey(key));
  }

  static removeAll(): void {
    typeof window !== 'undefined' && localStorage.clear();
  }

  // sessionStorage
  static sset(key: string, value: unknown): void {
    if (!value) return;
    typeof window !== 'undefined' &&
      sessionStorage.setItem(Storage.formatKey(key), JSON.stringify(value));
  }

  static sget<T>(key: string): T | null {
    if (!key) return null;
    const item = typeof window !== 'undefined' && sessionStorage.getItem(Storage.formatKey(key));
    if (!item) return null;
    return JSON.parse(item) as T;
  }

  static sremove(key: string): void {
    if (!key) return;
    typeof window !== 'undefined' && sessionStorage.removeItem(Storage.formatKey(key));
  }

  static sremoveAll(): void {
    typeof window !== 'undefined' && sessionStorage.clear();
  }
}

export default Storage;
