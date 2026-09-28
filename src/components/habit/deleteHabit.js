import { findEntryIndex } from "../common/findEntryIndex"
import { deleteEntry } from "../common/deleteEntry"
import { habitsArray } from "./habitsArray"

export function deleteHabit() {
    //we will have to capture this from the DOM element, and subsequently its ID
    let habitToBeDeleted

    let habitIndex = findEntryIndex(habitToBeDeleted.id, habitsArray)
    deleteEntry(habitIndex, habitsArray)
}

/* This can probably be a common function, since the id will be capturd from the dom element,
and its index can be found using the findEntryIndex function. */