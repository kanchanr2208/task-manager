export function addFrequency(defaultValue) {
        let frequency
        let input
        if (!defaultValue) {
            input = prompt("Add Frequency. 1 = everyday, 3 = every 3 days, 5 = every workday, 7 = weekly, 30 = monthly ", "")
        } else {
            input = prompt("Add Frequency. 1 = everyday, 3 = every 3 days, 5 = every workday, 7 = weekly, 30 = monthly ", defaultValue)
        }
        
        switch(input) {
            case "1":
                frequency = 1
                break
            case "3":
                frequency = 3
                break
            case "5": 
                frequency = "weekday"
                break
            case "7":
                frequency = "weekly"
                break
            case "30": 
                frequency = "monthly"
                break
            default: 
                frequency = 1
        }

        return frequency
    }