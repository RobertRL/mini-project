input.onButtonPressed(Button.A, function () {
    led.setBrightness(led.brightness() + 10)
})
led.enable(true)
led.setBrightness(0)
basic.forever(function () {
    led.plotBrightness(0, 0, led.brightness())
    if (led.brightness() <= 255) {
    	
    }
})
