import { takeTitleFromUser } from "../common/takeTitleFromUser.js"
import { takeDescFromUser } from "../common/takeDescFromUser.js"
import { validateString } from "../common/validateString.js"
import { createNoteInstance } from "./createNoteInstance.js"
import { notesArray } from "./notesArray.js"
import { processEntry } from "../common/processEntry.js"




export function createNote() {
    /*
        keeping title max length as 100. 
        keeping desc max length as 2000.
        will need to change function when prompt is converted to an input element 
    */
    let titleText = validateString(takeTitleFromUser, 100) 
    let descText = validateString(takeDescFromUser, 2000)

    //This needs to triggered by the submit function
    let noteObject = createNoteInstance(titleText, descText)
    processEntry(noteObject, notesArray, "allNotes");

    return noteObject
}

//This will be the process note function attached to the submit button of the new note creation button
// export function processNewNote() {
//     // 1. Get the object from your factory
//     let newNote = createNote();

//     // 2. Pass it into your common processor
//     processEntry(newNote, notesArray, "allNotes");
// }

// processNewNote()

    /*
    Need the HTML components for:
    1. taking the user's input for the title  <-- currently added a prompt
    2. taking the user's input for the desc   <-- currently added a prompt

    3. displaying the note on the screen with
      a) the title
      b) description
      c) a delete option
      d) an edit option
      e) a pinned option 
    */

