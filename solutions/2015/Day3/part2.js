module.exports = {
    solve: input => {
        let [axisX_S, axisY_S] = [0, 0];
        let [axisX_R, axisY_R] = [0, 0];
        let present = ["00"];
        input = input.split("").forEach((e, i) => {
            if (i % 2 == 0) {
                axisX_S += e == ">" ? 1 : e == "<" ? -1 : 0;
                axisY_S += e == "^" ? 1 : e == "v" ? -1 : 0;
                present.push(axisX_S.toString() + axisY_S.toString());
            }
            else{
                axisX_R += e == ">" ? 1 : e == "<" ? -1 : 0;
                axisY_R += e == "^" ? 1 : e == "v" ? -1 : 0;
                present.push(axisX_R.toString() + axisY_R.toString());
            } 
        });
        return Array.from(new Set(present)).length;
    }
}