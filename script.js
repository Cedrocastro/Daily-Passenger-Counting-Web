let saveThis = document.getElementById("save-el")
let countThis = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countThis.textContent = count
}

function save() {
    let countTotal = count + " - "
    saveThis.textContent += countTotal
    countThis.textContent = 0
    count = 0
}