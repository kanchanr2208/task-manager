import pastIcon from "../../../media/past-deadline.svg"
import upcomingIcon from "../../../media/upcoming-deadline.svg"
import allIcon from "../../../media/all-deadline.svg"

import {loadComponent} from "./sidePanelSectionComponent.js"

export function loadSidePanelDeadlines() {
    const container = document.createElement("div")
    container.classList.add("side-panel-section")

    const title = document.createElement("div")
    title.classList.add("side-panel-title")
    title.textContent = "deadlines"

    const past = loadComponent(pastIcon, "Past Due")
    const upcoming = loadComponent(upcomingIcon, "Near Future")
    const all = loadComponent(allIcon, "All Deadlines")
    

    container.append(title, past, upcoming, all)
    return container
}