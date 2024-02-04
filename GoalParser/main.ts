// You own a Goal Parser that can interpret a string command. 
//The command consists of an alphabet of "G", "()" and/or "(al)" in some order. 
//The Goal Parser will interpret "G" as the string "G", "()" as the string "o", and "(al)" as the string "al".
// The interpreted strings are then concatenated in the original order.

// Given the string command, return the Goal Parser's interpretation of command.




function interpret(command: string): string {
    let result = '';
    let i = 0;

    while (i < command.length) {
        if (command[i] === 'G') {
            result += 'G';
            i++;
        } else if (command[i] === '(' && command[i + 1] === ')') {
            result += 'o';
            i += 2;
        } else if (command[i] === '(' && command[i + 1] === 'a' && command[i + 2] === 'l' && command[i + 3] === ')') {
            result += 'al';
            i += 4;
        }
    }

    return result;
}

const command: string = "G()(al)";
console.log(interpret(command)); // "Goal"
