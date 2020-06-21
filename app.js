const box = document.querySelector("div#box")
const topInput = document.querySelector("input.value-top")
const rightInput = document.querySelector("input.value-right")
const bottomInput = document.querySelector("input.value-bottom")
const leftInput = document.querySelector("input.value-left")

const buttonApply = document.querySelector("button#apply")

function applyValuesToBox(){
    let topInputValue = topInput.value
    let rightInputValue = rightInput.value
    let bottomInputValue = bottomInput.value
    let leftInputValue = leftInput.value

    box.style.borderRadius = `${topInputValue}px ${rightInputValue}px ${bottomInputValue}px ${leftInputValue}px`;    
}