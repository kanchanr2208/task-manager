import { checkStorageAvailability } from "./checkStorageAvailability";
import { convertToJSON } from "./convertToJSON";

export function saveData(arrayToSave) {
  // 1. Verify storage is available before trying to use it
  if (checkStorageAvailability("localStorage")) {
    
    // 2. Convert the JavaScript array into a text string
    const dataString = convertToJSON(arrayToSave)
    
    // 3. Save that text string to the browser's database
    localStorage.setItem("allNotes", dataString);
  }
}