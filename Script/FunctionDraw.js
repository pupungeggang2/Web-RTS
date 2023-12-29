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
    // Life, Energy
    context.drawImage(img.icon.life, UI.game.lower.iconLife[0], UI.game.lower.iconLife[1])
    context.drawImage(img.icon.energy, UI.game.lower.iconEnergy[0], UI.game.lower.iconEnergy[1])
    context.font = '24px neodgm'
    context.fillText(`60/60`, UI.game.lower.textLife[0], UI.game.lower.textLife[1])
    context.fillText(`8/8`, UI.game.lower.textEnergy[0], UI.game.lower.textEnergy[1])
    context.drawImage(img.lifeBar, UI.game.lower.lifeBar[0], UI.game.lower.lifeBar[1])
    context.drawImage(img.energyBar, UI.game.lower.energyBar[0], UI.game.lower.energyBar[1])
    //context.drawImage(img.emptyBar, UI.game.lower.emptyBar[0], UI.game.lower.emptyBar[1])

    // Hand
    context.strokeRect(UI.game.lower.ability[0], UI.game.lower.ability[1], UI.game.lower.ability[2], UI.game.lower.ability[3])
    context.strokeRect(UI.game.lower.hand[0], UI.game.lower.hand[1], UI.game.lower.hand[2], UI.game.lower.hand[3])
    context.strokeRect(UI.game.lower.cardBack[0], UI.game.lower.cardBack[1], UI.game.lower.cardBack[2], UI.game.lower.cardBack[3])
    context.font = '32px neodgm'
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