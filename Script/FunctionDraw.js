function drawSceneInit() {
    context.font = '32px neodgm'
    context.textAlign = 'left'
    context.textBaseline = 'top'
    context.strokeStyle = 'Black'
    context.lineWidth = 2
    context.fillStyle = 'White'
    context.fillRect(0, 0, 1280, 720)
    context.fillStyle = 'Black'
    context.clearRect(0, 0, 1280, 720)
}

function drawLevel() {
    for (let i = 0; i < 6; i++) {
        context.strokeRect(UI.levelSelect.buttonLevel[i][0], UI.levelSelect.buttonLevel[i][1], UI.levelSelect.buttonLevel[i][2], UI.levelSelect.buttonLevel[i][3])
    }
}