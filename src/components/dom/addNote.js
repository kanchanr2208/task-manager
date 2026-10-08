import back from "../../media/back-button.svg"
import close from "../../media/close.svg"
import { loadBackAndCloseButtons } from "./backAndCloseButtons"

export function loadAddNote() {
    const container = document.createElement("div")
    container.classList.add("add-note")

    const buttonsContainer = loadBackAndCloseButtons()

    const title = document.createElement("input")
    title.classList.add("entry-title")
    title.type = "text"
    title.placeholder = "Title"

    const note = document.createElement("textarea")
    note.placeholder = "Note"
    
    
    container.append(buttonsContainer, title, note)

    return container
}