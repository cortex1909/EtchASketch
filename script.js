const container = document.querySelector('.container')
const grid = document.querySelector('.grid')
let gridSize = 0

const DEFAULT_SIZE = 16
gridSize = DEFAULT_SIZE

makeRows = (rows, columns) => {
    grid.style.gridTemplateColumns = `repeat(${columns}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${rows}, 1fr)`
    for(let i=0; i<rows*columns; i++) {
        const gridCell = document.createElement('div')
        gridCell.classList.add('gridCell')
        gridCell.addEventListener('mouseover', changeColor)        
        grid.appendChild(gridCell)
    }
}

clearGrid = () => {
    grid.innerHTML = ''
}

changeColor = (e) => {
    e.target.style.backgroundColor = '#fff'
}

createNew = () => {
    gridSize = +prompt('Please enter a number for a grid. ONE number only, MAX 48!')
    if(isNaN(gridSize)) {
        createNew()
    } else {
        clearGrid()
        makeRows(gridSize,gridSize)
    }
}

window.onload = () => {
    makeRows(gridSize,gridSize)
}