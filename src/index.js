import './styles.css';
import { format, isPast, addDays, parse, isValid } from 'date-fns';

import { createBinaryHabit, createQuantitativeHabit } from "./components/habit/createHabit"
import { deleteHabit } from "./components/habit/deleteHabit"
import { updateHabit } from './components/habit/updateHabit';


import { createNote } from "./components/note/createNote"
import { deleteNote } from "./components/note/deleteNote"
import { updateNote } from "./components/note/updateNote"
import { notesArray } from './components/note/notesArray';

//updateHabit("b573896b-94ae-49b2-ab51-5427eb35d295")