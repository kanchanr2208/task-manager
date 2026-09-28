import { takeTitleFromUser } from "../common/takeTitleFromUser.js"
import { takeDescFromUser } from "../common/takeDescFromUser.js"
import { validateString } from "../common/validateString.js"
import { addStartDate } from "./addStartDate.js";
import { addEndDate } from "./addEndDate.js";
import { addFlexible } from "./addFlexible.js";
import { addRigid } from "./addRigid.js";
import { addFrequency } from "./addFrequency.js";
import { createBinaryHabitInstance } from "./createHabitInstance.js";

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

}


/*
export class QuantitativeHabit {
    constructor(
        title = "", desc = "", id = null, isBinned = false, 
        isPinned = false, startDate = null, frequency = null, endDate = null,
        targetAmount = 0, actualAmount = 0, unit = null,
        entries = [], currentStreak = 0, highestStreak = 0) {
            this.title = title;
            this.desc = desc;
            this.id = id;
            this.isBinned = isBinned;
            this.isPinned = isPinned;
            this.startDate = startDate;
            this.frequency = frequency;
            this.endDate = endDate;
            this.targetAmount = targetAmount;
            this.actualAmount = actualAmount;
            this.unit = unit;
            this.entries = entries;
            this.currentStreak = currentStreak;
            this.highestStreak = highestStreak
    }
}
*/