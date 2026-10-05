import highIcon from "../../../media/high-priority-color.svg"
import midIcon from "../../../media/mid-priority-color.svg"
import lowICon from "../../../media/low-priority-color.svg"
import allIcon from "../../../media/all-priority-grayscale.svg"

import {loadComponent} from "./sidePanelSectionComponent.js"

export function loadSidePanelPriorities() {
    const container = document.createElement("div")
    container.classList.add("side-panel-section")

    const title = document.createElement("div")
    title.classList.add("side-panel-title")
    title.textContent = "priorities"

    const high = loadComponent(highIcon, "High")
    const mid = loadComponent(midIcon, "Mid")
    const low = loadComponent(lowICon, "Low")
    const all = loadComponent(allIcon, "All Priorities")
    

    container.append(title, high, mid, low, all)
    return container
}