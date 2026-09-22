export function validateString(inputFunction, charLength) {
        let string = null
        while (true) {
            string = inputFunction()
            if (string === null) {
                break
            }

            if(string.length > charLength) {
                alert(`Input is too long. Maximum allowed is ${charLength} characters.`)
                continue
            }

            let trimmedstring = string.trim()
            if (trimmedstring.length === 0) {
                string = null
                break
            } 
            break
        }

        return string
    }