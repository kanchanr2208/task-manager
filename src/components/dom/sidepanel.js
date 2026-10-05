import { loadDashboardButton } from "./sidePanelComponents/dashBoardButton"
import { loadSidePanelEntries } from "./sidePanelComponents/sidePanelEntries"
import { loadSidePanelPriorities } from "./sidePanelComponents/sidePanelPriorities"
import { loadSidePanelDeadlines } from "./sidePanelComponents/sidePanelDeadlines"

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