export function cleanBin(array) {
    /*
    Using a backward loop because
    if there are 2 consequtive entries, then the 2nd one will be skipped since splice updates the index, 
    but the i doesnt get updated

    By keeping the backwards loop, splice will update index left to right, but we will be checking the loop right to left
    So nothing is skipped
    */
    for (let i = array.length - 1; i >= 0; i--) {
        if(array[i].isBinned === true) {
            array.splice(i, 1)
        }
    }
}

/*Need to add a 30 day timer to this */