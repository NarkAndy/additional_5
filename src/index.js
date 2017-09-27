module.exports = function check(str, bracketsConfig) {
   if (!str) {
        return true;
    }
    for (let idx = 0; idx < str.length - 1; idx++) {
        let pair = bracketsConfig.find(config => config[0] === str[idx]);
        if (!pair) {
            return false;
        }
        if (str[idx + 1] === pair[1]) {
            str = str.replace(pair.join(''), '');
            return check(str, bracketsConfig);
        }
    }
    return false;
}
