import { findEntryIndex } from "../common/findEntryIndex.js" 
import { notesArray } from "./notesArray.js"
import { takeTitleFromUser } from "../common/takeTitleFromUser.js"
import { takeDescFromUser } from "../common/takeDescFromUser.js"
import { validateString } from "../common/validateString.js"
import { deleteEntry } from "../common/deleteEntry.js"
import { saveData } from "../common/saveData.js"

export function updateNote(noteID) {
    
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

    //the submit button will have to do the job of saveData(notesArray, "allNotes")
    //to update localStorage
    saveData(notesArray, "allNotes")

    //to compare local storage and notes array in JS
    console.log(notesArray)
}