import { format, isPast, addDays, parse, isValid } from 'date-fns';

export function addEndDate(defaultValue) {
        let endDate
        let input

        if(!defaultValue) {
            input = prompt("Enter end Date in dd/mm/yyyy format. Example: 28/09/2027. if format not followed, end date is forever", "")
        } else {
            input = prompt("Enter end Date in dd/mm/yyyy format. Example: 28/09/2027. if format not followed, end date is forever", defaultValue)
        }

        if (input !== null) {
                let parsedDate = parse(input.trim(), 'dd/MM/yyyy', new Date())

                if (isValid(parsedDate)) {
                    endDate = parsedDate
                } else {
                    endDate = null
                }
            } else {
                endDate = null
            }

        /* For end date, i will probably add a radio button of want end date or not. and if want, then a calender will be displayed */
        
        
        return endDate
    }