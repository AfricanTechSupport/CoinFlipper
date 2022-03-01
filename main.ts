input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.Diamond)
        basic.showIcon(IconNames.SmallDiamond)
    }
    if (Math.randomBoolean()) {
        basic.showIcon(IconNames.QuarterNote)
    } else {
        basic.showIcon(IconNames.EigthNote)
    }
})
basic.showString("Coin Flipper")
