import { SoundSource } from "./Game/soundSource";


export class Sound {
    pool: Map<SoundSource, HTMLAudioElement> = new Map();
    ctx = new AudioContext();
    amountLoaded = 0;

    constructor() {
        Object.values(SoundSource).map((source) =>
            this.pool.set(source, this.newAudio(source))
        )
    }

    newAudio(source: String) {
        const audio = new Audio();
        this.ctx.createMediaElementSource(audio)
            .connect(this.ctx.destination);
        audio.src = "assets/sounds/" + source + ".mp3";
        audio.oncanplay = () => this.amountLoaded++
        return audio;
    }

    play(soundSource: SoundSource) {
        if (this.ctx.state === "suspended") {
            this.ctx.resume();
        }

        const audio = this.pool.get(soundSource)!
        audio.load();
        audio.play();
    }

    playSong() {
        const audio = this.pool.get(SoundSource.Song)!
        audio.load();
        audio.play();
    }
}