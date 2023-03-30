basic.forever(function () {
    if (input.temperature() >= 40) {
        music.playTone(131, music.beat(BeatFraction.Whole))
    }
    basic.pause(1000)
})
