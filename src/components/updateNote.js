import { findEntry } from "./findEntry.js" 
import { notesArray } from "./notesArray.js"
import { validateString } from "./validateString.js"
import { deleteEntry } from "./deleteEntry.js"

export function updateNote() {
    let noteID      //will be received from the edit button in the display screen
    let noteIndex = findEntry(noteID, notesArray)

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
    console.log("Note updated")
}