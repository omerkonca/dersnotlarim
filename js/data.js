/**
 * DERS VE MÜFREDAT VERİ TABANI
 * Öğretmen yeni ders, sınıf veya ünite eklemek istediğinde sadece bu dosyaya ekleme yapabilir.
 */
const EDUCATION_DATA = {
    classes: [
        { id: "8", name: "8. Sınıf (LGS)", badge: "LGS Hazırlık", active: true },
        { id: "7", name: "7. Sınıf", badge: "Kritik Kademe", active: true },
        { id: "6", name: "6. Sınıf", badge: "Temel Güçlendirme", active: false },
        { id: "5", name: "5. Sınıf", badge: "Ortaokula İlk Adım", active: false }
    ],

    subjects: [
        { id: "fen", name: "Fen Bilimleri", icon: "bi-radioactive", color: "#38bdf8", active: true },
        { id: "turkce", name: "Türkçe", icon: "bi-book", color: "#f43f5e", active: true },
        { id: "matematik", name: "Matematik", icon: "bi-calculator", color: "#10b981", active: false }
    ],

    // Duyurular / Öğretmen Mesajı
    announcements: [
        {
            tag: "Önemli Duyuru",
            date: "Bugün",
            title: "8. Sınıf LGS 1. Ünite Soru Çözümü Yayında!",
            desc: "Mevsimler ve İklim konusuna ait yeni nesil sorular ve deneme testi soru çözümü bölümüne eklendi."
        },
        {
            tag: "Ders Hatırlatması",
            date: "Bu Hafta",
            title: "7. Sınıf Güneş Sistemi ve Ötesi Yazılı Provamız Başlıyor",
            desc: "Ders sunumundaki 'Sınavda Çıkar!' notlarını mutlaka tekrar edin ve testleri çözün."
        }
    ],

    // İçerikler: Sınıf ve Ders bazlı
    content: {
        "8-fen": {
            title: "8. Sınıf Fen Bilimleri",
            subtitle: "LGS ve Okul Yazılılarına Yönelik Konu Anlatımı, Sunumlar ve Yeni Nesil Sorular",
            presentation: {
                title: "1. Ünite: Mevsimler ve İklim",
                desc: "Dünya'nın hareketleri, eksen eğikliği, önemli tarihler, rüzgar oluşumu ve küresel iklim değişikliği sunumu.",
                file: "8-sinif.html",
                slidesCount: "7 Temel Bölüm",
                badge: "LGS'de Garanti 1-2 Soru"
            },
            notes: [
                {
                    title: "Eksen Eğikliği & Mevsimler",
                    important: "Sınavda Kesin Çıkar!",
                    badge: "Kritik Kural",
                    content: `
                        <p><strong>Eksen Eğikliği (23° 27'):</strong> Dünya'mız Güneş etrafında dolanırken dik değil, eğik durur.</p>
                        <div class="note-highlight">
                            <strong>Altın Kural:</strong> Işınlar <strong>DİK (90°)</strong> gelirse çok ısınır (YAZ). Eğik gelirse ışınlar yayılır, az ısınır (KIŞ).
                        </div>
                        <p><strong>Gölge Boyu:</strong> Yazın öğle vakti ışınlar dik geldiğinden gölge EN KISA, kışın ise en uzundur.</p>
                        <div class="note-alert">
                            ⚠️ <strong>Tuzak:</strong> Dünya'nın Güneş'e olan mesafesinin mevsimlerle HİÇBİR ilgisi yoktur! Ocak ayında Güneş'e en yakınız ama Kuzey Yarım Küre kış mevsimini yaşar.
                        </div>
                    `
                },
                {
                    title: "Kritik Tarihler (Gündönümü & Ekinoks)",
                    important: "Tarihleri Karıştırma!",
                    badge: "Tarih Tablosu",
                    content: `
                        <ul class="styled-list">
                            <li><strong>21 Haziran:</strong> KYK'de yaz, GYK'de kış başlar. KYK'de en uzun gündüz yaşanır. Güneş <u>Yengeç Dönencesi</u>'ne dik gelir.</li>
                            <li><strong>21 Aralık:</strong> KYK'de kış, GYK'de yaz başlar. KYK'de en uzun gece yaşanır. Güneş <u>Oğlak Dönencesi</u>'ne dik gelir.</li>
                            <li><strong>21 Mart & 23 Eylül (Ekinoks):</strong> Dünyanın her yerinde gece=gündüz (12 saat). Güneş Ekvator'a dik düşer.</li>
                        </ul>
                    `
                },
                {
                    title: "Rüzgar Oluşumu & Basınç Alanları",
                    important: "Yeni Nesil Soru Kalıbı",
                    badge: "Fiziksel Mekanizma",
                    content: `
                        <p>Rüzgar her zaman <strong>YÜKSEK BASINÇTAN &rarr; ALÇAK BASINCA</strong> (Soğuktan &rarr; Sıcağa) doğru eser.</p>
                        <div class="comparison-grid">
                            <div class="comp-card cold">
                                <h4>❄️ Yüksek Basınç (Soğuk)</h4>
                                <ul>
                                    <li>Hava soğuk ve yoğundur.</li>
                                    <li>Alçalıcı hava hareketi vardır.</li>
                                    <li>Hava açıktır, bulut/yağış olmaz.</li>
                                    <li>Merkezden çevreye doğru hava hareketi.</li>
                                </ul>
                            </div>
                            <div class="comp-card warm">
                                <h4>🔥 Alçak Basınç (Sıcak)</h4>
                                <ul>
                                    <li>Hava sıcak ve hafiftir.</li>
                                    <li>Yükselici hava hareketi vardır.</li>
                                    <li>Bulutlanma ve yağış ihtimali yüksektir.</li>
                                    <li>Çevreden merkeze doğru hava hareketi.</li>
                                </ul>
                            </div>
                        </div>
                    `
                },
                {
                    title: "İklim vs Hava Durumu",
                    important: "Karşılaştırma Tablosu",
                    badge: "Kavram Karşılaştırma",
                    content: `
                        <p><strong>İklim:</strong> Geniş bölgede 35-40 yıllık ortalama hava olaylarıdır. Kesindir, değişmesi zordur. Bilim dalı: <em>Klimatoloji</em>, uzmanı: <em>Klimatolog</em>.</p>
                        <p><strong>Hava Olayı:</strong> Dar bir alanda, günün belirli saatlerinde anlık görülen olaylardır. Tahminidir. Bilim dalı: <em>Meteoroloji</em>, uzmanı: <em>Meteorolog</em>.</p>
                    `
                }
            ],
            curriculum: [
                { unit: "1. Ünite", name: "Mevsimler ve İklim", hours: "16 Saat", period: "1. Dönem (Eylül - Ekim)", status: "Mevcut & Aktif" },
                { unit: "2. Ünite", name: "DNA ve Genetik Kod", hours: "36 Saat", period: "1. Dönem (Ekim - Aralık)", status: "Hazırlanıyor" },
                { unit: "3. Ünite", name: "Basınç (Katı, Sıvı, Gaz)", hours: "14 Saat", period: "1. Dönem (Aralık - Ocak)", status: "Hazırlanıyor" },
                { unit: "4. Ünite", name: "Madde ve Endüstri", hours: "36 Saat", period: "2. Dönem (Şubat - Nisan)", status: "Hazırlanıyor" },
                { unit: "5. Ünite", name: "Basit Makineler", hours: "18 Saat", period: "2. Dönem (Nisan - Mayıs)", status: "Hazırlanıyor" },
                { unit: "6. Ünite", name: "Enerji Dönüşümleri ve Çevre Bilimi", hours: "22 Saat", period: "2. Dönem (Mayıs)", status: "Hazırlanıyor" },
                { unit: "7. Ünite", name: "Elektrik Yükleri ve Elektrik Enerjisi", hours: "14 Saat", period: "2. Dönem (Haziran)", status: "Hazırlanıyor" }
            ],
            quiz: [
                {
                    question: "Dünya'nın eksen eğikliği ve Güneş etrafında dolanması sonucunda aşağıdakilerden hangisi MEYDANA GELİR?",
                    options: [
                        "Gece ve gündüzün ardalanması",
                        "Mevsimlerin oluşması ve yıllık sıcaklık farkları",
                        "Dünya'nın kendi etrafında dönme süresinin değişmesi",
                        "Güneş'in Dünya'ya olan fiziksel uzaklığının mevsimleri belirlemesi"
                    ],
                    correct: 1,
                    explanation: "Mevsimlerin oluşumu iki temel nedene bağlıdır: 1) Eksen eğikliği (23° 27'), 2) Dünya'nın Güneş etrafında dolanması. Gece ve gündüz ise günlük hareket sonucu oluşur."
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
                    explanation: "21 Haziran'da Güneş ışınları Yengeç Dönencesi'ne dik düşer. Kuzey Yarım Küre'de yaz başlar ve yılın en uzun gündüzü yaşanır."
                },
                {
                    question: "Komşu iki bölgeden K bölgesinde hava soğuk ve alçalıcı hava hareketi gözlenirken; L bölgesinde hava sıcak ve yükselici hava hareketi görülmektedir. Buna göre rüzgarın yönü hangisidir?",
                    options: [
                        "L bölgesinden K bölgesine doğrudur.",
                        "K bölgesinden L bölgesine doğrudur (Soğuktan Sıcağa).",
                        "Rüzgar oluşmaz çünkü hava açık olmalıdır.",
                        "Rüzgar sadece denizden karaya eser."
                    ],
                    correct: 1,
                    explanation: "Soğuk olan K bölgesi Yüksek Basınç alanıdır. Sıcak olan L bölgesi Alçak Basınç alanıdır. Rüzgar daima Yüksek Basınçtan Alçak Basınca (K'den L'ye, yani soğuktan sıcağa) doğru eser."
                },
                {
                    question: "Aşağıdakilerden hangisi bir 'İklim' özelliğidir?",
                    options: [
                        "Bugün Ankara'da şiddetli sağanak bekleniyor.",
                        "Antalya'da yarın hava sıcaklığı 32 derece olacak.",
                        "Doğu Anadolu Bölgesi'nde kışlar soğuk ve kar yağışlı geçer.",
                        "İstanbul Boğazı'nda aniden çıkan fırtına vapurları durdurdu."
                    ],
                    correct: 2,
                    explanation: "'Doğu Anadolu'da kışlar soğuk ve kar yağışlı geçer' ifadesi 35-40 yıllık uzun süreli ortalamayı ifade ettiği için iklimdir. Diğerleri günlüktür (hava olayı)."
                }
            ]
        },

        "7-fen": {
            title: "7. Sınıf Fen Bilimleri",
            subtitle: "Uzay Araştırmaları, Gök Cisimleri ve Hücre / Kuvvet Üniteleri",
            presentation: {
                title: "1. Ünite: Güneş Sistemi ve Ötesi",
                desc: "Uzay araştırmaları, yapay uydularımız, uzay kirliliği, teleskoplar, ışık yılı, bulutsular ve yıldızların yaşam döngüsü.",
                file: "7-sinif.html",
                slidesCount: "7 Kapsamlı Bölüm",
                badge: "Yazılıda Çıkacak Konular"
            },
            notes: [
                {
                    title: "Uzay Araçları & Ayırt Edici Özellikler",
                    important: "Sınavda Kesin Sorulur!",
                    badge: "Temel Kavramlar",
                    content: `
                        <ul class="styled-list">
                            <li><span class="hl">Uzay İstasyonu:</span> Astronotların uzun süre kalıp deney yaptığı dev uzay laboratuvarı (Örn: Uluslararası Uzay İstasyonu - ISS).</li>
                            <li><span class="hl">Uzay Mekiği:</span> Dünya ile uzay arasında insan ve kargo taşıyan, <strong>tekrar tekrar kullanılabilen</strong> uçak benzeri araç.</li>
                            <li><span class="hl">Uzay Sondası:</span> Gezegenleri incelemek için uzaya gönderilen <strong>insansız</strong> robotik araçlar.</li>
                            <li><span class="hl">Yapay Uydu:</span> Dünya yörüngesinde haberleşme, gözlem ve haritalama yapan araçlar.</li>
                        </ul>
                        <div class="note-alert">
                            💡 <strong>Önemli İpucu:</strong> Soru metninde 'insansız araştırma aracı' diyorsa cevap <u>Uzay Sondası</u>; 'tekrar kullanılabilen araç' diyorsa <u>Uzay Mekiği</u>dir!
                        </div>
                    `
                },
                {
                    title: "Türkiye'nin Yapay Uyduları",
                    important: "Milli Gururumuz - Güncel Liste",
                    badge: "Haberleşme & Gözlem",
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
                            ⚠️ <strong>Dikkat:</strong> Göktürk ve İMECE uyduları haberleşme veya TV yayını için değil, yüksek çözünürlüklü Dünya gözlemi ve haritacılık için kullanılır!
                        </div>
                    `
                },
                {
                    title: "Işık Yılı ve Bulutsular (Nebula)",
                    important: "En Çok Yanılınan Nokta!",
                    badge: "Mesafe ve Yıldız Doğumu",
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
                    badge: "Astrofizik Özeti",
                    content: `
                        <p><strong>Yıldız Sıcaklıkları:</strong> 🔵 Mavi/Beyaz (En Sıcak) &gt; 🟡 Sarı (Orta Sıcaklık - Güneş) &gt; 🔴 Kırmızı (En Soğuk).</p>
                        <p><strong>Küçük Kütleli Yıldız:</strong> Kızıl Dev &rarr; Gezegenimsi Bulutsu &rarr; <strong>Beyaz Cüce</strong> olarak hayatını tamamlar (Güneşimiz bu gruptadır).</p>
                        <p><strong>Büyük Kütleli Yıldız:</strong> Kırmızı Üstdev &rarr; Süpernova Patlaması &rarr; <strong>Nötron Yıldızı (Pulsar)</strong> veya <strong>Kara Delik</strong> olur.</p>
                    `
                }
            ],
            curriculum: [
                { unit: "1. Ünite", name: "Güneş Sistemi ve Ötesi", hours: "16 Saat", period: "1. Dönem (Eylül - Ekim)", status: "Mevcut & Aktif" },
                { unit: "2. Ünite", name: "Hücre ve Bölünmeler (Mitoz / Mayoz)", hours: "30 Saat", period: "1. Dönem (Ekim - Aralık)", status: "Hazırlanıyor" },
                { unit: "3. Ünite", name: "Kuvvet ve Enerji (İş, Kinetik, Potansiyel)", hours: "24 Saat", period: "1. Dönem (Aralık - Ocak)", status: "Hazırlanıyor" },
                { unit: "4. Ünite", name: "Saf Madde ve Karışımlar", hours: "30 Saat", period: "2. Dönem (Şubat - Mart)", status: "Hazırlanıyor" },
                { unit: "5. Ünite", name: "Işığın Madde ile Etkileşimi (Aynalar, Kırılma)", hours: "28 Saat", period: "2. Dönem (Nisan - Mayıs)", status: "Hazırlanıyor" },
                { unit: "6. Ünite", name: "Canlılarda Üreme, Büyüme ve Gelişme", hours: "18 Saat", period: "2. Dönem (Mayıs)", status: "Hazırlanıyor" },
                { unit: "7. Ünite", name: "Elektrik Devreleri", hours: "14 Saat", period: "2. Dönem (Haziran)", status: "Hazırlanıyor" }
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

        // İleride eklenebilecek 6. Sınıf Fen
        "6-fen": {
            title: "6. Sınıf Fen Bilimleri",
            subtitle: "Güneş Sistemi ve Tutulmalar, Vücudumuzdaki Sistemler",
            presentation: {
                title: "1. Ünite: Güneş Sistemi ve Tutulmalar",
                desc: "Gezegenler, meteor ve gök taşları, Güneş ve Ay tutulmaları interaktif ders notu.",
                file: "#",
                slidesCount: "İçerik Hazırlanıyor",
                badge: "Yakında Yayında"
            },
            notes: [
                {
                    title: "Gezegenlerin Sıralaması ve Özellikleri",
                    important: "Güneş'e Yakınlık Sırası",
                    badge: "Ezberleme Kodu",
                    content: `
                        <p><strong>Sıralama:</strong> Merkür, Venüs, Dünya, Mars (Karasal / İç Gezegenler) - Jüpiter, Satürn, Uranüs, Neptün (Gazsal / Dış Gezegenler).</p>
                        <div class="note-highlight">
                            💡 <strong>Akılda Tutma Kodu:</strong> <u>M</u>eraklı <u>V</u>eli <u>D</u>ün <u>M</u>açta <u>J</u>öleli <u>S</u>açını <u>U</u>nutup <u>N</u>alları dikti.
                        </div>
                    `
                }
            ],
            curriculum: [
                { unit: "1. Ünite", name: "Güneş Sistemi ve Tutulmalar", hours: "16 Saat", period: "1. Dönem", status: "Yakında" },
                { unit: "2. Ünite", name: "Vücudumuzdaki Sistemler", hours: "34 Saat", period: "1. Dönem", status: "Yakında" }
            ],
            quiz: []
        },

        // İleride eklenebilecek 5. Sınıf Fen
        "5-fen": {
            title: "5. Sınıf Fen Bilimleri",
            subtitle: "Güneş, Dünya ve Ay, Canlılar Dünyası",
            presentation: {
                title: "1. Ünite: Güneş, Dünya ve Ay",
                desc: "Güneş'in yapısı, Ay'ın evreleri ve hareketleri ders sunumu.",
                file: "#",
                slidesCount: "İçerik Hazırlanıyor",
                badge: "Yakında Yayında"
            },
            notes: [
                {
                    title: "Ay'ın Evreleri",
                    important: "Ana ve Ara Evreler",
                    badge: "Görsel Kavram",
                    content: `
                        <p><strong>Ana Evreler (Haftalık):</strong> Yeni Ay &rarr; İlk Dördün (D harfi) &rarr; Dolunay (Tam parlak) &rarr; Son Dördün (Ters D harfi).</p>
                        <p><strong>Ara Evreler:</strong> Hilal ve Şişkin Ay.</p>
                    `
                }
            ],
            curriculum: [
                { unit: "1. Ünite", name: "Güneş, Dünya ve Ay", hours: "20 Saat", period: "1. Dönem", status: "Yakında" },
                { unit: "2. Ünite", name: "Canlılar Dünyası", hours: "26 Saat", period: "1. Dönem", status: "Yakında" }
            ],
            quiz: []
        },

        // Türkçe Dersi (7 ve 8. Sınıf için)
        "8-turkce": {
            title: "8. Sınıf Türkçe (LGS)",
            subtitle: "Fiilimsiler, Paragrafta Anlam, Cümle Türleri ve LGS Taktikleri",
            presentation: {
                title: "1. Ünite: Fiilimsiler (Eylemsiler)",
                desc: "İsim-fiil, sıfat-fiil ve zarf-fiil ekleri, kalıplaşmış isim tuzakları.",
                file: "#",
                slidesCount: "Modül Aktif Ediliyor",
                badge: "LGS'de Garanti 1 Soru"
            },
            notes: [
                {
                    title: "Fiilimsiler (Eylemsiler) Şifreleri",
                    important: "Ek Ezberleme Formülleri",
                    badge: "Altın Taktikler",
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
                { unit: "1. Ünite", name: "Sözcükte ve Cümlede Anlam", hours: "24 Saat", period: "1. Dönem", status: "Müfredata Uygun" },
                { unit: "2. Ünite", name: "Fiilimsiler", hours: "16 Saat", period: "1. Dönem", status: "Müfredata Uygun" },
                { unit: "3. Ünite", name: "Paragrafta Anlam ve Mantık Muhakeme", hours: "40 Saat", period: "Tüm Yıl", status: "LGS Odaklı" }
            ],
            quiz: []
        },

        "7-turkce": {
            title: "7. Sınıf Türkçe",
            subtitle: "Fiillerde Kip ve Kişi, Sözcükte Anlam, Yazım Kuralları",
            presentation: {
                title: "1. Ünite: Fiillerde Anlam ve Kipler",
                desc: "İş, oluş, durum fiilleri, haber ve dilek kipleri konu anlatımı.",
                file: "#",
                slidesCount: "Modül Aktif Ediliyor",
                badge: "Temel Dilbilgisi"
            },
            notes: [
                {
                    title: "İş, Oluş ve Durum Fiilleri",
                    important: "Tek Taktikle Çöz!",
                    badge: "Pratik Yöntem",
                    content: `
                        <p>Fiilin başına <strong>"ONU"</strong> kelimesini getirin:</p>
                        <ul class="styled-list">
                            <li><strong>İş (Kılış) Fiili:</strong> "Onu" alıyorsa iş fiilidir (Örn: onu okudu, onu yazdı).</li>
                            <li><strong>Durum Fiili:</strong> "Onu" almıyorsa ve iradeyle yapılıyorsa durum fiilidir (Örn: onu güldü ❌, onu uyudu ❌).</li>
                            <li><strong>Oluş Fiili:</strong> Zamanla kendiliğinden olan değişimlerdir (Örn: paslanmak, sararmak, uzamak, bayatlamak).</li>
                        </ul>
                    `
                }
            ],
            curriculum: [
                { unit: "1. Ünite", name: "Fiillerde Anlam (İş, Oluş, Durum)", hours: "18 Saat", period: "1. Dönem", status: "Hazırlanıyor" },
                { unit: "2. Ünite", name: "Fiil Çekimi (Kip ve Kişi)", hours: "24 Saat", period: "1. Dönem", status: "Hazırlanıyor" }
            ],
            quiz: []
        }
    }
};
