let x = 0
input.onButtonPressed(Button.A, function () {
    x = input.compassHeading()
    if (x < 45) {
        basic.showString("N")
    } else if (x < 135) {
        basic.showString("E")
    } else if (x < 225) {
        basic.showString("S")
    } else if (x < 315) {
        basic.showString("W")
    } else {
        basic.showString("N")
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(input.compassHeading())
})
basic.forever(function () {
	
})
