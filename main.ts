let colorbit_51bit: colorbit.Strip = null
colorbit_51bit.showIntColor(0, colorbit.colors(BitColors.Red))
colorbit_51bit.showScrollStringColor("", colorbit.colors(BitColors.Red))
basic.forever(function () {
    colorbit_51bit = colorbit.initColorBit(DigitalPin.P0, BitColorMode.RGB)
    pins.servoWritePin(AnalogPin.P0, 1)
})
