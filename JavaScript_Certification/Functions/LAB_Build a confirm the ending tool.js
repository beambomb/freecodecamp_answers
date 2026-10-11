const confirmEnding = (str1, str2) => {
    const str2Length = str2.length
    const lastStr1 = str1.slice(-str2Length)
    console.log(str2Length)
    console.log(lastStr1)
    return lastStr1 === str2 ? true : false
}

console.log(confirmEnding("Congratulation", "on"))