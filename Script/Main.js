window.onload = main
window.onerror = errorHandle
window.oncontextmenu = rightClick

function main() {
    canvas = document.getElementById('Screen')
    context = canvas.getContext('2d')
    audio = new Audio('Audio/123.wav')
    audio.loop = true

    window.addEventListener('mouseup', mouseUp, false)
    window.addEventListener('mousedown', mouseDown, false)
    window.addEventListener('keydown', keyDown, false)
    window.addEventListener('keyup', keyUp, false)

    imageLoad()
    saveInit()

    gameFrameCurrent = Date.now()
    gameFramePrevious = Date.now() - 16
    
    gameInstance = requestAnimationFrame(loop)
}

function loop() {
    gameFrameCurrent = Date.now()

    if (scene === 'Title') {
        loopTitle()
    } else if (scene === 'LevelSelect') {
        loopLevelSelect()
    } else if (scene === 'Map') {
        loopMap()
    } else if (scene === 'Game') {
        loopGame()
    }

    gameFramePrevious = Date.now()
    gameInstance = requestAnimationFrame(loop)
}

function mouseUp(event) {
    let canvasRect = canvas.getBoundingClientRect()
    let x = event.clientX - canvasRect.left
    let y = event.clientY - canvasRect.top
    let button = event.button

    if (scene === 'Title') {
        mouseUpTitle(x, y, button)
    } else if (scene === 'LevelSelect') {
        mouseUpLevelSelect(x, y, button)
    } else if (scene === 'Map') {
        mouseUpMap(x, y, button)
    } else if (scene === 'Game') {
        mouseUpGame(x, y, button)
    }
}

function mouseDown(event) {
    let canvasRect = canvas.getBoundingClientRect()
    let x = event.clientX - canvasRect.left
    let y = event.clientY - canvasRect.top
    let button = event.button

    if (scene === 'Title') {
        mouseDownTitle(x, y, button)
    } else if (scene === 'LevelSelect') {
        mouseDownLevelSelect(x, y, button)
    } else if (scene === 'Map') {
        mouseDownMap(x, y, button)
    } else if (scene === 'Game') {
        mouseDownGame(x, y, button)
    }
}

function keyDown(event) {
    let key = event.key

    if (scene === 'Title') {
        keyDownTitle(key)
    } else if (scene === 'LevelSelect') {
        keyDownLevelSelect(key)
    } else if (scene === 'Map') {
        keyDownMap(key)
    } else if (scene === 'Game') {
        keyDownGame(key)
    }
}

function keyUp(event) {
    let key = event.key

    if (scene === 'Title') {
        keyUpTitle(key)
    } else if (scene === 'LevelSelect') {
        keyUpLevelSelect(key)
    } else if (scene === 'Map') {
        keyUpMap(key)
    } else if (scene === 'Game') {
        keyUpGame(key)
    }
}

function errorHandle(err, url, line, col, obj) {
    if (obj != null) {
        cancelAnimationFrame(gameInstance)
    }
}

function rightClick() {
    return false
}