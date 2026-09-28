import { takeTitleFromUser } from "../common/takeTitleFromUser.js"
import { takeDescFromUser } from "../common/takeDescFromUser.js"
import { validateString } from "../common/validateString.js"
import { addStartDate } from "./addStartDate.js";
import { addEndDate } from "./addEndDate.js";
import { addFlexible } from "./addFlexible.js";
import { addRigid } from "./addRigid.js";
import { addFrequency } from "./addFrequency.js";
import { createBinaryHabitInstance } from "./createHabitInstance.js";

import { addTargetAmount } from "./addTargetAmount.js";
import { addUnit } from "./addUnit.js"

export function createBinaryHabit() {
    let title = validateString(takeTitleFromUser, 100) //create and validate title string with 100 char limit
    let desc = validateString(takeDescFromUser, 2000)   //create and validate desc string with 2000 char limit

    let startDate = addStartDate()

    let isFlexible = addFlexible()
    let isRigid = addRigid(isFlexible)
    let endDate = addEndDate()
    let frequency = addFrequency()

    let habit = createBinaryHabitInstance(title, desc, startDate, frequency, endDate, isRigid, isFlexible)

    console.log(habit)

}


export function createQuantitativeHabit() {

    let title = validateString(takeTitleFromUser, 100) //create and validate title string with 100 char limit
    let desc = validateString(takeDescFromUser, 2000)   //create and validate desc string with 2000 char limit

    let startDate = addStartDate()
    let frequency = addFrequency()
    let endDate = addEndDate()

    let targetAmount = addTargetAmount()
    let unit = addUnit()
    /*Create habit will be something like:
    "I want to ____ verb) ____ (targetAmount) ___ (unit) every ___(frequency) for ____(endDate) starting ____ (startDate)" 
    Example: 
    i want to "walk" "6" "kilometers" every "weekday" for "1 month" starting "tomorrow"
    i want to "drink" "3" "litres" water every "day" for "ever" starting "today"
    
    Need to adust the fill in the blanks sentence properly for this
     */

    let habit = createQuantitativeHabitInstance(title, desc, startDate, frequency, endDate, targetAmount, unit)
    console.log(habit)
    
}