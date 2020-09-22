input.onButtonPressed(Button.A, function () {
    led.setBrightness(brightness + gain)
    led.plotBrightness(x, y, brightness)
})
input.onButtonPressed(Button.B, function () {
    if (Coin >= 1) {
        if (y >= 1) {
            gain += gain * 2
            y = 0
            x = 0
            basic.clearScreen()
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
gain = 10
Coin = 0
led.plotBrightness(x, y, brightness)
basic.forever(function () {
    brightness = led.brightness()
    Led = x
    if (brightness >= 255) {
        if (Led >= 4) {
            y += 1
            x = 0
        }
        led.plotBrightness(x, y, 255)
        x += 1
        led.setBrightness(0)
        led.plotBrightness(x, y, brightness)
        Coin += 1
    }
    if (x == 4 && y == 4) {
        while (x == 4 == (y == 4)) {
            basic.showIcon(IconNames.SmallDiamond)
            basic.showIcon(IconNames.SmallSquare)
            basic.showIcon(IconNames.Diamond)
            basic.showIcon(IconNames.Square)
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                `)
            basic.clearScreen()
        }
    }
})
