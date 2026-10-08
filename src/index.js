import './styles.css';
import { format, isPast, addDays, parse, isValid } from 'date-fns';

import { createBinaryHabit, createQuantitativeHabit } from "./components/habit/createHabit"
import { deleteHabit } from "./components/habit/deleteHabit"
import { updateHabit } from './components/habit/updateHabit';


import { createNote } from "./components/note/createNote"
import { deleteNote } from "./components/note/deleteNote"
import { updateNote } from "./components/note/updateNote"
import { notesArray } from './components/note/notesArray';


import { loadContainer } from './components/dom/container';
import { loadSidePanel } from './components/dom/sidepanel';
import { loadDisplaySection } from './components/dom/displaySection';

let container = loadContainer()
let sidePanel = loadSidePanel()
let displaySection = loadDisplaySection()

container.append(sidePanel)
container.append(displaySection)

document.body.append(container)
