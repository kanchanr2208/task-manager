export function takeDescFromUser(defaultValue) {
    let desc
    if(!defaultValue) {
        desc = prompt("Add a Description", "")
    } else {
        desc = prompt("Add a Description", defaultValue)
    }
    
    return desc
}