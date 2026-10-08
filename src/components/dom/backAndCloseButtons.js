import back from "../../media/back-button.svg"
import close from "../../media/close.svg"

export function loadBackAndCloseButtons() {
    const container = document.createElement("div")
    container.classList.add("back-and-close-container")

    const backContainer = document.createElement("div")
    backContainer.classList.add("button-container")
    backContainer.title = "Discard if empty, else Save"

    const closeContainer = document.createElement("div")
    closeContainer.classList.add("button-container")
    closeContainer.title = "Delete note"
    
    const backIcon = document.createElement("img")
    backIcon.src = back

    const closeIcon = document.createElement("img")
    closeIcon.src = close

    backContainer.append(backIcon)
    closeContainer.append(closeIcon)

    container.append(backContainer, closeContainer)

    return container


}