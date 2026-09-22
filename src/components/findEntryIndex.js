export function findEntryIndex(id, array) {
    for (let i = 0; i < array.length; i++) {
        if (id === array[i].id) {
            return i
        }
    }
}