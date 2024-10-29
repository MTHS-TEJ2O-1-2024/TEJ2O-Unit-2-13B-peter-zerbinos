/* Copyright (c) 2024 MTHS All rights reserved
 *
 * Created by: Peter Zerbinos
 * Created on: Oct 2024
 * This program counts down when you press the "A" or "B" button
*/

//variable
let count: number
let neopixelStrip: neopixel.Strip = null

//clear neopixel (setup)
basic.clearScreen()
neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.show()
basic.showIcon(IconNames.Happy)

//countdown from 4 to 0
input.onButtonPressed(Button.A, function() {
    count = 4
    while (count > 0){
        basic.clearScreen()
        if (count = 4) {
            neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.White))
            neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
            neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
            neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
            neopixelStrip.show()
            basic.showNumber(count)
            basic.pause(1000)
        }
        if (count = 3) {
            neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
            neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.White))
            neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
            neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
            neopixelStrip.show()
            basic.showNumber(count)
            basic.pause(1000)
        }
        if (count = 2) {
            neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
            neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
            neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.White))
            neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
            neopixelStrip.show()
            basic.showNumber(count)
            basic.pause(1000)
        }
        if (count = 1) {
            neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
            neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
            neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
            neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.White))
            neopixelStrip.show()
            basic.showNumber(count)
            basic.pause(1000)
        count = 0
        neopixelStrip.clear()
        basic.showIcon(IconNames.Happy)
        }
    }
})