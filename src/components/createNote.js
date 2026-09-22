import { takeTitleFromUser } from "./takeTitleFromUser.js"
import { takeDescFromUser } from "./takeDescFromUser.js"
import { validateString } from "./validateString.js"
import { createNoteInstance } from "./createNoteInstance.js"
import { convertToJSON } from "./convertToJSON.js"    /*Needs to be deleted maybe */
import { notesArray } from "./notesArray.js" 
import { addToArray } from "./addToArray.js"
import { saveData } from "./saveData.js"




export function createNote() {
    /*
        keeping title max length as 100. 
        keeping desc max length as 2000.
        will need to change function when prompt is converted to an input element 
    */
    let titleText = validateString(takeTitleFromUser, 100) 
    let descText = validateString(takeDescFromUser, 2000)

    let noteObject = createNoteInstance(titleText, descText)

    if (noteObject === undefined) {
        alert("Empty Note Discarded")
        return; 
    }
    addToArray(noteObject, notesArray)
    saveData(notesArray)
}


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

