const turbo = 'T u r b o'
const technologies = 'T u r b o T e c n o l o g i e s'
const content = 'Turbo Technologies' 
let currentIndex = 0


let type = (word) => {

    const placeholder = document.getElementById('logo')
    placeholder.innerHTML = word
    console.log(word)
}

setInterval(() => {
    let sentence = content.split('')
    let letter = sentence.splice(0, currentIndex)
    letter = letter.join('')
    console.log('sentence is ', sentence)
    console.log('letter is ', letter)
    type(letter)
    currentIndex +=1
    if (currentIndex > 18) {
        let placeholder = document.getElementById('logo')
        let div = document.getElementById('logo-container')
        placeholder.classList = ['border']
        div.style.border = 'none'
    }
}, 100);
