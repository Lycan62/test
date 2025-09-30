input.onButtonPressed(Button.A, function on_button_pressed_a() {
    basic.showString("bonjour")
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    basic.showLeds(`
        . . . . .
        . # . # .
        . # . # .
        . . . . .
        . # # # .
        `)
})
input.onGesture(Gesture.Shake, function on_gesture_shake() {
    basic.showIcon(IconNames.Yes)
})
basic.showIcon(IconNames.Heart)
