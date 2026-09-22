import { findEntry } from "./findEntry.js";
import { deleteEntry } from "./deleteEntry.js";
import { notesArray } from "./notesArray.js"

export function deleteNote() {
    let noteToBeDeleted;

    let noteIndex = findEntry(noteToBeDeleted.id, notesArray)
    deleteEntry(noteIndex, notesArray)

    console.log(notesArray)
}