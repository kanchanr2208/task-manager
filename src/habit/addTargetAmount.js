export function addTargetAmount() {
    let amount
    let input = prompt("How much do you want to do per cycle? Enter Absolute value", "10")

    amount = Number(input)

    return amount
}