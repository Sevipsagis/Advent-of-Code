module.exports = {
    solve: input => {
        // [[l, w, h], ...]
        return input.split("\n").map(e => {
            e = e.split("x").sort((n1, n2) => n1 - n2);
            return (2 * e[0] * e[1]) + (2 * e[1] * e[2]) + (2 * e[0] * e[2]) + (e[0] * e[1])
        }).reduce((s, n) => s + n, 0);
    }
};