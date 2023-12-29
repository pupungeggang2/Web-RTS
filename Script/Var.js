let canvas
let context
let audio

let gameInstance
let gameFrameCurrent
let gameFramePrevious
let delta

let scene = 'Title'
let state = 'Load'
let pause = false

let sessionVar = {
    
}

let selected = {

}

let player = {
    level : 0,
    exp : 0,
    expMax : 20,
    skillTree : [],
    hand : [],
    deckOriginal : [],
    deckCurrent : [],
}

let field = {
    units : [
        [],
        []
    ],

    projectile : [
        [],
        [],
    ],
}