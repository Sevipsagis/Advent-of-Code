module.exports = {
    solve: input => {
        let sum = 0;
        let result = [];
        input.split('').forEach((e, i) => {
            sum += e == "(" ? 1 : -1;
            if(sum == -1){
                result.push(i + 1);
            }
        });
        return result[0];
    }
}