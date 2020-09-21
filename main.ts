input.onButtonPressed(Button.A, function () {
    led.setBrightness(led.brightness() + gain)
    led.plotBrightness(x, y, 255)
})
input.onButtonPressed(Button.B, function () {
	
})
let gain = 0
let x = 0
let y = 0
led.enable(true)
led.setBrightness(0)
y = 0
x = 0
gain = 10
led.plotBrightness(x, y, led.brightness())
basic.forever(function () {
    if (led.brightness() >= 255) {
        led.plotBrightness(x, y, 255)
        x += 1
        led.setBrightness(0)
        led.plotBrightness(x, y, led.brightness())
    }
})
