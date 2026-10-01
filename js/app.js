/**
 * DERS NOTLARIM - ANA SAYFA & KATEGORİK DERS YÖNETİMİ
 */

class App {
    constructor() {
        this.currentClass = '8';
        this.currentSubject = 'fen';
        this.currentMode = 'ogren';
        this.currentTab = 'tab-notes';
        this.userAnswers = {};
        this.currentQuizUnit = 'all';
        this.mode = localStorage.getItem('portalMode') || 'teacher';
        this.modeDefaultTabs = {
            ogren: 'tab-notes',
            alistirma: 'tab-flashcards',
            sinav: 'tab-exams',
            lab: 'tab-presentation'
        };

        this.init();
    }

    init() {
        this.setupThemeToggle();
        this.setupModeToggle();
        this.setupMobileNav();
        this.applyMode();
        this.renderCourseContent();
        this.showHome();
    }

    showHome() {
        document.getElementById('view-home').style.display = 'block';
        document.getElementById('view-course').style.display = 'none';

        document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
        document.getElementById('nav-btn-home')?.classList.add('active');
        this.closeMobileNav();

        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    selectSubject(grade, subject) {
        this.currentClass = grade;
        this.currentSubject = subject;
        this.userAnswers = {};

        document.getElementById('view-home').style.display = 'none';
        document.getElementById('view-course').style.display = 'block';

        document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
        this.closeMobileNav();

        this.renderCourseContent();
        this.updateModeVisibility();
        this.filterSimulationsForGrade();
        this.switchMode('ogren');

        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    isChampionNote(note) {
        if (!note) return false;
        if (note.unitId === 0) return true;
        const name = (note.unitName || '').toLowerCase();
        return name.includes('şampiyon') || name.includes('sampiyon');
    }

    getLessonNotes(allNotes = []) {
        return allNotes.filter(n => !this.isChampionNote(n));
    }

    getChampionNotes(allNotes = []) {
        return allNotes.filter(n => this.isChampionNote(n));
    }

    updateModeVisibility() {
        const key = `${this.currentClass}-${this.currentSubject}`;
        const data = EDUCATION_DATA.content[key] || {};
        const isFen = this.currentSubject === 'fen';
        const hasExams = Array.isArray(data.exams) && data.exams.length > 0;
        const hasChampion = this.getChampionNotes(data.notes || []).length > 0;
        const showSinav = hasExams || hasChampion;

        const labBtn = document.getElementById('mode-btn-lab');
        const sinavBtn = document.getElementById('mode-btn-sinav');
        if (labBtn) labBtn.hidden = !isFen;
        if (sinavBtn) sinavBtn.hidden = !showSinav;

        // Sınav alt sekmeleri
        const examSub = document.querySelector('#sub-tabs-sinav [data-tab="tab-exams"]');
        const champSub = document.querySelector('#sub-tabs-sinav [data-tab="tab-champion"]');
        if (examSub) examSub.hidden = !hasExams;
        if (champSub) champSub.hidden = !hasChampion;

        if (hasExams) this.modeDefaultTabs.sinav = 'tab-exams';
        else if (hasChampion) this.modeDefaultTabs.sinav = 'tab-champion';
    }

    filterSimulationsForGrade() {
        const grade = String(this.currentClass);
        document.querySelectorAll('#tab-simulations .sim-card').forEach(card => {
            const grades = (card.getAttribute('data-grades') || '').split(',').map(s => s.trim()).filter(Boolean);
            const show = !grades.length || grades.includes(grade);
            card.style.display = show ? '' : 'none';
        });
    }

    switchMode(modeId) {
        const labBtn = document.getElementById('mode-btn-lab');
        const sinavBtn = document.getElementById('mode-btn-sinav');
        if (modeId === 'lab' && labBtn?.hidden) modeId = 'ogren';
        if (modeId === 'sinav' && sinavBtn?.hidden) modeId = 'ogren';

        this.currentMode = modeId;

        document.querySelectorAll('.mode-tab-btn').forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-mode') === modeId);
        });

        document.querySelectorAll('.sub-tabs').forEach(row => {
            row.hidden = row.id !== `sub-tabs-${modeId}`;
        });

        const defaultTab = this.modeDefaultTabs[modeId] || 'tab-notes';
        // görünür ilk alt sekmeyi seç
        const subRow = document.getElementById(`sub-tabs-${modeId}`);
        const firstVisible = subRow
            ? Array.from(subRow.querySelectorAll('.sub-tab-btn')).find(b => !b.hidden)
            : null;
        this.switchInnerTab(firstVisible?.getAttribute('data-tab') || defaultTab);
    }

    renderCourseContent() {
        const key = `${this.currentClass}-${this.currentSubject}`;
        const data = EDUCATION_DATA.content[key] || this.getFallbackData();

        document.getElementById('detail-title').textContent = data.title;
        document.getElementById('detail-desc').textContent = data.subtitle;
        document.getElementById('detail-grade-badge').textContent = `${this.currentClass}. Sınıf`;

        this.renderPresentation(data.presentation);
        this.renderNotes(data.notes);
        this.renderChampion(data.notes);
        this.renderQuiz(data.quiz);
        this.renderFlashcards(data.flashcards);
        this.renderExams(data.exams);
        this.renderCurriculum(data.curriculum);
        this.updateModeVisibility();
        this.filterSimulationsForGrade();
    }

    switchInnerTab(tabId) {
        this.currentTab = tabId;

        document.querySelectorAll('.sub-tab-btn').forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-tab') === tabId);
        });

        document.querySelectorAll('.tab-pane').forEach(pane => {
            pane.classList.toggle('active', pane.id === tabId);
        });
    }

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

    renderNotes(notes, selectedUnit = 'all') {
        const container = document.getElementById('notes-container');
        if (!container) return;

        const lessonNotes = this.getLessonNotes(notes || []);

        if (!lessonNotes.length) {
            container.innerHTML = '<p style="color:var(--text-muted); padding:2rem;">Bu ders için henüz ders notu eklenmedi.</p>';
            return;
        }

        const units = Array.from(new Set(lessonNotes.map(n => n.unitName || n.badge))).filter(Boolean);

        const filteredNotes = selectedUnit === 'all'
            ? lessonNotes
            : lessonNotes.filter(n => {
                const u = (n.unitName || n.badge || '').toLowerCase();
                const s = selectedUnit.toLowerCase();
                return u === s || u.includes(s) || s.includes(u);
            });

        container.innerHTML = `
            <div class="notes-toolbar" style="grid-column: 1 / -1;">
                <button class="btn-print-all" onclick="app.printNotes()">🖨️ Tüm Notları Yazdır / PDF</button>
            </div>
            ${units.length > 1 ? `
                <div class="unit-filter-bar" style="grid-column: 1 / -1;">
                    <button class="unit-pill ${selectedUnit === 'all' ? 'active' : ''}" onclick="app.filterNotesByUnit('all')">
                        📚 Tüm Üniteler (${lessonNotes.length})
                    </button>
                    ${units.map(u => `
                        <button class="unit-pill ${selectedUnit === u ? 'active' : ''}" onclick="app.filterNotesByUnit('${u.replace(/'/g, "\\'")}')">
                            ${u}
                        </button>
                    `).join('')}
                </div>
            ` : ''}
            ${filteredNotes.map((note, idx) => `
                <div class="note-card printable-note" data-note-idx="${idx}">
                    <div class="note-top">
                        <div>
                            ${note.unitName ? `<span class="note-unit-label">${note.unitName}</span>` : ''}
                            <h4 style="margin:0;">${note.title}</h4>
                        </div>
                        <span class="note-tag">${note.badge}</span>
                    </div>
                    <div class="note-body">
                        ${note.content}
                    </div>
                    <div class="note-bottom">
                        <span>💡 ${note.important}</span>
                        <button class="btn-print" onclick="app.printSingleNote(this)">🖨️ Yazdır</button>
                    </div>
                </div>
            `).join('')}
        `;
    }

    renderChampion(notes) {
        const container = document.getElementById('champion-container');
        if (!container) return;

        const champNotes = this.getChampionNotes(notes || []);
        if (!champNotes.length) {
            container.innerHTML = '<p style="color:var(--text-muted); padding:2rem; grid-column:1/-1;">Bu ders için henüz hap bilgi eklenmedi.</p>';
            return;
        }

        container.innerHTML = `
            <div class="champion-intro" style="grid-column:1/-1;">
                <h3>⚡ Sınav Şampiyonu Hap Bilgiler</h3>
                <p>En çok düşülen tuzaklar ve kafa karıştıran ikililer — yazılı öncesi hızlı tekrar.</p>
            </div>
            ${champNotes.map((note, idx) => `
                <div class="note-card printable-note champion-card" data-note-idx="${idx}">
                    <div class="note-top">
                        <div>
                            <h4 style="margin:0;">${note.title}</h4>
                        </div>
                        <span class="note-tag">${note.badge}</span>
                    </div>
                    <div class="note-body">
                        ${note.content}
                    </div>
                    <div class="note-bottom">
                        <span>💡 ${note.important}</span>
                        <button class="btn-print" onclick="app.printSingleNote(this)">🖨️ Yazdır</button>
                    </div>
                </div>
            `).join('')}
        `;
    }

    filterNotesByUnit(unitName) {
        const key = `${this.currentClass}-${this.currentSubject}`;
        const notes = EDUCATION_DATA.content[key]?.notes || [];
        this.renderNotes(notes, unitName);
    }

    printNotes() {
        document.body.classList.add('print-notes-mode');
        window.print();
        setTimeout(() => document.body.classList.remove('print-notes-mode'), 300);
    }

    printSingleNote(btn) {
        const card = btn.closest('.note-card');
        if (!card) return;
        document.querySelectorAll('.note-card').forEach(c => c.classList.remove('print-focus'));
        card.classList.add('print-focus');
        document.body.classList.add('print-single-note');
        window.print();
        setTimeout(() => {
            document.body.classList.remove('print-single-note');
            card.classList.remove('print-focus');
        }, 300);
    }

    renderQuiz(quiz, selectedUnit = 'all') {
        const container = document.getElementById('quiz-container');
        if (!container) return;

        this.currentQuizUnit = selectedUnit;
        if (!this.userAnswers) this.userAnswers = {};

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

        const units = Array.from(new Set(quiz.map(q => q.unitName))).filter(Boolean);
        const filteredQuiz = selectedUnit === 'all'
            ? quiz
            : quiz.filter(q => {
                const u = (q.unitName || '').toLowerCase();
                const s = selectedUnit.toLowerCase();
                return u === s || u.includes(s) || s.includes(u);
            });

        const answeredCount = filteredQuiz.filter(q => this.userAnswers[q.id || q.question] !== undefined).length;
        const correctCount = filteredQuiz.filter(q => this.userAnswers[q.id || q.question] === q.correct).length;
        const wrongItems = filteredQuiz.filter(q => {
            const key = q.id || q.question;
            return this.userAnswers[key] !== undefined && this.userAnswers[key] !== q.correct;
        });
        const totalPoints = filteredQuiz.length * 10;
        const earnedPoints = correctCount * 10;
        const percent = answeredCount ? Math.round((correctCount / answeredCount) * 100) : 0;

        const weakTopics = {};
        wrongItems.forEach(q => {
            const t = q.topic || q.unitName || 'Genel';
            weakTopics[t] = (weakTopics[t] || 0) + 1;
        });
        const weakList = Object.entries(weakTopics).sort((a, b) => b[1] - a[1]);

        container.innerHTML = `
            ${units.length > 1 ? `
                <div class="unit-filter-bar" style="display:flex; gap:0.4rem; overflow-x:auto; padding-bottom:0.75rem; margin-bottom:1.25rem; scrollbar-width:none;">
                    <button class="unit-pill ${selectedUnit === 'all' ? 'active' : ''}" onclick="app.filterQuizByUnit('all')">
                        🎯 Tüm Üniteler Karma Deneme (${quiz.length} Soru)
                    </button>
                    ${units.map(u => {
                        const count = quiz.filter(q => q.unitName === u).length;
                        return `
                            <button class="unit-pill ${selectedUnit === u ? 'active' : ''}" onclick="app.filterQuizByUnit('${u}')">
                                📖 ${u} (${count})
                            </button>
                        `;
                    }).join('')}
                </div>
            ` : ''}

            <div class="quiz-status-bar">
                <div>
                    <span style="font-size: 0.95rem; font-weight: 700; color: var(--text-main);">
                        📂 ${selectedUnit === 'all' ? 'Tüm Üniteler Karma Deneme Testi' : selectedUnit}
                    </span>
                    <span style="display:block; font-size:0.8rem; color:var(--text-muted); font-weight:500;">
                        Cevaplanan ${answeredCount} / ${filteredQuiz.length} soru
                    </span>
                </div>
                <div class="quiz-score-wrap">
                    <span class="quiz-score" id="quiz-score-val">Puan: ${earnedPoints} / ${totalPoints}</span>
                    ${answeredCount > 0 ? `<span class="quiz-percent">${percent}% doğru</span>` : ''}
                </div>
            </div>

            ${answeredCount > 0 ? `
                <div class="quiz-analysis-panel">
                    <div class="quiz-analysis-head">
                        <strong>📊 Skor Analizi</strong>
                        <button class="btn-reset-quiz" onclick="app.resetQuiz()">↺ Yeniden Başla</button>
                    </div>
                    <div class="quiz-analysis-stats">
                        <div class="qa-stat ok"><span>Doğru</span><strong>${correctCount}</strong></div>
                        <div class="qa-stat bad"><span>Yanlış</span><strong>${wrongItems.length}</strong></div>
                        <div class="qa-stat muted"><span>Boş</span><strong>${filteredQuiz.length - answeredCount}</strong></div>
                    </div>
                    ${weakList.length ? `
                        <div class="quiz-weak-topics">
                            <span class="weak-label">Zayıf konular:</span>
                            ${weakList.map(([topic, n]) => `<span class="weak-chip">${topic} (${n})</span>`).join('')}
                        </div>
                    ` : answeredCount === filteredQuiz.length ? `
                        <div class="quiz-perfect">🎉 Harika! Bu sette yanlışın yok.</div>
                    ` : ''}
                </div>
            ` : ''}

            <div class="quiz-questions">
                ${filteredQuiz.map((q, idx) => {
                    const qKey = q.id || q.question;
                    const answered = this.userAnswers[qKey] !== undefined;
                    const userChoice = this.userAnswers[qKey];
                    const safeKey = String(qKey).replace(/'/g, "\\'");

                    return `
                        <div class="question-block" id="qb-${idx}">
                            <div class="q-meta-header" style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.75rem; flex-wrap:wrap; gap:0.5rem;">
                                <span class="q-unit-badge" style="background:rgba(56, 189, 248, 0.15); color:var(--primary); padding:0.2rem 0.6rem; border-radius:9999px; font-size:0.75rem; font-weight:700;">
                                    ${q.unitName || 'Ders'}
                                </span>
                                <div style="display:flex; gap:0.4rem; align-items:center;">
                                    ${q.difficulty ? `<span style="background:rgba(245, 158, 11, 0.15); color:var(--accent); padding:0.2rem 0.5rem; border-radius:4px; font-size:0.7rem; font-weight:700;">${q.difficulty}</span>` : ''}
                                    ${q.topic ? `<span style="color:var(--text-muted); font-size:0.75rem;">🏷️ ${q.topic}</span>` : ''}
                                </div>
                            </div>

                            <h4 class="q-title"><strong>Soru ${idx + 1}:</strong> ${q.question}</h4>
                            <div class="q-options">
                                ${q.options.map((opt, optIndex) => {
                                    let btnClass = 'q-opt-btn';
                                    if (answered) {
                                        btnClass += ' locked';
                                        if (optIndex === q.correct) btnClass += ' correct';
                                        else if (optIndex === userChoice) btnClass += ' wrong';
                                    }
                                    return `
                                        <button class="${btnClass}" onclick="app.checkAnswer('${safeKey}', ${optIndex})">
                                            <span class="opt-letter">${['A', 'B', 'C', 'D'][optIndex]}</span>
                                            <span>${opt}</span>
                                        </button>
                                    `;
                                }).join('')}
                            </div>
                            <div class="q-solution" id="solution-${qKey}" style="display: ${answered ? 'block' : 'none'};">
                                <strong>💡 Çözüm ve Açıklama:</strong>
                                <p style="margin-top: 0.35rem;">${q.explanation}</p>
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>
        `;
    }

    filterQuizByUnit(unitName) {
        const key = `${this.currentClass}-${this.currentSubject}`;
        const quiz = EDUCATION_DATA.content[key]?.quiz || [];
        this.renderQuiz(quiz, unitName);
    }

    checkAnswer(qKey, selectedOptIndex) {
        const key = `${this.currentClass}-${this.currentSubject}`;
        const quiz = EDUCATION_DATA.content[key]?.quiz || [];
        const question = quiz.find(q => (q.id || q.question) === qKey);
        if (!question) return;

        if (this.userAnswers[qKey] !== undefined) return;
        this.userAnswers[qKey] = selectedOptIndex;

        if (window.soundFX) {
            if (selectedOptIndex === question.correct) window.soundFX.playCorrect?.() || window.soundFX.playVictory?.();
            else window.soundFX.playWrong?.();
        }

        this.renderQuiz(quiz, this.currentQuizUnit || 'all');
    }

    resetQuiz() {
        this.userAnswers = {};
        const key = `${this.currentClass}-${this.currentSubject}`;
        const quiz = EDUCATION_DATA.content[key]?.quiz || [];
        this.renderQuiz(quiz, this.currentQuizUnit || 'all');
    }

    getFlashProgressKey() {
        return `flashProgress:${this.currentClass}-${this.currentSubject}`;
    }

    loadFlashProgress() {
        try {
            return JSON.parse(localStorage.getItem(this.getFlashProgressKey()) || '{}');
        } catch {
            return {};
        }
    }

    saveFlashProgress(progress) {
        localStorage.setItem(this.getFlashProgressKey(), JSON.stringify(progress));
    }

    renderFlashcards(cards) {
        const container = document.getElementById('flashcards-container');
        if (!container) return;

        const defaults = [
            { id: 'def1', front: 'Işık Yılı bir zaman birimi midir?', back: 'HAYIR! Işık yılı MESAFE / UZAKLIK ölçüsüdür (~9.5 trilyon km).' },
            { id: 'def2', front: 'Rüzgar hangi basınçtan hangisine eser?', back: 'Yüksek Basınç → Alçak Basınç (Soğuktan → Sıcağa).' }
        ];

        const list = (cards && cards.length) ? cards : defaults;
        const progress = this.loadFlashProgress();
        const knownCount = list.filter(c => progress[c.id] === 'known').length;
        const learningCount = list.filter(c => progress[c.id] === 'learning').length;

        container.innerHTML = `
            <div class="flash-progress-bar">
                <div>
                    <h3>🃏 Sınav Öncesi Hafıza Kartları</h3>
                    <p style="color:var(--text-muted); font-size:0.88rem; margin:0.25rem 0 0;">Kartı çevir, sonra durumunu kaydet — ilerlemen bu cihazda saklanır.</p>
                </div>
                <div class="flash-stats">
                    <span class="flash-stat known">✓ Bildiğim: ${knownCount}</span>
                    <span class="flash-stat learning">↻ Çalışıyorum: ${learningCount}</span>
                    <span class="flash-stat total">${knownCount}/${list.length}</span>
                    <button class="btn-reset-flash" onclick="app.resetFlashProgress()">Sıfırla</button>
                </div>
            </div>
            <div class="flashcards-grid">
                ${list.map(card => {
                    const status = progress[card.id] || '';
                    return `
                        <div class="flashcard-wrap ${status}">
                            <div class="flashcard" onclick="this.classList.toggle('flipped')">
                                <div class="card-inner">
                                    <div class="card-front">
                                        <span class="card-hint">❓ Soru / Kavram</span>
                                        <h4>${card.front}</h4>
                                        <p class="click-hint">Cevabı görmek için tıkla →</p>
                                    </div>
                                    <div class="card-back">
                                        <span class="card-hint">💡 Kesin Bilgi</span>
                                        <p>${card.back}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="flash-actions">
                                <button class="btn-flash learning ${status === 'learning' ? 'active' : ''}" onclick="event.stopPropagation(); app.markFlashcard('${card.id}', 'learning')">↻ Çalışıyorum</button>
                                <button class="btn-flash known ${status === 'known' ? 'active' : ''}" onclick="event.stopPropagation(); app.markFlashcard('${card.id}', 'known')">✓ Biliyorum</button>
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>
        `;
    }

    markFlashcard(id, status) {
        const progress = this.loadFlashProgress();
        if (progress[id] === status) delete progress[id];
        else progress[id] = status;
        this.saveFlashProgress(progress);

        const key = `${this.currentClass}-${this.currentSubject}`;
        const cards = EDUCATION_DATA.content[key]?.flashcards;
        this.renderFlashcards(cards);
    }

    resetFlashProgress() {
        localStorage.removeItem(this.getFlashProgressKey());
        const key = `${this.currentClass}-${this.currentSubject}`;
        this.renderFlashcards(EDUCATION_DATA.content[key]?.flashcards);
    }

    renderExams(exams) {
        const container = document.getElementById('exams-container');
        if (!container) return;

        if (!exams || exams.length === 0) {
            container.innerHTML = `
                <div style="text-align:center; padding:3rem 1rem;">
                    <div style="font-size:2.5rem;">📄</div>
                    <h4>Bu ders için yazılı prova henüz eklenmedi</h4>
                    <p style="color:var(--text-muted);">Klasik yazılı senaryo soruları burada yer alacak.</p>
                </div>
            `;
            return;
        }

        if (!this.examShowAnswers) this.examShowAnswers = {};

        container.innerHTML = exams.map((exam, ei) => {
            const showKey = !!this.examShowAnswers[exam.id];
            const totalPoints = (exam.questions || []).reduce((s, q) => s + (q.points || 0), 0);
            const sections = {};
            (exam.questions || []).forEach(q => {
                const sec = q.section || q.unit || 'Sorular';
                if (!sections[sec]) sections[sec] = [];
                sections[sec].push(q);
            });

            return `
                <article class="exam-sheet" id="exam-sheet-${exam.id}">
                    <div class="exam-toolbar no-print">
                        <button class="btn-print-all" onclick="app.printExam('${exam.id}')">🖨️ Yazdır / PDF</button>
                        <button class="btn-reset-quiz" onclick="app.toggleExamAnswers('${exam.id}')">
                            ${showKey ? '🙈 Cevap Anahtarını Gizle' : '🔑 Cevap Anahtarını Göster'}
                        </button>
                    </div>

                    <header class="exam-header-block">
                        <h2>${exam.title}</h2>
                        <p class="exam-meta">${exam.subtitle || ''} · Toplam ${totalPoints} puan · ${(exam.questions || []).length} soru</p>
                        <div class="exam-student-fields">
                            <span>Adı Soyadı: _______________________________</span>
                            <span>Sınıfı / No: _______________</span>
                            <span>Puan: _______</span>
                        </div>
                    </header>

                    ${Object.entries(sections).map(([secName, qs]) => `
                        <section class="exam-section">
                            <h3 class="exam-section-title">${secName}</h3>
                            ${qs.map(q => `
                                <div class="exam-question">
                                    <div class="exam-q-head">
                                        <strong>Soru ${q.questionNumber || ''}</strong>
                                        <span class="exam-points">${q.points || 10} Puan</span>
                                        ${q.topic ? `<span class="exam-topic">${q.topic}</span>` : ''}
                                    </div>
                                    ${q.scenario ? `<p class="exam-scenario">${q.scenario}</p>` : ''}
                                    <p class="exam-q-text">👉 ${q.question}</p>
                                    <div class="exam-answer-lines" aria-hidden="true">
                                        <div class="exam-line"></div>
                                        <div class="exam-line"></div>
                                        <div class="exam-line"></div>
                                    </div>
                                    ${showKey ? `
                                        <div class="exam-ideal-answer">
                                            <strong>🔑 Ideal Cevap:</strong>
                                            <p>${q.idealAnswer}</p>
                                        </div>
                                    ` : ''}
                                </div>
                            `).join('')}
                        </section>
                    `).join('')}
                </article>
            `;
        }).join('');
    }

    toggleExamAnswers(examId) {
        if (!this.examShowAnswers) this.examShowAnswers = {};
        this.examShowAnswers[examId] = !this.examShowAnswers[examId];
        const key = `${this.currentClass}-${this.currentSubject}`;
        this.renderExams(EDUCATION_DATA.content[key]?.exams);
    }

    printExam(examId) {
        document.querySelectorAll('.exam-sheet').forEach(el => el.classList.remove('print-focus-exam'));
        const sheet = document.getElementById(`exam-sheet-${examId}`);
        if (sheet) sheet.classList.add('print-focus-exam');
        document.body.classList.add('print-exam-mode');
        window.print();
        setTimeout(() => {
            document.body.classList.remove('print-exam-mode');
            sheet?.classList.remove('print-focus-exam');
        }, 400);
    }

    renderCurriculum(curriculum) {
        const container = document.getElementById('tab-curriculum');
        if (!container) return;

        if (!curriculum || curriculum.length === 0) {
            container.innerHTML = '<p style="color:var(--text-muted); padding:3rem; text-align:center;">Müfredat bulunamadı.</p>';
            return;
        }

        let html = `
            <div class="curriculum-container">
                <div class="curriculum-header-action" style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1.5rem; flex-wrap:wrap; gap:1rem;">
                    <div>
                        <h3 style="margin:0 0 0.3rem 0; font-size:1.3rem; color:var(--text-main);">📋 MEB 2026-2027 Resmi Müfredatı & Ayrıntılı Ünite Dökümü</h3>
                        <span style="font-size:0.88rem; color:var(--text-muted);">
                            Her ünitenin alt konularını, MEB kazanımlarını ve LGS soru ağırlıklarını görmek için kartlara tıklayın.
                        </span>
                    </div>
                    <button class="btn-toggle-all-units" onclick="app.toggleAllCurriculum()" style="background:rgba(56,189,248,0.15); border:1px solid rgba(56,189,248,0.4); color:var(--primary); padding:0.5rem 1.15rem; border-radius:var(--radius-full); font-size:0.85rem; font-weight:800; cursor:pointer;">
                        ⚡ Tüm Detayları Aç / Kapat
                    </button>
                </div>
                <div class="curriculum-accordion-list">
        `;

        curriculum.forEach((item, idx) => {
            const hasTopics = item.topics && item.topics.length > 0;
            const isFirst = idx === 0;

            html += `
                <div class="curriculum-unit-card ${isFirst ? 'expanded' : ''}" id="curr-unit-${item.unitId || idx}">
                    <div class="curr-card-header" onclick="app.toggleCurriculumCard(${item.unitId || idx})">
                        <div class="curr-header-left">
                            <span class="curr-unit-badge">${item.unit}</span>
                            <div>
                                <h4 class="curr-unit-title">${item.name}</h4>
                                <div class="curr-unit-meta">
                                    <span>⏱️ ${item.hours}</span>
                                    <span>📅 ${item.period}</span>
                                    ${item.lgsWeight ? `<span class="curr-lgs-weight">🎯 ${item.lgsWeight}</span>` : ''}
                                </div>
                            </div>
                        </div>
                        <div class="curr-header-right">
                            <span class="curr-status-pill">${item.status}</span>
                            <span class="curr-arrow-icon">▼</span>
                        </div>
                    </div>
                    <div class="curr-card-body">
                        ${item.examTip ? `
                            <div class="curr-exam-tip-box">
                                <span class="tip-badge">💡 Sınav Altın Tüyosu & Tuzaklar</span>
                                <p>${item.examTip}</p>
                            </div>
                        ` : ''}
                        ${hasTopics ? `
                            <div class="curr-topics-title">🎯 Alt Konular & MEB Resmi Kazanımları:</div>
                            <div class="curr-topics-grid">
                                ${item.topics.map(tp => `
                                    <div class="curr-topic-item">
                                        <div class="curr-topic-header">
                                            <span class="curr-topic-code">${tp.code}</span>
                                            <strong>${tp.title}</strong>
                                        </div>
                                        <p class="curr-topic-desc">${tp.summary}</p>
                                    </div>
                                `).join('')}
                            </div>
                        ` : '<p style="color:var(--text-muted); font-size:0.85rem;">Bu ünitenin alt konuları hazırlanıyor.</p>'}
                        <div class="curr-card-actions">
                            <button class="btn-curr-act" onclick="app.switchMode('ogren'); app.filterNotesByUnit('${item.unit}')">
                                📖 Bu Ünitenin Notlarını Oku →
                            </button>
                            <button class="btn-curr-act quiz" onclick="app.switchMode('alistirma'); app.switchInnerTab('tab-quiz'); app.filterQuizByUnit('${item.unit}')">
                                ✍️ Bu Ünitenin Sorularını Çöz →
                            </button>
                            ${(item.unitId === 1 || item.unitId === 2 || item.unitId === 3) && this.currentSubject === 'fen' ? `
                                <button class="btn-curr-act lab" onclick="app.switchMode('lab'); app.switchInnerTab('tab-simulations')">
                                    🎮 Canlı Simülatör & Deney →
                                </button>
                            ` : ''}
                        </div>
                    </div>
                </div>
            `;
        });

        html += `</div></div>`;
        container.innerHTML = html;
    }

    toggleCurriculumCard(unitId) {
        const card = document.getElementById(`curr-unit-${unitId}`);
        if (!card) return;
        card.classList.toggle('expanded');
    }

    toggleAllCurriculum() {
        const cards = document.querySelectorAll('.curriculum-unit-card');
        const anyClosed = Array.from(cards).some(c => !c.classList.contains('expanded'));
        cards.forEach(c => {
            if (anyClosed) c.classList.add('expanded');
            else c.classList.remove('expanded');
        });
    }

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
            quiz: [],
            flashcards: []
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

    setupModeToggle() {
        const btn = document.getElementById('mode-toggle-btn');
        if (!btn) return;
        btn.addEventListener('click', () => {
            this.mode = this.mode === 'teacher' ? 'student' : 'teacher';
            localStorage.setItem('portalMode', this.mode);
            this.applyMode();
        });
    }

    applyMode() {
        document.body.classList.toggle('mode-student', this.mode === 'student');
        document.body.classList.toggle('mode-teacher', this.mode === 'teacher');
        const btn = document.getElementById('mode-toggle-btn');
        if (btn) {
            btn.textContent = this.mode === 'teacher' ? '👨‍🏫 Öğretmen' : '🧑‍🎓 Öğrenci';
            btn.title = this.mode === 'teacher'
                ? 'Öğretmen modu: Çark, QR, tahta araçları açık'
                : 'Öğrenci modu: Sınıf araçları gizli';
        }
    }

    setupMobileNav() {
        const toggle = document.getElementById('mobile-nav-toggle');
        const panel = document.getElementById('mobile-nav-panel');
        if (!toggle || !panel) return;

        toggle.addEventListener('click', () => {
            const open = panel.classList.toggle('open');
            toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
            document.body.classList.toggle('nav-open', open);
        });
    }

    closeMobileNav() {
        const panel = document.getElementById('mobile-nav-panel');
        const toggle = document.getElementById('mobile-nav-toggle');
        panel?.classList.remove('open');
        document.body.classList.remove('nav-open');
        toggle?.setAttribute('aria-expanded', 'false');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    window.app = new App();

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js').catch(() => {});
    }
});
