/**
 * AKILLI TAHTA & ÇİZİM SİSTEMİ
 * Ultra hafif, donmayan, anlaşılır Türkçe menülü tahta araçları
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
        
        this.init();
    }

    init() {
        this.createCanvasAndLaser();
        this.setupEvents();
    }

    createCanvasAndLaser() {
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

        const resize = () => {
            this.canvas.width = window.innerWidth;
            this.canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener('resize', resize);

        // Lazer İşaretçi
        const laser = document.createElement('div');
        laser.id = 'smart-laser-pointer';
        laser.style.cssText = `
            position: fixed;
            width: 18px;
            height: 18px;
            background: #ff0055;
            border-radius: 50%;
            pointer-events: none;
            z-index: 99999;
            box-shadow: 0 0 12px #ff0055, 0 0 24px #ff0055;
            display: none;
            transform: translate(-50%, -50%);
            transition: none;
        `;
        document.body.appendChild(laser);
        this.laserPointer = laser;
    }

    setupEvents() {
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
                this.laserPointer.style.left = `${pos.x}px`;
                this.laserPointer.style.top = `${pos.y}px`;
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

        window.addEventListener('touchstart', startDraw, { passive: true });
        window.addEventListener('touchmove', draw, { passive: true });
        window.addEventListener('touchend', stopDraw);
    }

    getPos(e) {
        if (e.touches && e.touches[0]) {
            return { x: e.touches[0].clientX, y: e.touches[0].clientY };
        }
        return { x: e.clientX, y: e.clientY };
    }

    setTool(tool) {
        this.currentTool = tool;

        // UI Butonlarını güncelle
        const buttons = document.querySelectorAll('.smart-toolbar-buttons .board-btn');
        buttons.forEach(btn => btn.classList.remove('active'));

        const colorGroup = document.getElementById('board-colors-group');

        if (tool === 'none') {
            document.getElementById('tool-cursor')?.classList.add('active');
            this.canvas.style.pointerEvents = 'none';
            this.laserPointer.style.display = 'none';
            document.body.style.cursor = 'default';
            if (colorGroup) colorGroup.style.display = 'none';
        } else if (tool === 'pen') {
            document.getElementById('tool-pen')?.classList.add('active');
            this.canvas.style.pointerEvents = 'auto';
            this.laserPointer.style.display = 'none';
            document.body.style.cursor = 'crosshair';
            if (colorGroup) colorGroup.style.display = 'flex';
        } else if (tool === 'highlighter') {
            document.getElementById('tool-highlighter')?.classList.add('active');
            this.canvas.style.pointerEvents = 'auto';
            this.laserPointer.style.display = 'none';
            document.body.style.cursor = 'crosshair';
            if (colorGroup) colorGroup.style.display = 'none';
        } else if (tool === 'laser') {
            document.getElementById('tool-laser')?.classList.add('active');
            this.canvas.style.pointerEvents = 'none';
            this.laserPointer.style.display = 'block';
            document.body.style.cursor = 'none';
            if (colorGroup) colorGroup.style.display = 'none';
        }
    }

    setColor(color) {
        this.penColor = color;
        const dots = document.querySelectorAll('.color-circle');
        dots.forEach(d => {
            d.classList.toggle('active', d.style.background === color);
        });
    }

    clearCanvas() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

// Global Araç Çubuğu Aç/Kapa
function toggleSmartBoardToolbar() {
    const toolbar = document.getElementById('smart-board-toolbar');
    if (!toolbar) return;
    const isHidden = toolbar.style.display === 'none' || toolbar.style.display === '';
    toolbar.style.display = isHidden ? 'flex' : 'none';

    const btnNav = document.getElementById('btn-toggle-smartboard-ui');
    if (btnNav) {
        btnNav.classList.toggle('active', isHidden);
    }
}

// Global Kronometre / Sayaç
let timerInterval = null;
let timerSeconds = 60;
let isTimerRunning = false;

function toggleTimerBox() {
    const box = document.getElementById('smart-timer-box');
    if (!box) return;
    box.style.display = box.style.display === 'none' ? 'block' : 'none';
}

function updateTimerDisplay() {
    const el = document.getElementById('timer-display');
    if (!el) return;
    const m = Math.floor(timerSeconds / 60);
    const s = timerSeconds % 60;
    el.textContent = `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
}

function setTimerSeconds(sec) {
    clearInterval(timerInterval);
    isTimerRunning = false;
    timerSeconds = sec;
    const startBtn = document.getElementById('btn-timer-toggle');
    if (startBtn) startBtn.textContent = 'Başlat';
    updateTimerDisplay();
}

function toggleTimerRunning() {
    const startBtn = document.getElementById('btn-timer-toggle');
    if (!isTimerRunning) {
        isTimerRunning = true;
        if (startBtn) startBtn.textContent = 'Duraklat';
        timerInterval = setInterval(() => {
            if (timerSeconds > 0) {
                timerSeconds--;
                updateTimerDisplay();
            } else {
                clearInterval(timerInterval);
                isTimerRunning = false;
                if (startBtn) startBtn.textContent = 'Başlat';
                const el = document.getElementById('timer-display');
                if (el) {
                    el.style.color = '#ef4444';
                    setTimeout(() => el.style.color = '', 3000);
                }
            }
        }, 1000);
    } else {
        clearInterval(timerInterval);
        isTimerRunning = false;
        if (startBtn) startBtn.textContent = 'Devam Et';
    }
}

function resetTimer() {
    clearInterval(timerInterval);
    isTimerRunning = false;
    timerSeconds = 60;
    const startBtn = document.getElementById('btn-timer-toggle');
    if (startBtn) startBtn.textContent = 'Başlat';
    updateTimerDisplay();
}

// Başlat
document.addEventListener('DOMContentLoaded', () => {
    window.smartBoard = new SmartBoard();
});
