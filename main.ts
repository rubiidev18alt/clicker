controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    music.play(music.melodyPlayable(music.thump), music.PlaybackMode.UntilDone)
    info.changeScoreBy(1)
})
info.onCountdownEnd(function () {
    game.setGameOverScoringType(game.ScoringType.HighScore)
    game.gameOver(true)
})
info.startCountdown(10)
info.setScore(0)
scene.setBackgroundColor(1)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . 8 8 8 8 8 8 8 8 8 8 . . . . 
    . 8 8 8 8 8 8 8 8 8 8 8 8 . . . 
    . 8 8 8 8 8 8 8 8 8 8 8 8 . . . 
    . 8 8 8 8 8 8 8 8 8 8 8 8 . . . 
    . 8 8 8 8 8 8 8 8 8 8 8 8 . . . 
    . 8 8 8 8 8 8 8 8 8 8 8 8 . . . 
    . 6 8 8 8 8 8 8 8 8 8 8 8 . . . 
    . 6 6 8 8 8 8 8 8 8 8 8 8 . . . 
    . 6 6 6 6 6 6 6 6 6 6 6 6 . . . 
    . . 6 6 6 6 6 6 6 6 6 6 . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
