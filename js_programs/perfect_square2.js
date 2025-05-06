
/*
40      6.4     6       36
121     11.0    11      121
70      8.3     8       64

Read the input number, say N
sq_root = square_root(N)
sq_root = int(sq_root) // ceil(sq_root)
if sq_root ** sq_root is equal to N then
    print N is PS
else
    print N is not a PS
*/

function checkIfPerfectSquare2(user_number) {
    root = Math.sqrt(user_number)
    root = parseInt(root) // root = Math.floor(root)
    if (root * root == user_number)
        console.log(`${user_number} is a Perfect Square`)
    else
        console.log(`${user_number} is not a Perfect Square`)
}

checkIfPerfectSquare2(30)
