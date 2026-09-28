import { findEntryIndex } from "../common/findEntryIndex.js" 
import { notesArray } from "../components/notesArray.js"
import { takeTitleFromUser } from "../common/takeTitleFromUser.js"
import { takeDescFromUser } from "../common/takeDescFromUser.js"
import { validateString } from "../common/validateString.js"
import { deleteEntry } from "../common/deleteEntry.js"

export function updateNote() {
    let noteID      //will be received from the edit button in the display screen
    let noteIndex = findEntryIndex(noteID, notesArray)

    let noteToBeUpdated = notesArray[noteIndex]

    let newTitle = validateString(takeTitleFromUser, 100, noteToBeUpdated.title) 
    let newDesc = validateString(takeDescFromUser, 2000, noteToBeUpdated.desc)


/*Right now, there is an issue that if the user clicks cancel because they dont want to update the 
title or description, the string will become null. so the string will be deleted. 
However, when the prompts are converted to input fields, this issue will be resolved */
    if(newTitle === null && newDesc === null) {
        deleteEntry(noteIndex, notesArray)
    } else {
        noteToBeUpdated.title = newTitle
        noteToBeUpdated.desc = newDesc
    }

    //the submit button will have to do the job of saveData(habitsArray, "AllHabits") as well!! Need to remember
    console.log("Note updated")
}