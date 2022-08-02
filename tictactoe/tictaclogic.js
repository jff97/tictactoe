//this is a global variable
let tictactoe = null;

//this function gets called by the start game button
function gameStart() {
   let elements = document.getElementsByClassName("space");
   for (let i = 0; i < elements.length; i++) {
      elements[i].style.display = "block";
   }
   //instantiate the game object
   if (tictactoe == null) {
      tictactoe = new game();
   }
}

//this function gets called by the end game button
function gameEnd() {
   let elements = document.getElementsByClassName("space");
   for (let i = 0; i < elements.length; i++) {
      elements[i].style.display = "none";
   }
   //wipe the game object
   tictactoe = null;
}

function clickSpace(xCoord, yCoord) {
   if (tictactoe.grid[xCoord][yCoord].full == false) {
      //the space is empty so update Board
      let player = tictactoe.turn;
      updateBoard(xCoord, yCoord, player);
      updateBoardDisplay(xCoord, yCoord, player);
   } else {
      //the space is allready full make error effect
   }
   const curID = xCoord + "," + yCoord;

   const curSpace = document.getElementById(curID);
   curSpace.style.backgroundColor = "#16d970";
}

function updateBoard(xCoord, yCoord, player) {

}
function updateBoardDisplay(xCoord, yCoord, player) {
   const curID = xCoord + "," + yCoord;
   if (player == 1) {
      //put x in slot
   } else if (player == 2) {
      //put o in slot
   } else {
      //this should never happen
   }
}

class game {
   constructor() {
      this.turn = 1;

      //make every space on the board have a status of empty
      let g = new Array(3);
      for (var i = 0; i < g.length; i++) {
         g[i] = new Array(3);
         for (var j = 0; j < g[i].length; j++) {
            g[i][j] = new slot();
         }
      }
      //set it in the object
      this.grid = g;
   }
}
class slot {
   constructor() {
      this.full = false;
      this.player1 = 0;
      this.player2 = 0;
   }
}

