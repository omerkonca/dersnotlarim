/**
 * DERS NOTLARIM - ANA SAYFA & KATEGORİK DERS YÖNETİMİ
 */

class App {
    constructor() {
        this.currentClass = '8';
        this.currentSubject = 'fen';
        this.currentTab = 'tab-presentation';
        this.userAnswers = {};

        this.init();
    }

    init() {
        this.setupThemeToggle();
        // Varsayılan olarak ana sayfayı göster
        this.showHome();
    }

    // Ana Sayfayı Göster
    showHome() {
        document.getElementById('view-home').style.display = 'block';
        document.getElementById('view-course').style.display = 'none';

        // Navigasyon aktifliği
        document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
        document.getElementById('nav-btn-home')?.classList.add('active');

        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Belirli bir Dersi Seç ve Ders Alanına Git
    selectSubject(grade, subject) {
        this.currentClass = grade;
        this.currentSubject = subject;

        document.getElementById('view-home').style.display = 'none';
        document.getElementById('view-course').style.display = 'block';

        // Navigasyon aktifliği
        document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));

        this.renderCourseContent();
        this.switchInnerTab('tab-presentation');

        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Ders İçeriğini Doldur
    renderCourseContent() {
        const key = `${this.currentClass}-${this.currentSubject}`;
        const data = EDUCATION_DATA.content[key] || this.getFallbackData();

        // Başlıklar
        document.getElementById('detail-title').textContent = data.title;
        document.getElementById('detail-desc').textContent = data.subtitle;
        document.getElementById('detail-grade-badge').textContent = `${this.currentClass}. Sınıf`;

        // 1. Sunum Bölümü
        this.renderPresentation(data.presentation);

        // 2. Notlar Bölümü
        this.renderNotes(data.notes);

        // 3. Quiz Bölümü
        this.renderQuiz(data.quiz);

        // 4. Müfredat Bölümü
        this.renderCurriculum(data.curriculum);
    }

    // Ders İçi Sekme Değiştir (Sunum / Notlar / Quiz / Müfredat)
    switchInnerTab(tabId) {
        this.currentTab = tabId;

        // Butonları güncelle
        document.querySelectorAll('.inner-tab-btn').forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-tab') === tabId);
        });

        // Tab içeriklerini güncelle
        document.querySelectorAll('.tab-pane').forEach(pane => {
            pane.classList.toggle('active', pane.id === tabId);
        });
    }

    // Sunum Render
    renderPresentation(pres) {
        const box = document.getElementById('presentation-box-content');
        if (!box) return;

        const isAvailable = pres.file && pres.file !== '#';

        box.innerHTML = `
            <div class="presentation-inner-card">
                <span class="pres-badge">${pres.badge || 'İnteraktif Slayt Seti'}</span>
                <h3 class="pres-title">${pres.title}</h3>
                <p class="pres-desc">${pres.desc}</p>
                <div class="pres-meta">
                    <span>📊 ${pres.slidesCount}</span>
                    <span>🖥️ Akıllı Tahta & Projeksiyon Uyumlu</span>
                    <span>⚡ Reveal.js Altyapısı</span>
                </div>
                <div class="pres-btn-row">
                    ${isAvailable ? `
                        <button class="btn-play-presentation" onclick="app.openPresentationModal('${pres.file}', '${pres.title}')">
                            ▶️ Sunumu Başlat (Gömülü Ekran)
                        </button>
                        <a href="${pres.file}" target="_blank" class="btn-fullscreen-link">
                            ↗️ Ayrı Sekmede Aç
                        </a>
                    ` : `
                        <button class="btn-play-presentation" style="opacity: 0.6; cursor: not-allowed;" disabled>
                            ⏳ Bu Dersin Sunumu Hazırlanıyor
                        </button>
                    `}
                </div>
            </div>
        `;
    }

    // Notlar Render
    renderNotes(notes) {
        const container = document.getElementById('notes-container');
        if (!container) return;

        if (!notes || notes.length === 0) {
            container.innerHTML = '<p style="color:var(--text-muted); padding:2rem;">Bu ders için henüz ders notu eklenmedi.</p>';
            return;
        }

        container.innerHTML = notes.map(note => `
            <div class="note-card">
                <div class="note-top">
                    <h4>${note.title}</h4>
                    <span class="note-tag">${note.badge}</span>
                </div>
                <div class="note-body">
                    ${note.content}
                </div>
                <div class="note-bottom">
                    <span>💡 ${note.important}</span>
                    <button class="btn-print" onclick="window.print()">🖨️ Yazdır</button>
                </div>
            </div>
        `).join('');
    }

    // Quiz Render
    renderQuiz(quiz) {
        const container = document.getElementById('quiz-container');
        if (!container) return;

        this.userAnswers = {};

        if (!quiz || quiz.length === 0) {
            container.innerHTML = `
                <div style="text-align:center; padding: 3rem 1rem;">
                    <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">📝</div>
                    <h4>Bu Ders İçin Sorular Yükleniyor</h4>
                    <p style="color: var(--text-muted); margin-top: 0.4rem;">Yeni nesil LGS ve yazılı soruları hazırlanmaktadır.</p>
                </div>
            `;
            return;
        }

        container.innerHTML = `
            <div class="quiz-status-bar">
                <span>Toplam ${quiz.length} İnteraktif Soru</span>
                <span class="quiz-score" id="quiz-score-val">Puan: 0 / ${quiz.length * 25}</span>
            </div>
            <div class="quiz-questions">
                ${quiz.map((q, qIndex) => `
                    <div class="question-block" id="qb-${qIndex}">
                        <h4 class="q-title"><strong>Soru ${qIndex + 1}:</strong> ${q.question}</h4>
                        <div class="q-options">
                            ${q.options.map((opt, optIndex) => `
                                <button class="q-opt-btn" onclick="app.checkAnswer(${qIndex}, ${optIndex})">
                                    <span class="opt-letter">${['A', 'B', 'C', 'D'][optIndex]}</span>
                                    <span>${opt}</span>
                                </button>
                            `).join('')}
                        </div>
                        <div class="q-solution" id="solution-${qIndex}">
                            <strong>💡 Çözüm ve Açıklama:</strong>
                            <p style="margin-top: 0.35rem;">${q.explanation}</p>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    }

    // Soru Cevaplama
    checkAnswer(qIndex, selectedOptIndex) {
        const key = `${this.currentClass}-${this.currentSubject}`;
        const quiz = EDUCATION_DATA.content[key]?.quiz;
        if (!quiz || !quiz[qIndex]) return;

        if (this.userAnswers[qIndex] !== undefined) return;
        this.userAnswers[qIndex] = selectedOptIndex;

        const correct = quiz[qIndex].correct;
        const qBlock = document.getElementById(`qb-${qIndex}`);
        const buttons = qBlock.querySelectorAll('.q-opt-btn');

        buttons.forEach((btn, idx) => {
            btn.classList.add('locked');
            if (idx === correct) {
                btn.classList.add('correct');
            } else if (idx === selectedOptIndex) {
                btn.classList.add('wrong');
            }
        });

        const sol = document.getElementById(`solution-${qIndex}`);
        if (sol) sol.style.display = 'block';

        this.updateScore(quiz);
    }

    updateScore(quiz) {
        let correctCount = 0;
        Object.keys(this.userAnswers).forEach(idx => {
            if (this.userAnswers[idx] === quiz[idx].correct) correctCount++;
        });

        const scoreEl = document.getElementById('quiz-score-val');
        if (scoreEl) {
            scoreEl.textContent = `Puan: ${correctCount * 25} / ${quiz.length * 25}`;
        }
    }

    // Müfredat Render
    renderCurriculum(curriculum) {
        const tbody = document.getElementById('curriculum-tbody');
        if (!tbody) return;

        if (!curriculum || curriculum.length === 0) {
            tbody.innerHTML = '<tr><td colspan="5" style="text-align:center;">Müfredat bulunamadı.</td></tr>';
            return;
        }

        tbody.innerHTML = curriculum.map(item => `
            <tr>
                <td><strong>${item.unit}</strong></td>
                <td>${item.name}</td>
                <td>${item.hours}</td>
                <td>${item.period}</td>
                <td><span class="status-pill ${item.status.includes('Aktif') ? 'active' : ''}">${item.status}</span></td>
            </tr>
        `).join('');
    }

    // Gömülü Sunum Modalı
    openPresentationModal(url, title) {
        const modal = document.getElementById('presentation-modal');
        const iframe = document.getElementById('modal-presentation-iframe');
        const modalTitle = document.getElementById('modal-presentation-title');
        const link = document.getElementById('modal-external-link');

        if (!modal || !iframe) return;

        iframe.src = url;
        modalTitle.textContent = title;
        link.href = url;
        modal.classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    closePresentationModal() {
        const modal = document.getElementById('presentation-modal');
        const iframe = document.getElementById('modal-presentation-iframe');
        if (!modal || !iframe) return;

        modal.classList.remove('open');
        iframe.src = 'about:blank';
        document.body.style.overflow = 'auto';
    }

    getFallbackData() {
        return {
            title: `${this.currentClass}. Sınıf ${this.currentSubject === 'fen' ? 'Fen Bilimleri' : 'Türkçe'}`,
            subtitle: "Bu ders için ünite sunumları ve notları sisteme yüklenmektedir.",
            presentation: {
                title: "Yakında Yayında",
                desc: "Öğretmeniniz bu kademe için sunum hazırlamaktadır.",
                file: "#",
                slidesCount: "Hazırlanıyor",
                badge: "Planlama Aşamasında"
            },
            notes: [
                {
                    title: "İçerikler Hazırlanıyor",
                    important: "Çok Yakında",
                    badge: "Yeni Konu",
                    content: "<p>Dershane müfredatına uygun konu özetleri yakında burada yer alacaktır.</p>"
                }
            ],
            curriculum: [
                { unit: "1. Ünite", name: "Genel Konu Girişi", hours: "16 Saat", period: "1. Dönem", status: "Hazırlanıyor" }
            ],
            quiz: []
        };
    }

    setupThemeToggle() {
        const btn = document.getElementById('theme-toggle-btn');
        if (!btn) return;

        const currentTheme = localStorage.getItem('theme') || 'dark';
        document.documentElement.setAttribute('data-theme', currentTheme);
        btn.textContent = currentTheme === 'light' ? '🌙' : '☀️';

        btn.addEventListener('click', () => {
            const next = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', next);
            localStorage.setItem('theme', next);
            btn.textContent = next === 'light' ? '🌙' : '☀️';
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    window.app = new App();
});
