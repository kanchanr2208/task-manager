import { findEntryIndex } from "./findEntryIndex";

export function undoDelete(id, array) {
    let entryIndex = findEntryIndex(id, array)
    array[entryIndex].isBinned = false
}