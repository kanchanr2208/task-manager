import { checkStorageAvailability } from "./checkStorageAvailability";

export function loadInitialData() {
  if (checkStorageAvailability("localStorage")) {
    const storedData = localStorage.getItem("allNotes");

    if (storedData) {
      // Data exists, return the parsed array
      return JSON.parse(storedData);
    }
  }
  
  // If storage is unavailable or empty, return an empty array
  return [];
}