radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 6) {
        basic.showIcon(IconNames.Heart)
        Green()
    } else {
        basic.showIcon(IconNames.Square)
    }
})
function Green2 () {
	
}
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    OFF()
    basic.pause(500)
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
input.onButtonPressed(Button.AB, function () {
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
        music.playTone(262, music.beat(BeatFraction.Half))
        music.rest(music.beat(BeatFraction.Quarter))
        basic.showNumber(10 - index)
    }
    music.playTone(262, music.beat(BeatFraction.Breve))
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    OFF()
    basic.pause(500)
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
    pins.digitalWritePin(DigitalPin.P1, 0)
    control.waitMicros(2)
    pins.digitalWritePin(DigitalPin.P1, 1)
    control.waitMicros(10)
    pins.digitalWritePin(DigitalPin.P1, 1)
    distance = pins.pulseIn(DigitalPin.P2, PulseValue.High) / 58
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
    }
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
}
let distance = 0
let range: neopixel.Strip = null
let strip: neopixel.Strip = null
radio.setGroup(40)
basic.showIcon(IconNames.Yes)
strip = neopixel.create(DigitalPin.P0, 3, NeoPixelMode.RGB)
strip.setBrightness(100)
let indicator = 0
basic.showIcon(IconNames.No)
RED()
basic.forever(function () {
	
})
