import { loadAddNote} from "./addNote"
import { loadAddHabit } from "./addHabit"

export function loadDisplaySection() {
    const container = document.createElement("div")
    container.classList.add("display-section")

    // const note = loadAddNote()
    // container.append(note)

    const habit = loadAddHabit()
    container.append(habit)
    return container
}