export function addUnit(defaultValue) {
    let unit 
    if (!defaultValue) {
        unit = prompt("Select tracking unit: km = kilometer, m = meters, l = litres, ml = millilitres, hr = hours, mins = mins ", "")
    }
    
    else {
        unit = prompt("Select tracking unit: km = kilometer, m = meters, l = litres, ml = millilitres, hr = hours, mins = mins ", defaultValue)
    }
    
    return unit
}