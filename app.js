const board = document.querySelector('#board')
const colors = ['#990066','#800080','#FF4500','#800080','#FF00FF','#FF69B4','#FF6347','#FF6B6B ','#DC143C','#CD5C5C','#8B0000']
const SQUARES_NUMBER = 400

for (let i=0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')
    square.addEventListener('mouseover', () => {
        setColor(square)
    })
    square.addEventListener('mouseleave', () => {
        removeColor(square)
    })

    board.append(square)
}

function setColor(element) {
    const color = getColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 20px ${color}`
}
function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000` 
}

function getColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}