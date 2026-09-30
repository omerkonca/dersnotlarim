/**
 * İNTERAKTİF FEN LABORATUVARI VE SİMÜLASYONLAR
 * 7 ve 8. sınıf öğrencileri için canlı simülasyonlar, hafıza kartları ve sınıf çarkıfeleği
 */

class InteractiveLab {
    constructor() {
        this.currentSim = 'seasons';
        this.wheelNames = ["Ahmet", "Zeynep", "Mehmet", "Elif", "Can", "Ayşe", "Burak", "Selin"];
        this.isSpinning = false;
    }

    // 1. MEVSİMLER VE DÜNYA SİMÜLATÖRÜ
    updateSeasonsSim(dayOfYear) {
        // dayOfYear: 0 - 365
        const angle = (dayOfYear / 365) * 2 * Math.PI;
        const earthEl = document.getElementById('sim-earth');
        const sunRayEl = document.getElementById('sim-sun-ray');
        const dateTextEl = document.getElementById('sim-date-text');
        const seasonTextEl = document.getElementById('sim-season-text');
        const dayLengthEl = document.getElementById('sim-day-length');
        const tempIndicatorEl = document.getElementById('sim-temp-bar');

        if (!earthEl) return;

        // Yörünge koordinatları (rx: 160, ry: 70)
        const cx = 200 + Math.cos(angle) * 150;
        const cy = 110 + Math.sin(angle) * 65;

        earthEl.setAttribute('cx', cx);
        earthEl.setAttribute('cy', cy);

        // Güneş ışını çizgisi
        if (sunRayEl) {
            sunRayEl.setAttribute('x2', cx);
            sunRayEl.setAttribute('y2', cy);
        }

        // Tarih ve Mevsim Hesaplama
        let dateStr = "";
        let seasonStr = "";
        let dayLength = "";
        let tempPercent = 50;

        if (dayOfYear >= 350 || dayOfYear < 80) {
            dateStr = dayOfYear >= 350 ? "21 Aralık (Kış Gündönümü)" : "Ocak - Şubat";
            seasonStr = "❄️ Kuzey Yarım Küre: KIŞ | Güney Yarım Küre: YAZ";
            dayLength = "Gündüz: ~9 Saat | Gece: ~15 Saat (En Uzun Gece)";
            tempPercent = 20;
        } else if (dayOfYear >= 80 && dayOfYear < 170) {
            dateStr = dayOfYear >= 80 && dayOfYear <= 85 ? "21 Mart (Ekinoks)" : "Nisan - Mayıs";
            seasonStr = "🌸 Kuzey Yarım Küre: İLKBAHAR | Güney Yarım Küre: SONBAHAR";
            dayLength = "Gece = Gündüz Eşit (12 Saat)";
            tempPercent = 55;
        } else if (dayOfYear >= 170 && dayOfYear < 260) {
            dateStr = dayOfYear >= 170 && dayOfYear <= 175 ? "21 Haziran (Yaz Gündönümü)" : "Temmuz - Ağustos";
            seasonStr = "☀️ Kuzey Yarım Küre: YAZ | Güney Yarım Küre: KIŞ";
            dayLength = "Gündüz: ~15 Saat | Gece: ~9 Saat (En Uzun Gündüz)";
            tempPercent = 90;
        } else {
            dateStr = dayOfYear >= 260 && dayOfYear <= 270 ? "23 Eylül (Ekinoks)" : "Ekim - Kasım";
            seasonStr = "🍂 Kuzey Yarım Küre: SONBAHAR | Güney Yarım Küre: İLKBAHAR";
            dayLength = "Gece = Gündüz Eşit (12 Saat)";
            tempPercent = 50;
        }

        if (dateTextEl) dateTextEl.textContent = dateStr;
        if (seasonTextEl) seasonTextEl.textContent = seasonStr;
        if (dayLengthEl) dayLengthEl.textContent = dayLength;
        if (tempIndicatorEl) {
            tempIndicatorEl.style.width = `${tempPercent}%`;
            tempIndicatorEl.style.background = tempPercent > 60 ? '#f59e0b' : (tempPercent < 40 ? '#38bdf8' : '#10b981');
        }
    }

    // 2. RÜZGAR VE BASINÇ SİMÜLATÖRÜ
    updateWindSim(tempK, tempL) {
        const windDirectionEl = document.getElementById('wind-dir-text');
        const windSpeedEl = document.getElementById('wind-speed-text');
        const windArrowEl = document.getElementById('wind-arrow-svg');
        const fanEl = document.getElementById('wind-fan-icon');

        const diff = Math.abs(tempK - tempL);

        if (tempK === tempL) {
            windDirectionEl.textContent = "Sıcaklıklar Eşit &rarr; RÜZGAR OLUŞMAZ";
            windSpeedEl.textContent = "Rüzgar Hızı: 0 km/s (Durgun Hava)";
            if (fanEl) fanEl.style.animation = "none";
            return;
        }

        let from = tempK < tempL ? "K Bölgesi (Yüksek Basınç / Soğuk)" : "L Bölgesi (Yüksek Basınç / Soğuk)";
        let to = tempK < tempL ? "L Bölgesi (Alçak Basınç / Sıcak)" : "K Bölgesi (Alçak Basınç / Sıcak)";
        
        windDirectionEl.innerHTML = `<strong>Rüzgarın Yönü:</strong> ${from} &rarr; ${to}`;
        windSpeedEl.textContent = `Fark: ${diff}°C &rarr; Rüzgar Şiddeti: ${diff > 25 ? 'Kasırga / Fırtına' : (diff > 12 ? 'Kuvvetli Rüzgar' : 'Hafif Meltem')}`;

        if (fanEl) {
            const speed = Math.max(0.2, 2.5 - (diff / 15));
            fanEl.style.animation = `spinFan ${speed}s linear infinite`;
        }
    }

    // 3. SINIF ÇARKIFELEĞİ (LUCKY WHEEL)
    spinWheel() {
        if (this.isSpinning) return;
        this.isSpinning = true;

        const wheelCanvas = document.getElementById('lucky-wheel-canvas');
        const resultEl = document.getElementById('wheel-result-text');
        if (!wheelCanvas) return;

        const ctx = wheelCanvas.getContext('2d');
        const names = this.getStudentNames();
        const total = names.length;
        const arc = (2 * Math.PI) / total;

        let startAngle = 0;
        const spinRounds = 5 + Math.random() * 5;
        const spinAngle = spinRounds * 2 * Math.PI + Math.random() * 2 * Math.PI;

        const duration = 4000;
        const startTime = performance.now();

        const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const currentAngle = easeOut * spinAngle;

            this.drawWheel(ctx, names, currentAngle);

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                this.isSpinning = false;
                // Kazananı bul
                const normalizedAngle = (currentAngle % (2 * Math.PI));
                const winningIndex = Math.floor((2 * Math.PI - normalizedAngle) / arc) % total;
                const winner = names[winningIndex];
                if (resultEl) {
                    resultEl.innerHTML = `🎉 Tebrikler: <strong style="color:#f59e0b; font-size:1.3rem;">${winner}</strong>! Sıradaki soruyu sen çözüyorsun.`;
                }
            }
        };

        requestAnimationFrame(animate);
    }

    drawWheel(ctx, names, currentAngle = 0) {
        const total = names.length;
        const arc = (2 * Math.PI) / total;
        const colors = ["#38bdf8", "#f59e0b", "#10b981", "#ec4899", "#8b5cf6", "#ef4444", "#06b6d4", "#f97316"];

        ctx.clearRect(0, 0, 300, 300);
        ctx.save();
        ctx.translate(150, 150);
        ctx.rotate(currentAngle);

        for (let i = 0; i < total; i++) {
            ctx.beginPath();
            ctx.fillStyle = colors[i % colors.length];
            ctx.moveTo(0, 0);
            ctx.arc(0, 0, 140, i * arc, (i + 1) * arc);
            ctx.lineTo(0, 0);
            ctx.fill();
            ctx.stroke();

            // İsim Yaz
            ctx.save();
            ctx.fillStyle = "#ffffff";
            ctx.font = "bold 13px system-ui";
            ctx.rotate(i * arc + arc / 2);
            ctx.textAlign = "right";
            ctx.fillText(names[i], 125, 5);
            ctx.restore();
        }

        ctx.restore();

        // Merkez Göbek
        ctx.beginPath();
        ctx.arc(150, 150, 24, 0, 2 * Math.PI);
        ctx.fillStyle = "#0f172a";
        ctx.fill();
        ctx.lineWidth = 3;
        ctx.strokeStyle = "#ffffff";
        ctx.stroke();

        // Gösterge İğnesi (Sağ taraf)
        ctx.beginPath();
        ctx.moveTo(290, 150);
        ctx.lineTo(260, 140);
        ctx.lineTo(260, 160);
        ctx.closePath();
        ctx.fillStyle = "#ef4444";
        ctx.fill();
    }

    getStudentNames() {
        const textarea = document.getElementById('wheel-student-names');
        if (textarea && textarea.value.trim()) {
            return textarea.value.split('\n').map(s => s.trim()).filter(Boolean);
        }
        return this.wheelNames;
    }
}

window.interactiveLab = new InteractiveLab();
