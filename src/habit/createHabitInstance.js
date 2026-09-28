import { BinaryHabit } from "./HabitObjectClassConstructor";
import { QuantitativeHabit } from "./HabitObjectClassConstructor";

export function createBinaryHabitInstance(title, desc, startDate, frequency, endDate, isRigid, isFlexible) {

    let uniqueID = crypto.randomUUID()

    let newBinaryHabit = new BinaryHabit(title, desc, uniqueID, startDate, frequency, endDate, isRigid, isFlexible)

    return newBinaryHabit
}
