import { findEntryIndex } from "../common/findEntryIndex.js";
import { deleteEntry } from "../common/deleteEntry.js";
import { notesArray } from "../components/notesArray.js"

export function deleteNote() {
    let noteToBeDeleted;

    let noteIndex = findEntryIndex(noteToBeDeleted.id, notesArray)
    deleteEntry(noteIndex, notesArray)

    console.log(notesArray)
}