import StringUtil from './StringUtil';

class DateUtil {
    static formatGermanDate(date) {
        return StringUtil.zeroPad(date.getDate().toString(), 2) + '.' +
            StringUtil.zeroPad((date.getMonth() + 1).toString(), 2) + '.' +
            date.getFullYear().toString();
    }
}

export default DateUtil;
