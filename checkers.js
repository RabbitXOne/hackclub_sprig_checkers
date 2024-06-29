/*
First time? Check out the tutorial game:
https://sprig.hackclub.com/gallery/getting_started

@title: 
@author: 
@tags: []
@addedOn: 2024-00-00
*/

const emptyField1 = "l"
const emptyField2 = "d"
const redChecker = "r"
const whiteChecker = "w"
const selectedRed = "p"
const selectedWhite = "o"
const selectedE1N = "i"
const selectedE2N = "t"
const selectedRedN = "e"
const selectedWhiteN = "f"
const whiteKing = "z"
const selectedWKing = "x"
const selectedWKingN = "c"
const redKing = "v"
const selectedRKing = "b"
const selectedRKingN = "n"

var turn = "w"

// Add an option to play with friend or vs computer?

setLegend(
  [emptyField1, bitmap`
9999999999999999
9999999999999999
9999999999999999
9999999999999999
9999999999999999
9999999999999999
9999999999999999
9999999999999999
9999999999999999
9999999999999999
9999999999999999
9999999999999999
9999999999999999
9999999999999999
9999999999999999
9999999999999999`],
  [emptyField2, bitmap`
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC`],
  [redChecker, bitmap`
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCC333333CCCCC
CCC3333333333CCC
CCC3333333333CCC
CC333333333333CC
CC333333333333CC
CC333333333333CC
CC333333333333CC
CC333333333333CC
CC333333333333CC
CCC3333333333CCC
CCC3333333333CCC
CCCCC333333CCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC`],
  [whiteChecker, bitmap`
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCC222222CCCCC
CCC2222222222CCC
CCC2222222222CCC
CC222222222222CC
CC222222222222CC
CC222222222222CC
CC222222222222CC
CC222222222222CC
CC222222222222CC
CCC2222222222CCC
CCC2222222222CCC
CCCCC222222CCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC`],
  [selectedRed, bitmap`
4444444444444444
4CCCCCCCCCCCCCC4
4CCCC333333CCCC4
4CC3333333333CC4
4CC3333333333CC4
4C333333333333C4
4C333333333333C4
4C333333333333C4
4C333333333333C4
4C333333333333C4
4C333333333333C4
4CC3333333333CC4
4CC3333333333CC4
4CCCC333333CCCC4
4CCCCCCCCCCCCCC4
4444444444444444`],
  [selectedWhite, bitmap`
4444444444444444
4CCCCCCCCCCCCCC4
4CCCC222222CCCC4
4CC2222222222CC4
4CC2222222222CC4
4C222222222222C4
4C222222222222C4
4C222222222222C4
4C222222222222C4
4C222222222222C4
4C222222222222C4
4CC2222222222CC4
4CC2222222222CC4
4CCCC222222CCCC4
4CCCCCCCCCCCCCC4
4444444444444444`],
  [selectedE1N, bitmap`
DDDDDDDDDDDDDDDD
D99999999999999D
D99999999999999D
D99999999999999D
D99999999999999D
D99999999999999D
D99999999999999D
D99999999999999D
D99999999999999D
D99999999999999D
D99999999999999D
D99999999999999D
D99999999999999D
D99999999999999D
D99999999999999D
DDDDDDDDDDDDDDDD`],
  [selectedE2N, bitmap`
DDDDDDDDDDDDDDDD
DCCCCCCCCCCCCCCD
DCCCCCCCCCCCCCCD
DCCCCCCCCCCCCCCD
DCCCCCCCCCCCCCCD
DCCCCCCCCCCCCCCD
DCCCCCCCCCCCCCCD
DCCCCCCCCCCCCCCD
DCCCCCCCCCCCCCCD
DCCCCCCCCCCCCCCD
DCCCCCCCCCCCCCCD
DCCCCCCCCCCCCCCD
DCCCCCCCCCCCCCCD
DCCCCCCCCCCCCCCD
DCCCCCCCCCCCCCCD
DDDDDDDDDDDDDDDD`],
  [selectedRedN, bitmap`
DDDDDDDDDDDDDDDD
DCCCCCCCCCCCCCCD
DCCCC333333CCCCD
DCC3333333333CCD
DCC3333333333CCD
DC333333333333CD
DC333333333333CD
DC333333333333CD
DC333333333333CD
DC333333333333CD
DC333333333333CD
DCC3333333333CCD
DCC3333333333CCD
DCCCC333333CCCCD
DCCCCCCCCCCCCCCD
DDDDDDDDDDDDDDDD`],
  [selectedWhiteN, bitmap`
DDDDDDDDDDDDDDDD
DCCCCCCCCCCCCCCD
DCCCC222222CCCCD
DCC2222222222CCD
DCC2222222222CCD
DC222222222222CD
DC222222222222CD
DC222222222222CD
DC222222222222CD
DC222222222222CD
DC222222222222CD
DCC2222222222CCD
DCC2222222222CCD
DCCCC222222CCCCD
DCCCCCCCCCCCCCCD
DDDDDDDDDDDDDDDD`],
  [whiteKing, bitmap`
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCC222222CCCCC
CCC2222222222CCC
CCC2222222222CCC
CC222222222222CC
CC222121121222CC
CC222111111222CC
CC222111111222CC
CC222111111222CC
CC222222222222CC
CCC2222222222CCC
CCC2222222222CCC
CCCCC222222CCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC`],
  [selectedWKing, bitmap`
4444444444444444
4CCCCCCCCCCCCCC4
4CCCC222222CCCC4
4CC2222222222CC4
4CC2222222222CC4
4C222222222222C4
4C222121121222C4
4C222111111222C4
4C222111111222C4
4C222111111222C4
4C222222222222C4
4CC2222222222CC4
4CC2222222222CC4
4CCCC222222CCCC4
4CCCCCCCCCCCCCC4
4444444444444444`],
  [selectedWKingN, bitmap`
DDDDDDDDDDDDDDDD
DCCCCCCCCCCCCCCD
DCCCC222222CCCCD
DCC2222222222CCD
DCC2222222222CCD
DC222222222222CD
DC222121121222CD
DC222111111222CD
DC222111111222CD
DC222111111222CD
DC222222222222CD
DCC2222222222CCD
DCC2222222222CCD
DCCCC222222CCCCD
DCCCCCCCCCCCCCCD
DDDDDDDDDDDDDDDD`],
  [redKing, bitmap`
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCC333333CCCCC
CCC3333333333CCC
CCC3333333333CCC
CC333333333333CC
CC333232232333CC
CC333222222333CC
CC333222222333CC
CC333222222333CC
CC333333333333CC
CCC3333333333CCC
CCC3333333333CCC
CCCCC333333CCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC`],
  [selectedRKing, bitmap`
4444444444444444
4CCCCCCCCCCCCCC4
4CCCC333333CCCC4
4CC3333333333CC4
4CC3333333333CC4
4C333333333333C4
4C333232232333C4
4C333222222333C4
4C333222222333C4
4C333222222333C4
4C333333333333C4
4CC3333333333CC4
4CC3333333333CC4
4CCCC333333CCCC4
4CCCCCCCCCCCCCC4
4444444444444444`],
  [selectedRKingN, bitmap`
DDDDDDDDDDDDDDDD
DCCCCCCCCCCCCCCD
DCCCC333333CCCCD
DCC3333333333CCD
DCC3333333333CCD
DC333333333333CD
DC333232232333CD
DC333222222333CD
DC333222222333CD
DC333222222333CD
DC333333333333CD
DCC3333333333CCD
DCC3333333333CCD
DCCCC333333CCCCD
DCCCCCCCCCCCCCCD
DDDDDDDDDDDDDDDD`]
)

// setSolids([])

let level = 0
const levels = [
  map`
rlrlrlrl
lrlrlrlr
rlrlrlrl
ldldldld
rlrldldl
lwlwlwlw
wlwlwlwl
lolwlwlw`
]

setMap(levels[level])

// setPushables({
//   [ emptyField1 ]: [],
//   [ emptyField2 ]: []
// })

function getSelected() {
    if(getFirst(selectedWhite)) {
    return selectedWhite;
  } else if(getFirst(selectedWhiteN)) {
    return selectedWhiteN;
  } else if(getFirst(selectedRed)) {
    return selectedRed;
  } else if(getFirst(selectedRedN)) {
    return selectedRedN;
  } else if(getFirst(selectedE1N)) {
    return selectedE1N;
  } else if(getFirst(selectedE2N)) {
    return selectedE2N;
  } else if(getFirst(selectedRKing)) {
    return selectedRKing;
  } else if(getFirst(selectedRKingN)) {
    return selectedRKingN;
  } else if(getFirst(selectedWKing)) {
    return selectedWKing;
  } else if(getFirst(selectedWKingN)) {
    return selectedWKingN;
  }
}

onInput("w", () => {

  const currentSprite = getSelected()
  
  const currentX = getFirst(currentSprite).x
  const currentY = getFirst(currentSprite).y
  spriteSelector(currentX, currentY, "w")
  
  return;
  
})

onInput("s", () => {

  const currentSprite = getSelected()
  
  const currentX = getFirst(currentSprite).x
  const currentY = getFirst(currentSprite).y
  spriteSelector(currentX, currentY, "s")
  
  return;
  
})

onInput("a", () => {

  const currentSprite = getSelected()
  
  const currentX = getFirst(currentSprite).x
  const currentY = getFirst(currentSprite).y
  spriteSelector(currentX, currentY, "a")
  
  return;
  
})

onInput("d", () => {

  const currentSprite = getSelected()
  
  const currentX = getFirst(currentSprite).x
  const currentY = getFirst(currentSprite).y
  spriteSelector(currentX, currentY, "d")
  
  return;
  
})

function move(xBefore, yBefore, checkerToMove, direction) {

  var xAfter = 0;
  var yAfter = 0;

  var nextTile = 0;
  if(direction === "tl") {
    nextTile = getTile(xBefore-1, yBefore-1)[0]
  } else if(direction === "tr") {
    nextTile = getTile(xBefore+1, yBefore-1)[0]
  } else if(direction === "bl") {
    nextTile = getTile(xBefore+1, yBefore+1)[0]
  } else if(direction === "br") {
    nextTile = getTile(xBefore+1, yBefore+1)[0]
  }

  // ---
  // This section has to be adapted for red
  var move = 0;
  if(nextTile && nextTile.type === emptyField2) {
     move = 1;
  
  } else if(turn === "w" && nextTile && nextTile.type === redChecker) {
    if(direction === "tl") {
      nextTile = getTile(xBefore-2, yBefore-2)[0]
    } else if(direction === "tr") {
      nextTile = getTile(xBefore+2, yBefore-2)[0]
    } else if(direction === "bl") {
      nextTile = getTile(xBefore-2, yBefore+2)[0]
    } else if(direction === "br") {
      nextTile = getTile(xBefore+2, yBefore+2)[0]
    }
  
    // Check if an opponent's piece can be captured
    if(nextTile && nextTile.type === emptyField2) {
      move = 2;
    }
  
  } else if(turn === "r" && nextTile && nextTile.type === whiteChecker || turn === "r" && nextTile && nextTile.type === whiteKing) {
    if(direction === "tl") {
      nextTile = getTile(xBefore-2, yBefore-2)[0]
    } else if(direction === "tr") {
      nextTile = getTile(xBefore+2, yBefore-2)[0]
    } else if(direction === "bl") {
      nextTile = getTile(xBefore-2, yBefore+2)[0]
    } else if(direction === "br") {
      nextTile = getTile(xBefore+2, yBefore+2)[0]
    }
  
    // Check if an opponent's piece can be captured
    if(nextTile && nextTile.type === emptyField2) {
      move = 2;
    }
  
  } else {
    move = 0;
  }
  
  // ---
  
  if(move === 1) {
    if(direction === "tl") {
      xAfter = xBefore - 1
      yAfter = yBefore - 1
    } else if(direction === "tr") {
      xAfter = xBefore + 1
      yAfter = yBefore - 1
    } else if(direction === "bl") {
      xAfter = xBefore - 1
      yAfter = yBefore + 1
    } else if(direction === "br") {
      xAfter = xBefore + 1
      yAfter = yBefore + 1
    }

    clearTile(xBefore, yBefore)
    addSprite(xBefore, yBefore, emptyField2)
    
    clearTile(xAfter, yAfter)
    addSprite(xAfter, yAfter, whiteChecker)

    var moved = true;
    
  } else if(move === 2) {
      var capturedPawnX = 0;
      var capturedPawnY = 0;
    
    if(direction === "tl") {
      xAfter = xBefore - 2
      yAfter = yBefore - 2
      
      capturedPawnX = xBefore - 1
      capturedPawnY = yBefore - 1
    } else if(direction === "tr") {
      xAfter = xBefore + 2
      yAfter = yBefore - 2
      
      capturedPawnX = xBefore + 1
      capturedPawnY = yBefore - 1
    } else if(direction === "bl") {
      xAfter = xBefore - 2
      yAfter = yBefore + 2
      
      capturedPawnX = xBefore - 1
      capturedPawnY = yBefore + 1
    } else if(direction === "br") {
      xAfter = xBefore + 2
      yAfter = yBefore + 2
      
      capturedPawnX = xBefore + 1
      capturedPawnY = yBefore + 1
    }
    
    clearTile(xBefore, yBefore)
    addSprite(xBefore, yBefore, emptyField2)

    clearTile(capturedPawnX, capturedPawnY)
    addSprite(capturedPawnX, capturedPawnY, emptyField2)
    
    clearTile(xAfter, yAfter)
    addSprite(xAfter, yAfter, whiteChecker)

    // Here add a check if player can capture one move piece

    var moved = true;
  }

  if(moved === true && turn === "w") {
    
    const checker = getFirst(redKing)
  
    if(checker) {
      
      const checkerX = checker.x
      const checkerY = checker.y
  
    } else {

      const checker = getFirst(redChecker)
      
      const checkerX = checker.x
      const checkerY = checker.y
  
      if(checkerX && checkerY) {
  
        const canMove = canMove(findX, findY)
        clearTile(findX, findY)
        
        if(canMove === 1 || canMove === 2) {
          addSprite(findX, findY, selectedRed)
        } else {
          addSprite(findX, findY, selectedRedN)
        }
        
      } else {
        //
      }
      
    }
  }
  
}

onInput("j", () => {
  // If selected piece is not a king, `j` button means left top move if white and bottom left if red

  const selected = getSelected()

  if(selected && selected === selectedWhite) {
    const xBefore = getFirst(selected).x
    const yBefore = getFirst(selected).y
  
    move(xBefore, yBefore, selectedWhite, "tl")
    // tl = top left
  } else if(selected && selected === selectedWKing) {
    //
  } else if(selected && selected === selectedRed) {
    const xBefore = getFirst(selected).x
    const yBefore = getFirst(selected).y
  
    move(xBefore, yBefore, selectedWhite, "bl")
    // bl = bottom left
  } else if(selected && selected === selectedRKing) {
    //
  }
})

onInput("l", () => {
  // If selected piece is not a king, `j` button means left top move if white and bottom left if red

  const selected = getSelected()

  if(selected && selected === selectedWhite) {
    const xBefore = getFirst(selected).x
    const yBefore = getFirst(selected).y
  
    move(xBefore, yBefore, selectedWhite, "tr")
    // tl = top left
  } else if(selected && selected === selectedWKing) {
    //
  } else if(selected && selected === selectedRed) {
    const xBefore = getFirst(selected).x
    const yBefore = getFirst(selected).y
  
    move(xBefore, yBefore, selectedWhite, "br")
    // bl = bottom left
  } else if(selected && selected === selectedRKing) {
    //
  }
})

function spriteSelector(xBefore, yBefore, direction) {

  let xAfter = 0
  let yAfter = 0
  
  if(direction === "w") {
    xAfter = xBefore
    yAfter = yBefore - 1
  } else if(direction === "a") {
    xAfter = xBefore - 1
    yAfter = yBefore
  } else if(direction === "s") {
    xAfter = xBefore
    yAfter = yBefore + 1
  } else if(direction === "d") {
    xAfter = xBefore + 1
    yAfter = yBefore
  }

  const currentSprite = getTile(xBefore, yBefore)[0]
  const nextSprite = getTile(xAfter, yAfter)[0]

  if(!nextSprite) {
    return;
  }
  
  if(currentSprite.type === selectedWhite || currentSprite.type === selectedWhiteN) {
    clearTile(xBefore, yBefore)
    addSprite(xBefore, yBefore, whiteChecker)
  } else if(currentSprite.type === selectedWKing || currentSprite.type === selectedWKingN) {
    clearTile(xBefore, yBefore)
    addSprite(xBefore, yBefore, whiteKing)
  } else if(currentSprite.type === selectedRed || currentSprite.type === selectedRedN) {
    clearTile(xBefore, yBefore)
    addSprite(xBefore, yBefore, redChecker)
  } else if(currentSprite.type === selectedRKing || currentSprite.type === selectedRKingN) {
    clearTile(xBefore, yBefore)
    addSprite(xBefore, yBefore, redKing)
  } else if(currentSprite.type === selectedE1N) {
    clearTile(xBefore, yBefore)
    addSprite(xBefore, yBefore, emptyField1)
  } else if(currentSprite.type === selectedE2N) {
    clearTile(xBefore, yBefore)
    addSprite(xBefore, yBefore, emptyField2)
  }

  if(nextSprite.type === whiteChecker) {
    if(turn === "w") {
      
      // Here add a check to see if the player can move selected pawn
      const moveAllowed = canMove(xAfter, yAfter)
      clearTile(xAfter, yAfter)
      
      if(moveAllowed === 1 || moveAllowed === 2) {
        addSprite(xAfter, yAfter, selectedWhite)
      } else {
        addSprite(xAfter, yAfter, selectedWhiteN)
      }
      
    } else {
      addSprite(xAfter, yAfter, selectedWhiteN)
    }
  } else if(nextSprite.type === redChecker) {
    clearTile(xAfter, yAfter)
    addSprite(xAfter, yAfter, selectedRedN)
  } else if(nextSprite.type === emptyField1) {
    clearTile(xAfter, yAfter)
    addSprite(xAfter, yAfter, selectedE1N)
  } else if(nextSprite.type === emptyField2) {
    clearTile(xAfter, yAfter)
    addSprite(xAfter, yAfter, selectedE2N)
  }
}

function canMove(currentX, currentY) {

  // const leftTop = getTile(currentX-1, currentY-1)[0]
  // const rightTop = getTile(currentX+1, currentY-1)[0]
  // const leftBottom = getTile(currentX-1, currentY+1)[0]
  // const rightBottom = getTile(currentX+1, currentY+1)[0]

  const checkerToCheck = getTile(currentX, currentY)[0]
  var canMoveInDirections = 0;
  
  if(checkerToCheck.type === whiteChecker) {
    canMoveInDirections = "t"
  } else if(checkerToCheck.type === redChecker) {
    canMoveInDirections = "b"
  } else if(checkerToCheck.type === whiteKing && checkerToCheck.type === redKing) {
    canMoveInDirections = "a"
  } else {
    return 0;
  }

  if(canMoveInDirections === "t") {
    var topLeft = getTile(currentX-1, currentY-1)[0]
    var topRight = getTile(currentX+1, currentY-1)[0]

    if(topLeft && topLeft.type === emptyField2 || topRight && topRight.type === emptyField2) {
      return 1;
    } else if(turn === "w" && topLeft && topLeft.type === redChecker || turn === "w" && topLeft && topLeft.type === redKing || turn === "w" && topRight && topRight.type === redChecker || turn === "w" && topRight && topRight.type === redKing) {
      topLeft = getTile(currentX-2, currentY-2)[0]
      topRight = getTile(currentX+2, currentY-2)[0]

      if(topLeft && topLeft.type === emptyField2 || topRight && topRight.type === emptyField2) {
        return 2;
      }
    }
  } else if(canMoveInDirections === "b") {
    var bottomLeft = getTile(currentX-1, currentY+1)[0]
    var bottomRight = getTile(currentX+1, currentY+1)[0]

    if(bottomLeft && bottomLeft.type === emptyField2 || bottomRight && bottomRight.type === emptyField2) {
      return 1;
    } else if(turn === "w" && bottomLeft && bottomLeft.type === redChecker || turn === "w" && bottomLeft && bottomLeft.type === redKing || turn === "w" && bottomRight && bottomRight.type === redChecker || turn === "w" && bottomRight && bottomRight.type === redKing) {
      bottomLeft = getTile(currentX-2, currentY+2)[0]
      bottomRight = getTile(currentX+2, currentY+2)[0]

      if(bottomLeft && bottomLeft.type === emptyField2 || bottomRight && bottomRight.type === emptyField2) {
        return 2;
      }
    }
  } else if(canMoveInDirections === "a") {
    var topLeft = getTile(currentX-1, currentY-1)[0]
    var topRight = getTile(currentX+1, currentY-1)[0]
    var bottomLeft = getTile(currentX-1, currentY+1)[0]
    var bottomRight = getTile(currentX+1, currentY+1)[0]

    if(topLeft && topLeft.type === emptyField2 || topRight && topRight.type === emptyField2 || bottomRight && bottomRight.type === emptyField2 || bottomLeft && bottomLeft.type === emptyField2) {
      return 1;
    } else if(turn === "w" && topLeft && topLeft.type === redChecker || turn === "w" && topLeft && topLeft.type === redKing || turn === "w" && topRight && topRight.type === redChecker || turn === "w" && topRight && topRight.type === redKing || turn === "w" && bottomLeft && bottomLeft.type === redChecker || turn === "w" && bottomLeft && bottomLeft.type === redKing || turn === "w" && bottomRight && bottomRight.type === redChecker || turn === "w" && bottomRight && bottomRight.type === redKing) {
      topLeft = getTile(currentX-2, currentY-2)[0]
      topRight = getTile(currentX+2, currentY-2)[0]
      bottomLeft = getTile(currentX-2, currentY+2)[0]
      bottomRight = getTile(currentX+2, currentY+2)[0]

      if(topLeft && topLeft.type === emptyField2 || topRight && topRight.type === emptyField2 || bottomLeft && bottomLeft.type === emptyField2 || bottomRight && bottomRight.type === emptyField2) {
        return 2;
      }
    }
  }

}

afterInput(() => {
  // Check if one of the players has won
})