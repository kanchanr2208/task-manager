export function takeTitleFromUser(defaultValue) {
    let title
    if(!defaultValue) {
        title = prompt("Add a Title", "")
    } else {
        title = prompt("Add a Title", defaultValue)
    }
    return title
}