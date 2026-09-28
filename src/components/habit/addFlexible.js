export function addFlexible(defaultValue) {
        let isFlexible
        let input
        if(!defaultValue || defaultValue === false) {
            input = prompt("Is the schedule flexible? type Y/N. If flexible, the frequency is counted from the latest 'completed' entry", "N")
        } else {
            input = prompt("Is the schedule flexible? type Y/N. If flexible, the frequency is counted from the latest 'completed' entry")
        }
        

        if (input === "Y") {
            isFlexible = true
        } else {
            isFlexible = false
        }

        return isFlexible
    }