const audioContext = new AudioContext();

const audio = new Audio();
audio.src = "assets/sounds/bounce.mp3";

audioContext.createMediaElementSource(audio)
    .connect(audioContext.destination);;

export function playBounceSound() {
    if (audioContext.state === "suspended") {
        audioContext.resume();
    }
    audio.load();
    audio.play();
}