export function addTargetAmount(defaultValue) {
    let amount
    let input
    if(!defaultValue) {
        input = prompt("How much do you want to do per frequency cycle? Enter Absolute value", "")
    } else {
        input  = prompt("How much do you want to do per frequency cycle? Enter Absolute value", defaultValue)
    }

    amount = Number(input)
    //ignoring the NaN factor since this will be converted into a input type number

    return amount
}