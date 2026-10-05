import noteIcon from "../../media/note.svg"
import listIcon from "../../media/list.svg"
import habitIcon from "../../media/habit.svg"
import allEntriesIcon from "../../media/all-entries.svg"

import {loadComponent} from "./sidePanelSectionComponent.js"

export function loadSidePanelEntries() {
    const container = document.createElement("div")
    container.classList.add("side-panel-section")

    const title = document.createElement("div")
    title.classList.add("side-panel-title")
    title.textContent = "entries"

    const notes = loadComponent(noteIcon, "Notes")
    const lists = loadComponent(listIcon, "Lists")
    const habits = loadComponent(habitIcon, "Habits")
    const allEntries = loadComponent(allEntriesIcon, "All Entries")

    
    container.append(title, notes, lists, habits, allEntries)

    return container
}