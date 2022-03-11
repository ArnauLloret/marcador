input.onButtonPressed(Button.A, function () {
    game.addScore(1)
})
input.onButtonPressed(Button.AB, function () {
    game.setScore(0)
})
input.onButtonPressed(Button.B, function () {
    game.addScore(-1)
})
basic.showLeds(`
    . . . . .
    . . . . .
    . # # # .
    . . . . .
    . . . . .
    `)
basic.forever(function () {
    basic.showNumber(game.score())
    if (game.score() >= 10) {
        for (let index = 0; index < 2; index++) {
            basic.showNumber(9)
            basic.pause(100)
            basic.clearScreen()
            basic.pause(100)
        }
        game.setScore(9)
    }
})
