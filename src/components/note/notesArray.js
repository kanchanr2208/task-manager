import { loadInitialData } from "../common/loadInitialData"

// This instantly builds the array using whatever data is in local storage
export const notesArray = loadInitialData("allNotes");