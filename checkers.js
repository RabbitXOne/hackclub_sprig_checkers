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

onInput("j", () => {
  // If selected piece is not a king, `j` button means left top move if white and bottom left if red

  const selected = getSelected()

  if(selected && selected === selectedWhite) {
    const xBefore = getFirst(selected).x
    const yBefore = getFirst(selected).y
    var xAfter = 0;
    var yAfter = 0;


    const leftTop = getTile(xBefore-1, yBefore-1)[0]

    // ---
    // This section has to be adapted for red
    var move = 0;
    if(leftTop && leftTop.type === emptyField2) {
       move = 1;
    
    } else if(turn === "w" && leftTop && leftTop.type === redChecker || leftTop.type === redKing) {
      const leftTop1 = getTile(xBefore-2, yBefore-2)[0]
    
      // Check if an opponent's piece can be captured
      if(leftTop1 && leftTop1.type === emptyField2) {
        move = 2;
      }
    
    } else {
      move = 0;
    }
    // ---
    
    if(move === 1) {
      xAfter = xBefore - 1
      yAfter = yBefore - 1

      clearTile(xBefore, yBefore)
      addSprite(xBefore, yBefore, emptyField2)
      
      clearTile(xAfter, yAfter)
      addSprite(xAfter, yAfter, whiteChecker)
      
    } else if(move === 2) {
      xAfter = xBefore - 2
      yAfter = yBefore - 2
      
      capturedPawnX = xBefore - 1
      capturedPawnY = yBefore - 1

      clearTile(xBefore, yBefore)
      addSprite(xBefore, yBefore, emptyField2)

      clearTile(capturedPawnX, capturedPawnY)
      addSprite(capturedPawnX, capturedPawnY, emptyField2)
      
      clearTile(xAfter, yAfter)
      addSprite(xAfter, yAfter, whiteChecker)

      // Here add a check if player can capture one more piece after this move
    }
    
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
    clearTile(xAfter, yAfter)
    if(turn === "w") {

      // Here add a check to see if the player can move selected pawn
      const moveAllowed = canMove(xAfter, yAfter)
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

  // Currently doing checks only for white

  const leftTop = getTile(currentX-1, currentY-1)[0]
  const rightTop = getTile(currentX+1, currentY-1)[0]
  
  if(leftTop && leftTop.type === emptyField2 || rightTop && rightTop.type === emptyField2) {
    return 1;
    
  } else if(turn === "w" && leftTop && leftTop.type === redChecker || leftTop.type === redKing) {
    const leftTop1 = getTile(currentX-2, currentY-2)[0]
    const rightTop1 = getTile(currentX+2, currentY-2)[0]

    // Check if an opponent's piece can be captured
    if(leftTop1 && leftTop1.type === emptyField2 || rightTop1 && rightTop1.type === emptyField2) {
      return 2;
    }

  } else {
    return 0;
  }
}

afterInput(() => {
  // Check if one of the players has won
})