import { findEntryIndex } from "./findEntryIndex";

export function togglePin(id, array) {
    let noteIndex = findEntryIndex(id, array)

    let noteToBeUpdated = array[noteIndex]

    //Since it is a boolean value, this will work
    noteToBeUpdated.isPinned = !noteToBeUpdated.isPinned
    console.log("Pin toggled")
}