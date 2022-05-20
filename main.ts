radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 6) {
        basic.showIcon(IconNames.Heart)
        basic.clearScreen()
        OFF()
        basic.pause(500)
        green3()
        basic.pause(20000)
        OFF()
        basic.pause(500)
        Yellow()
        basic.pause(4000)
        OFF()
        basic.pause(500)
        RED()
    } else {
        basic.showIcon(IconNames.No)
    }
})
function Green2 () {
    range.showColor(neopixel.colors(NeoPixelColors.Green))
    for (let index = 0; index < 10; index++) {
        basic.showLeds(`
            . . # . #
            . # # # #
            # . # . .
            . . # # .
            . # . # .
            `)
        music.playTone(262, music.beat(BeatFraction.Whole))
        music.rest(music.beat(BeatFraction.Half))
    }
    basic.showLeds(`
        . . # . #
        . # # # #
        # . # . .
        . . # # .
        . # . # .
        `)
    for (let index = 0; index <= 10; index++) {
        basic.showNumber(10 - index)
        music.playTone(262, music.beat(BeatFraction.Half))
        music.rest(music.beat(BeatFraction.Quarter))
    }
    music.playTone(262, music.beat(BeatFraction.Breve))
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
}
function green3 () {
    range = strip.range(2, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Green))
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
}
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    OFF()
    basic.pause(2000)
    Green()
    OFF()
    basic.pause(500)
    Yellow()
    basic.pause(4000)
    OFF()
    basic.pause(500)
    RED()
})
function RED () {
    range = strip.range(0, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Red))
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
}
function Yellow () {
    range = strip.range(1, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Yellow))
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
}
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    OFF()
    basic.pause(2000)
    Green2()
    OFF()
    basic.pause(500)
    Yellow()
    basic.pause(4000)
    OFF()
    basic.pause(500)
    RED()
})
function OFF () {
    range = strip.range(0, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(1, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(2, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
}
function sonar () {
    for (let index = 0; index < 4; index++) {
        pins.digitalWritePin(DigitalPin.P8, 0)
        control.waitMicros(2)
        pins.digitalWritePin(DigitalPin.P8, 1)
        control.waitMicros(10)
        pins.digitalWritePin(DigitalPin.P8, 1)
        distance = pins.pulseIn(DigitalPin.P13, PulseValue.High) / 58
        if (distance <= 5) {
            count += 1
        }
    }
    if (count == 4) {
        basic.clearScreen()
        OFF()
        basic.pause(2000)
        green3()
        basic.pause(20000)
        OFF()
        basic.pause(500)
        Yellow()
        basic.pause(4000)
        OFF()
        basic.pause(500)
        RED()
    }
    count = 0
}
function Green () {
    range = strip.range(2, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Green))
    basic.showLeds(`
        . . # . #
        . # # # #
        # . # . .
        . . # # .
        . # . # .
        `)
    basic.pause(10000)
    for (let index = 0; index <= 10; index++) {
        basic.showNumber(10 - index)
        basic.pause(200)
    }
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
}
let range: neopixel.Strip = null
let count = 0
let strip: neopixel.Strip = null
let distance = 0
distance = 10
radio.setGroup(40)
basic.showIcon(IconNames.Yes)
strip = neopixel.create(DigitalPin.P16, 3, NeoPixelMode.RGB)
strip.setBrightness(100)
RED()
count = 0
basic.forever(function () {
    sonar()
})
