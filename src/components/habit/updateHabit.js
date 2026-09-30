import { findEntryIndex } from "../common/findEntryIndex.js" 
import { habitsArray } from "./habitsArray.js"

import { takeTitleFromUser } from "../common/takeTitleFromUser.js"
import { takeDescFromUser } from "../common/takeDescFromUser.js"
import { validateString } from "../common/validateString.js"
import { addFrequency } from "./addFrequency.js";

import { deleteHabit } from "./deleteHabit.js"

import { addStartDate } from "./addStartDate.js";
import { addEndDate } from "./addEndDate.js";

import { addFlexible } from "./addFlexible.js";
import { addRigid } from "./addRigid.js";
import { addTargetAmount } from "./addTargetAmount.js";
import { addUnit } from "./addUnit.js";

import { saveData } from "../common/saveData.js"




export function updateHabit(habitID) {
    let habitIndex = findEntryIndex(habitID, habitsArray)
    let habitToBeUpdated = habitsArray[habitIndex]

    let newTitle = validateString(takeTitleFromUser, 100, habitToBeUpdated.title) 
    let newDesc = validateString(takeDescFromUser, 2000, habitToBeUpdated.desc)

    let newFrequency = addFrequency(habitToBeUpdated.frequency)

    /*Right now, there is an issue that if the user clicks cancel because they dont want to update the 
    title or description, the string will become null. so the string will be deleted. 
    However, when the prompts are converted to input fields, this issue will be resolved */
    if(newTitle === null && newFrequency === null) {
        alert("Empty note discarded")
        deleteHabit(habitID)
        return

    } else {

        habitToBeUpdated.title = newTitle
        habitToBeUpdated.desc = newDesc
        habitToBeUpdated.frequency = newFrequency

        let newStartDate = addStartDate(habitToBeUpdated.startDate)
        let newEndDate = addEndDate(habitToBeUpdated.endDate)

        habitToBeUpdated.startDate = newStartDate
        habitToBeUpdated.endDate = newEndDate
        
        
        if (habitToBeUpdated.type === "binary") {
            let newIsFlexible = addFlexible(habitToBeUpdated.isFlexible)
            let newIsRigid = addRigid(newIsFlexible)
            habitToBeUpdated.isFlexible = newIsFlexible
            habitToBeUpdated.isRigid = newIsRigid

        } else if (habitToBeUpdated.type === "quantitative") {
            let newTargetAmount = addTargetAmount(habitToBeUpdated.targetAmount)
            let newUnit = addUnit(habitToBeUpdated.unit)
            habitToBeUpdated.targetAmount = newTargetAmount
            habitToBeUpdated.unit = newUnit
        }

        //the submit button will have to do the job of saveData(notesArray, "allNotes")
        //to update localStorage
        saveData(habitsArray, "allHabits")

    }
    
}
