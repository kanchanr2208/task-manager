import { findEntry } from "./findEntry";

export function undoDelete(id, array) {
    let entryIndex = findEntry(id, array)
    array[entryIndex].isBinned = false
}