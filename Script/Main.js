window.onload = main
window.onerror = errorHandle
window.oncontextmenu = rightClick

function main() {
    canvas = document.getElementById('Screen')
    context = canvas.getContext('2d')

    window.addEventListener('mouseup', mouseUp, false)
    window.addEventListener('mousedown', mouseDown, false)
    window.addEventListener('keydown', keyDown, false)
    window.addEventListener('keyup', keyUp, false)

    imageLoad()

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
    } else if (scene === 'Game') {
        loopGame()
    }

    gameFramePrevious = Date.now()
    gameInstance = requestAnimationFrame(loop)
}

function mouseUp(event) {

}

function mouseDown(event) {

}

function keyDown(event) {

}

function keyUp(event) {

}

function errorHandle(err, url, line, col, obj) {
    if (obj != null) {
        cancelAnimationFrame(gameInstance)
    }
}

function rightClick() {
    return false
}