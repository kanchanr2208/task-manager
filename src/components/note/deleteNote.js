import { findEntryIndex } from "../common/findEntryIndex.js";
import { deleteEntry } from "../common/deleteEntry.js";
import { notesArray } from "./notesArray.js"
import { processEntry } from "../common/processEntry.js";
import { saveData } from "../common/saveData.js";

export function deleteNote(noteID) {
    
    let noteIndex = findEntryIndex(noteID, notesArray)
    deleteEntry(noteIndex, notesArray)

    //to update localStorage
    saveData(notesArray, "allNotes")

    //to compare local storage and notes array in JS
    console.log(notesArray)
}