import { endOfDay } from "date-fns";
import { BinaryHabit } from "./HabitObjectClassConstructor";
import { QuantitativeHabit } from "./HabitObjectClassConstructor";

export function createBinaryHabitInstance(title, desc, startDate, frequency, endDate, isRigid, isFlexible) {

    let uniqueID = crypto.randomUUID()

    let habit = new BinaryHabit(title, desc, uniqueID, startDate, frequency, endDate, isRigid, isFlexible)

    return habit
}

export function createQuantitativeHabitInstance(title, desc, startDate, frequency, endDate, targetAmount, unit) {
    let uniqueID = crypto.randomUUID()

    let habit = new QuantitativeHabit(title, desc, uniqueID, startDate, frequency, endDate, targetAmount, unit)
    
    return habit

}