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

  if(turn === "w") {

    // if (!getAll(selectedWhite).length > 0) {
    //   // ERROR
    // }

    var currentSprite = ""
    
    if(getFirst(selectedWhite)) {
      currentSprite = selectedWhite
    } else if(getFirst(selectedRedN)) {
      currentSprite = selectedRedN
    } else if(getFirst(selectedE1N)) {
      currentSprite = selectedE1N
    } else if(getFirst(selectedE2N)) {
      currentSprite = selectedE2N
    }
    
    const currentX = getFirst(currentSprite).x
    const currentY = getFirst(currentSprite).y

    // Rewrite this to switch-case method?
    
    // FROM: selectedWhite
    if(currentSprite === selectedWhite) {
      // TO: emptyField1
      if(getTile(currentX, currentY-1).some(sprite => sprite.type === emptyField1)) {
        clearTile(currentX, currentY-1)
        clearTile(currentX, currentY)
        addSprite(currentX, currentY-1, selectedE1N)
        addSprite(currentX, currentY, whiteChecker)
        
        // TO: emptyField2
      } else if(getTile(currentX, currentY-1).some(sprite => sprite.type === emptyField2)) {
        clearTile(currentX, currentY-1)
        clearTile(currentX, currentY)
        addSprite(currentX, currentY-1, selectedE2N)
        addSprite(currentX, currentY, whiteChecker)

        // TO: redChecker
      } else if(getTile(currentX, currentY-1).some(sprite => sprite.type === redChecker)) {
        clearTile(currentX, currentY-1)
        clearTile(currentX, currentY)
        addSprite(currentX, currentY-1, selectedRedN)
        addSprite(currentX, currentY, whiteChecker)

        // TO: whiteChecker
      } else if(getTile(currentX, currentY-1).some(sprite => sprite.type === redChecker)) {
        clearTile(currentX, currentY-1)
        clearTile(currentX, currentY)
        addSprite(currentX, currentY-1, selectedWhite)
        addSprite(currentX, currentY, whiteChecker)
      }
    }
    
    
    
    
    
  }
  
  

})

afterInput(() => {
  // if(turn === "w") {
  //   turn = "r"
  // } else if(turn === "r") {
  //   turn = "w"
  // }
})