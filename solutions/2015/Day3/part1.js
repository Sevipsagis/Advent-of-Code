module.exports = {
    solve: input => {
        let axisX = 0;
        let axisY = 0;
        let present = ["00"];
        input = input.split("").forEach(e => {
            axisX += e == ">" ? 1 : e == "<" ? -1 : 0;
            axisY += e == "^" ? 1 : e == "v" ? -1 : 0;
            present.push(axisX.toString() + axisY.toString());
        });
        return Array.from(new Set(present)).length;
    }
}