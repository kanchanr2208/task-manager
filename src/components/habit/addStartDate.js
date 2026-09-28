export function addStartDate(defaultValue) {
    let startDate 
    if(!defaultValue) {
        /* Keeping the default start date as today for now. 
        needs to be changed to input type = date later on */
        startDate = new Date()
    } else {
        startDate = defaultValue
    }
    return startDate
}