// Error
function LogError() {}

LogError.error = function (message) {
    /* eslint-disable no-console */
    console.log(message);
    /* eslint-enable */
};

module.exports = LogError;
