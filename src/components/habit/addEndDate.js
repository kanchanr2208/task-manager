import { format, isPast, addDays, parse, isValid } from 'date-fns';

export function addEndDate(defaultValue) {
        let endDate
        let input

        if(!defaultValue) {
            input = prompt("Enter end Date in dd/mm/yyyy format. Example: 28/09/2027. if format not followed, end date is forever", "")
        } else {

            /*The displayed date will be a json string. need to convert it to the dd/MM/yyyy format, 
            else it will become null if the user just clicks okay, since now the format doesnt match*/
            let readableEndDate = new Date(defaultValue)
            let displayedEndDate = format(readableEndDate, 'dd/MM/yyyy')
            
            input = prompt("Enter end Date in dd/mm/yyyy format. Example: 28/09/2027. if format not followed, end date is forever", displayedEndDate)
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