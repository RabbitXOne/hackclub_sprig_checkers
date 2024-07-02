/*
First time? Check out the tutorial game:
https://sprig.hackclub.com/gallery/getting_started

@title: Checkers
@author: Filip
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

let level = 0
const levels = [
  map`
lrlrlrlr
rlrlrlrl
lrlrlrlr
dldldldl
ldldldld
wlwlwlwl
lwlwlwlw
flwlwlwl`
]

setMap(levels[level])

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

// CONTROLS:
// SELECTOR: W - UP, A - LEFT, S - DOWN, D - RIGHT

// WHITE PIECE: J - UP AND LEFT, L - UP AND RIGHT
// RED PIECE: J - DOWN AND LEFT, L - DOWN AND RIGHT

// RED/WHITE KING: J - DOWN AND LEFT, L - DOWN AND RIGHT, I - UP AND LEFT, K - UP AND RIGHT

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

onInput("j", () => {
  const selected = getSelected()
  const xBefore = getFirst(selected).x
  const yBefore = getFirst(selected).y

  if(selected && selected === selectedWhite) {
    move(xBefore, yBefore, selectedWhite, "tl")
  } else if(selected && selected === selectedWKing) {
    move(xBefore, yBefore, selectedWKing, "bl")
  } else if(selected && selected === selectedRed) {
    move(xBefore, yBefore, selectedRed, "bl")
  } else if(selected && selected === selectedRKing) {
    move(xBefore, yBefore, selectedRKing, "bl")
  }
})

onInput("l", () => {
  const selected = getSelected()
  const xBefore = getFirst(selected).x
  const yBefore = getFirst(selected).y

  if(selected && selected === selectedWhite) {
    move(xBefore, yBefore, selectedWhite, "tr")
  } else if(selected && selected === selectedWKing) {
    move(xBefore, yBefore, selectedWKing, "br")
  } else if(selected && selected === selectedRed) {
    move(xBefore, yBefore, selectedRed, "br")
  } else if(selected && selected === selectedRKing) {
    move(xBefore, yBefore, selectedRKing, "br")
  }
})

onInput("i", () => {
  
  const selected = getSelected()
  const xBefore = getFirst(selected).x
  const yBefore = getFirst(selected).y
  
  if(selected && selected === selectedWKing) {
    move(xBefore, yBefore, selectedWKing, "tl")
  } else if(selected && selected === selectedRKing) {
    move(xBefore, yBefore, selectedRKing, "tl")
  }
})

onInput("k", () => {
  
  const selected = getSelected()
  const xBefore = getFirst(selected).x
  const yBefore = getFirst(selected).y
  
  if(selected && selected === selectedWKing) {
    move(xBefore, yBefore, selectedWKing, "tr")
  } else if(selected && selected === selectedRKing) {
    move(xBefore, yBefore, selectedRKing, "tr")
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
      
      const moveAllowed = canMove(xAfter, yAfter)
      clearTile(xAfter, yAfter)
      
      if(moveAllowed !== 0) {
        addSprite(xAfter, yAfter, selectedWhite)
      } else {
        addSprite(xAfter, yAfter, selectedWhiteN)
      }

    } else if(turn === "r") {
      clearTile(xAfter, yAfter)
      addSprite(xAfter, yAfter, selectedWhiteN)
    }
  } else if(nextSprite.type === whiteKing) {
    if(turn === "w") {
      
      const moveAllowed = canMove(xAfter, yAfter)
      clearTile(xAfter, yAfter)
      
      if(moveAllowed !== 0) {
        addSprite(xAfter, yAfter, selectedWKing)
      } else {
        addSprite(xAfter, yAfter, selectedWKingN)
      }

    } else if(turn === "r") {
      clearTile(xAfter, yAfter)
      addSprite(xAfter, yAfter, selectedWKingN)
    }
    
  } else if(nextSprite.type === redChecker) {
    if(turn === "r") {
      
      const moveAllowed = canMove(xAfter, yAfter)
      clearTile(xAfter, yAfter)
      
      if(moveAllowed !== 0) {
        addSprite(xAfter, yAfter, selectedRed)
      } else {
        addSprite(xAfter, yAfter, selectedRedN)
      }

    } else if(turn === "w") {
      clearTile(xAfter, yAfter)
      addSprite(xAfter, yAfter, selectedRedN)
    }
  } else if(nextSprite.type === redKing) {
    if(turn === "r") {
      
      // Here add a check to see if the player can move selected pawn
      const moveAllowed = canMove(xAfter, yAfter)
      clearTile(xAfter, yAfter)
      
      if(moveAllowed !== 0) {
        addSprite(xAfter, yAfter, selectedRKing)
      } else {
        addSprite(xAfter, yAfter, selectedRKingN)
      }

    } else if(turn === "w") {
      clearTile(xAfter, yAfter)
      addSprite(xAfter, yAfter, selectedRKingN)
    }
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
  } else if(checkerToCheck.type === whiteKing || checkerToCheck.type === redKing) {
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
    } else {
      return 0;
    }
    
  } else if(canMoveInDirections === "b") {
    var bottomLeft = getTile(currentX-1, currentY+1)[0]
    var bottomRight = getTile(currentX+1, currentY+1)[0]

    if(bottomLeft && bottomLeft.type === emptyField2 || bottomRight && bottomRight.type === emptyField2) {
      return 1;
    } else if(turn === "r" && bottomLeft && bottomLeft.type === whiteChecker || turn === "r" && bottomLeft && bottomLeft.type === whiteKing || turn === "r" && bottomRight && bottomRight.type === whiteChecker || turn === "r" && bottomRight && bottomRight.type === whiteKing) {
      bottomLeft = getTile(currentX-2, currentY+2)[0]
      bottomRight = getTile(currentX+2, currentY+2)[0]

      if(bottomLeft && bottomLeft.type === emptyField2 || bottomRight && bottomRight.type === emptyField2) {
        return 2;
      }
    } else {
      return 0;
    }
    
  } else if(canMoveInDirections === "a") {
    var topLeft = getTile(currentX-1, currentY-1)[0]
    var topRight = getTile(currentX+1, currentY-1)[0]
    var bottomLeft = getTile(currentX-1, currentY+1)[0]
    var bottomRight = getTile(currentX+1, currentY+1)[0]

    if(topLeft && topLeft.type === emptyField2 || topRight && topRight.type === emptyField2 || bottomRight && bottomRight.type === emptyField2 || bottomLeft && bottomLeft.type === emptyField2) {
      return 1;
    } else if(turn === "w" && topLeft && topLeft.type === redChecker || turn === "w" && topLeft && topLeft.type === redKing || turn === "w" && topRight && topRight.type === redChecker || turn === "w" && topRight && topRight.type === redKing || turn === "w" && bottomLeft && bottomLeft.type === redChecker || turn === "w" && bottomLeft && bottomLeft.type === redKing || turn === "w" && bottomRight && bottomRight.type === redChecker || turn === "w" && bottomRight && bottomRight.type === redKing|| turn === "r" && topLeft && topLeft.type === whiteChecker || turn === "r" && topLeft && topLeft.type === whiteKing || turn === "r" && topRight && topRight.type === whiteChecker || turn === "r" && topRight && topRight.type === whiteKing || turn === "r" && bottomLeft && bottomLeft.type === whiteChecker || turn === "r" && bottomLeft && bottomLeft.type === whiteKing || turn === "r" && bottomRight && bottomRight.type === whiteChecker || turn === "r" && bottomRight && bottomRight.type === whiteKing) {
      topLeft = getTile(currentX-2, currentY-2)[0]
      topRight = getTile(currentX+2, currentY-2)[0]
      bottomLeft = getTile(currentX-2, currentY+2)[0]
      bottomRight = getTile(currentX+2, currentY+2)[0]

      if(topLeft && topLeft.type === emptyField2 || topRight && topRight.type === emptyField2 || bottomLeft && bottomLeft.type === emptyField2 || bottomRight && bottomRight.type === emptyField2) {
        return 2;
      }
    } else {
      return 0;
    }
  }

}

function move(xBefore, yBefore, checkerToMove, direction) {

  var xAfter = 0;
  var yAfter = 0;

  var nextTile = 0;
  if(direction === "tl") {
    nextTile = getTile(xBefore-1, yBefore-1)[0]
  } else if(direction === "tr") {
    nextTile = getTile(xBefore+1, yBefore-1)[0]
  } else if(direction === "bl") {
    nextTile = getTile(xBefore-1, yBefore+1)[0]
  } else if(direction === "br") {
    nextTile = getTile(xBefore+1, yBefore+1)[0]
  }

  if(!nextTile) {
    return;
  }

  var move = 0;
  if(nextTile && nextTile.type === emptyField2) {
     move = 1;
  
  } else if(turn === "w" && nextTile && nextTile.type === redChecker || turn === "w" && nextTile && nextTile.type === redKing) {
    
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
      var capturedChecker = "r"
    } else {
      return;
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
      var capturedChecker = "w"
    } else {
      return;
    }
  
  } else {
    return;
  }
  
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

    if(checkerToMove === selectedWhite && yAfter === 0) {
      addSprite(xAfter, yAfter, whiteKing)
    } else if(checkerToMove === selectedWhite) {
      addSprite(xAfter, yAfter, whiteChecker)
    } else if(checkerToMove === selectedWKing) {
      addSprite(xAfter, yAfter, whiteKing)
    } else if(checkerToMove === selectedRed && yAfter === 7) {
      addSprite(xAfter, yAfter, redKing)
    } else if(checkerToMove === selectedRed) {
      addSprite(xAfter, yAfter, redChecker)
    } else if(checkerToMove === selectedRKing){
      addSprite(xAfter, yAfter, redKing)
    }
    
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

    if(capturedChecker && capturedChecker === "w") {
      whiteCheckers - 1;
    } else if(capturedChecker && capturedChecker === "r") {
      redCheckers - 1;
    }

    clearTile(capturedPawnX, capturedPawnY)
    addSprite(capturedPawnX, capturedPawnY, emptyField2)
    
    clearTile(xAfter, yAfter)
    
    if(checkerToMove === selectedWhite && yAfter === 0) {
      addSprite(xAfter, yAfter, whiteKing)
    } else if(checkerToMove === selectedWhite) {
      addSprite(xAfter, yAfter, whiteChecker)
    } else if(checkerToMove === selectedWKing) {
      addSprite(xAfter, yAfter, whiteKing)
    } else if(checkerToMove === selectedRed && yAfter === 7) {
      addSprite(xAfter, yAfter, redKing)
    } else if(checkerToMove === selectedRed) {
      addSprite(xAfter, yAfter, redChecker)
    } else if(checkerToMove === selectedRKing){
      addSprite(xAfter, yAfter, redKing)
    }
  }

  var redCheckersCount = 0;
  redCheckersCount = getAll(redChecker)
  redCheckersCount = redCheckersCount + getAll(redKing)
  
  var whiteCheckersCount = 0;
  whiteCheckersCount = getAll(whiteChecker)
  whiteCheckersCount = redCheckersCount + getAll(whiteKing)
  
  if(redCheckersCount.length === 0) {
    addText("WHITE WON!", {
      x: 4,
      y: 4,
      color: color`2`
    })
  } else if(whiteCheckersCount.length === 0) {
    addText("RED WON!", {
      x: 4,
      y: 4,
      color: color`2`
    })
  }

  // if(move === 2) {

  //   // Below should be a check to see if a player can capture one more piece with the SAME piece he just moved. TO BE FIXED
  //   return 0;
    
  //   var oneMoreMove = 0;
  //   oneMoreMove = canMove(xAfter, yAfter)
  
  //   if(turn === "w" && oneMoreMove === 2) {
  //     clearTile(xAfter, yAfter)
  //     addSprite(xAfter, yAfter, selectedWhite)
  //   } else if(turn === "r" && oneMoreMove === 2) {
  //     clearTile(xAfter, yAfter)
  //     addSprite(xAfter, yAfter, selectedRed)
  //   } else if(turn === "w") {
      
  //     var nextChecker = getAll(redKing)[0]
  //     if(nextChecker) {
  //       // redKing
  //     } else {
  //       nextChecker = getAll(redChecker)[0]
  
  //       var moveAllowed = 0;
  //       moveAllowed = canMove(nextChecker.x, nextChecker.y)
  //       clearTile(nextChecker.x, nextChecker.y)
        
  //       if(moveAllowed !== 0) {
  //         addSprite(nextChecker.x, nextChecker.y, selectedRed)
  //         turn = "r"
  //       } else {
  //         addSprite(nextChecker.x, nextChecker.y, selectedRedN)
  //         turn = "r"
  //       }        
  //     }
  //   } else if(turn === "r") {
      
  //     var nextChecker = getAll(whiteKing)[0]
  //     if(nextChecker) {
  //       // whiteKing
  //     } else {
  //       nextChecker = getAll(whiteChecker)[0]
  
  //       var moveAllowed = 0;
  //       moveAllowed = canMove(nextChecker.x, nextChecker.y)
  //       clearTile(nextChecker.x, nextChecker.y)
        
  //       if(moveAllowed !== 0) {
  //         addSprite(nextChecker.x, nextChecker.y, selectedWhite)
  //         turn = "w"
  //       } else {
  //         addSprite(nextChecker.x, nextChecker.y, selectedWhiteN)
  //         turn = "w"
  //       }        
  //     }
  //   }


  // } else 


    
  if(turn === "w") {
      
    var nextChecker = getAll(redKing)[0]
    if(nextChecker) {
      var moveAllowed = 0;
      moveAllowed = canMove(nextChecker.x, nextChecker.y)
      clearTile(nextChecker.x, nextChecker.y)
      
      if(moveAllowed !== 0) {
        addSprite(nextChecker.x, nextChecker.y, selectedRKing)
        turn = "w"
      } else {
        addSprite(nextChecker.x, nextChecker.y, selectedRKingN)
        turn = "w"
      }  
    } else {
      nextChecker = getAll(redChecker)[0]
  
      var moveAllowed = 0;
      moveAllowed = canMove(nextChecker.x, nextChecker.y)
      clearTile(nextChecker.x, nextChecker.y)
        
      if(moveAllowed !== 0) {
        addSprite(nextChecker.x, nextChecker.y, selectedRed)
        turn = "r"
      } else {
        addSprite(nextChecker.x, nextChecker.y, selectedRedN)
        turn = "r"
      }        
    }
  } else if(turn ==="r") {
      
    var nextChecker = getAll(whiteKing)[0]
    if(nextChecker) {
      var moveAllowed = 0;
      moveAllowed = canMove(nextChecker.x, nextChecker.y)
      clearTile(nextChecker.x, nextChecker.y)
      
      if(moveAllowed !== 0) {
        addSprite(nextChecker.x, nextChecker.y, selectedWKing)
        turn = "w"
      } else {
        addSprite(nextChecker.x, nextChecker.y, selectedWKingN)
        turn = "w"
      }  
    } else {
      nextChecker = getAll(whiteChecker)[0]

      var moveAllowed = 0;
      moveAllowed = canMove(nextChecker.x, nextChecker.y)
      clearTile(nextChecker.x, nextChecker.y)
      
      if(moveAllowed !== 0) {
        addSprite(nextChecker.x, nextChecker.y, selectedWhite)
        turn = "w"
      } else {
        addSprite(nextChecker.x, nextChecker.y, selectedWhiteN)
        turn = "w"
      }        
    }    
  }
}

afterInput(() => {
  // Check if one of the players has won
})