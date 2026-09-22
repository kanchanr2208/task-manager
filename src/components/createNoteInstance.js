import { Note } from "./NoteObjectClassConstructor.js"

export function createNoteInstance(title, desc) {
    if((title !== null && title !== "") || (desc !== null && desc !== "")) {
        let uniqueID = crypto.randomUUID()
        let newNote = new Note(title, desc, uniqueID)

        return newNote
    }
    
}