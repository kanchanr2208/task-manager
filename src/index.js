import './styles.css';
import { createNote } from './components/note/createNote';
import { createBinaryHabit, createQuantitativeHabit } from "./components/habit/createHabit"
import { processEntry } from "./components/common/processEntry"
import { notesArray } from './components/note/notesArray';
import { format, isPast, addDays, parse, isValid } from 'date-fns';
import { deleteNote } from "./components/note/deleteNote"
import { updateNote } from "./components/note/updateNote"

// export function processNewNote() {
//     // 1. Get the object from your factory
//     let newNote = createNote();

//     // 2. Pass it into your common processor
//     processEntry(newNote, notesArray, "allNotes");
// }

// processNewNote()


deleteNote("83520bf7-03aa-4c08-bc9d-f8f4272e26bd")