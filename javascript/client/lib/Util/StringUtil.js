class StringUtil {
    static zeroPad(input, minLength) {
        let returnValue = input.split('');

        while (returnValue.length < minLength) {
            returnValue = [ '0' ].concat(returnValue);
        }

        return returnValue.join('');
    }
}

export default StringUtil;
