import './styles.css';
import { createNote } from './components/note/createNote';
import { createBinaryHabit, createQuantitativeHabit } from "./components/habit/createHabit"
import { processEntry } from "./components/common/processEntry"
import { notesArray } from './components/note/notesArray';
import { format, isPast, addDays, parse, isValid } from 'date-fns';

// export function processNewNote() {
//     // 1. Get the object from your factory
//     let newNote = createNote();

//     // 2. Pass it into your common processor
//     processEntry(newNote, notesArray, "allNotes");
// }

// processNewNote()
