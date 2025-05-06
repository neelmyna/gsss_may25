// Accept a number and check if it is a Perfect Square

var is_perfect = false // assume the input number is not a PS
function checkIfPerfectSquare(user_number) {
    for(let i = 1; i <= user_number; i++) {
        if(i * i == input_number) {
            is_perfect = true
            break
        }
        if(i * i > user_number)
            break
    }
    return is_perfect
}

let input_number = 9
is_perfect = checkIfPerfectSquare(input_number)
if (is_perfect)
    console.log(`${user_number} is a Perfect Square`)
else
    console.log(`${user_number} is not a Perfect Square`)