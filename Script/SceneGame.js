function loopGame() {
    displayGame()
}

function displayGame() {
    drawSceneInit()

    context.strokeRect(UI.buttonMenu[0], UI.buttonMenu[1], UI.buttonMenu[2], UI.buttonMenu[3])

    if (pause === true) {
        drawMenu()
    }
}

function mouseUpGame(x, y, button) {
    if (button === 0) {
        if (pause === true) {
            if (pointInsideRectArray(x, y, UI.menu.buttonResume)) {
                pause = false
            } else if (pointInsideRectArray(x, y, UI.menu.buttonLevelSelect)) {
                pause = false
                scene = 'LevelSelect'
                state = ''
            } else if (pointInsideRectArray(x, y, UI.menu.buttonTitle)) {
                pause = false
                scene = 'Title'
                state = ''
            }
        } else if (pause === false) {
            if (pointInsideRectArray(x, y, UI.buttonMenu)) {
                pause = true
            }
        }
    }
}

function mouseDownGame(x, y, button) {
    
}

function keyUpGame(key) {
    if (pause === true) {
        if (key === 'r') {
            pause = false
        } else if (key === 'e') {
            pause = false
            scene = 'LevelSelect'
            state = ''
        } else if (key === 't') {
            pause = false
            scene = 'Title'
            state = ''
        }
    } else if (pause === false) {
        if (key === 'Escape') {
            pause = true
        }
    }
}

function keyDownGame(key) {
    
}