input.onGesture(Gesture.LogoUp, function () {
    radio.sendNumber(2)
})
input.onGesture(Gesture.LogoDown, function () {
    radio.sendNumber(8)
})
input.onGesture(Gesture.TiltLeft, function () {
    radio.sendNumber(4)
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(7)
})
input.onGesture(Gesture.ScreenUp, function () {
    radio.sendNumber(5)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(5)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(9)
})
input.onGesture(Gesture.TiltRight, function () {
    radio.sendNumber(6)
})
radio.setGroup(99)
radio.setTransmitPower(7)
basic.forever(function () {
	
})
