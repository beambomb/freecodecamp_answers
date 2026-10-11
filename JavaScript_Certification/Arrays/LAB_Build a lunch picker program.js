let lunches = []

const addLunchToEnd = (arr, lunchItem) => {
    arr.push(lunchItem)
    console.log(`${lunchItem} added to the end of the lunch menu.`)
    return arr
}

const addLunchToStart = (arr, lunchItem) => {
    arr.unshift(lunchItem)
    console.log(`${lunchItem} added to the start of the lunch menu.`)
    return arr
}

const removeLastLunch = (arr) => {
    if (arr.length === 0) {
        console.log("No lunches to remove.")
        return arr
    } else {
        const erasedLunchItem = arr[arr.length - 1]
        arr.pop()
        console.log(`${erasedLunchItem} removed from the end of the lunch menu.`)
        return arr
    }
}

const removeFirstLunch = (arr) => {
    if (arr.length === 0) {
        console.log("No lunches to remove.")
    } else {
        const erasedLunchItem = arr[0]
        arr.shift()
        console.log(`${erasedLunchItem} removed from the start of the lunch menu.`)
        return arr
    }
}

const getRandomLunch = (arr) => {
    if (arr.length === 0) {
        console.log("No lunches available.")
    } else {
        const rand = arr[Math.floor(Math.random() * arr.length)]
        console.log(`Randomly selected lunch: ${rand}`)
    }
}

const showLunchMenu = (arr) => {
    if (arr.length === 0) {
        console.log("The menu is empty.")
    } else {
        console.log(`Menu items: ${arr.join(", ")}`)
    }
}

console.log((showLunchMenu(["Greens", "Corns", "Beans"])))
