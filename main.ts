basic.forever(function () {
    music.play(music.createSoundExpression(WaveShape.Sawtooth, 1, 5000, 255, 0, 5000, SoundExpressionEffect.Tremolo, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
})
