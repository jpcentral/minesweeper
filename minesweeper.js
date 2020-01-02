document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = {
cells:[
  {
    row:0,
    col:0,
    isMine: false,
    hidden: true,
    isMarked: false,
    surroundingMines: {},
  },
  {
    row:0,
    col:1, 
    isMine:false,
    hidden: true,
    isMarked: false,
    surroundingMines: {},
  },
  {
    row:0,
    col:2, 
    isMine: true,
    hidden: true,
    isMarked: false,
    surroundingMines: {},
  },
  {
    row:1,
    col:0, 
    isMine: false,
    hidden: true,
    isMarked: false,
    surroundingMines: {},
  },
  {
    row:1,
    col:1, 
    isMine: true,
    hidden: true,
    isMarked: false,
    surroundingMines: {},
  },
  {
    row:1,
    col:2, 
    isMine: false,
    hidden: true,
    isMarked: false,
    surroundingMines: {},
  },
  {
    row:2,
    col:0, 
    isMine: false,
    hidden: true,
    isMarked: false,
    surroundingMines: {},
  },
  {
    row:2,
    col:1, 
    isMine: false,
    hidden: true,
    isMarked: false,
    surroundingMines: {},
  },
  {
    row:2,
    col:2, 
    isMine: false,
    hidden: true,
    isMarked: false,
    surroundingMines: {},
  },
]
}

function startGame () {
  for (var i = 0; i < board.cells.length; i++) 
  {
   board.cells[i].surroundingMines = countSurroundingMines(board.cells[i])
 }
  lib.initBoard()
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {
  var cellWin = 0
  for (var k = 0; k < board.cells.length; k++){
    if (board.cells[k].isMine === board.cells[k].isMarked || board.cells[k].hidden != true) {
      cellWin++
    };
  } 
  if (cellWin === board.cells.length) {
    return lib.displayMessage('You win')
  };
  return;
  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  //   lib.displayMessage('You win!')
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cells) {
  var count = 0;
  var surrounding = lib.getSurroundingCells(cells.row, cells.col);
  console.log(surrounding)
  for ( var j = 0; j < surrounding.length; j++) {
    if (surrounding[j].isMine = true)
    {
      count++
    }
}
return count;
}
//debugger;