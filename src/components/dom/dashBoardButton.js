import dashboardIcon from "../../media/dashboard-icon.svg"

export function loadDashboardButton() {
    const dashboardButton = document.createElement("div")
    dashboardButton.classList.add("dashboard-button")

    const dashboardIconContainer = document.createElement("div")
    const dashboardText = document.createElement("div")

    dashboardIconContainer.classList.add("dashboard-icon")
    dashboardText.classList.add("dashboard-text")

    const dashboardImage = document.createElement("img")
    dashboardImage.src = dashboardIcon;
    dashboardText.textContent = "Dashboard"

    dashboardIconContainer.append(dashboardImage)

    dashboardButton.append(dashboardIconContainer, dashboardText)

    return dashboardButton
}