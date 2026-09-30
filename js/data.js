/**
 * MEB 2026 - 2027 EĞİTİM ÖĞRETİM YILI
 * FEN BİLİMLERİ VE TÜRKÇE RESMİ ÖĞRETİM PROGRAMI VERİTABANI
 */
const EDUCATION_DATA = {
    academicYear: "2026 - 2027",

    classes: [
        { id: "8", name: "8. Sınıf (LGS)", badge: "LGS Hazırlık", active: true },
        { id: "7", name: "7. Sınıf", badge: "Kritik Kademe", active: true },
        { id: "6", name: "6. Sınıf", badge: "Temel Güçlendirme", active: false },
        { id: "5", name: "5. Sınıf", badge: "Ortaokula İlk Adım", active: false }
    ],

    subjects: [
        { id: "fen", name: "Fen Bilimleri", icon: "🌪️", color: "#38bdf8", active: true },
        { id: "turkce", name: "Türkçe", icon: "📖", color: "#f43f5e", active: true }
    ],

    // İçerikler: Sınıf ve Ders bazlı
    content: {
        // ==========================================
        // 8. SINIF FEN BİLİMLERİ (LGS) - 2026-2027 MEB
        // ==========================================
        "8-fen": {
            title: "8. Sınıf Fen Bilimleri (LGS)",
            subtitle: "2026 - 2027 MEB Öğretim Programı & LGS Soru Tipleri",
            presentation: {
                title: "1. Ünite: Mevsimler ve İklim",
                desc: "Dünya'nın hareketleri, eksen eğikliği (23° 27'), rüzgar oluşumu, yüksek/alçak basınç alanları ve küresel iklim değişikliği.",
                file: "8-sinif.html",
                slidesCount: "7 Temel Bölüm",
                badge: "LGS'de Garanti 1 Soru"
            },
            notes: [
                {
                    title: "Eksen Eğikliği & Mevsimler",
                    important: "Sınavda Kesin Çıkar!",
                    badge: "F.8.1.1.1",
                    content: `
                        <p><strong>Eksen Eğikliği (23° 27'):</strong> Dünya'mız Güneş etrafında dolanırken dik değil, 23° 27' eğik durur.</p>
                        <div class="note-highlight">
                            <strong>Altın Kural:</strong> Işınlar <strong>DİK (90°)</strong> veya dike yakın gelirse birim yüzeye düşen enerji artar ve o bölge çok ısınır (YAZ). Eğik açıyla gelirse ışınlar dağılır, az ısınır (KIŞ).
                        </div>
                        <p><strong>Gölge Boyu:</strong> Yazın öğle vakti ışınlar dik geldiğinden gölge EN KISA, kışın eğik geldiğinden gölge EN UZUN olur.</p>
                        <div class="note-alert">
                            ⚠️ <strong>MEB Tuzağı:</strong> Dünya'nın Güneş'e olan fiziksel mesafesinin (yakınlaşıp uzaklaşmasının) mevsimlerin oluşumuyla HİÇBİR ilgisi yoktur! Ocak ayında Güneş'e en yakınız ama Kuzey Yarım Küre kış mevsimini yaşar.
                        </div>
                    `
                },
                {
                    title: "Kritik Tarihler (Gündönümü & Ekinoks)",
                    important: "Tarihleri Karıştırma!",
                    badge: "F.8.1.1.1",
                    content: `
                        <ul class="styled-list">
                            <li><strong>21 Haziran (Yaz Gündönümü):</strong> Kuzey Yarım Küre'de (Türkiye'de) yaz başlar, en uzun gündüz yaşanır. Güneş ışınları <u>Yengeç Dönencesi</u>'ne dik açıyla düşer.</li>
                            <li><strong>21 Aralık (Kış Gündönümü):</strong> Kuzey Yarım Küre'de kış başlar, en uzun gece yaşanır. Güneş ışınları <u>Oğlak Dönencesi</u>'ne dik açıyla düşer.</li>
                            <li><strong>21 Mart & 23 Eylül (Ekinoks):</strong> Dünyanın her yerinde gece ve gündüz süresi birbirine eşittir (12 saat). Güneş ışınları Ekvator'a dik açıyla düşer.</li>
                        </ul>
                    `
                },
                {
                    title: "Rüzgar Oluşumu & Basınç Alanları",
                    important: "Yeni Nesil LGS Soru Kalıbı",
                    badge: "F.8.1.2.1",
                    content: `
                        <p>Rüzgar her zaman <strong>YÜKSEK BASINÇTAN &rarr; ALÇAK BASINCA</strong> (Soğuktan &rarr; Sıcağa) doğru yatay yönde esen hava akımıdır.</p>
                        <div class="comparison-grid">
                            <div class="comp-card cold">
                                <h4>❄️ Yüksek Basınç (Soğuk)</h4>
                                <ul>
                                    <li>Hava soğuk ve yoğundur.</li>
                                    <li>Alçalıcı hava hareketi vardır.</li>
                                    <li>Hava açıktır, bulut/yağış görülmez.</li>
                                    <li>Merkezden çevreye doğrudur.</li>
                                </ul>
                            </div>
                            <div class="comp-card warm">
                                <h4>🔥 Alçak Basınç (Sıcak)</h4>
                                <ul>
                                    <li>Hava sıcak ve hafiftir.</li>
                                    <li>Yükselici hava hareketi vardır.</li>
                                    <li>Bulutlanma ve yağış ihtimali fazladır.</li>
                                    <li>Çevreden merkeze doğrudur.</li>
                                </ul>
                            </div>
                        </div>
                    `
                },
                {
                    title: "İklim ve Hava Olayları Farkı",
                    important: "Karşılaştırma Tablosu",
                    badge: "F.8.1.2.2",
                    content: `
                        <p><strong>İklim:</strong> Geniş bir bölgede uzun yıllar boyunca (35-40 yıl) değişmeyen ortalama hava koşullarıdır. Kesindir. Bilim dalı: <em>Klimatoloji</em>, uzmanı: <em>Klimatolog</em>.</p>
                        <p><strong>Hava Olayı:</strong> Dar bir alanda, günün belirli saatlerinde değişkenlik gösteren anlık olaylardır (Güneşli, rüzgarlı, yağmurlu). Tahminidir. Bilim dalı: <em>Meteoroloji</em>, uzmanı: <em>Meteorolog</em>.</p>
                    `
                }
            ],
            // MEB Resmi Fen Bilimleri Müfredatı (Saat & Hafta)
            curriculum: [
                { unit: "1. Ünite", name: "Mevsimler ve İklim", hours: "14 Saat (%9.7)", period: "1. Dönem (Eylül - Ekim)", status: "Mevcut & Aktif" },
                { unit: "2. Ünite", name: "DNA ve Genetik Kod", hours: "36 Saat (%25.0)", period: "1. Dönem (Ekim - Aralık)", status: "Hazırlanıyor" },
                { unit: "3. Ünite", name: "Basınç (Katı, Sıvı, Gaz)", hours: "14 Saat (%9.7)", period: "1. Dönem (Aralık - Ocak)", status: "Hazırlanıyor" },
                { unit: "4. Ünite", name: "Madde ve Endüstri (Periyodik Sistem, Tepkimeler)", hours: "36 Saat (%25.0)", period: "2. Dönem (Şubat - Nisan)", status: "Hazırlanıyor" },
                { unit: "5. Ünite", name: "Basit Makineler (Kaldıraç, Makara, Eğik Düzlem)", hours: "16 Saat (%11.1)", period: "2. Dönem (Nisan - Mayıs)", status: "Hazırlanıyor" },
                { unit: "6. Ünite", name: "Enerji Dönüşümleri ve Çevre Bilimi", hours: "14 Saat (%9.7)", period: "2. Dönem (Mayıs)", status: "Hazırlanıyor" },
                { unit: "7. Ünite", name: "Elektrik Yükleri ve Elektrik Enerjisi", hours: "14 Saat (%9.7)", period: "2. Dönem (Haziran)", status: "Hazırlanıyor" }
            ],
            quiz: [
                {
                    question: "Dünya'nın eksen eğikliği ve Güneş etrafında dolanması sonucunda aşağıdakilerden hangisi MEYDANA GELİR?",
                    options: [
                        "Gece ve gündüzün ardalanması",
                        "Mevsimlerin oluşması ve yıllık sıcaklık farkları",
                        "Dünya'nın kendi etrafında dönme hızının değişmesi",
                        "Güneş'in Dünya'ya olan fiziksel mesafesinin mevsimleri belirlemesi"
                    ],
                    correct: 1,
                    explanation: "Mevsimlerin oluşması iki temel sebebe bağlıdır: 1) Eksen eğikliği (23° 27'), 2) Dünya'nın Güneş etrafında dolanması. Gece-gündüz ise günlük kendi ekseni etrafında dönme sonucu oluşur."
                },
                {
                    question: "21 Haziran tarihinde Kuzey Yarım Küre'de (Türkiye'de) bulunan bir gözlemci için hangisi DOĞRUDUR?",
                    options: [
                        "En uzun gece yaşanır.",
                        "Güneş ışınları Oğlak Dönencesi'ne dik açıyla düşer.",
                        "En uzun gündüz yaşanır ve yaz mevsimi başlar.",
                        "Gece ve gündüz süresi birbirine eşittir (12 saat)."
                    ],
                    correct: 2,
                    explanation: "21 Haziran'da Güneş ışınları Yengeç Dönencesi'ne dik gelir. Kuzey Yarım Küre'de yaz başlar ve yılın en uzun gündüzü yaşanır."
                },
                {
                    question: "K bölgesinde hava soğuk ve alçalıcı hava hareketi görülürken; L bölgesinde hava sıcak ve yükselici hava hareketi görülmektedir. Rüzgarın esme yönü hangisidir?",
                    options: [
                        "L bölgesinden K bölgesine doğrudur.",
                        "K bölgesinden L bölgesine doğrudur (Soğuktan Sıcağa).",
                        "Rüzgar oluşmaz çünkü hava açık olmalıdır.",
                        "Rüzgar sadece denizden karaya eser."
                    ],
                    correct: 1,
                    explanation: "Soğuk olan K bölgesi Yüksek Basınç, sıcak olan L bölgesi Alçak Basınçtır. Rüzgar her zaman Yüksek Basınçtan Alçak Basınca (K'den L'ye, yani soğuktan sıcağa) doğru eser."
                },
                {
                    question: "Aşağıdakilerden hangisi bir 'İklim' özelliğidir?",
                    options: [
                        "Bugün Ankara'da şiddetli sağanak yağış bekleniyor.",
                        "Antalya'da yarın hava sıcaklığı 32 derece olacak.",
                        "Doğu Anadolu Bölgesi'nde kışlar soğuk ve kar yağışlı geçer.",
                        "İstanbul Boğazı'nda aniden çıkan fırtına vapurları durdurdu."
                    ],
                    correct: 2,
                    explanation: "'Doğu Anadolu'da kışlar soğuk ve kar yağışlı geçer' ifadesi 35-40 yıllık uzun süreli ortalamayı ifade ettiği için iklimdir. Diğerleri anlık hava olaylarıdır."
                }
            ]
        },

        // ==========================================
        // 7. SINIF FEN BİLİMLERİ - 2026-2027 MEB
        // ==========================================
        "7-fen": {
            title: "7. Sınıf Fen Bilimleri",
            subtitle: "2026 - 2027 MEB Öğretim Programı & Yazılıya Hazırlık",
            presentation: {
                title: "1. Ünite: Güneş Sistemi ve Ötesi",
                desc: "Uzay araştırmaları, Türkiye'nin aktif uyduları, uzay kirliliği, teleskoplar, rasathaneler, ışık yılı, bulutsular ve yıldız döngüsü.",
                file: "7-sinif.html",
                slidesCount: "7 Kapsamlı Bölüm",
                badge: "Yazılıda Çıkacak Konular"
            },
            notes: [
                {
                    title: "Uzay Araçları & Ayırt Edici Özellikler",
                    important: "Sınavda Kesin Sorulur!",
                    badge: "F.7.1.1.1",
                    content: `
                        <ul class="styled-list">
                            <li><span class="hl">Uzay İstasyonu:</span> Astronotların uzun süre kalıp deney yaptığı dev uzay laboratuvarları (Örn: ISS).</li>
                            <li><span class="hl">Uzay Mekiği:</span> Dünya ile uzay arasında insan ve malzeme taşıyan, <strong>tekrar tekrar kullanılabilen</strong> uçak benzeri araçlar.</li>
                            <li><span class="hl">Uzay Sondası:</span> Gezegenleri incelemek için uzaya gönderilen <strong>insansız</strong> robotik araçlar.</li>
                            <li><span class="hl">Yapay Uydu:</span> Dünya yörüngesinde haberleşme, gözlem ve haritalama yapan araçlar.</li>
                        </ul>
                        <div class="note-alert">
                            💡 <strong>Önemli İpucu:</strong> 'İnsansız araştırma aracı' diyorsa cevap <u>Uzay Sondası</u>; 'tekrar kullanılabilen araç' diyorsa <u>Uzay Mekiği</u>dir!
                        </div>
                    `
                },
                {
                    title: "Türkiye'nin Yapay Uyduları",
                    important: "Milli Gururumuz - Güncel Liste",
                    badge: "F.7.1.1.2",
                    content: `
                        <div class="comparison-grid">
                            <div class="comp-card warm">
                                <h4>📡 Aktif Haberleşme Uyduları</h4>
                                <p>Türksat 3A, Türksat 4A, Türksat 4B, Türksat 5A, Türksat 5B ve ilk yerli haberleşme uydumuz <strong>Türksat 6A</strong>.</p>
                            </div>
                            <div class="comp-card cold">
                                <h4>🌍 Aktif Gözlem Uyduları</h4>
                                <p>Göktürk-1, Göktürk-2, <strong>İMECE</strong> ve Rasat (yerli gözlem uyduları).</p>
                            </div>
                        </div>
                        <div class="note-highlight mt-2">
                            ⚠️ <strong>Dikkat:</strong> Göktürk ve İMECE uyduları TV yayını veya haberleşme için değil, yüksek çözünürlüklü Dünya gözlemi ve haritacılık için kullanılır!
                        </div>
                    `
                },
                {
                    title: "Işık Yılı ve Bulutsular (Nebula)",
                    important: "En Çok Yanılınan Nokta!",
                    badge: "F.7.1.2.1",
                    content: `
                        <div class="note-alert">
                            🚫 <strong>BÜYÜK TUZAK:</strong> 'Işık Yılı' kesinlikle bir ZAMAN BİRİMİ DEĞİLDİR! Işığın boşlukta 1 yılda kat ettiği <strong>MESAFE / UZAKLIK</strong> ölçüsüdür.
                        </div>
                        <p><strong>Bulutsu (Nebula):</strong> Yıldızların doğduğu yerdir. Gaz ve toz bulutlarının yoğunlaşmasıyla yıldızlar oluşur. <em>Örnekler:</em> Orion (Avcı) bulutsusu, Atbaşı bulutsusu, Tarantula bulutsusu.</p>
                    `
                },
                {
                    title: "Yıldızların Yaşam Döngüsü & Renkleri",
                    important: "Yıldızların Doğumu ve Ölümü",
                    badge: "F.7.1.2.2",
                    content: `
                        <p><strong>Yıldız Sıcaklıkları:</strong> 🔵 Mavi/Beyaz (En Sıcak) &gt; 🟡 Sarı (Orta Sıcaklık - Güneş) &gt; 🔴 Kırmızı (En Soğuk).</p>
                        <p><strong>Küçük Kütleli Yıldız:</strong> Kızıl Dev &rarr; Gezegenimsi Bulutsu &rarr; <strong>Beyaz Cüce</strong> olarak hayatını tamamlar (Güneşimiz bu gruptadır).</p>
                        <p><strong>Büyük Kütleli Yıldız:</strong> Kırmızı Üstdev &rarr; Süpernova Patlaması &rarr; <strong>Nötron Yıldızı (Pulsar)</strong> veya <strong>Kara Delik</strong> olur.</p>
                    `
                }
            ],
            curriculum: [
                { unit: "1. Ünite", name: "Güneş Sistemi ve Ötesi", hours: "16 Saat (%11.1)", period: "1. Dönem (Eylül - Ekim)", status: "Mevcut & Aktif" },
                { unit: "2. Ünite", name: "Hücre ve Bölünmeler (Mitoz / Mayoz)", hours: "28 Saat (%19.4)", period: "1. Dönem (Ekim - Aralık)", status: "Hazırlanıyor" },
                { unit: "3. Ünite", name: "Kuvvet ve Enerji (Kütle, Ağırlık, İş, Enerji)", hours: "24 Saat (%16.7)", period: "1. Dönem (Aralık - Ocak)", status: "Hazırlanıyor" },
                { unit: "4. Ünite", name: "Saf Madde ve Karışımlar (Atom, Bileşik, Çözelti)", hours: "28 Saat (%19.4)", period: "2. Dönem (Şubat - Mart)", status: "Hazırlanıyor" },
                { unit: "5. Ünite", name: "Işığın Madde ile Etkileşimi (Aynalar, Kırılma)", hours: "28 Saat (%19.4)", period: "2. Dönem (Nisan - Mayıs)", status: "Hazırlanıyor" },
                { unit: "6. Ünite", name: "Canlılarda Üreme, Büyüme ve Gelişme", hours: "10 Saat (%6.9)", period: "2. Dönem (Mayıs)", status: "Hazırlanıyor" },
                { unit: "7. Ünite", name: "Elektrik Devreleri (Seri / Paralel Bağlama)", hours: "10 Saat (%6.9)", period: "2. Dönem (Haziran)", status: "Hazırlanıyor" }
            ],
            quiz: [
                {
                    question: "Gezegenlerin yüzeyine inerek veya yakınına giderek fotoğraf çeken, veri toplayan İNSANSIZ uzay araçlarına ne ad verilir?",
                    options: [
                        "Uzay Mekiği",
                        "Uzay Sondası",
                        "Uzay İstasyonu",
                        "Teleskop"
                    ],
                    correct: 1,
                    explanation: "Uzay sondaları insan taşımayan, robotik, doğrudan gök cisimlerini inceleyen araştırma araçlarıdır."
                },
                {
                    question: "Aşağıda verilen uydularımızdan hangisi haberleşme değil, 'GÖZLEM' amacıyla uzayda görev yapmaktadır?",
                    options: [
                        "Türksat 4A",
                        "Türksat 5B",
                        "Türksat 6A",
                        "Göktürk-1"
                    ],
                    correct: 3,
                    explanation: "Türksat serisi haberleşme ve yayın uydusudur. Göktürk-1, Göktürk-2 ve İMECE ise yüksek çözünürlüklü gözlem uydularımızdır."
                },
                {
                    question: "'Işık Yılı' kavramı ile ilgili verilen ifadelerden hangisi DOĞRUDUR?",
                    options: [
                        "Güneş etrafındaki 365 günlük süreyi belirten bir zaman ölçüsüdür.",
                        "Gök cisimleri arasındaki mesafeyi ifade eden bir UZAKLIK birimidir.",
                        "Bir ışık kaynağının yaydığı parlaklık miktarını gösterir.",
                        "Yıldızların ömrünü ölçmek için kullanılan bir takvim birimidir."
                    ],
                    correct: 1,
                    explanation: "Işık yılı, ışığın boşlukta 1 Dünya yılında aldığı yaklaşık 9.5 trilyon kilometrelik YOL (mesafe/uzaklık) birimidir. Zaman birimi değildir."
                },
                {
                    question: "Büyük kütleli bir yıldızın ömrünün sonunda geçirdiği şiddetli patlama ve ardından dönüşebileceği yapı hangisinde doğru verilmiştir?",
                    options: [
                        "Süpernova Patlaması &rarr; Kara Delik veya Nötron Yıldızı",
                        "Gezegenimsi Bulutsu &rarr; Beyaz Cüce",
                        "Kızıl Dev &rarr; Sarı Cüce",
                        "Nebula Patlaması &rarr; Gezegen"
                    ],
                    correct: 0,
                    explanation: "Büyük kütleli yıldızlar süpernova patlaması geçirerek ya Nötron Yıldızına (Pulsar) ya da çekim gücü sonsuz olan Kara Deliğe dönüşür."
                }
            ]
        },

        // ==========================================
        // 6. SINIF FEN BİLİMLERİ - 2026-2027 MEB
        // ==========================================
        "6-fen": {
            title: "6. Sınıf Fen Bilimleri",
            subtitle: "2026 - 2027 MEB Öğretim Programı",
            presentation: {
                title: "1. Ünite: Güneş Sistemi ve Tutulmalar",
                desc: "Gezegenler, meteor ve gök taşları, Güneş ve Ay tutulmaları interaktif ders notu.",
                file: "#",
                slidesCount: "Hazırlanıyor",
                badge: "Yakında Yayında"
            },
            notes: [
                {
                    title: "Gezegenlerin Sıralaması",
                    important: "Güneş'e Yakınlık Sırası",
                    badge: "F.6.1.1.1",
                    content: `
                        <p><strong>İç (Karasal) Gezegenler:</strong> Merkür, Venüs, Dünya, Mars.</p>
                        <p><strong>Dış (Gazsal) Gezegenler:</strong> Jüpiter, Satürn, Uranüs, Neptün.</p>
                        <div class="note-highlight">
                            💡 <strong>Akılda Tutma Kodu:</strong> <u>M</u>eraklı <u>V</u>eli <u>D</u>ün <u>M</u>açta <u>J</u>öleli <u>S</u>açını <u>U</u>nutup <u>N</u>alları dikti.
                        </div>
                    `
                }
            ],
            curriculum: [
                { unit: "1. Ünite", name: "Güneş Sistemi ve Tutulmalar", hours: "14 Saat (%9.7)", period: "1. Dönem (Eylül - Ekim)", status: "Yakında" },
                { unit: "2. Ünite", name: "Vücudumuzdaki Sistemler (Destek, Sindirim, Dolaşım, Solunum, Boşaltım)", hours: "34 Saat (%23.6)", period: "1. Dönem (Ekim - Aralık)", status: "Yakında" },
                { unit: "3. Ünite", name: "Kuvvet ve Hareket (Bileşke Kuvvet, Sabit Süratli Hareket)", hours: "16 Saat (%11.1)", period: "1. Dönem (Ocak)", status: "Yakında" },
                { unit: "4. Ünite", name: "Madde ve Isı (Yoğunluk, Isı Yalıtımı, Yakıtlar)", hours: "26 Saat (%18.1)", period: "2. Dönem (Şubat - Mart)", status: "Yakında" },
                { unit: "5. Ünite", name: "Ses ve Özellikleri (Yayılma, Yansıma, Yalıtım)", hours: "14 Saat (%9.7)", period: "2. Dönem (Nisan)", status: "Yakında" },
                { unit: "6. Ünite", name: "Vücudumuzdaki Sistemler ve Sağlığı (Denetleyici/Düzenleyici)", hours: "24 Saat (%16.7)", period: "2. Dönem (Mayıs)", status: "Yakında" },
                { unit: "7. Ünite", name: "Elektriğin İletimi (İletken ve Yalıtkan Maddeler)", hours: "16 Saat (%11.1)", period: "2. Dönem (Haziran)", status: "Yakında" }
            ],
            quiz: []
        },

        // ==========================================
        // 5. SINIF FEN BİLİMLERİ - 2026-2027 MEB
        // ==========================================
        "5-fen": {
            title: "5. Sınıf Fen Bilimleri",
            subtitle: "2026 - 2027 MEB Öğretim Programı",
            presentation: {
                title: "1. Ünite: Güneş, Dünya ve Ay",
                desc: "Güneş'in yapısı, Ay'ın evreleri ve hareketleri ders sunumu.",
                file: "#",
                slidesCount: "Hazırlanıyor",
                badge: "Yakında Yayında"
            },
            notes: [
                {
                    title: "Ay'ın Evreleri",
                    important: "Ana ve Ara Evreler",
                    badge: "F.5.1.2.1",
                    content: `
                        <p><strong>Ana Evreler (1'er hafta sürer):</strong> Yeni Ay &rarr; İlk Dördün (D harfi) &rarr; Dolunay (Tam parlak daire) &rarr; Son Dördün (Ters D harfi).</p>
                        <p><strong>Ara Evreler:</strong> Hilal ve Şişkin Ay.</p>
                    `
                }
            ],
            curriculum: [
                { unit: "1. Ünite", name: "Güneş, Dünya ve Ay", hours: "18 Saat (%12.5)", period: "1. Dönem (Eylül - Ekim)", status: "Yakında" },
                { unit: "2. Ünite", name: "Canlılar Dünyası (Mikroskobik, Mantarlar, Bitkiler, Hayvanlar)", hours: "30 Saat (%20.8)", period: "1. Dönem (Ekim - Aralık)", status: "Yakında" },
                { unit: "3. Ünite", name: "Kuvvetin Ölçülmesi ve Sürtünme (Dinamometre)", hours: "18 Saat (%12.5)", period: "1. Dönem (Aralık - Ocak)", status: "Yakında" },
                { unit: "4. Ünite", name: "Madde ve Değişim (Erime, Donma, Buharlaşma, Genleşme)", hours: "30 Saat (%20.8)", period: "2. Dönem (Şubat - Mart)", status: "Yakında" },
                { unit: "5. Ünite", name: "Işığın Yayılması (Gölge Oluşumu)", hours: "18 Saat (%12.5)", period: "2. Dönem (Nisan)", status: "Yakında" },
                { unit: "6. Ünite", name: "İnsan ve Çevre (Biyoçeşitlilik, Çevre Kirliliği)", hours: "18 Saat (%12.5)", period: "2. Dönem (Mayıs)", status: "Yakında" },
                { unit: "7. Ünite", name: "Elektrik Devre Elemanları (Devre Çizimi ve Şemalar)", hours: "12 Saat (%8.4)", period: "2. Dönem (Haziran)", status: "Yakında" }
            ],
            quiz: []
        },

        // ==========================================
        // 8. SINIF TÜRKÇE (LGS) - 2026-2027 MEB
        // ==========================================
        "8-turkce": {
            title: "8. Sınıf Türkçe (LGS)",
            subtitle: "2026 - 2027 MEB Öğretim Programı & LGS Sözel Mantık",
            presentation: {
                title: "1. Ünite: Fiilimsiler (Eylemsiler)",
                desc: "İsim-fiil, sıfat-fiil ve zarf-fiil ekleri, kalıplaşmış isim tuzakları.",
                file: "#",
                slidesCount: "Hazırlanıyor",
                badge: "LGS'de Garanti 1 Soru"
            },
            notes: [
                {
                    title: "Fiilimsiler (Eylemsiler) Şifreleri",
                    important: "Ek Ezberleme Formülleri",
                    badge: "T.8.3.14",
                    content: `
                        <ul class="styled-list">
                            <li><strong>İsim-Fiil:</strong> -ma, -ış, -mak &rarr; <em>"MA-YIŞ-MAK"</em></li>
                            <li><strong>Sıfat-Fiil:</strong> -an, -ası, -mez, -ar, -dik, -ecek, -miş &rarr; <em>"ANASI MEZAR DİKECEKMİŞ"</em></li>
                            <li><strong>Zarf-Fiil:</strong> -ken, -alı, -esiye, -meden, -ince, -ip, -erek... &rarr; Durum veya zaman anlamı katar.</li>
                        </ul>
                        <div class="note-alert">
                            ⚠️ <strong>Kalıplaşmış İsim Tuzağı:</strong> "Dondurma", "Dolma", "Ekmek", "Çakmak" gibi sözcükler eylem özelliğini tamamen kaybettiği için fiilimsi DEĞİLDİR, kalıcı isimdir!
                        </div>
                    `
                }
            ],
            curriculum: [
                { unit: "1. Konu", name: "Sözcükte ve Söz Öbeklerinde Anlam", hours: "16 Saat", period: "1. Dönem (Eylül)", status: "Hazırlanıyor" },
                { unit: "2. Konu", name: "Fiilimsiler (İsim-Fiil, Sıfat-Fiil, Zarf-Fiil)", hours: "14 Saat", period: "1. Dönem (Ekim)", status: "Hazırlanıyor" },
                { unit: "3. Konu", name: "Cümlenin Ögeleri (Temel ve Yardımcı Ögeler)", hours: "16 Saat", period: "1. Dönem (Kasım)", status: "Hazırlanıyor" },
                { unit: "4. Konu", name: "Paragrafta Anlam, Yapı ve Mantık Muhakeme", hours: "36 Saat", period: "Tüm Yıl Boyunca", status: "LGS Odaklı" },
                { unit: "5. Konu", name: "Metin Türleri ve Söz Sanatları", hours: "12 Saat", period: "1. Dönem (Ocak)", status: "Hazırlanıyor" },
                { unit: "6. Konu", name: "Fiilde Çatı (Öznesine ve Nesnesine Göre)", hours: "14 Saat", period: "2. Dönem (Şubat - Mart)", status: "Hazırlanıyor" },
                { unit: "7. Konu", name: "Cümle Türleri ve Anlatım Bozuklukları", hours: "18 Saat", period: "2. Dönem (Nisan - Mayıs)", status: "Hazırlanıyor" },
                { unit: "8. Konu", name: "Yazım Kuralları ve Noktalama İşaretleri", hours: "18 Saat", period: "Tüm Yıl Boyunca", status: "Hazırlanıyor" }
            ],
            quiz: []
        },

        // ==========================================
        // 7. SINIF TÜRKÇE - 2026-2027 MEB
        // ==========================================
        "7-turkce": {
            title: "7. Sınıf Türkçe",
            subtitle: "2026 - 2027 MEB Öğretim Programı",
            presentation: {
                title: "1. Ünite: Fiillerde Anlam ve Kipler",
                desc: "İş, oluş, durum fiilleri, haber ve dilek kipleri konu anlatımı.",
                file: "#",
                slidesCount: "Hazırlanıyor",
                badge: "Temel Dilbilgisi"
            },
            notes: [
                {
                    title: "İş, Oluş ve Durum Fiilleri",
                    important: "Tek Taktikle Çöz!",
                    badge: "T.7.3.12",
                    content: `
                        <p>Fiilin başına <strong>"ONU"</strong> kelimesini getirin:</p>
                        <ul class="styled-list">
                            <li><strong>İş (Kılış) Fiili:</strong> Başına "onu" alıyorsa iş fiilidir (Örn: onu okudu, onu yazdı, onu çözdü).</li>
                            <li><strong>Durum Fiili:</strong> Başına "onu" almıyorsa ve iradeyle yapılıyorsa durum fiilidir (Örn: onu güldü ❌, onu uyudu ❌).</li>
                            <li><strong>Oluş Fiili:</strong> İrade dışı, zamanla kendiliğinden gerçekleşen fiziksel/kimyasal değişimlerdir (Örn: paslanmak, sararmak, uzamak, bayatlamak).</li>
                        </ul>
                    `
                }
            ],
            curriculum: [
                { unit: "1. Konu", name: "Fiillerde Anlam (İş, Oluş, Durum)", hours: "14 Saat", period: "1. Dönem (Eylül)", status: "Hazırlanıyor" },
                { unit: "2. Konu", name: "Fiil Çekimi (Haber ve Dilek Kipleri, Kişi)", hours: "20 Saat", period: "1. Dönem (Ekim - Kasım)", status: "Hazırlanıyor" },
                { unit: "3. Konu", name: "Ek Fiil (İsimlere ve Fiillere Gelen)", hours: "16 Saat", period: "1. Dönem (Aralık)", status: "Hazırlanıyor" },
                { unit: "4. Konu", name: "Zarf (Belirteç) Türleri", hours: "14 Saat", period: "2. Dönem (Şubat - Mart)", status: "Hazırlanıyor" },
                { unit: "5. Konu", name: "Paragrafta Anlam, Ana Fikir ve Söz Sanatları", hours: "36 Saat", period: "Tüm Yıl Boyunca", status: "Hazırlanıyor" },
                { unit: "6. Konu", name: "Anlatım Bozuklukları, Yazım ve Noktalama", hours: "24 Saat", period: "2. Dönem (Nisan - Mayıs)", status: "Hazırlanıyor" }
            ],
            quiz: []
        }
    }
};
