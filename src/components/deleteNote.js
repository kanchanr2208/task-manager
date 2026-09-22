import { findEntryIndex } from "./findEntryIndex.js";
import { deleteEntry } from "./deleteEntry.js";
import { notesArray } from "./notesArray.js"

export function deleteNote() {
    let noteToBeDeleted;

    let noteIndex = findEntryIndex(noteToBeDeleted.id, notesArray)
    deleteEntry(noteIndex, notesArray)

    console.log(notesArray)
}