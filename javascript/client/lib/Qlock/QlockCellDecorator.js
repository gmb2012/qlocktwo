// Decorator for creating the data structure expected by the react component
class QlockCellDecorator {
    static decorate(char, active) {
        return { char: char, active: (active || false) };
    }
}

export default QlockCellDecorator;
