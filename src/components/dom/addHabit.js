import { loadBackAndCloseButtons } from "./backAndCloseButtons";

export function loadAddHabit() {
    const container = document.createElement("div")
    container.classList.add("add-habit")

    const backAndClose = loadBackAndCloseButtons()

    const title = document.createElement("input")
    title.classList.add("entry-title")
    title.type = "text"
    title.placeholder = "Title"

    const lhs = document.createElement("div")
    lhs.classList.add("frequency-container")

    const rhs = document.createElement("div")


    const frequencyLabel = document.createElement("label")
    frequencyLabel.htmlFor = "frequency"
    frequencyLabel.textContent = "Frequency"

    const frequency = document.createElement("select")
    frequency.id = "frequency"

    const everyday = document.createElement("option")
    const threeDays = document.createElement("option")
    const workday = document.createElement("option")
    const weekly = document.createElement("option")
    const monthly = document.createElement("option")

    everyday.value = "everyday"
    everyday.textContent = "Every Day"
    
    threeDays.value = "threeDays"
    threeDays.textContent = "Every 3 Days"

    workday.value = "workday"
    workday.textContent = "Every Workday"

    weekly.value = "weekly"
    weekly.textContent = "Once a week"

    monthly.value = "monthly"
    monthly.textContent = "Once a month"

    frequency.append(everyday, threeDays, workday, weekly, monthly)

    lhs.append(frequency)

    container.append(backAndClose, title)


    return container
}