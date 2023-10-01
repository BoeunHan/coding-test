//카펫
function solution(brown, yellow) {
    let x;
    let y = 3;
    let find = false;
    while (true) {
        for (x = y; ; x++) {
            if (brown === 2 * (x + y - 2) && yellow === (x - 2) * (y - 2)) {
                find = true;
                break;
            } else if (brown < 2 * (x + y - 2) || yellow === (x - 2) * (y - 2))
                break;
        }
        if (find === true) break;
        y++;
    }
    return [x, y];
}
