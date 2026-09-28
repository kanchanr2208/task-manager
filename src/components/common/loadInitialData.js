import { checkStorageAvailability } from "./checkStorageAvailability";

export function loadInitialData(storedArrayName) {
  if (checkStorageAvailability("localStorage")) {
    const storedData = localStorage.getItem(storedArrayName);

    if (storedData) {
      // Data exists, return the parsed array
      return JSON.parse(storedData);
    }
  }
  
  // If storage is unavailable or empty, return an empty array
  return [];
}