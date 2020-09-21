input.onButtonPressed(Button.A, function () {
    led.setBrightness(led.brightness() + 1)
})
led.enable(true)
led.setBrightness(0)
basic.forever(function () {
    led.plotBrightness(0, 0, led.brightness() * 10)
})
