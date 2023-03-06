const textareaField = document.getElementById('textarea')
const outputField = document.getElementById('output')
const convertButton = document.getElementById('convert')

convertButton.onclick = () => {
    const text = textareaField.innerText
    const splitText = text.split(' ')
    const elementArray = splitText.map(word => {
        // take half word length, round down for length 3 words, else round up
        const len = word.length === 3 ? 1 : Math.ceil(word.length / 2)
        const first = word.slice(0, len)
        const last = word.slice(len, word.length)
        return `<strong>${first}</strong>${last}`
    })
    outputField.innerHTML = elementArray.join(' ')
}


