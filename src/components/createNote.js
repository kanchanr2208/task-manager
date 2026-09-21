import { notesArray } from "./notesArray.js" //Address will be changed
import { addNoteToArray } from "./addNoteToArray.js"
import {takeTitleFromUser} from "./takeTitleFromUser.js"
import { takeDescFromUser } from "./takeDescFromUser.js"
import { Note } from "./NoteObjectClassConstructor.js"



export function createNote() {

    //This will be taken from the user
    let titleText = takeTitleFromUser()
    let descText = takeDescFromUser()

    //create ID and notes object only if title or description is provided
    if((titleText !== null && titleText !== "") || (descText !== null && descText !== "")) {
        let uniqueID = crypto.randomUUID()
        let newNote = new Note(titleText, descText, uniqueID)
        let noteJSON = JSON.stringify(newNote);
        addNoteToArray(noteJSON, notesArray)
    }

}


    /*
    Need title and description validations:
    Common: 
    - minimum character length of 3
    - it cannot be just a string of empty spaces

    Title: 
    - maximum character length of 100 characters
    - if there is no description, title is compulsory

    For description 
    - maximum character length of 2000 characers
    - if there is no title, description is compulsory

    */


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

