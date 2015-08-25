function DateUtil() {
    this.localeDateFromUTCTimestamp = function (timestamp) {
        const oldDate = new Date(timestamp);
        const newDate = new Date(oldDate.getTime() + oldDate.getTimezoneOffset()*60*1000);

        newDate.setHours(oldDate.getHours() - (oldDate.getTimezoneOffset() / 60));

        return newDate;
    };
}

module.exports = DateUtil;

