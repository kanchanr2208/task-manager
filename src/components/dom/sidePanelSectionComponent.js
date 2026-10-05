export function loadComponent(icon, name) {
    const entry = document.createElement("div")
    entry.classList.add("side-panel-section-component")

    const imageContainer  = document.createElement("div")
    const text = document.createElement("div")

    const image = document.createElement("img")
    image.src = icon
    imageContainer.append(image)

    text.textContent = name

    entry.append(imageContainer, text)

    return entry

}