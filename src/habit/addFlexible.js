export function addFlexible() {
        let isFlexible
        let input = prompt("Is the schedule flexible? type Y/N. If flexible, the frequency is counted from the latest 'completed' entry", "N")

        if (input === "Y") {
            isFlexible = true
        } else {
            isFlexible = false
        }

        return isFlexible
    }