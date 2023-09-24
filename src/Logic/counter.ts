export let seconds = 0;
let isInMenu = false;
export let time_text = "Your time 0"

export let levelTimes = {}

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
    seconds = 0;
    isInMenu = false;

}
export function stopTimer(level: number) {
    levelTimes[level] = seconds;
    isInMenu = true;
}