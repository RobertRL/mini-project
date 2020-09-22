input.onButtonPressed(Button.A, function () {
    led.setBrightness(brightness + gain)
    led.plotBrightness(x, y, 250)
})
input.onButtonPressed(Button.B, function () {
    if (brightness) {
        gain += 10
    }
})
let brightness = 0
let gain = 0
let x = 0
let y = 0
led.enable(true)
led.setBrightness(0)
y = 0
x = 0
gain = 10
led.plotBrightness(x, y, brightness)
basic.forever(function () {
    brightness = led.brightness()
    if (brightness >= 250) {
        led.plotBrightness(x, y, 250)
        x += 1
        led.setBrightness(0)
        led.plotBrightness(x, y, led.brightness())
    }
})
