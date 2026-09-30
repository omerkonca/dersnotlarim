/**
 * DERS NOTLARIM - PORTAL UYGULAMA MANTIĞI
 * Kategoriler, Sınıf/Ders filtreleme, interaktif test çözümü, sunum modalı ve arama
 */

class App {
    constructor() {
        this.currentClass = '8'; // Varsayılan 8. Sınıf
        this.currentSubject = 'fen'; // Varsayılan Fen Bilimleri
        this.currentCategory = 'all'; // 'all', 'presentations', 'notes', 'quiz', 'curriculum'
        this.searchQuery = '';
        this.userAnswers = {};
        
        this.init();
    }

    init() {
        this.renderClassFilters();
        this.renderSubjectFilters();
        this.setupCategoryTabs();
        this.renderContent();
        this.setupEventListeners();
        this.setupThemeToggle();
    }

    // Sınıf Butonlarını Oluştur
    renderClassFilters() {
        const container = document.getElementById('class-filters');
        if (!container) return;

        container.innerHTML = EDUCATION_DATA.classes.map(cls => `
            <button class="pill-btn ${cls.id === this.currentClass ? 'active' : ''}" data-class="${cls.id}">
                <span>${cls.name}</span>
                ${cls.badge ? `<span class="pill-tag">${cls.badge}</span>` : ''}
            </button>
        `).join('');

        container.querySelectorAll('.pill-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                this.currentClass = btn.getAttribute('data-class');
                this.renderClassFilters();
                this.renderContent();
            });
        });
    }

    // Branş / Ders Butonlarını Oluştur
    renderSubjectFilters() {
        const container = document.getElementById('subject-filters');
        if (!container) return;

        container.innerHTML = EDUCATION_DATA.subjects.map(sub => `
            <button class="pill-btn ${sub.id === this.currentSubject ? 'active' : ''}" data-subject="${sub.id}">
                <i class="bi ${sub.icon}"></i>
                <span>${sub.name}</span>
            </button>
        `).join('');

        container.querySelectorAll('.pill-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                this.currentSubject = btn.getAttribute('data-subject');
                this.renderSubjectFilters();
                this.renderContent();
            });
        });
    }

    // Kategori Sekmelerini Kur
    setupCategoryTabs() {
        const tabs = document.querySelectorAll('.cat-tab-btn');
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                tabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                this.currentCategory = tab.getAttribute('data-category');
                this.applyCategoryFilter();
            });
        });
    }

    // Seçilen Kategoriye Göre İlgili Bölümü Göster / Diğerlerini Gizle
    applyCategoryFilter() {
        const sections = {
            presentations: document.getElementById('cat-section-presentations'),
            notes: document.getElementById('cat-section-notes'),
            quiz: document.getElementById('cat-section-quiz'),
            curriculum: document.getElementById('cat-section-curriculum')
        };

        if (this.currentCategory === 'all') {
            Object.values(sections).forEach(sec => {
                if (sec) sec.style.display = 'block';
            });
        } else {
            Object.entries(sections).forEach(([key, sec]) => {
                if (sec) {
                    sec.style.display = (key === this.currentCategory) ? 'block' : 'none';
                }
            });
        }
    }

    // Mevcut Sınıf ve Derse Göre Sayfayı Güncelle
    renderContent() {
        const key = `${this.currentClass}-${this.currentSubject}`;
        const data = EDUCATION_DATA.content[key] || this.getFallbackData();

        // Aktif Rozeti Güncelle
        const activeBadge = document.getElementById('active-class-subject-badge');
        if (activeBadge) {
            const clsObj = EDUCATION_DATA.classes.find(c => c.id === this.currentClass);
            const subObj = EDUCATION_DATA.subjects.find(s => s.id === this.currentSubject);
            activeBadge.innerHTML = `<i class="bi bi-mortarboard-fill"></i> ${clsObj ? clsObj.name : ''} &bull; ${subObj ? subObj.name : ''}`;
        }

        // Başlık ve Açıklamaları Güncelle
        document.getElementById('current-page-title').textContent = data.title;
        document.getElementById('current-page-desc').textContent = data.subtitle;

        // 1. Sunum Kartı
        this.renderPresentation(data.presentation);

        // 2. Ders Notları
        this.renderNotes(data.notes);

        // 3. Müfredat Tablosu
        this.renderCurriculum(data.curriculum);

        // 4. Soru Çözümü / Quiz
        this.renderQuiz(data.quiz);

        // Kategori filtresini uygula
        this.applyCategoryFilter();
    }

    getFallbackData() {
        return {
            title: `${this.currentClass}. Sınıf ${this.getSubjectName(this.currentSubject)}`,
            subtitle: "Bu kademe için ders materyalleri ve sunumlar sisteme eklenmektedir.",
            presentation: {
                title: "Yakında Yayında",
                desc: "Öğretmeniniz bu konu için sunum hazırlamaktadır.",
                file: "#",
                slidesCount: "Hazırlanıyor",
                badge: "Planlama Aşamasında"
            },
            notes: [
                {
                    title: "İçerikler Hazırlanıyor",
                    important: "Takipte Kalın",
                    badge: "Yeni Ünite",
                    content: "<p>Bu sınıf ve derse ait müfredat içerikleri, slaytlar ve soru çözümleri çok yakında buraya yüklenecektir.</p>"
                }
            ],
            curriculum: [
                { unit: "1. Ünite", name: "Genel Konu Girişi", hours: "12 Saat", period: "1. Dönem", status: "Yakında" }
            ],
            quiz: []
        };
    }

    getSubjectName(id) {
        const sub = EDUCATION_DATA.subjects.find(s => s.id === id);
        return sub ? sub.name : "Ders";
    }

    // 1. Sunum Kartı Render
    renderPresentation(pres) {
        const card = document.getElementById('presentation-card');
        if (!card) return;

        const isAvailable = pres.file && pres.file !== '#';

        card.innerHTML = `
            <div class="presentation-flex">
                <div class="presentation-info">
                    <span class="badge-unit">${pres.badge || 'İnteraktif Slayt'}</span>
                    <h3 class="presentation-title">${pres.title}</h3>
                    <p class="presentation-desc">${pres.desc}</p>
                    
                    <div class="presentation-stats">
                        <div class="stat-item">
                            <i class="bi bi-collection-play-fill"></i>
                            <span>${pres.slidesCount}</span>
                        </div>
                        <div class="stat-item">
                            <i class="bi bi-display-fill"></i>
                            <span>Akıllı Tahta Uyumlu</span>
                        </div>
                        <div class="stat-item">
                            <i class="bi bi-lightning-charge-fill"></i>
                            <span>Reveal.js Altyapısı</span>
                        </div>
                    </div>

                    <div class="presentation-actions">
                        ${isAvailable ? `
                            <button class="btn-present-launch" onclick="app.openPresentationModal('${pres.file}', '${pres.title}')">
                                <i class="bi bi-play-circle-fill"></i>
                                <span>Ders Sunumunu Başlat (Gömülü)</span>
                            </button>
                            <a href="${pres.file}" target="_blank" class="btn-present-fullscreen">
                                <i class="bi bi-box-arrow-up-right"></i>
                                <span>Ayrı Sekmede Aç</span>
                            </a>
                        ` : `
                            <button class="btn-present-launch" style="opacity: 0.6; cursor: not-allowed;" disabled>
                                <i class="bi bi-clock-history"></i>
                                <span>İçerik Hazırlanıyor</span>
                            </button>
                        `}
                    </div>
                </div>
            </div>
        `;
    }

    // 2. Ders Notları Render
    renderNotes(notes) {
        const container = document.getElementById('notes-container');
        if (!container) return;

        if (!notes || notes.length === 0) {
            container.innerHTML = '<p class="text-muted">Bu bölüm için henüz not eklenmedi.</p>';
            return;
        }

        // Filtreleme (arama sorgusu varsa)
        const filtered = notes.filter(n => 
            n.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
            n.content.toLowerCase().includes(this.searchQuery.toLowerCase())
        );

        if (filtered.length === 0) {
            container.innerHTML = '<p class="text-muted">Aramanıza uygun not bulunamadı.</p>';
            return;
        }

        container.innerHTML = filtered.map(note => `
            <div class="note-card">
                <div>
                    <div class="note-header">
                        <h4 class="note-title">${note.title}</h4>
                        <span class="note-badge">${note.badge}</span>
                    </div>
                    <div class="note-body">
                        ${note.content}
                    </div>
                </div>
                <div class="note-footer">
                    <span>💡 ${note.important}</span>
                    <button class="btn-icon-print" title="Yazdır / PDF" onclick="window.print()">
                        <i class="bi bi-printer"></i>
                    </button>
                </div>
            </div>
        `).join('');
    }

    // 3. Müfredat Tablosu Render
    renderCurriculum(curriculum) {
        const tbody = document.getElementById('curriculum-tbody');
        if (!tbody) return;

        if (!curriculum || curriculum.length === 0) {
            tbody.innerHTML = '<tr><td colspan="5" class="text-center">Müfredat bilgisi bulunamadı.</td></tr>';
            return;
        }

        tbody.innerHTML = curriculum.map((item, index) => `
            <tr>
                <td><strong>${item.unit}</strong></td>
                <td>${item.name}</td>
                <td>${item.hours}</td>
                <td>${item.period}</td>
                <td>
                    <span class="status-badge ${item.status.includes('Aktif') ? 'active' : 'pending'}">
                        ${item.status}
                    </span>
                </td>
            </tr>
        `).join('');
    }

    // 4. Soru Çözümü / Quiz Render
    renderQuiz(quiz) {
        const container = document.getElementById('quiz-container');
        if (!container) return;

        this.userAnswers = {};

        if (!quiz || quiz.length === 0) {
            container.innerHTML = `
                <div style="text-align: center; padding: 2.5rem 1rem;">
                    <i class="bi bi-journal-check" style="font-size: 2.5rem; color: var(--primary);"></i>
                    <h4 style="margin-top: 1rem;">Bu Ders İçin Sorular Yükleniyor</h4>
                    <p style="color: var(--text-secondary); margin-top: 0.5rem;">Çok yakında yeni nesil MEB ve LGS tarzı sorular eklenecektir.</p>
                </div>
            `;
            return;
        }

        container.innerHTML = `
            <div class="quiz-header">
                <div>
                    <span class="quiz-progress-text">Toplam ${quiz.length} Soru (Yeni Nesil)</span>
                    <p style="font-size: 0.85rem; color: var(--text-muted); margin-top: 0.2rem;">Şıkları tıklayarak anında çözümü ve açıklamayı görebilirsiniz.</p>
                </div>
                <div class="quiz-score-badge" id="quiz-score-badge">Puan: 0 / ${quiz.length * 25}</div>
            </div>

            <div class="questions-list">
                ${quiz.map((q, qIndex) => `
                    <div class="question-card" id="q-card-${qIndex}">
                        <h4 class="question-title"><strong>Soru ${qIndex + 1}:</strong> ${q.question}</h4>
                        <div class="options-grid">
                            ${q.options.map((opt, optIndex) => `
                                <button class="option-btn" onclick="app.checkAnswer(${qIndex}, ${optIndex})">
                                    <span class="opt-prefix">${['A', 'B', 'C', 'D'][optIndex]}</span>
                                    <span>${opt}</span>
                                </button>
                            `).join('')}
                        </div>
                        <div class="explanation-box" id="explanation-${qIndex}">
                            <strong>💡 Soru Çözümü & Açıklama:</strong>
                            <p style="margin-top: 0.4rem;">${q.explanation}</p>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    }

    // Şık Kontrolü
    checkAnswer(qIndex, selectedOptIndex) {
        const key = `${this.currentClass}-${this.currentSubject}`;
        const quiz = EDUCATION_DATA.content[key]?.quiz;
        if (!quiz || !quiz[qIndex]) return;

        if (this.userAnswers[qIndex] !== undefined) return;

        this.userAnswers[qIndex] = selectedOptIndex;
        const correctOptIndex = quiz[qIndex].correct;
        const qCard = document.getElementById(`q-card-${qIndex}`);
        const buttons = qCard.querySelectorAll('.option-btn');

        buttons.forEach((btn, index) => {
            btn.classList.add('locked');
            if (index === correctOptIndex) {
                btn.classList.add('correct');
            } else if (index === selectedOptIndex) {
                btn.classList.add('wrong');
            }
        });

        const expBox = document.getElementById(`explanation-${qIndex}`);
        if (expBox) expBox.style.display = 'block';

        this.updateScore(quiz);
    }

    updateScore(quiz) {
        let correctCount = 0;
        Object.keys(this.userAnswers).forEach(qIndex => {
            if (this.userAnswers[qIndex] === quiz[qIndex].correct) {
                correctCount++;
            }
        });

        const score = correctCount * 25;
        const scoreBadge = document.getElementById('quiz-score-badge');
        if (scoreBadge) {
            scoreBadge.textContent = `Puan: ${score} / ${quiz.length * 25}`;
        }
    }

    // Gömülü Sunum Modalı
    openPresentationModal(url, title) {
        const modal = document.getElementById('presentation-modal');
        const iframe = document.getElementById('modal-presentation-iframe');
        const modalTitle = document.getElementById('modal-presentation-title');
        const externalLink = document.getElementById('modal-external-link');

        if (!modal || !iframe) return;

        iframe.src = url;
        modalTitle.textContent = title;
        externalLink.href = url;
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

    setupEventListeners() {
        const searchInput = document.getElementById('global-search-input');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                this.searchQuery = e.target.value.trim();
                const key = `${this.currentClass}-${this.currentSubject}`;
                const data = EDUCATION_DATA.content[key] || this.getFallbackData();
                this.renderNotes(data.notes);
            });
        }

        const closeBtn = document.getElementById('close-presentation-modal');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => this.closePresentationModal());
        }

        window.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closePresentationModal();
            }
        });
    }

    setupThemeToggle() {
        const toggleBtn = document.getElementById('theme-toggle-btn');
        if (!toggleBtn) return;

        const currentTheme = localStorage.getItem('theme') || 'dark';
        document.documentElement.setAttribute('data-theme', currentTheme);
        this.updateThemeIcon(currentTheme);

        toggleBtn.addEventListener('click', () => {
            const now = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', now);
            localStorage.setItem('theme', now);
            this.updateThemeIcon(now);
        });
    }

    updateThemeIcon(theme) {
        const icon = document.querySelector('#theme-toggle-btn i');
        if (!icon) return;
        if (theme === 'light') {
            icon.className = 'bi bi-moon-stars-fill';
        } else {
            icon.className = 'bi bi-sun-fill';
        }
    }
}

// Uygulamayı Başlat
document.addEventListener('DOMContentLoaded', () => {
    window.app = new App();
});
