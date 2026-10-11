let count = 0
let action = ""

const cardCounter = (card) => {
    const kartuBesar = [10, 'J', 'Q', 'K', 'A'];
    if (card >= 2 && card <= 6) {
        count += 1
    } else if (kartuBesar.includes(card)) {
        count -= 1
    }
    count > 0 ? action = "Bet" : action = "Hold"
    return count + " " + action
}

console.log(cardCounter(""))