// Given a valid (IPv4) IP address, return a defanged version of that IP address.
// A defanged IP address replaces every period "." with "[.]".
// Example
// Input: address = "1.1.1.1"
// Output: "1[.]1[.]1[.]1"



function defangIPaddr(address: string): string {
    let defanged: string = "";
    for (let char of address) {
        if (char === ".") {
            defanged += "[.]";
        } else {
            defanged += char;
        }
    }
    return defanged;
}

console.log(defangIPaddr("1.1.1.1")); // Output: "1[.]1[.]1[.]1"
