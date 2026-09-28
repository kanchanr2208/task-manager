import { findEntryIndex } from "../common/findEntryIndex.js" 
import { habitsArray } from "./habitsArray.js"
import { takeTitleFromUser } from "../common/takeTitleFromUser.js"
import { takeDescFromUser } from "../common/takeDescFromUser.js"
import { validateString } from "../common/validateString.js"
import { deleteEntry } from "../common/deleteEntry.js"
import { addStartDate } from "./addStartDate.js";
import { addEndDate } from "./addEndDate.js";
import { addFrequency } from "./addFrequency.js";
import { addFlexible } from "./addFlexible.js";
import { addRigid } from "./addRigid.js";
import { addTargetAmount } from "./addTargetAmount.js";
import { addUnit } from "./addUnit.js";


export function updateHabit() {
    let habitID     //will be received from the edit button in the display screen
    let habitIndex = findEntryIndex(habitID, habitsArray)
    let habitToBeUpdated = habitsArray[habitIndex]

    let newTitle = validateString(takeTitleFromUser, 100, habitToBeUpdated.title) 
    let newDesc = validateString(takeDescFromUser, 2000, habitToBeUpdated.desc)

    let newStartDate = addStartDate(habitToBeUpdated.startDate)
    let newEndDate = addEndDate(habitToBeUpdated.endDate)
    let newFrequency = addFrequency(habitToBeUpdated.frequency)

    if (habitToBeUpdated.type === "binary") {
        let newIsFlexible = addFlexible(habitToBeUpdated.isFlexible)
        let newIsRigid = addRigid(newIsFlexible)

    } else if (habitToBeUpdated.type === "quantitative") {
        let newTargetAmount = addTargetAmount(habitToBeUpdated.targetAmount)
        let newUnit = addUnit(habitToBeUpdated.unit)
    }


    /*Right now, there is an issue that if the user clicks cancel because they dont want to update the 
    title or description, the string will become null. so the string will be deleted. 
    However, when the prompts are converted to input fields, this issue will be resolved */
    if(newTitle === null && newDesc === null && newStartDate === null && newEndDate === null && newFrequency === null) {
        deleteEntry(habitIndex, habitsArray)
    } else {

        habitToBeUpdated.title = newTitle
        habitToBeUpdated.desc = newDesc
        habitToBeUpdated.startDate = newStartDate
        habitToBeUpdated.endDate = newEndDate
        habitToBeUpdated.frequency = newFrequency
        
        if (habitToBeUpdated.type === "binary") {
            habitToBeUpdated.isFlexible = newIsFlexible
            habitToBeUpdated.isRigid = newIsRigid

        } else if (habitToBeUpdated.type === "quantitative") {
            habitToBeUpdated.targetAmount = newTargetAmount
            habitToBeUpdated.unit = newUnit
        }
    }
    console.log("Habit updated")
}
