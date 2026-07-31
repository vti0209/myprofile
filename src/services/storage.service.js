export class StorageService {
  static get(key, defaultValue = null) {
    try {
      const val = localStorage.getItem(key);
      return val !== null ? val : defaultValue;
    } catch (e) {
      console.warn("Storage read error", e);
      return defaultValue;
    }
  }

  static set(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch (e) {
      console.warn("Storage write error", e);
    }
  }
}
