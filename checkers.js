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
dldldldl
lwlwlwlw
wlwlwlwl
lolwlwlw`
]

setMap(levels[level])

// setPushables({
//   [ emptyField1 ]: [],
//   [ emptyField2 ]: []
// })

onInput("w", () => {

  if(getFirst(selectedWhite)) {
    currentSprite = selectedWhite
  } else if(getFirst(selectedWhiteN)) {
    currentSprite = selectedWhiteN
  } else if(getFirst(selectedRed)) {
    currentSprite = selectedRed
  } else if(getFirst(selectedRedN)) {
    currentSprite = selectedRedN
  } else if(getFirst(selectedE1N)) {
    currentSprite = selectedE1N
  } else if(getFirst(selectedE2N)) {
    currentSprite = selectedE2N
  }
  
  const currentX = getFirst(currentSprite).x
  const currentY = getFirst(currentSprite).y
  spriteSelector(currentX, currentY, "w")
  
  return;
  
})

onInput("s", () => {

  if(getFirst(selectedWhite)) {
    currentSprite = selectedWhite
  } else if(getFirst(selectedWhiteN)) {
    currentSprite = selectedWhiteN
  } else if(getFirst(selectedRed)) {
    currentSprite = selectedRed
  } else if(getFirst(selectedRedN)) {
    currentSprite = selectedRedN
  } else if(getFirst(selectedE1N)) {
    currentSprite = selectedE1N
  } else if(getFirst(selectedE2N)) {
    currentSprite = selectedE2N
  }
  
  const currentX = getFirst(currentSprite).x
  const currentY = getFirst(currentSprite).y
  spriteSelector(currentX, currentY, "s")
  
  return;
  
})

onInput("a", () => {

  if(getFirst(selectedWhite)) {
    currentSprite = selectedWhite
  } else if(getFirst(selectedWhiteN)) {
    currentSprite = selectedWhiteN
  } else if(getFirst(selectedRed)) {
    currentSprite = selectedRed
  } else if(getFirst(selectedRedN)) {
    currentSprite = selectedRedN
  } else if(getFirst(selectedE1N)) {
    currentSprite = selectedE1N
  } else if(getFirst(selectedE2N)) {
    currentSprite = selectedE2N
  }
  
  const currentX = getFirst(currentSprite).x
  const currentY = getFirst(currentSprite).y
  spriteSelector(currentX, currentY, "a")
  
  return;
  
})

onInput("d", () => {

  if(getFirst(selectedWhite)) {
    currentSprite = selectedWhite
  } else if(getFirst(selectedWhiteN)) {
    currentSprite = selectedWhiteN
  } else if(getFirst(selectedRed)) {
    currentSprite = selectedRed
  } else if(getFirst(selectedRedN)) {
    currentSprite = selectedRedN
  } else if(getFirst(selectedE1N)) {
    currentSprite = selectedE1N
  } else if(getFirst(selectedE2N)) {
    currentSprite = selectedE2N
  }
  
  const currentX = getFirst(currentSprite).x
  const currentY = getFirst(currentSprite).y
  spriteSelector(currentX, currentY, "d")
  
  return;
  
})

onInput("j", () => {

  // Here add a script to make a move
  
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
  
  if(currentSprite.type === selectedWhite || currentSprite.type === selectedWhiteN) {
    clearTile(xBefore, yBefore)
    addSprite(xBefore, yBefore, whiteChecker)
  } else if(currentSprite.type === selectedRed || currentSprite.type === selectedRedN) {
    clearTile(xBefore, yBefore)
    addSprite(xBefore, yBefore, redChecker)
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
      addSprite(xAfter, yAfter, selectedWhite)
      
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
  
  // } else if(getTile(currentX, currentY-1).some(sprite => sprite.type === emptyField2)) {
  //   clearTile(currentX, currentY-1)
  //   clearTile(currentX, currentY)
  //   addSprite(currentX, currentY-1, selectedE2N)
  //   addSprite(currentX, currentY, selectedRedN)
  // } else if(getTile(currentX, currentY-1).some(sprite => sprite.type === redChecker)) {
  //   clearTile(currentX, currentY-1)
  //   clearTile(currentX, currentY)
  //   addSprite(currentX, currentY-1, selectedRedN)
  //   addSprite(currentX, currentY, selectedRedN)
  // } else if(getTile(currentX, currentY-1).some(sprite => sprite.type === whiteChecker)) {
  //   clearTile(currentX, currentY-1)
  //   clearTile(currentX, currentY)
  //   addSprite(currentX, currentY-1, selectedWhite)
  //   addSprite(currentX, currentY, selectedRedN)
  // }
}

afterInput(() => {
  // Check if one of the players has won
})