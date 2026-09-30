import { findEntryIndex } from "../common/findEntryIndex"
import { deleteEntry } from "../common/deleteEntry"
import { habitsArray } from "./habitsArray"
import { saveData } from "../common/saveData.js";

export function deleteHabit(habitID) {
    
    let habitIndex = findEntryIndex(habitID, habitsArray)
    deleteEntry(habitIndex, habitsArray)

    saveData(habitsArray, "allHabits")
}

/* This can probably be a common function, since the id will be capturd from the dom element,
and its index can be found using the findEntryIndex function. */