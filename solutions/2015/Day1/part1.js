module.exports = {
    solve: input => {
        return input.split('').map(e => e == '(' ? 1 : -1).reduce((n1, n2) => n1 + n2, 0);
    }
};