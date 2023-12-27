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

function drawUILower() {

}

function drawMenu() {
    context.fillStyle = 'White'
    context.fillRect(UI.menu.rect[0], UI.menu.rect[1], UI.menu.rect[2], UI.menu.rect[3])
    context.fillStyle = 'Black'
    context.strokeRect(UI.menu.rect[0], UI.menu.rect[1], UI.menu.rect[2], UI.menu.rect[3])

    context.fillText(`Paused`, UI.menu.textPause[0], UI.menu.textPause[1])
    context.strokeRect(UI.menu.buttonResume[0], UI.menu.buttonResume[1], UI.menu.buttonResume[2], UI.menu.buttonResume[3])
    context.fillText(`Resume [R]`, UI.menu.textResume[0], UI.menu.textResume[1])
    context.strokeRect(UI.menu.buttonLevelSelect[0], UI.menu.buttonLevelSelect[1], UI.menu.buttonLevelSelect[2], UI.menu.buttonLevelSelect[3])
    context.fillText(`Exit level [E]`, UI.menu.textLevelSelect[0], UI.menu.textLevelSelect[1])
    context.strokeRect(UI.menu.buttonTitle[0], UI.menu.buttonTitle[1], UI.menu.buttonTitle[2], UI.menu.buttonTitle[3])
    context.fillText(`Back to title [T]`, UI.menu.textTitle[0], UI.menu.textTitle[1])
}