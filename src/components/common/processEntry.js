import { addToArray } from "./addToArray.js";
import { saveData } from "./saveData.js";


export function processEntry(object, array, storedArrayName) {

    //for some reason if the user clicks close or cancel, the object need to be discarded and not added to array
    //here the stored array name will be "AllNotes" or "AllHabits" or et based on what is being stored.
    /*in the DOM, when user clicks on the submit button, that will trigger the process entry, 
    and will send the object (the note, or habit, etc), the relevant array (notesarray, habitarray, etc),
    and the relevant string name (will need to type out the string here, or create a function so that there are no typos) */
    if (object === undefined) {
        alert("Empty Entry Discarded")
        return; 
    }
    
    addToArray(object, array)
    saveData(array, storedArrayName)
}
