import { loadDashboardButton } from "./dashBoardButton"
import { loadSidePanelEntries } from "./sidePanelEntries"
import { loadSidePanelPriorities } from "./sidePanelPriorities"
import { loadSidePanelDeadlines } from "./sidePanelDeadlines"

export function loadSidePanel() {
    const sidepanelContainer = document.createElement("div")
    sidepanelContainer.classList.add("side-panel-container")

    const dashboard = loadDashboardButton()
    const entries = loadSidePanelEntries()
    const priorities = loadSidePanelPriorities()
    const deadlines = loadSidePanelDeadlines()

    
    



    sidepanelContainer.append(dashboard, entries, priorities, deadlines)

    return sidepanelContainer
}