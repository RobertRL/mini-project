input.onButtonPressed(Button.A, function () {
    led.setBrightness(brightness + gain)
    led.plotBrightness(x, y, brightness)
})
input.onButtonPressed(Button.B, function () {
    if (Coin >= 1) {
        if (y >= 1) {
            gain += 10
            y = y - 1
            x = 0
        }
    }
})
let Led = 0
let brightness = 0
let Coin = 0
let gain = 0
let x = 0
let y = 0
led.enable(true)
led.setBrightness(0)
y = 0
x = 0
gain = 100
Coin = 0
led.plotBrightness(x, y, brightness)
basic.forever(function () {
    brightness = led.brightness()
    Led = x
    if (brightness >= 250) {
        if (Led >= 4) {
            y += 1
            x = 0
        }
        led.plotBrightness(x, y, 250)
        x += 1
        led.setBrightness(0)
        led.plotBrightness(x, y, brightness)
        Coin += 1
    }
})
