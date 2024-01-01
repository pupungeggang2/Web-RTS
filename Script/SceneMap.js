function loopMap() {
    displayMap()
}

function displayMap() {
    drawSceneInit()

    context.fillText('Select tile', UI.map.textTitle1[0], UI.map.textTitle1[1])
    context.fillText(`Level : ${gameVar.selectedLevel}`, UI.map.textTitle2[0], UI.map.textTitle2[1])

    context.strokeRect(UI.buttonMenu[0], UI.buttonMenu[1], UI.buttonMenu[2], UI.buttonMenu[3])

    if (pause === true) {
        drawMenu()
    }
}

function keyDownMap(key) {

}

function keyUpMap(key) {

}

function mouseDownMap(x, y, button) {
}

function mouseUpMap(x, y, button) {
    if (button === 0) {
        if (pause === false) {
            if (pointInsideRectArray(x, y, UI.buttonMenu)) {
                pause = true
            }
            
            if (state === '') {

            }
        } else if (pause === true) {
            if (pointInsideRectArray(x, y, UI.menu.buttonResume)) {
                pause = false
            } else if (pointInsideRectArray(x, y, UI.menu.buttonLevelSelect)) {
                pause = false
                scene = 'LevelSelect'
                state = ''
                selected.level = -1
            } else if (pointInsideRectArray(x, y, UI.menu.buttonTitle)) {
                pause = false
                scene = 'Title'
                state = ''
            }
        }
    }
}