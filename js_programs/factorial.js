function findFactorial(user_number) {
    if (user_number == 0 || user_number ==1)
        return 1
    let factorialNumber = 1
    for(var i = 2; i <= user_number; i++) {
        factorialNumber = factorialNumber * i
    }
    console.log(i)
    return factorialNumber
}
input_number = 7
console.log('Input Number = ', input_number)
factorialNum = findFactorial(input_number)
console.log(`Factorial of ${input_number} is ${factorialNum}`)

// print(f'Factorial of {input_number} is {factorialNum}')