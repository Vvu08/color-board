const board = document.querySelector('#board')
const orangeColors = ['#ffa940', '#ffd199', '#ffe2bf', '#ff9819', '#ffcb8c', '#ffc073', '#ff9d26', '#ff8c00']
const purpleColors = ['#e2caf8', '#d6b5f5', '#c495f0', '#b980ee', '#ad6beb', '#a155e8', '#9036e3', '#8a2be2']
const SQUARES = 551

let colors = orangeColors

for (let i = 0; i < SQUARES; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', setColor)
    square.addEventListener('mouseleave', removeColor)

    board.append(square)
}

document.body.addEventListener('click', () => {
    if(colors === orangeColors){
        colors = purpleColors
    } else {
        colors = orangeColors
    }
})

function setColor(event) {
    const element = event.target
    const color = getColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(event) {
    const element = event.target
    element.style.backgroundColor = 'rgb(58, 58, 58)'
    element.style.boxShadow = `0 0 2px #000`
}

function getColor () {
    return colors[Math.floor(Math.random() * colors.length)]
}