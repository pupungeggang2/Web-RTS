function loopLevelSelect() {
    displayLevelSelect()
}

function displayLevelSelect() {
    drawSceneInit()

    context.fillText('Select Level.', UI.textTitle[0], UI.textTitle[1])
    context.strokeRect(UI.buttonMenu[0], UI.buttonMenu[1], UI.buttonMenu[2], UI.buttonMenu[3])
    drawLevel()
}

function mouseDownLevelSelect(x, y, button) {
    if (button === 0) {
        if (pause === false) {
            if (state === '') {
                if (pointInsideRectArray(x, y, UI.buttonMenu)) {
                    scene = 'Title'
                    state = ''
                    pause = false
                }

                for (let i = 0; i < 6; i++) {
                    if (pointInsideRectArray(x, y, UI.levelSelect.buttonLevel[i])) {
                        if (i === selected) {
                            scene = 'Game'
                            state = ''
                            pause = false
                            selected = -1
                        } else {
                            selected = i
                        }
                    }
                }
            } 
        }
    }
}

function mouseUpLevelSelect(x, y, button) {

}

function keyDownLevelSelect(key) {

}

function keyUpLevelSelect(key) {

}