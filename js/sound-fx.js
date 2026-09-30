/**
 * DERS NOTLARIM - WEB AUDIO OYUN SESLERİ & EFEKTLERİ
 * Harici mp3 dosyası gerektirmeden, sıfır gecikmeyle tarayıcıda ses sentezler.
 */
class SoundEffects {
    constructor() {
        this.ctx = null;
        this.soundEnabled = true;
    }

    initContext() {
        if (!this.ctx) {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            if (AudioContext) {
                this.ctx = new AudioContext();
            }
        }
        if (this.ctx && this.ctx.state === 'suspended') {
            this.ctx.resume();
        }
    }

    // Doğru Cevap (Tatlı Arcade Ding!)
    playCorrect() {
        if (!this.soundEnabled) return;
        try {
            this.initContext();
            if (!this.ctx) return;

            const now = this.ctx.currentTime;
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();

            osc.type = 'triangle';
            osc.frequency.setValueAtTime(523.25, now); // C5
            osc.frequency.exponentialRampToValueAtTime(783.99, now + 0.12); // G5

            gain.gain.setValueAtTime(0.3, now);
            gain.gain.exponentialRampToValueAtTime(0.01, now + 0.35);

            osc.connect(gain);
            gain.connect(this.ctx.destination);

            osc.start(now);
            osc.stop(now + 0.35);
        } catch (e) {
            console.log("Audio not allowed yet");
        }
    }

    // Yanlış Cevap (Komik Arcade Oops!)
    playWrong() {
        if (!this.soundEnabled) return;
        try {
            this.initContext();
            if (!this.ctx) return;

            const now = this.ctx.currentTime;
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();

            osc.type = 'sawtooth';
            osc.frequency.setValueAtTime(220, now); // A3
            osc.frequency.linearRampToValueAtTime(146.83, now + 0.25); // D3

            gain.gain.setValueAtTime(0.25, now);
            gain.gain.exponentialRampToValueAtTime(0.01, now + 0.3);

            osc.connect(gain);
            gain.connect(this.ctx.destination);

            osc.start(now);
            osc.stop(now + 0.3);
        } catch (e) {
            console.log("Audio not allowed yet");
        }
    }

    // Çarkıfelek & Sayaç Tık Sesi
    playTick() {
        if (!this.soundEnabled) return;
        try {
            this.initContext();
            if (!this.ctx) return;

            const now = this.ctx.currentTime;
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();

            osc.type = 'square';
            osc.frequency.setValueAtTime(800, now);

            gain.gain.setValueAtTime(0.1, now);
            gain.gain.exponentialRampToValueAtTime(0.01, now + 0.04);

            osc.connect(gain);
            gain.connect(this.ctx.destination);

            osc.start(now);
            osc.stop(now + 0.04);
        } catch (e) {}
    }

    // Büyük Zafer Melodisi (Süre bittiğinde / Test tamamlandığında)
    playVictory() {
        if (!this.soundEnabled) return;
        try {
            this.initContext();
            if (!this.ctx) return;

            const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
            notes.forEach((freq, idx) => {
                const now = this.ctx.currentTime + (idx * 0.1);
                const osc = this.ctx.createOscillator();
                const gain = this.ctx.createGain();

                osc.type = 'triangle';
                osc.frequency.setValueAtTime(freq, now);

                gain.gain.setValueAtTime(0.25, now);
                gain.gain.exponentialRampToValueAtTime(0.01, now + 0.28);

                osc.connect(gain);
                gain.connect(this.ctx.destination);

                osc.start(now);
                osc.stop(now + 0.28);
            });
        } catch (e) {}
    }

    // Bomba Patlama / Geri Sayım Bitiş Sesi
    playBuzzer() {
        if (!this.soundEnabled) return;
        try {
            this.initContext();
            if (!this.ctx) return;

            const now = this.ctx.currentTime;
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();

            osc.type = 'sawtooth';
            osc.frequency.setValueAtTime(110, now); // A2
            osc.frequency.exponentialRampToValueAtTime(55, now + 0.4);

            gain.gain.setValueAtTime(0.4, now);
            gain.gain.exponentialRampToValueAtTime(0.01, now + 0.45);

            osc.connect(gain);
            gain.connect(this.ctx.destination);

            osc.start(now);
            osc.stop(now + 0.45);
        } catch (e) {}
    }
}

window.soundFX = new SoundEffects();
