
export let counter = document.createElement('div')
counter.style.color = "black"
counter.setAttribute("id", 'seconds-counter');

// container.appendChild(counter)

export let seconds = 0;
let isInMenu = false;

function incrementSeconds() {
    var el = document.getElementById('seconds-counter');

    if (!isInMenu) {
        seconds += 1;
    }

    el.innerText = "Your time " + seconds;
}

var cancel = setInterval(incrementSeconds, 1000);


export function resetLevelSeconds() {
    seconds = 0;
    isInMenu = false;

}
export function stopTimer() {
    isInMenu = true;
}