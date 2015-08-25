function UnitConversion() {
    this.fahrenheitToCelsius = function (fahrenheit) {
        return (fahrenheit - 32) * (5 / 9);
    };

    this.milesToKilometer = function (miles) {
        return miles * 1.609347219;
    };
}

module.exports = UnitConversion;

