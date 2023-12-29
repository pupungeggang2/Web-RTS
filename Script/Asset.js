let img = {
    lifeBar : new Image(),
    energyBar : new Image(),
    emptyBar : new Image(),
    
    icon : {
        life : new Image(),
        energy : new Image(),
    },

    card : {

    }
}

function imageLoad() {
    img.lifeBar.src = 'Image/LifeBar.png'
    img.energyBar.src = 'Image/EnergyBar.png'
    img.emptyBar.src = 'Image/EmptyBar.png'

    img.lifeBar.src = 'Image/LifeBar.png'
    img.energyBar.src = 'Image/EnergyBar.png'

    img.icon.life.src = 'Image/Icon/IconLife.png'
    img.icon.energy.src = 'Image/Icon/IconEnergy.png'
}