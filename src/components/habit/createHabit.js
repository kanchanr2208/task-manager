import { takeTitleFromUser } from "../common/takeTitleFromUser.js"
import { takeDescFromUser } from "../common/takeDescFromUser.js"
import { validateString } from "../common/validateString.js"
import { addFrequency } from "./addFrequency.js";
import { addStartDate } from "./addStartDate.js";
import { addEndDate } from "./addEndDate.js";

import { addFlexible } from "./addFlexible.js";
import { addRigid } from "./addRigid.js";

import { addTargetAmount } from "./addTargetAmount.js";
import { addUnit } from "./addUnit.js"

import { createBinaryHabitInstance, createQuantitativeHabitInstance } from "./createHabitInstance.js";

import { processEntry } from "../common/processEntry.js"
import { habitsArray } from "./habitsArray.js"

export function createBinaryHabit() {
    let title = validateString(takeTitleFromUser, 100) //create and validate title string with 100 char limit
    let desc = validateString(takeDescFromUser, 2000)   //create and validate desc string with 2000 char limit

    let frequency = addFrequency()

    if(title === null && frequency === null) {
        alert("Empty habit discarded")
        console.log(habitsArray)
        return

    } else {
        //Currently taking startDate as today. This needs to be changed to an input type calender in DOM
        let startDate = addStartDate()

        let isFlexible = addFlexible()
        let isRigid = addRigid(isFlexible)
        let endDate = addEndDate()

        let habitObject = createBinaryHabitInstance(title, desc, startDate, frequency, endDate, isRigid, isFlexible)
        
        //This will be the process note function attached to the submit button of the new note creation button
        processEntry(habitObject, habitsArray, "allHabits")
        console.log(habitsArray)
        return habitObject
    }
}

export function createQuantitativeHabit() {

    let title = validateString(takeTitleFromUser, 100) //create and validate title string with 100 char limit
    let desc = validateString(takeDescFromUser, 2000)   //create and validate desc string with 2000 char limit

    let frequency = addFrequency()

    if(title === null && frequency === null) {
        alert("Empty habit discarded")
        console.log(habitsArray)
        return
    } else {
        //Currently taking startDate as today. This needs to be changed to an input type calender in DOM
        let startDate = addStartDate()

        let targetAmount = addTargetAmount()
        let unit = addUnit()
        
        let endDate = addEndDate()

        let habitObject = createQuantitativeHabitInstance(title, desc, startDate, frequency, endDate, targetAmount, unit)

        //This will be the process note function attached to the submit button of the new note creation button
        processEntry(habitObject, habitsArray, "allHabits")
        console.log(habitsArray)
        return habitObject  
    }
    
    
}

/*
    Maybe Create habit DOM will be something like:
    "I want to ____ verb) ____ (targetAmount) ___ (unit) every ___(frequency) for ____(endDate) starting ____ (startDate)" 
    Example: 
    i want to "walk" "6" "kilometers" every "weekday" for "1 month" starting "tomorrow"
    i want to "drink" "3" "litres" water every "day" for "ever" starting "today"

    Need to adust the fill in the blanks sentence properly for this
*/