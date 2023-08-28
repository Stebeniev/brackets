module.exports = function checkFirst(str, bracketsConfig) {
    const openBr = [];
    const closeBr = [];

    const stack = [];

    for (let i = 0; i < bracketsConfig.length; i++) {
        openBr.push(bracketsConfig[i][0]);
        closeBr.push(bracketsConfig[i][1]);
    }

    for (let i = 0; i < str.length; i++) {
        let current = str[i];

        if (openBr.includes(current)) {
            if (current === closeBr[openBr.indexOf(current)]) {
                if (stack.length > 0 && stack[stack.length - 1] === current) {
                    stack.pop();
                } else {
                    stack.push(current);
                }
            } else {
                stack.push(current);
            }
        } else {
            if (stack.length === 0 || current !== closeBr[openBr.indexOf(stack[stack.length - 1])]) {
                return false;
            } else {
                stack.pop();
            }
        }
    }
    return stack.length === 0;
}