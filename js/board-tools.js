/**
 * AKILLI TAHTA & DERS ANLATIM ARAÇLARI (SMART BOARD SUITE)
 * Öğretmenin ders esnasında ekrana çizim yapmasını, lazer işaretçi kullanmasını,
 * süre tutmasını (kronometre) ve tam ekran sunum yapmasını sağlar.
 */

class SmartBoard {
    constructor() {
        this.isDrawing = false;
        this.currentTool = 'none'; // 'none', 'pen', 'highlighter', 'laser'
        this.penColor = '#f59e0b';
        this.penSize = 3;
        this.canvas = null;
        this.ctx = null;
        this.laserPointer = null;
        this.timerInterval = null;
        this.timerSeconds = 0;
        
        this.init();
    }

    init() {
        this.createBoardElements();
        this.setupCanvas();
        this.setupEvents();
    }

    createBoardElements() {
        // Çizim Canvası
        const canvas = document.createElement('canvas');
        canvas.id = 'smart-board-canvas';
        canvas.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            pointer-events: none;
            z-index: 9998;
            touch-action: none;
        `;
        document.body.appendChild(canvas);
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');

        // Lazer İşaretçi Elemanı
        const laser = document.createElement('div');
        laser.id = 'smart-laser-pointer';
        laser.style.cssText = `
            position: fixed;
            width: 18px;
            height: 18px;
            background: radial-gradient(circle, #ff0055 20%, rgba(255, 0, 85, 0.4) 70%, transparent 100%);
            border-radius: 50%;
            pointer-events: none;
            z-index: 99999;
            box-shadow: 0 0 12px #ff0055, 0 0 25px #ff0055;
            display: none;
            transform: translate(-50%, -50%);
            transition: width 0.1s, height 0.1s;
        `;
        document.body.appendChild(laser);
        this.laserPointer = laser;

        // Akıllı Tahta Araç Çubuğu (Floating Bar)
        const toolbar = document.createElement('div');
        toolbar.id = 'smart-toolbar';
        toolbar.innerHTML = `
            <div class="toolbar-drag-handle" title="Taşı">⋮⋮</div>
            <button class="tool-btn active" data-tool="none" title="Normal İmleç (Seçim)">
                <i class="bi bi-cursor-fill"></i>
            </button>
            <button class="tool-btn" data-tool="pen" title="Tahta Kalemi">
                <i class="bi bi-pencil-fill"></i>
            </button>
            <div class="color-picker-group" id="pen-colors" style="display: none;">
                <span class="color-dot active" data-color="#f59e0b" style="background:#f59e0b;"></span>
                <span class="color-dot" data-color="#ef4444" style="background:#ef4444;"></span>
                <span class="color-dot" data-color="#38bdf8" style="background:#38bdf8;"></span>
                <span class="color-dot" data-color="#22c55e" style="background:#22c55e;"></span>
                <span class="color-dot" data-color="#ffffff" style="background:#ffffff; border:1px solid #777;"></span>
            </div>
            <button class="tool-btn" data-tool="highlighter" title="Fosforlu Vurgulayıcı">
                <i class="bi bi-highlighter"></i>
            </button>
            <button class="tool-btn" data-tool="laser" title="Lazer İşaretçi (Projeksiyon Modu)">
                <i class="bi bi-record-circle-fill" style="color: #ff3366;"></i>
            </button>
            <button class="tool-btn" id="btn-clear-canvas" title="Çizimleri Temizle">
                <i class="bi bi-trash3-fill"></i>
            </button>
            <div class="toolbar-divider"></div>
            <button class="tool-btn" id="btn-toggle-timer" title="Soru Geri Sayım Sayacı (Kronometre)">
                <i class="bi bi-stopwatch-fill"></i>
            </button>
            <button class="tool-btn" id="btn-fullscreen" title="Tam Ekran (Akıllı Tahta)">
                <i class="bi bi-arrows-fullscreen"></i>
            </button>
        `;
        document.body.appendChild(toolbar);

        // Kronometre Modalı / Kutusu
        const timerBox = document.createElement('div');
        timerBox.id = 'smart-timer-box';
        timerBox.style.display = 'none';
        timerBox.innerHTML = `
            <div class="timer-header">
                <span>⏱️ Soru Çözüm Süresi</span>
                <button id="close-timer" class="close-btn">&times;</button>
            </div>
            <div class="timer-display" id="timer-display">01:00</div>
            <div class="timer-controls">
                <button class="timer-preset" data-seconds="30">30 sn</button>
                <button class="timer-preset" data-seconds="60">1 dk</button>
                <button class="timer-preset" data-seconds="120">2 dk</button>
                <button class="timer-preset" data-seconds="300">5 dk</button>
            </div>
            <div class="timer-actions">
                <button id="timer-start-btn" class="btn-timer primary">Başlat</button>
                <button id="timer-reset-btn" class="btn-timer secondary">Sıfırla</button>
            </div>
        `;
        document.body.appendChild(timerBox);
    }

    setupCanvas() {
        const resize = () => {
            this.canvas.width = window.innerWidth;
            this.canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener('resize', resize);
    }

    setupEvents() {
        // Tool button tıkı
        const toolBtns = document.querySelectorAll('#smart-toolbar .tool-btn[data-tool]');
        const colorPickerGroup = document.getElementById('pen-colors');

        toolBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                toolBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                const tool = btn.getAttribute('data-tool');
                this.setTool(tool);

                if (tool === 'pen') {
                    colorPickerGroup.style.display = 'flex';
                } else {
                    colorPickerGroup.style.display = 'none';
                }
            });
        });

        // Renk seçici
        const colorDots = document.querySelectorAll('.color-dot');
        colorDots.forEach(dot => {
            dot.addEventListener('click', () => {
                colorDots.forEach(d => d.classList.remove('active'));
                dot.classList.add('active');
                this.penColor = dot.getAttribute('data-color');
            });
        });

        // Temizle butonu
        document.getElementById('btn-clear-canvas').addEventListener('click', () => {
            this.clearCanvas();
        });

        // Tam ekran butonu
        document.getElementById('btn-fullscreen').addEventListener('click', () => {
            this.toggleFullscreen();
        });

        // Çizim olayları (Mouse & Dokunmatik)
        const startDraw = (e) => {
            if (this.currentTool !== 'pen' && this.currentTool !== 'highlighter') return;
            this.isDrawing = true;
            const pos = this.getPos(e);
            this.ctx.beginPath();
            this.ctx.moveTo(pos.x, pos.y);
        };

        const draw = (e) => {
            if (this.currentTool === 'none') return;

            const pos = this.getPos(e);

            if (this.currentTool === 'laser') {
                this.laserPointer.style.display = 'block';
                this.laserPointer.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;
                return;
            }

            if (!this.isDrawing) return;

            this.ctx.lineTo(pos.x, pos.y);
            if (this.currentTool === 'highlighter') {
                this.ctx.strokeStyle = 'rgba(250, 204, 21, 0.4)';
                this.ctx.lineWidth = 18;
                this.ctx.lineCap = 'round';
            } else {
                this.ctx.strokeStyle = this.penColor;
                this.ctx.lineWidth = this.penSize;
                this.ctx.lineCap = 'round';
                this.ctx.lineJoin = 'round';
            }
            this.ctx.stroke();
        };

        const stopDraw = () => {
            if (this.isDrawing) {
                this.isDrawing = false;
                this.ctx.closePath();
            }
        };

        window.addEventListener('mousedown', startDraw);
        window.addEventListener('mousemove', draw);
        window.addEventListener('mouseup', stopDraw);

        // Dokunmatik (Akıllı Tahta Dokunmatik Ekranlar için)
        window.addEventListener('touchstart', startDraw, { passive: true });
        window.addEventListener('touchmove', draw, { passive: true });
        window.addEventListener('touchend', stopDraw);

        // Kronometre Olayları
        this.setupTimerEvents();
    }

    getPos(e) {
        if (e.touches && e.touches[0]) {
            return { x: e.touches[0].clientX, y: e.touches[0].clientY };
        }
        return { x: e.clientX, y: e.clientY };
    }

    setTool(tool) {
        this.currentTool = tool;

        if (tool === 'none') {
            this.canvas.style.pointerEvents = 'none';
            this.laserPointer.style.display = 'none';
            document.body.style.cursor = 'default';
        } else if (tool === 'pen' || tool === 'highlighter') {
            this.canvas.style.pointerEvents = 'auto';
            this.laserPointer.style.display = 'none';
            document.body.style.cursor = 'crosshair';
        } else if (tool === 'laser') {
            this.canvas.style.pointerEvents = 'none';
            this.laserPointer.style.display = 'block';
            document.body.style.cursor = 'none';
        }
    }

    clearCanvas() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    toggleFullscreen() {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch(err => {
                console.log("Tam ekran hatası:", err);
            });
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
        }
    }

    setupTimerEvents() {
        const timerBox = document.getElementById('smart-timer-box');
        const toggleTimerBtn = document.getElementById('btn-toggle-timer');
        const closeTimerBtn = document.getElementById('close-timer');
        const timerDisplay = document.getElementById('timer-display');
        const startBtn = document.getElementById('timer-start-btn');
        const resetBtn = document.getElementById('timer-reset-btn');
        const presets = document.querySelectorAll('.timer-preset');

        let isRunning = false;
        this.timerSeconds = 60;

        const updateDisplay = () => {
            const m = Math.floor(this.timerSeconds / 60);
            const s = this.timerSeconds % 60;
            timerDisplay.textContent = `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
        };

        toggleTimerBtn.addEventListener('click', () => {
            timerBox.style.display = timerBox.style.display === 'none' ? 'block' : 'none';
        });

        closeTimerBtn.addEventListener('click', () => {
            timerBox.style.display = 'none';
        });

        presets.forEach(p => {
            p.addEventListener('click', () => {
                clearInterval(this.timerInterval);
                isRunning = false;
                startBtn.textContent = 'Başlat';
                this.timerSeconds = parseInt(p.getAttribute('data-seconds'));
                updateDisplay();
            });
        });

        startBtn.addEventListener('click', () => {
            if (!isRunning) {
                isRunning = true;
                startBtn.textContent = 'Duraklat';
                startBtn.classList.add('running');
                this.timerInterval = setInterval(() => {
                    if (this.timerSeconds > 0) {
                        this.timerSeconds--;
                        updateDisplay();
                    } else {
                        clearInterval(this.timerInterval);
                        isRunning = false;
                        startBtn.textContent = 'Başlat';
                        startBtn.classList.remove('running');
                        // Süre bittiğinde animasyon ve ses
                        timerDisplay.classList.add('flash-alert');
                        setTimeout(() => timerDisplay.classList.remove('flash-alert'), 3000);
                        if ('vibrate' in navigator) navigator.vibrate([200, 100, 200]);
                    }
                }, 1000);
            } else {
                clearInterval(this.timerInterval);
                isRunning = false;
                startBtn.textContent = 'Devam Et';
                startBtn.classList.remove('running');
            }
        });

        resetBtn.addEventListener('click', () => {
            clearInterval(this.timerInterval);
            isRunning = false;
            this.timerSeconds = 60;
            startBtn.textContent = 'Başlat';
            startBtn.classList.remove('running');
            updateDisplay();
        });
    }
}

// Sayfa yüklendiğinde başlat
document.addEventListener('DOMContentLoaded', () => {
    window.smartBoard = new SmartBoard();
});
