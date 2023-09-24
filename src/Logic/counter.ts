export let seconds = 0;
export let total_game_seconds = 0;
let isInMenu = false;
export let time_text = "Your time 0"

// export let levelTimes = { 0: 1, 1: 3, 2: 5, 3: 10, 4: 9, 6: 7, 7: 9, 8: 0, 9: 4 }
export let levelTimes = {}

export function getLevelTimesString() {
    let ret_str = ""
    for (const [key, value] of Object.entries(levelTimes)) {
        console.log(key, value);
        ret_str = ret_str + "\n" + key + " : " + value + "\n"
    }
    return ret_str;
}

function incrementSeconds() {
    // var el = document.getElementById('seconds-counter');

    if (!isInMenu) {
        seconds += 1;
    }

    // el.innerText = "Your time " + seconds;
    time_text = "Your time " + seconds;

}

setInterval(incrementSeconds, 1000);


export function resetLevelSeconds() {
    total_game_seconds = total_game_seconds + seconds;
    seconds = 0;
    isInMenu = false;

}
export function stopTimer(level: number) {
    levelTimes[level] = seconds;
    isInMenu = true;
}