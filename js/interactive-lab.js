/**
 * İNTERAKTİF FEN LABORATUVARI VE SİMÜLASYONLAR
 * 7 ve 8. sınıf öğrencileri için canlı simülasyonlar, hafıza kartları, DNA oyunu, basınç labı, sınıf çarkıfeleği ve 60sn Hızlı Ateş
 */

class InteractiveLab {
    constructor() {
        this.currentSim = 'seasons';
        this.wheelNames = ["Ahmet", "Zeynep", "Mehmet", "Elif", "Can", "Ayşe", "Burak", "Selin"];
        this.isSpinning = false;

        // DNA Oyunu Durumu
        this.dnaTemplate = ['A', 'T', 'G', 'C', 'T', 'C', 'A', 'G'];
        this.dnaPairs = { 'A': 'T', 'T': 'A', 'G': 'C', 'C': 'G' };
        this.dnaUser = [];
        this.dnaStep = 0;

        // 60 Saniye Hızlı Ateş Durumu
        this.speedRunTimer = null;
        this.speedRunSeconds = 60;
        this.speedRunScore = 0;
        this.speedRunCombo = 1;
        this.speedRunIndex = 0;
        this.speedRunQuestions = [
            { q: "Dünya Güneş'e en yakın olduğunda (Ocak ayı) Kuzey Yarım Küre kış mevsimini yaşar.", a: true, tip: "Mevsimleri mesafe değil, eksen eğikliği ve açı belirler." },
            { q: "Rüzgar daima Alçak Basınçtan (Sıcak) Yüksek Basınca (Soğuk) doğru eser.", a: false, tip: "Rüzgar her zaman YÜKSEK BASINÇTAN &rarr; ALÇAK BASINCA (Soğuktan &rarr; Sıcağa) eser!" },
            { q: "Bir DNA molekülünde toplam Fosfat sayısı daima toplam Şeker sayısına eşittir.", a: true, tip: "Toplam Fosfat = Toplam Şeker = Toplam Nükleotid!" },
            { q: "Güneş ışınları dik (90°) açıyla geldiğinde gölge boyu en uzun olur.", a: false, tip: "Işınlar dik gelirse gölge EN KISA, eğik gelirse EN UZUN olur." },
            { q: "Katı bir cismin yüzey alanı küçüldükçe zemine uyguladığı basınç artar.", a: true, tip: "P = G / S (Yüzey küçülürse basınç artar: bıçağın bilenmesi)." },
            { q: "Sıvı basıncı kabın şekline ve içindeki toplam sıvı miktarına bağlıdır.", a: false, tip: "Sıvı basıncı SADECE derinlik (h) ve yoğunluğa (d) bağlıdır!" },
            { q: "Makaralar ve kaldıraçlar gibi hiçbir basit makinede İŞ'TEN KAZANÇ OLMAZ.", a: true, tip: "Altın Kural: Basit makineler asla iş ve enerjiden kazanç sağlamaz!" },
            { q: "Spor yapan bir kişinin kaslarının gelişmesi bir Mutasyon örneğidir.", a: false, tip: "Kas gelişmesi genin işleyişiyle ilgilidir, MODİFİKASYONDUR!" },
            { q: "Kutup ayısının beyaz kürk rengine sahip olması kalıtsal bir Adaptasyondur.", a: true, tip: "Canlının yaşama şansını artıran kalıtsal uyumdur." },
            { q: "Demirin nemli havada paslanması fiziksel bir değişimdir.", a: false, tip: "Paslanma kimyasal bir yanma tepkimesidir." },
            { q: "Işık Yılı bir zaman ölçüsü birimidir.", a: false, tip: "Işık yılı MESAFE / UZAKLIK birimidir!" },
            { q: "Bitki hücrelerinde hücre duvarı (çeperi) ve kloroplast bulunur.", a: true, tip: "Hayvan hücresinde çeper ve kloroplast yoktur." },
            { q: "Mayoz bölünmede gerçekleşen parça değişimi (crossing-over) genetik çeşitliliği sağlar.", a: true, tip: "Kardeşlerin birbirinden farklı olmasının ana sebebidir." },
            { q: "Tümsek aynalar daima ters ve devasa görüntü verir.", a: false, tip: "Tümsek ayna daima DÜZ ve KÜÇÜK görüntü vererek geniş alan gösterir." },
            { q: "Evlerimizdeki elektrik tesisatında ampuller seri bağlıdır.", a: false, tip: "Biri kapanınca diğerleri sönsün istemeyiz, PARALEL bağlıdır!" }
        ];

        // 7. Sınıf Mitoz Bölünme Evre Sıralama Durumu
        this.mitosisStages = [
            { id: 'interfaz', step: 1, name: 'Hazırlık (İnterfaz)', icon: '🧬', desc: 'DNA kendini kopyalar (2 katına çıkar), sentrozomlar eşlenir, hücre büyür.' },
            { id: 'profaz', step: 2, name: '1. Profaz', icon: '🔬', desc: 'Çekirdek zarı erir, kromatin iplikler kısalıp kalınlaşarak kromozom olur.' },
            { id: 'metafaz', step: 3, name: '2. Metafaz', icon: '⚖️', desc: 'Kromozomlar ekvatoral düzlemde (hücre ortasında) tek sıra halinde dizilir.' },
            { id: 'anafaz', step: 4, name: '3. Anafaz', icon: '↔️', desc: 'Kardeş kromatitler zıt kutuplara çekilir (Ayrılma evresi).' },
            { id: 'telofaz', step: 5, name: '4. Telofaz & Bölünme', icon: '✂️', desc: 'Çekirdek zarı tekrar oluşur, sitoplazma boğumlanır ve 2 yeni hücre oluşur!' }
        ];
        this.mitosisUserOrder = [];
    }

    // 1. MEVSİMLER VE DÜNYA SİMÜLATÖRÜ
    updateSeasonsSim(dayOfYear) {
        const angle = (dayOfYear / 365) * 2 * Math.PI;
        const earthEl = document.getElementById('sim-earth');
        const sunRayEl = document.getElementById('sim-sun-ray');
        const dateTextEl = document.getElementById('sim-date-text');
        const seasonTextEl = document.getElementById('sim-season-text');
        const dayLengthEl = document.getElementById('sim-day-length');
        const tempIndicatorEl = document.getElementById('sim-temp-bar');

        if (!earthEl) return;

        const cx = 200 + Math.cos(angle) * 150;
        const cy = 110 + Math.sin(angle) * 65;

        earthEl.setAttribute('cx', cx);
        earthEl.setAttribute('cy', cy);

        if (sunRayEl) {
            sunRayEl.setAttribute('x2', cx);
            sunRayEl.setAttribute('y2', cy);
        }

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

    // 3. KATI BASINCI LABORATUVARI (Tuğla & Sünger Deneyi)
    updateSolidPressure() {
        const brickCount = parseInt(document.getElementById('solid-brick-count')?.value || 1);
        const orientation = document.querySelector('input[name="brick-orient"]:checked')?.value || 'wide';
        
        const weight = brickCount * 30; // Her tuğla 30 N
        const area = orientation === 'wide' ? 150 : 50; // Geniş: 150 cm², Dar: 50 cm²
        const pressure = Math.round((weight / (area / 10000))); // Pascal (N/m²)

        // Süngere batma miktarı (px)
        const sinkPixels = Math.min(65, Math.round((pressure / 2000) * 14));

        const brickSvg = document.getElementById('solid-brick-svg');
        const spongeSvg = document.getElementById('solid-sponge-svg');
        const valWeight = document.getElementById('solid-val-weight');
        const valArea = document.getElementById('solid-val-area');
        const valPressure = document.getElementById('solid-val-pressure');
        const valSink = document.getElementById('solid-val-sink');

        if (valWeight) valWeight.textContent = `${weight} N`;
        if (valArea) valArea.textContent = `${area} cm²`;
        if (valPressure) valPressure.textContent = `${pressure} Pascal (Pa)`;
        if (valSink) valSink.textContent = `${(sinkPixels / 10).toFixed(1)} cm`;

        // Görsel güncelleme
        if (brickSvg && spongeSvg) {
            const brickWidth = orientation === 'wide' ? 140 : 50;
            const brickHeight = orientation === 'wide' ? 40 : 110;
            const startY = 130 - (brickHeight * brickCount) + sinkPixels;

            brickSvg.setAttribute('width', brickWidth);
            brickSvg.setAttribute('height', brickHeight * brickCount);
            brickSvg.setAttribute('x', 150 - (brickWidth / 2));
            brickSvg.setAttribute('y', startY);

            // Sünger çökmesi
            spongeSvg.setAttribute('d', `M20,130 Q150,${130 + sinkPixels} 280,130 L280,180 L20,180 Z`);
        }
    }

    // 4. SIVI BASINCI LABORATUVARI (Derinlik & Sıvı Yoğunluğu & Manometre)
    updateLiquidPressure() {
        const depth = parseInt(document.getElementById('liquid-depth-slider')?.value || 30);
        const liquidSelect = document.getElementById('liquid-type-select');
        const density = parseFloat(liquidSelect ? liquidSelect.value : 1.0);
        const liquidName = liquidSelect ? liquidSelect.options[liquidSelect.selectedIndex].text : "Saf Su";

        const pressure = Math.round(depth * density * 100); // P = h . d . g (g ~ 10)
        const manometerHeight = Math.min(100, Math.round(pressure / 80));

        const valDepth = document.getElementById('liquid-val-depth');
        const valDensity = document.getElementById('liquid-val-density');
        const valPressure = document.getElementById('liquid-val-pressure');
        const probeEl = document.getElementById('liquid-probe-svg');
        const liquidLevelEl = document.getElementById('manometer-level-svg');

        if (valDepth) valDepth.textContent = `${depth} cm`;
        if (valDensity) valDensity.textContent = `${density} g/cm³ (${liquidName.split(' ')[0]})`;
        if (valPressure) valPressure.textContent = `${pressure} Pascal (Pa)`;

        if (probeEl) {
            const probeY = 50 + (depth * 1.1);
            probeEl.setAttribute('transform', `translate(90, ${probeY})`);
        }

        if (liquidLevelEl) {
            liquidLevelEl.setAttribute('height', 30 + manometerHeight);
            liquidLevelEl.setAttribute('y', 130 - manometerHeight);
        }
    }

    // 5. DNA EŞLEME MİNİ OYUNU
    initDNAGame() {
        this.dnaUser = [];
        this.dnaStep = 0;
        this.renderDNABoard();
    }

    renderDNABoard() {
        const board = document.getElementById('dna-board-container');
        const infoEl = document.getElementById('dna-game-info');
        if (!board) return;

        const baseMeta = {
            'A': { name: 'Adenin', icon: '🔴', tag: 'A' },
            'T': { name: 'Timin', icon: '🔵', tag: 'T' },
            'G': { name: 'Guanin', icon: '🟢', tag: 'G' },
            'C': { name: 'Sitozin', icon: '🟡', tag: 'C' }
        };

        let html = '<div class="dna-strands-grid">';
        
        // 1. Zincir (Kalıp Zincir)
        html += '<div class="dna-strand left-strand">';
        html += '<div class="strand-title">1. İplik (Kalıp İplik)</div>';
        this.dnaTemplate.forEach((base) => {
            const meta = baseMeta[base];
            html += `
                <div class="dna-base-card base-${base}">
                    <span class="base-badge">${meta.tag}</span>
                    <span class="base-name">${meta.name}</span>
                </div>
            `;
        });
        html += '</div>';

        // Hidrojen Bağları
        html += '<div class="dna-bonds-col">';
        html += '<div class="strand-title">Zayıf H-Bağı</div>';
        this.dnaTemplate.forEach((base, idx) => {
            const isMatched = idx < this.dnaUser.length;
            const bondType = (base === 'A' || base === 'T') ? '═ 2\'li Bağ' : '≡ 3\'lü Bağ';
            html += `
                <div class="dna-bond-line ${isMatched ? 'active' : ''}">
                    ${isMatched ? `<span class="bond-tag">${bondType}</span>` : '<span style="opacity:0.3;">┄ ┄ ┄</span>'}
                </div>
            `;
        });
        html += '</div>';

        // 2. Zincir (Öğrencinin Eşlediği Yeni İplik)
        html += '<div class="dna-strand right-strand">';
        html += '<div class="strand-title">2. İplik (Yeni İplik)</div>';
        this.dnaTemplate.forEach((base, idx) => {
            const matched = this.dnaUser[idx];
            if (matched) {
                const meta = baseMeta[matched];
                html += `
                    <div class="dna-base-card base-${matched} locked">
                        <span class="base-badge">${meta.tag}</span>
                        <span class="base-name">${meta.name}</span>
                    </div>
                `;
            } else if (idx === this.dnaStep) {
                html += `
                    <div class="dna-base-card empty active-slot">
                        <span style="font-weight:800; font-size:1rem;">👉 Burayı Seçin (?)</span>
                    </div>
                `;
            } else {
                html += `
                    <div class="dna-base-card empty">
                        <span style="opacity:0.4;">Bekliyor...</span>
                    </div>
                `;
            }
        });
        html += '</div>';

        html += '</div>';
        board.innerHTML = html;

        if (infoEl) {
            if (this.dnaStep >= this.dnaTemplate.length) {
                infoEl.innerHTML = `
                    <div style="background: rgba(16, 185, 129, 0.2); border: 2px solid #10b981; padding: 1.25rem; border-radius: 14px; text-align:center;">
                        <div style="color:#10b981; font-weight:900; font-size:1.4rem;">🎉 TEBRİKLER! DNA KENDİNİ KUSURSUZ EŞLEDİ!</div>
                        <div style="color:#f8fafc; font-size:1.05rem; margin-top:0.4rem;">
                            Kalıp iplikler karşısına doğru nükleotidler dizildi. 2 adet genetik olarak tıpatıp aynı yeni DNA oluştu!
                        </div>
                    </div>
                `;
            } else {
                const target = this.dnaTemplate[this.dnaStep];
                const meta = baseMeta[target];
                const targetColor = target === 'A' ? '#ef4444' : (target === 'T' ? '#38bdf8' : (target === 'G' ? '#10b981' : '#f59e0b'));
                infoEl.innerHTML = `
                    <div style="background:rgba(255,255,255,0.05); border:1px solid var(--border-color); padding:0.9rem 1.25rem; border-radius:12px; display:inline-block;">
                        Sıradaki Nükleotit: <strong style="color:${targetColor}; font-size:1.35rem; font-weight:900;">${meta.icon} ${meta.name} (${target})</strong>.
                        Karşısına hangi nükleotit gelmelidir?
                    </div>
                `;
            }
        }
    }

    pickDNABase(base) {
        if (this.dnaStep >= this.dnaTemplate.length) return;

        const needed = this.dnaPairs[this.dnaTemplate[this.dnaStep]];
        if (base === needed) {
            if (window.soundFX) window.soundFX.playCorrect();
            this.dnaUser.push(base);
            this.dnaStep++;
            this.renderDNABoard();

            if (this.dnaStep >= this.dnaTemplate.length) {
                if (window.soundFX) window.soundFX.playVictory();
            }
        } else {
            if (window.soundFX) window.soundFX.playWrong();
            const alertBox = document.getElementById('dna-error-alert');
            if (alertBox) {
                alertBox.textContent = `❌ Yanlış Eşleşme! ${this.dnaTemplate[this.dnaStep]} karşısına ${needed} gelmelidir! (A-T ve G-C kuralı)`;
                alertBox.style.display = 'block';
                setTimeout(() => { alertBox.style.display = 'none'; }, 2500);
            }
        }
    }

    // 6. 60 SANİYE HIZLI ATEŞ (SPEED RUN)
    startSpeedRun() {
        this.speedRunSeconds = 60;
        this.speedRunScore = 0;
        this.speedRunCombo = 1;
        this.speedRunIndex = 0;

        const modal = document.getElementById('speedrun-modal');
        if (modal) modal.style.display = 'flex';

        const buttonsEl = document.getElementById('sr-buttons-wrap');
        if (buttonsEl) {
            buttonsEl.innerHTML = `
                <button class="btn-sr-choice btn-sr-true" onclick="interactiveLab.answerSpeedRun(true)">
                    <span style="font-size:1.4rem;">✅</span> DOĞRU
                </button>
                <button class="btn-sr-choice btn-sr-false" onclick="interactiveLab.answerSpeedRun(false)">
                    <span style="font-size:1.4rem;">❌</span> YANLIŞ
                </button>
            `;
        }

        const timerEl = document.getElementById('sr-timer-text');
        if (timerEl) {
            timerEl.textContent = `${this.speedRunSeconds}s`;
            timerEl.style.color = '#f59e0b';
        }

        this.renderSpeedRunQuestion();

        if (this.speedRunTimer) clearInterval(this.speedRunTimer);
        this.speedRunTimer = setInterval(() => {
            this.speedRunSeconds--;
            const timerEl = document.getElementById('sr-timer-text');
            if (timerEl) {
                timerEl.textContent = `${this.speedRunSeconds}s`;
                if (this.speedRunSeconds <= 5) {
                    timerEl.style.color = '#ef4444';
                    if (window.soundFX) window.soundFX.playTick();
                }
            }

            if (this.speedRunSeconds <= 0) {
                this.endSpeedRun();
            }
        }, 1000);
    }

    renderSpeedRunQuestion() {
        const qObj = this.speedRunQuestions[this.speedRunIndex % this.speedRunQuestions.length];
        const titleEl = document.getElementById('sr-question-title');
        const scoreEl = document.getElementById('sr-score-text');
        const comboEl = document.getElementById('sr-combo-text');
        const feedbackEl = document.getElementById('sr-feedback-text');

        if (titleEl) titleEl.textContent = qObj.q;
        if (scoreEl) scoreEl.textContent = `Skor: ${this.speedRunScore}`;
        if (comboEl) comboEl.textContent = `Combo: x${this.speedRunCombo}`;
        if (feedbackEl) feedbackEl.textContent = '';
    }

    answerSpeedRun(userChoice) {
        if (this.speedRunSeconds <= 0) return;

        const qObj = this.speedRunQuestions[this.speedRunIndex % this.speedRunQuestions.length];
        const feedbackEl = document.getElementById('sr-feedback-text');

        if (userChoice === qObj.a) {
            if (window.soundFX) window.soundFX.playCorrect();
            const earned = 10 * this.speedRunCombo;
            this.speedRunScore += earned;
            this.speedRunCombo = Math.min(5, this.speedRunCombo + 1);
            if (feedbackEl) feedbackEl.innerHTML = `<span style="color:#10b981;">✓ Doğru! +${earned} Puan</span>`;
        } else {
            if (window.soundFX) window.soundFX.playWrong();
            this.speedRunCombo = 1;
            if (feedbackEl) feedbackEl.innerHTML = `<span style="color:#ef4444;">✗ Yanlış! (${qObj.tip})</span>`;
        }

        this.speedRunIndex++;
        setTimeout(() => {
            if (this.speedRunSeconds > 0) this.renderSpeedRunQuestion();
        }, 500);
    }

    endSpeedRun() {
        if (this.speedRunTimer) clearInterval(this.speedRunTimer);
        if (window.soundFX) window.soundFX.playVictory();

        const titleEl = document.getElementById('sr-question-title');
        const feedbackEl = document.getElementById('sr-feedback-text');
        const buttonsEl = document.getElementById('sr-buttons-wrap');

        let titleRank = "Fen Çırağı";
        if (this.speedRunScore >= 180) titleRank = "🏆 LGS Fen Şampiyonu";
        else if (this.speedRunScore >= 120) titleRank = "🌟 Fen Bilgini";
        else if (this.speedRunScore >= 60) titleRank = "⚡ Genetik Dedektifi";

        if (titleEl) {
            titleEl.innerHTML = `
                <div style="font-size: 2.2rem; margin-bottom: 0.5rem;">🎉</div>
                <h3>Süre Bitti!</h3>
                <p style="font-size:1.3rem; color:#f59e0b; font-weight:800; margin:0.5rem 0;">Toplam Skor: ${this.speedRunScore}</p>
                <div style="background:rgba(56,189,248,0.2); padding:0.5rem 1rem; border-radius:9999px; display:inline-block; color:#38bdf8; font-weight:bold;">
                    Unvanınız: ${titleRank}
                </div>
            `;
        }

        if (feedbackEl) feedbackEl.innerHTML = '';
        if (buttonsEl) {
            buttonsEl.innerHTML = `
                <button class="btn-primary" style="padding:0.75rem 2rem; border-radius:9999px;" onclick="interactiveLab.startSpeedRun()">
                    🔄 Yeniden Oyna
                </button>
            `;
        }
    }

    closeSpeedRun() {
        if (this.speedRunTimer) clearInterval(this.speedRunTimer);
        const modal = document.getElementById('speedrun-modal');
        if (modal) modal.style.display = 'none';
    }

    // 7. SINIF ÇARKIFELEĞİ
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

        const spinRounds = 5 + Math.random() * 5;
        const spinAngle = spinRounds * 2 * Math.PI + Math.random() * 2 * Math.PI;

        const duration = 4000;
        const startTime = performance.now();

        const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const currentAngle = easeOut * spinAngle;

            this.drawWheel(ctx, names, currentAngle);

            if (progress < 1) {
                if (Math.random() < 0.25 && window.soundFX) window.soundFX.playTick();
                requestAnimationFrame(animate);
            } else {
                this.isSpinning = false;
                const normalizedAngle = (currentAngle % (2 * Math.PI));
                const winningIndex = Math.floor((2 * Math.PI - normalizedAngle) / arc) % total;
                const winner = names[winningIndex];
                if (window.soundFX) window.soundFX.playVictory();
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

        // Gösterge İğnesi
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

    // 8. 7. SINIF MİTOZ EVRE SIRALAMA OYUNU
    initMitosisGame() {
        this.mitosisUserOrder = [];
        this.renderMitosisBoard();
    }

    renderMitosisBoard() {
        const poolEl = document.getElementById('mitosis-pool-container');
        const slotsEl = document.getElementById('mitosis-slots-container');
        const feedbackEl = document.getElementById('mitosis-feedback');
        const animCellEl = document.getElementById('mitosis-anim-cell');

        if (!poolEl || !slotsEl) return;

        // Havuzdaki (henüz seçilmemiş) kartlar
        const unselected = this.mitosisStages.filter(st => !this.mitosisUserOrder.includes(st.id));
        
        let poolHtml = '';
        unselected.forEach(st => {
            poolHtml += `
                <div class="mitosis-card" onclick="interactiveLab.pickMitosisStage('${st.id}')">
                    <div class="mitosis-icon">${st.icon}</div>
                    <strong>${st.name}</strong>
                    <p>${st.desc}</p>
                    <span class="mitosis-tap-hint">+ Sıraya Ekle</span>
                </div>
            `;
        });
        if (unselected.length === 0) {
            poolHtml = '<div style="color:var(--text-muted); font-size:0.9rem; padding:0.5rem;">Tüm evreler sıraya dizildi! Kontrol edebilirsiniz.</div>';
        }
        poolEl.innerHTML = poolHtml;

        // 5 Slot
        let slotsHtml = '';
        for (let i = 0; i < 5; i++) {
            const placedId = this.mitosisUserOrder[i];
            if (placedId) {
                const item = this.mitosisStages.find(s => s.id === placedId);
                slotsHtml += `
                    <div class="mitosis-slot filled" onclick="interactiveLab.removeMitosisStage(${i})">
                        <span class="slot-number">${i + 1}. Adım</span>
                        <div class="slot-content">
                            <span class="slot-icon">${item.icon}</span>
                            <strong>${item.name}</strong>
                        </div>
                        <span class="slot-remove-btn" title="Kaldır">✕</span>
                    </div>
                `;
            } else {
                slotsHtml += `
                    <div class="mitosis-slot empty">
                        <span class="slot-number">${i + 1}. Adım</span>
                        <div class="slot-placeholder">Evre Kartı Seçin</div>
                    </div>
                `;
            }
        }
        slotsEl.innerHTML = slotsHtml;

        if (this.mitosisUserOrder.length === 5) {
            this.checkMitosisResult();
        } else {
            if (feedbackEl) feedbackEl.innerHTML = `Henüz ${this.mitosisUserOrder.length}/5 evre yerleştirildi. Doğru sırayı tamamlayın.`;
            if (animCellEl) animCellEl.classList.remove('divided');
        }
    }

    pickMitosisStage(stageId) {
        if (this.mitosisUserOrder.length >= 5) return;
        this.mitosisUserOrder.push(stageId);
        if (window.soundFX) window.soundFX.playTick();
        this.renderMitosisBoard();
    }

    removeMitosisStage(index) {
        this.mitosisUserOrder.splice(index, 1);
        if (window.soundFX) window.soundFX.playTick();
        this.renderMitosisBoard();
    }

    checkMitosisResult() {
        const feedbackEl = document.getElementById('mitosis-feedback');
        const animCellEl = document.getElementById('mitosis-anim-cell');
        const correctIds = ['interfaz', 'profaz', 'metafaz', 'anafaz', 'telofaz'];
        const isCorrect = this.mitosisUserOrder.every((id, idx) => id === correctIds[idx]);

        if (isCorrect) {
            if (window.soundFX) window.soundFX.playVictory();
            if (feedbackEl) {
                feedbackEl.innerHTML = `
                    <div style="color:#10b981; font-weight:800; font-size:1.15rem; margin-bottom:0.4rem;">
                        🎉 MÜKEMMEL! Hücre evreleri kusursuz sıralandı!
                    </div>
                    <div style="color:var(--text-muted); font-size:0.88rem;">
                        Hücre sitokinezle ikiye boğumlandı: 2n kromozomlu 2 adet genetik ikiz yeni hücre meydana geldi!
                    </div>
                `;
            }
            if (animCellEl) animCellEl.classList.add('divided');
        } else {
            if (window.soundFX) window.soundFX.playWrong();
            if (feedbackEl) {
                feedbackEl.innerHTML = `
                    <div style="color:#ef4444; font-weight:800; font-size:1.05rem;">
                        ❌ Sıralama Hatalı! İpucu:
                    </div>
                    <div style="color:var(--text-muted); font-size:0.85rem; margin-top:0.2rem;">
                        Hazırlık &rarr; <strong>P</strong>rofaz &rarr; <strong>M</strong>etafaz (Merkez) &rarr; <strong>A</strong>nafaz (Ayrılma) &rarr; <strong>T</strong>elofaz (PMAT Formülü).
                    </div>
                `;
            }
        }
    }

    // Gölge boyu simülatörü (ışın açısı)
    updateShadowSim(angleDeg) {
        const angle = Math.max(10, Math.min(90, parseInt(angleDeg, 10) || 60));
        const rad = (angle * Math.PI) / 180;
        const personH = 60;
        const shadowLen = angle >= 89 ? 2 : Math.round((personH / Math.tan(rad)) * 10) / 10;

        const ray = document.getElementById('shadow-ray');
        const cast = document.getElementById('shadow-cast');
        const angleText = document.getElementById('shadow-angle-text');
        const lengthText = document.getElementById('shadow-length-text');
        const tipText = document.getElementById('shadow-tip-text');

        if (angleText) angleText.textContent = `${angle}°`;
        if (lengthText) lengthText.textContent = `~${shadowLen} birim`;
        if (tipText) {
            tipText.textContent = angle >= 70
                ? 'Yaza yakın: kısa gölge'
                : (angle <= 30 ? 'Kışa yakın: uzun gölge' : 'İlkbahar / sonbahar');
        }

        const headX = 120, headY = 78, groundY = 150;
        const rayLen = 120;
        const x1 = headX - Math.cos(rad) * rayLen;
        const y1 = headY - Math.sin(rad) * rayLen;
        if (ray) {
            ray.setAttribute('x1', x1);
            ray.setAttribute('y1', y1);
            ray.setAttribute('x2', headX);
            ray.setAttribute('y2', groundY - 12);
        }

        const shadowPx = Math.min(140, Math.max(8, shadowLen * 2.2));
        if (cast) {
            cast.setAttribute('x1', '128');
            cast.setAttribute('y1', '150');
            cast.setAttribute('x2', String(128 + shadowPx));
            cast.setAttribute('y2', '150');
        }
    }

    // 9. QR KOD PAYLAŞIM MODALI (GERÇEK TARANABİLİR DİNAMİK QR)
    toggleQRModal(targetUrl) {
        const modal = document.getElementById('qr-modal');
        if (!modal) return;
        const isHidden = modal.style.display === 'none' || modal.style.display === '';
        modal.style.display = isHidden ? 'flex' : 'none';
        
        if (isHidden) {
            if (window.soundFX) window.soundFX.playCorrect();
            const urlToUse = targetUrl || (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' 
                ? 'https://dersnotlarim.vercel.app' 
                : window.location.href);
            this.generateQRCode(urlToUse);
        }
    }

    switchQRUrl(url) {
        this.generateQRCode(url);
        document.querySelectorAll('.btn-qr-choice').forEach(b => {
            const isMatch = b.getAttribute('data-url') === url;
            b.classList.toggle('active', isMatch);
        });
    }

    generateQRCode(url) {
        this.currentQRUrl = url;
        const container = document.getElementById('qr-code-target');
        const urlDisplay = document.getElementById('qr-url-text');
        if (urlDisplay) urlDisplay.textContent = url;

        if (!container) return;
        container.innerHTML = '';

        try {
            if (typeof QRCode !== 'undefined') {
                new QRCode(container, {
                    text: url,
                    width: 200,
                    height: 200,
                    colorDark: "#0f172a",
                    colorLight: "#ffffff",
                    correctLevel: QRCode.CorrectLevel.H
                });
            } else {
                container.innerHTML = `<img src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(url)}" alt="QR Kod" style="width:200px; height:200px; border-radius:8px; display:block;">`;
            }
        } catch (e) {
            container.innerHTML = `<img src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(url)}" alt="QR Kod" style="width:200px; height:200px; border-radius:8px; display:block;">`;
        }
    }

    copyQRUrl() {
        const url = this.currentQRUrl || 'https://dersnotlarim.vercel.app';
        if (navigator.clipboard) {
            navigator.clipboard.writeText(url).then(() => {
                const btn = document.getElementById('btn-copy-qr-url');
                if (btn) {
                    const orig = btn.innerHTML;
                    btn.innerHTML = '✅ Kopyalandı!';
                    btn.style.background = 'rgba(16, 185, 129, 0.3)';
                    btn.style.color = '#10b981';
                    setTimeout(() => {
                        btn.innerHTML = orig;
                        btn.style.background = '';
                        btn.style.color = '';
                    }, 2000);
                }
            }).catch(() => {
                prompt('Bağlantı adresi (Kopyalayabilirsiniz):', url);
            });
        } else {
            prompt('Bağlantı adresi (Kopyalayabilirsiniz):', url);
        }
    }
}

window.interactiveLab = new InteractiveLab();
