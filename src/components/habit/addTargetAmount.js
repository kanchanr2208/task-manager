export function addTargetAmount(defaultValue) {
    let amount
    let input
    if(!defaultValue) {
        input = prompt("How much do you want to do per cycle? Enter Absolute value", "")
    } else {
        input  = prompt("How much do you want to do per cycle? Enter Absolute value", defaultValue)
    }

    amount = Number(input)

    return amount
}