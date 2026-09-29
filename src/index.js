import './styles.css';
import { deleteHabit } from "./components/habit/deleteHabit"
import { updateHabit } from './components/habit/updateHabit';
import { format, isPast, addDays, parse, isValid } from 'date-fns';

import { createNote } from "./components/note/createNote"
import { deleteNote } from "./components/note/deleteNote"
import { updateNote } from "./components/note/updateNote"
import { notesArray } from './components/note/notesArray';

//createNote()
updateNote("f41f8ff2-86d1-4c1e-99ce-b31d8c54884e") /* Add id here */
//deleteNote("f41f8ff2-86d1-4c1e-99ce-b31d8c54884e") /* Add id here */
