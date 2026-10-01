/**
 * MEB 2026 - 2027 EĞİTİM ÖĞRETİM YILI
 * FEN BİLİMLERİ VE TÜRKÇE RESMİ ÖĞRETİM PROGRAMI VERİTABANI
 * (Tüm Üniteler, Detaylı Konu Anlatımları, Formüller, Altın Taktikler ve Soru Havuzu)
 */
const EDUCATION_DATA = {
    academicYear: "2026 - 2027",

    classes: [
        { id: "8", name: "8. Sınıf (LGS)", badge: "LGS Hazırlık", active: true },
        { id: "7", name: "7. Sınıf", badge: "Şampiyon Paketi", active: true },
        { id: "6", name: "6. Sınıf", badge: "Temel Güçlendirme", active: true },
        { id: "5", name: "5. Sınıf", badge: "Ortaokula İlk Adım", active: true }
    ],

    subjects: [
        { id: "fen", name: "Fen Bilimleri", icon: "🌪️", color: "#38bdf8", active: true },
        { id: "turkce", name: "Türkçe", icon: "📖", color: "#f43f5e", active: true }
    ],

    content: {
        // ==========================================
        // 8. SINIF FEN BİLİMLERİ (LGS) - TÜM ÜNİTELER DETAYLI
        // ==========================================
        "8-fen": {
            title: "8. Sınıf Fen Bilimleri (LGS)",
            subtitle: "2026 - 2027 MEB Resmi Öğretim Programı & LGS Tam Kapsamlı Soru Bankası",
            
            presentation: {
                title: "1. Ünite: Mevsimler ve İklim",
                desc: "Dünya'nın hareketleri, eksen eğikliği (23° 27'), rüzgar oluşumu, yüksek/alçak basınç alanları ve küresel iklim değişikliği sunumu.",
                file: "8-sinif.html",
                slidesCount: "7 Temel Bölüm",
                badge: "LGS'de Garanti 1 Soru"
            },

            // Tüm 7 Ünitenin Detaylı Konu Anlatımları
            notes: [
                // 1. ÜNİTE
                {
                    unitId: 1,
                    unitName: "1. Ünite: Mevsimler ve İklim",
                    title: "Eksen Eğikliği & Mevsimler",
                    important: "Sınavda Kesin Çıkar!",
                    badge: "F.8.1.1.1",
                    content: `
                        <p><strong>Eksen Eğikliği (23° 27'):</strong> Dünya'mız Güneş etrafında dolanırken dik değil, 23° 27' eğik durur.</p>
                        <div class="note-highlight">
                            <strong>Altın Kural:</strong> Işınlar <strong>DİK (90°)</strong> veya dike yakın gelirse birim yüzeye düşen enerji artar ve o bölge çok ısınır (YAZ). Eğik açıyla gelirse ışınlar geniş alana yayılır, az ısınır (KIŞ).
                        </div>
                        <p><strong>Gölge Boyu:</strong> Yazın öğle vakti ışınlar dik geldiğinden gölge EN KISA, kışın eğik geldiğinden gölge EN UZUN olur.</p>
                        <div class="note-alert">
                            ⚠️ <strong>MEB Tuzağı:</strong> Dünya'nın Güneş'e olan fiziksel mesafesinin mevsimlerin oluşumuyla HİÇBİR ilgisi yoktur! Ocak ayında Güneş'e en yakınız ama Kuzey Yarım Küre kış mevsimini yaşar.
                        </div>
                    `
                },
                {
                    unitId: 1,
                    unitName: "1. Ünite: Mevsimler ve İklim",
                    title: "Kritik Tarihler (Gündönümü & Ekinoks)",
                    important: "Tarihleri Karıştırma!",
                    badge: "F.8.1.1.1",
                    content: `
                        <ul class="styled-list">
                            <li><strong>21 Haziran:</strong> KYK'de yaz başlar, en uzun gündüz yaşanır. Güneş ışınları <u>Yengeç Dönencesi</u>'ne dik düşer. GYK'de kış başlar.</li>
                            <li><strong>21 Aralık:</strong> KYK'de kış başlar, en uzun gece yaşanır. Güneş ışınları <u>Oğlak Dönencesi</u>'ne dik düşer. GYK'de yaz başlar.</li>
                            <li><strong>21 Mart & 23 Eylül (Ekinoks):</strong> Dünyanın her yerinde gece=gündüz (12 saat). Güneş Ekvator'a dik açıyla düşer.</li>
                        </ul>
                    `
                },
                {
                    unitId: 1,
                    unitName: "1. Ünite: Mevsimler ve İklim",
                    title: "Rüzgar Oluşumu & Basınç Alanları",
                    important: "Yeni Nesil LGS Kalıbı",
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
                                    <li>Merkezden çevreye doğru hava hareketi.</li>
                                </ul>
                            </div>
                            <div class="comp-card warm">
                                <h4>🔥 Alçak Basınç (Sıcak)</h4>
                                <ul>
                                    <li>Hava sıcak ve hafiftir.</li>
                                    <li>Yükselici hava hareketi vardır.</li>
                                    <li>Bulutlanma ve yağış ihtimali fazladır.</li>
                                    <li>Çevreden merkeze doğru hava hareketi.</li>
                                </ul>
                            </div>
                        </div>
                    `
                },

                // 2. ÜNİTE
                {
                    unitId: 2,
                    unitName: "2. Ünite: DNA ve Genetik Kod",
                    title: "DNA'nın Yapısı ve Eşlenmesi",
                    important: "LGS'de Garanti 2-3 Soru",
                    badge: "F.8.2.1.1",
                    content: `
                        <p><strong>Karmaşıktan Basite Sıralama (KEDİGENİ):</strong> Kromozom &gt; DNA &gt; Gen &gt; Nükleotid.</p>
                        <p><strong>Nükleotid Yapısı:</strong> Fosfat + Deoksiriboz Şekeri + Organik Baz.</p>
                        <div class="note-highlight">
                            <strong>Eşleşme Kuralı:</strong> Adenin (A) daima Timin (T) ile (ikili hidrojen bağı); Guanin (G) daima Sitozin (C) ile (üçlü hidrojen bağı) eşleşir. <em>Toplam Fosfat = Toplam Şeker = Toplam Baz = Toplam Nükleotid!</em>
                        </div>
                        <p><strong>DNA Eşlenmesi:</strong> Çift sarmal fermuar gibi açılır. Sitoplazmadaki serbest nükleotidler çekirdeğe girer ve kalıp zincirlerin karşısına uygun nükleotidler yerleşerek <strong>birebir aynı 2 yeni DNA</strong> oluşur (Yarı korunumlu eşlenme).</p>
                    `
                },
                {
                    unitId: 2,
                    unitName: "2. Ünite: DNA ve Genetik Kod",
                    title: "Mendel Kalıtımı & Çaprazlamalar",
                    important: "Olasılık Hesapları",
                    badge: "F.8.2.2.1",
                    content: `
                        <ul class="styled-list">
                            <li><strong>Baskın (Dominant) Gen:</strong> Büyük harfle gösterilir (A, B). Etkisini her durumda gösterir.</li>
                            <li><strong>Çekinik (Resesif) Gen:</strong> Küçük harfle gösterilir (a, b). Yalnızca homozigot (aa) iken etkisini gösterir.</li>
                            <li><strong>Saf Döl (Homozigot):</strong> AA veya aa. <strong>Melez Döl (Heterozigot):</strong> Aa.</li>
                        </ul>
                        <div class="note-alert">
                            💡 <strong>Önemli Kural:</strong> İki melez (Aa x Aa) çaprazlandığında: Fenotip oranı %75 Baskın, %25 Çekinik (3:1); Genotip oranı %25 AA, %50 Aa, %25 aa (1:2:1) olur. İnsanda çocuğun kız veya erkek olma olasılığı DAİMA %50'dir!
                        </div>
                    `
                },
                {
                    unitId: 2,
                    unitName: "2. Ünite: DNA ve Genetik Kod",
                    title: "Mutasyon vs Modifikasyon vs Adaptasyon",
                    important: "Ayırt Edici Tablo",
                    badge: "F.8.2.3.1",
                    content: `
                        <div class="comparison-grid">
                            <div class="comp-card cold">
                                <h4>🧬 Mutasyon</h4>
                                <ul>
                                    <li>Genin <strong>yapısı</strong> bozulur.</li>
                                    <li>Üreme hücresindeyse kalıtsaldır.</li>
                                    <li>Örn: Albinoluk, Van kedisinin gözleri, Down sendromu, 6 parmaklılık.</li>
                                </ul>
                            </div>
                            <div class="comp-card warm">
                                <h4>🌱 Modifikasyon</h4>
                                <ul>
                                    <li>Genin <strong>işleyişi</strong> değişir (yapı aynı).</li>
                                    <li>Asla kalıtsal değildir, çevre şartıyla olur.</li>
                                    <li>Örn: Sporcunun kas yapması, bronzlaşma, arı sütüyle beslenen kraliçe arı, Çuha çiçeği.</li>
                                </ul>
                            </div>
                        </div>
                        <p class="mt-2"><strong>Adaptasyon:</strong> Canlının yaşama ve üreme şansını artıran kalıtsal uyumlarıdır (Örn: Kutup ayısının beyaz kürkü ve geniş ayakları, kaktüsün iğne yaprakları ve su depolayan gövdesi).</p>
                    `
                },

                // 3. ÜNİTE
                {
                    unitId: 3,
                    unitName: "3. Ünite: Basınç",
                    title: "Katı Basıncı Formülü & Mantığı",
                    important: "P = G / S Kuralı",
                    badge: "F.8.3.1.1",
                    content: `
                        <p><strong>Katı Basıncı = Ağırlık (Kuvvet) / Yüzey Alanı (P = G / S)</strong></p>
                        <ul class="styled-list">
                            <li>Basınç, ağırlık (G) ile <strong>doğru orantılıdır</strong> (Ağırlık artarsa basınç artar).</li>
                            <li>Basınç, temas yüzey alanı (S) ile <strong>ters orantılıdır</strong> (Yüzey küçülürse basınç artar: bıçağın bilenmesi, çivi ucu, topuklu ayakkabı).</li>
                            <li>Yüzey büyürse basınç azalır (Örn: Kar ayakkabısı, traktörün geniş tekeri, fil ve devenin geniş tabanları).</li>
                        </ul>
                    `
                },
                {
                    unitId: 3,
                    unitName: "3. Ünite: Basınç",
                    title: "Sıvı Basıncı & Pascal Prensibi",
                    important: "P = h . d Kuralı",
                    badge: "F.8.3.1.2",
                    content: `
                        <p><strong>Sıvı Basıncı = Derinlik x Sıvı Yoğunluğu (P = h . d)</strong></p>
                        <div class="note-highlight">
                            <strong>Altın Kurallar:</strong>
                            1) Sıvı basıncı kabın şekline veya sıvı miktarına ASLA BAĞLI DEĞİLDİR!
                            2) Derinlik (h) her zaman sıvının <u>en üst açık yüzeyinden</u> aşağıya doğru ölçülür!
                        </div>
                        <p><strong>Pascal Prensibi:</strong> Sıvılar sıkıştırılamaz! Kapalı kaptaki sıvıya uygulanan basınç, sıvının temas ettiği her noktaya <strong>aynı büyüklükte ve dik olarak</strong> iletilir. (Örn: Berber koltuğu, hidrolik frenler, itfaiye merdiveni, su cenderesi).</p>
                    `
                },
                {
                    unitId: 3,
                    unitName: "3. Ünite: Basınç",
                    title: "Gaz Basıncı & Torricelli Deneyi",
                    important: "Açık Hava Basıncı (P0)",
                    badge: "F.8.3.1.3",
                    content: `
                        <p><strong>Torricelli Deneyi:</strong> Deniz seviyesinde, 0°C'de cıva dolu boruyu ters çevirdiğinde cıva yüksekliğini <strong>76 cm (76 cm-Hg)</strong> ölçmüştür.</p>
                        <div class="note-alert">
                            ⚠️ <strong>Kritik Kural:</strong> Deniz seviyesinden yukarılara (dağlara) çıkıldıkça açık hava basıncı <strong>AZALIR</strong> (Cıva seviyesi 76'dan aşağı düşer). Borunun kalınlığı veya eğik durması cıva yüksekliğini DEĞİŞTİRMEZ!
                        </div>
                    `
                },

                // 4. ÜNİTE
                {
                    unitId: 4,
                    unitName: "4. Ünite: Madde ve Endüstri",
                    title: "Periyodik Sistem & Elementlerin Özellikleri",
                    important: "Grup ve Periyot Bulma",
                    badge: "F.8.4.1.1",
                    content: `
                        <p>Elementler <strong>artan atom numaralarına (proton sayılarına)</strong> göre sıralanmıştır (Moseley kuralı). Yatay sıralara <em>Periyot</em> (7 adet), düşey sütunlara <em>Grup</em> (18 adet: 8 A, 10 B) denir.</p>
                        <ul class="styled-list">
                            <li><strong>Metaller (Sol taraf):</strong> Yüzeyleri parlaktır, tel ve levha haline gelir, elektriği ve ısıyı çok iyi iletir, oda sıcaklığında cıva hariç katıdır. Kendi aralarında alaşım yaparlar.</li>
                            <li><strong>Ametaller (Sağ taraf):</strong> Yüzeyleri mattır, kırılgandırlar tel/levha olmazlar, elektriği iyi iletmezler. <em>İstisna:</em> 1A grubundaki Hidrojen (H) ametaldir!</li>
                            <li><strong>Soygazlar (8A Grubu):</strong> Kararlıdırlar, bileşik yapmazlar, tek atomlu gaz haldedirler (He, Ne, Ar). Helyum'un son katmanında 2 elektron vardır ama 8A grubundadır!</li>
                        </ul>
                    `
                },
                {
                    unitId: 4,
                    unitName: "4. Ünite: Madde ve Endüstri",
                    title: "Fiziksel vs Kimyasal Değişim & Kütlenin Korunumu",
                    important: "Tepkime Kuralları",
                    badge: "F.8.4.2.1",
                    content: `
                        <p><strong>Fiziksel Değişim:</strong> Maddenin sadece dış görünüşü değişir, kimliği değişmez (Örn: Buzun erimesi, şekerin suda çözünmesi, kağıdın yırtılması, camın kırılması, yoğurttan ayran yapılması).</p>
                        <p><strong>Kimyasal Değişim:</strong> Maddenin iç yapısı ve kimliği değişir, yeni madde oluşur (Örn: Paslanma, yanma, fotosentez, mayalanma, solunum, çürüme, pişme).</p>
                        <div class="note-highlight">
                            ⚖️ <strong>Kütlenin Korunumu Kanunu:</strong> Kimyasal bir tepkimede Girenlerin Kütlesi = Ürünlerin Kütlesi. Atom sayısı, atom cinsi ve toplam proton/nötron sayısı daima KORUNUR! Molekül sayısı korunmak zorunda değildir.
                        </div>
                    `
                },
                {
                    unitId: 4,
                    unitName: "4. Ünite: Madde ve Endüstri",
                    title: "Asitler, Bazlar & pH Skalası",
                    important: "Tuzak Sorular",
                    badge: "F.8.4.3.1",
                    content: `
                        <div class="comparison-grid">
                            <div class="comp-card cold">
                                <h4>🍋 Asitler (pH 0 - 7)</h4>
                                <ul>
                                    <li>Tadları ekşidir. Sulu çözeltilerine H+ iyonu verirler.</li>
                                    <li>Mavi turnusolu <strong>KIRMIZIYA</strong> çevirirler.</li>
                                    <li>Metallerle tepkimeye girip H2 gazı çıkarırlar (Metal kapta saklanmaz!).</li>
                                    <li>Örn: Limon, sirke, HCl (Tuz ruhu), H2SO4 (Zaç yağı).</li>
                                </ul>
                            </div>
                            <div class="comp-card warm">
                                <h4>🧼 Bazlar (pH 7 - 14)</h4>
                                <ul>
                                    <li>Tadları acıdır, ele kayganlık hissi verirler. OH- iyonu verirler.</li>
                                    <li>Kırmızı turnusolu <strong>MAVİYE</strong> çevirirler.</li>
                                    <li>Cam ve porseleni matlaştırıp aşındırırlar.</li>
                                    <li>Örn: Sabun, deterjan, diş macunu, NaOH (Sud-kostik).</li>
                                </ul>
                            </div>
                        </div>
                        <p class="mt-2"><strong>Nötralleşme:</strong> Asit + Baz &rarr; Tuz + Su (pH = 7)</p>
                    `
                },

                // 5. ÜNİTE
                {
                    unitId: 5,
                    unitName: "5. Ünite: Basit Makineler",
                    title: "Basit Makinelerin Genel Kuralları",
                    important: "Altın Kural: İşten Kazanç Olmaz!",
                    badge: "F.8.5.1.1",
                    content: `
                        <div class="note-alert">
                            🚫 <strong>BÜYÜK KURAL:</strong> Hiçbir basit makinede <strong>İŞTEN VEYA ENERJİDEN KAZANÇ SAĞLANAMAZ!</strong> Sadece iş kolaylığı sağlanır.
                        </div>
                        <ul class="styled-list">
                            <li><strong>Kuvvet Kazancı:</strong> Kuvvet Kazancı = Yük / Kuvvet. Eğer 1'den büyükse kuvvetten kazanç vardır.</li>
                            <li><strong>Kuvvetten kazanç varsa &rarr; Yoldan aynı oranda KAYIP vardır!</strong> (Kuvvetten 2 kat kazanırsan ipi 2 kat fazla çekersin).</li>
                        </ul>
                    `
                },
                {
                    unitId: 5,
                    unitName: "5. Ünite: Basit Makineler",
                    title: "Kaldıraçlar, Makaralar ve Eğik Düzlem",
                    important: "Hesaplama Taktikleri",
                    badge: "F.8.5.1.2",
                    content: `
                        <ul class="styled-list">
                            <li><strong>Sabit Makara:</strong> Kuvvetten kazanç YOKTUR (F = P). Sadece kuvvetin yönünü değiştirir. İpi 1 metre çekersen yük 1 metre yükselir.</li>
                            <li><strong>Hareketli Makara:</strong> Kuvvetten 2 kat kazanç vardır (F = P / 2). Yoldan 2 kat kayıp vardır (İpi 2 metre çekersen yük 1 metre yükselir).</li>
                            <li><strong>Eğik Düzlem:</strong> <u>Daima kuvvetten kazanç vardır</u>. Kuvvet x Boy = Yük x Yükseklik (F . L = P . h). Boy (L) uzadıkça veya yükseklik (h) azaldıkça kuvvet kazancı ARTAR.</li>
                            <li><strong>Kaldıraç Prensibi:</strong> Kuvvet x Kuvvet Kolu = Yük x Yük Kolu. Kuvvet kolu yük kolundan uzunsa kuvvet kazancı vardır (Örn: El arabası, fındık kıracağı).</li>
                        </ul>
                    `
                },

                // 6. ÜNİTE
                {
                    unitId: 6,
                    unitName: "6. Ünite: Enerji Dönüşümleri",
                    title: "Besin Zinciri & Enerji Piramidi",
                    important: "%10 Yasası",
                    badge: "F.8.6.1.1",
                    content: `
                        <p><strong>Besin Zinciri Sıralaması:</strong> Üretici (Bitkiler, algler) &rarr; Otçul (1. Tüketici) &rarr; Etçil (2. Tüketici) &rarr; Hepçil/Üst Etçil. <em>Ayrıştırıcılar (Bakteri ve mantarlar) her basamakta bulunur!</em></p>
                        <div class="note-highlight">
                            <strong>Aşağıdan Yukarıya Çıkıldıkça (Enerji Piramidinde):</strong>
                            1) Aktarılan enerji azalır (Her basamakta enerjinin yalnızca <strong>%10'u</strong> aktarılır).
                            2) Biyolojik birikim (zehir miktarı) <strong>ARTAR</strong> (En çok zehir tepedeki canlıdadır!).
                            3) Birey sayısı genellikle azalır, canlı vücut büyüklüğü genellikle artar.
                        </div>
                    `
                },
                {
                    unitId: 6,
                    unitName: "6. Ünite: Enerji Dönüşümleri",
                    title: "Fotosentez vs Solunum",
                    important: "Denklem Karşılaştırması",
                    badge: "F.8.6.2.1",
                    content: `
                        <p><strong>Fotosentez:</strong> Karbondioksit + Su + Işık &rarr; Glikoz (Besin) + Oksijen (Sadece klorofilli canlılar ışıklı ortamda yapar).</p>
                        <p><strong>Oksijenli Solunum:</strong> Glikoz + Oksijen &rarr; Karbondioksit + Su + 32 ATP Enerji (Mitokondride, gece ve gündüz sürekli gerçekleşir).</p>
                        <div class="note-alert">
                            💡 <strong>Işık Rengi Tuzağı:</strong> Fotosentez hızı <u>Mor ve Kırmızı</u> ışıkta EN HIZLI, <u>Yeşil</u> ışıkta (yeşil ışık yansıtıldığı için) EN YAVAŞTIR!
                        </div>
                    `
                },

                // 7. ÜNİTE
                {
                    unitId: 7,
                    unitName: "7. Ünite: Elektrik Yükleri ve Enerjisi",
                    title: "Elektriklenme Çeşitleri & Elektroskop",
                    important: "Sürtünme, Dokunma, Etki",
                    badge: "F.8.7.1.1",
                    content: `
                        <ul class="styled-list">
                            <li><strong>Sürtünme ile Elektriklenme:</strong> Ebonit (Plastik) çubuk yün kumaşa sürtülürse &rarr; <strong>Eksi (-)</strong> yüklenir. Cam çubuk ipek kumaşa sürtülürse &rarr; <strong>Artı (+)</strong> yüklenir. (Yükler eşit ve zıt işaretlidir).</li>
                            <li><strong>Dokunma ile Elektriklenme:</strong> Toplam yük yarıçapları veya kapasiteleri oranında paylaşılır. Cisimler aynı cins yükle yüklenir.</li>
                            <li><strong>Etki (Tesir) ile Elektriklenme:</strong> Yaklaştırılan cisim zıt yükleri çeker, aynı yükleri en uzağa iter. Net yük değişmez.</li>
                            <li><strong>Elektroskop:</strong> Bir cismin elektrikle yüklü olup olmadığını ve yükün cinsini belirleyen araçtır. Nötr iken yapraklar kapalıdır; yüklü iken yapraklar açılır.</li>
                            <li><strong>Topraklama:</strong> Yüklü bir cismin iletken bir telle toprağa bağlanarak <strong>NÖTR</strong> hale getirilmesidir.</li>
                        </ul>
                    `
                }
            ],

            // 2026-2027 MEB Resmi Müfredatı (Tüm Ünitelerin Ayrıntılı Konu ve Kazanım Dökümü)
            curriculum: [
                {
                    unitId: 1,
                    unit: "1. Ünite",
                    name: "Mevsimler ve İklim",
                    hours: "14 Saat (%9.7)",
                    period: "1. Dönem (Eylül - Ekim)",
                    lgsWeight: "LGS'de 1 - 2 Soru (%10)",
                    status: "Mevcut & Aktif",
                    examTip: "Sınav Tuzağı: Dünya'nın Güneş'e olan mesafesi (Ocak ayında yakın, Temmuzda uzak olması) mevsimleri ASLA etkilemez. Mevsimleri 23° 27' eksen eğikliği ve Güneş ışınlarının geliş açısı belirler!",
                    topics: [
                        {
                            title: "Mevsimlerin Oluşumu & Gün Dönümleri",
                            code: "F.8.1.1.1",
                            summary: "Dünya'nın dönme ekseni eğikliği (23° 27') ve Güneş etrafında dolanması. Birim yüzeye aktarılan ısı enerjisi, ışınların geliş açısı (dik gelirse yaz, eğik gelirse kış). 21 Haziran (Yengeç Dönencesi dik, KYK yaz başlangıcı), 21 Aralık (Oğlak Dönencesi dik, GYK yaz başlangıcı), 21 Mart ve 23 Eylül (Ekinoks, tüm dünyada 12 saat gece - 12 saat gündüz)."
                        },
                        {
                            title: "İklim ve Hava Hareketleri",
                            code: "F.8.1.2.1",
                            summary: "Rüzgarın oluşumu: Yüksek Basınç (Soğuk, alçalıcı hava, açık hava) alanından Alçak Basınç (Sıcak, yükselici hava, bulutlu ve yağışlı) alanına doğru yatay hava akımı. Havadaki nem, yağış türleri (gökyüzüne yakın: yağmur, kar, dolu; yeryüzüne yakın: çiy, kırağı, sis)."
                        },
                        {
                            title: "İklim vs Hava Olayları & Küresel Isınma",
                            code: "F.8.1.2.2",
                            summary: "Meteoroloji (günlük, tahminî hava olayları, meteorolog) ile Klimatoloji (35-40 yıllık geniş bölge ortalaması, kesin, klimatolog) karşılaştırması. Sera gazları (CO2, CH4), sera etkisi ve küresel iklim değişikliğinin sonuçları."
                        }
                    ]
                },
                {
                    unitId: 2,
                    unit: "2. Ünite",
                    name: "DNA ve Genetik Kod",
                    hours: "36 Saat (%25.0)",
                    period: "1. Dönem (Ekim - Aralık)",
                    lgsWeight: "LGS'de 4 - 5 Soru (%25)",
                    status: "Mevcut & Aktif",
                    examTip: "Altın Formül: Toplam Fosfat = Toplam Şeker = Toplam Nükleotid = Toplam Baz. A=T ve G=C. Karmaşıktan basite: KROMOZOM > DNA > GEN > NÜKLEOTİD (KEDİGENİ formülü).",
                    topics: [
                        {
                            title: "DNA'nın Yapısı ve Kendini Eşlemesi",
                            code: "F.8.2.1.1",
                            summary: "Çift zincirli sarmal yapı. Nükleotidin bileşenleri (Fosfat, Deoksiriboz Şekeri, Organik Baz: A, T, G, C). DNA'nın fermuar gibi açılarak kendini eşlemesi, sitoplazmadaki serbest nükleotidlerin çekirdeğe girmesi ve oluşan 2 yeni DNA'nın birbirinin kopyası olması. Tek zincirdeki mutasyonlar onarılır, karşılıklı boş kalan yerler onarılamaz!"
                        },
                        {
                            title: "Kalıtım ve Mendel Çaprazlamaları",
                            code: "F.8.2.2.1",
                            summary: "Genotip (genetik yapı) ve Fenotip (dış görünüş). Baskın (dominant - A) ve Çekinik (resesif - a) genler. Saf döl (Homozigot - AA veya aa), Melez döl (Heterozigot - Aa). Monohibrit çaprazlamalar (Aa x Aa çaprazlamasında %75 baskın, %25 çekinik fenotip). İnsanda cinsiyetin belirlenmesi (Babadan gelen X veya Y kromozomu belirler). Akraba evliliğinin sakıncaları."
                        },
                        {
                            title: "Mutasyon, Modifikasyon ve Adaptasyon",
                            code: "F.8.2.3.1",
                            summary: "Mutasyon: DNA dizilimindeki kalıcı bozulmalar (Radyasyon, kimyasallar; orak hücreli anemi, albinoluk, Down sendromu). Modifikasyon: Çevre etkisiyle genin İŞLEYİŞİNİN değişmesi, kalıtsal değildir (Himalaya tavşanı, kas gelişimi, çuha çiçeği). Adaptasyon: Canlının yaşama ve üreme şansını artıran kalıtsal uyumlar (Kutup ayısının beyaz kürkü, kaktüsün iğne yaprakları, bukalemunun kamufle olması)."
                        },
                        {
                            title: "Biyoteknoloji ve Genetik Mühendisliği",
                            code: "F.8.2.4.1",
                            summary: "Gen aktarımı, gen tedavisi, klonlama (Dolly örneği), geleneksel ıslah, DNA parmak izi, aşılama ve yapay seçilim. Biyoteknolojinin tarım, tıp ve çevre alanındaki olumlu (insülin hormonu üretimi) ve olumsuz (alerjik reaksiyonlar, gen kaçışı) etkileri."
                        }
                    ]
                },
                {
                    unitId: 3,
                    unit: "3. Ünite",
                    name: "Basınç (Katı, Sıvı, Gaz)",
                    hours: "14 Saat (%9.7)",
                    period: "1. Dönem (Aralık - Ocak)",
                    lgsWeight: "LGS'de 2 - 3 Soru (%15)",
                    status: "Mevcut & Aktif",
                    examTip: "LGS Tüyosu: Katı basıncında P=G/S (yüzey küçülürse basınç artar). Sıvı basıncında P=h.d.g (kabın şekline ve sıvı miktarına ASLA bağlı değildir, sadece derinlik ve yoğunluk!).",
                    topics: [
                        {
                            title: "Katı Basıncı ve Günlük Yaşam",
                            code: "F.8.3.1.1",
                            summary: "Birim yüzeye dik uygulanan kuvvet. Ağırlıkla doğru, temas yüzeyiyle ters orantılıdır. Basıncı artırma örnekleri: Bıçağın bilenmesi, krampon çivileri, toplu iğne ucu. Basıncı azaltma örnekleri: Traktörün geniş tekerlekleri, fil/deve geniş tabanları, kar ayakkabısı."
                        },
                        {
                            title: "Sıvı Basıncı ve Pascal Prensibi",
                            code: "F.8.3.1.2",
                            summary: "Sıvıların ağırlıklarından dolayı temas ettikleri yüzeye uyguladığı basınç. Derinlik (h) ve sıvı yoğunluğu (d) ile doğru orantılıdır. Pascal Prensibi: Sıvılar sıkıştırılamaz ve üzerlerine uygulanan basıncı her doğrultuda aynen iletir. Uygulamalar: Berber koltuğu, hidrolik fren sistemi, itfaiye merdiveni, su cendereleri."
                        },
                        {
                            title: "Açık Hava & Gaz Basıncı",
                            code: "F.8.3.1.3",
                            summary: "Torricelli deneyi (Deniz seviyesinde 0°C'de 76 cm cıva basıncı). Denizden yükseklere çıkıldıkça açık hava basıncı AZALIR (Hava seyrekleşir). Magdeburk yarım küreleri deneyi, vantuzlar, pipetle meyve suyu içilmesi. Kapalı kaplardaki gaz basıncı taneciklerin çarpmasıyla oluşur ve her noktada eşittir."
                        }
                    ]
                },
                {
                    unitId: 4,
                    unit: "4. Ünite",
                    name: "Madde ve Endüstri",
                    hours: "36 Saat (%25.0)",
                    period: "2. Dönem (Şubat - Nisan)",
                    lgsWeight: "LGS'de 4 - 5 Soru (%25)",
                    status: "Mevcut & Aktif",
                    examTip: "En Kritik Kural: Kimyasal tepkimelerde kütle, atom cinsi ve atom sayısı DAİMA korunur. Asitler metallerle tepkimeye girer (metal kapta saklanmaz), bazlar cam ve porseleni matlaştırır!",
                    topics: [
                        {
                            title: "Periyodik Sistem ve Element Sınıfları",
                            code: "F.8.4.1.1",
                            summary: "Elementlerin artan proton sayılarına (atom numaralarına) göre dizilimi (Moseley). 7 periyot, 18 grup (8A, 10B). Metaller (iletken, parlak, tel/levha olur), Ametaller (kırılgan, mat, yalıtkan; 1A'daki Hidrojen istisnası!), Yarı metaller (fiziksel metal, kimyasal ametal), Soygazlar (8A kararlı, gaz; Helyum'un son katmanında 2 elektron vardır!)."
                        },
                        {
                            title: "Fiziksel ve Kimyasal Değişimler & Kimyasal Tepkimeler",
                            code: "F.8.4.2.1",
                            summary: "Fiziksel değişimde sadece dış görünüş değişir (erime, buharlaşma, kırılma). Kimyasal değişimde maddenin kimliği değişir (yanma, paslanma, mayalanma, fotosentez). Kimyasal tepkime denklemleri: Girenler -> Ürünler. Kütlenin Korunumu Kanunu: Tepkimeye giren maddelerin kütlesi = Ürünlerin kütlesi."
                        },
                        {
                            title: "Asitler, Bazlar ve Ayıraçlar (İndikatörler)",
                            code: "F.8.4.3.1",
                            summary: "Asitler (pH 0-7, tatları ekşi, H+ iyonu, mavi turnusolu kırmızı yapar, mermeri aşındırır, metallerle H2 gazı çıkarır). Bazlar (pH 7-14, tatları acı, ele kayganlık verir, OH- iyonu, kırmızı turnusolu mavi yapar, cam/porseleni tahrip eder). Asit yağmurları (SO2, NO2, CO2 gazları) ve çevreye zararları."
                        },
                        {
                            title: "Maddenin Isı ile Etkileşimi & Isınma Grafikleri",
                            code: "F.8.4.4.1",
                            summary: "Özısı (c): 1 gram maddenin sıcaklığını 1°C artırmak için gereken ısı. Özısısı küçük olan çabuk ısınır ve çabuk soğur! Hal değişim ısıları (erime ısısı Le, buharlaşma ısısı Lb). Isınma ve soğuma eğrileri; hal değişimi sırasında sıcaklık SABİT kalır."
                        }
                    ]
                },
                {
                    unitId: 5,
                    unit: "5. Ünite",
                    name: "Basit Makineler",
                    hours: "16 Saat (%11.1)",
                    period: "2. Dönem (Nisan - Mayıs)",
                    lgsWeight: "LGS'de 2 - 3 Soru (%15)",
                    status: "Mevcut & Aktif",
                    examTip: "LGS'nin Asla Şaşmayan Kuralı: HİÇBİR basit makinede İŞ'TEN VE ENERJİDEN KAZANÇ OLMAZ! Kuvvetten kazanırsan aynı oranda yoldan kaybedersin.",
                    topics: [
                        {
                            title: "Basit Makinelerin Temel İlkeleri",
                            code: "F.8.5.1.1",
                            summary: "Kuvvet kazancı = Yük / Kuvvet (1'den büyükse kuvvetten kazanç, yoldan kayıp vardır). İş kolaylığı sağlarlar. Asla yapılan işi veya enerjiyi azaltmazlar!"
                        },
                        {
                            title: "Makaralar (Sabit, Hareketli ve Palangalar)",
                            code: "F.8.5.1.2",
                            summary: "Sabit Makara: Kuvvet kazancı yoktur (F = P), sadece kuvvetin yönünü değiştirir. Hareketli Makara: 2 kat kuvvet kazancı sağlar (F = P / 2), ip 2 metre çekilirse yük 1 metre yükselir. Palangalar: Sabit ve hareketli makaraların birleşimiyle yüksek kuvvet kazancı sağlar."
                        },
                        {
                            title: "Kaldıraçlar, Eğik Düzlem, Çıkrık, Dişli ve Kasnaklar",
                            code: "F.8.5.1.3",
                            summary: "Kaldıraç türleri: Destek ortada (makas, tahterevalli), Yük ortada (el arabası, ceviz kıracağı - daima kuvvet kazancı), Kuvvet ortada (cımbız, maşa, tenis raketi - yoldan kazanç). Eğik düzlem: Daima kuvvet kazancı vardır (Kuvvet = Yük x Yükseklik / Boy). Çıkrık (kuyu kolu, kapı anahtarı), dişli çarklar ve vidanın çalışma prensipleri."
                        }
                    ]
                },
                {
                    unitId: 6,
                    unit: "6. Ünite",
                    name: "Enerji Dönüşümleri ve Çevre Bilimi",
                    hours: "14 Saat (%9.7)",
                    period: "2. Dönem (Mayıs)",
                    lgsWeight: "LGS'de 1 - 2 Soru (%10)",
                    status: "Mevcut & Aktif",
                    examTip: "Kritik Eşitlik: Fotosentez (Girenler: CO2 + H2O + Işık -> Çıkanlar: Besin/Glikoz + O2). Solunum (Girenler: Besin + O2 -> Çıkanlar: CO2 + H2O + ATP Enerjisi). Biri diğerinin tersidir!",
                    topics: [
                        {
                            title: "Besin Zinciri ve Enerji Piramidi",
                            code: "F.8.6.1.1",
                            summary: "Üreticiler (bitkiler, siyanobakteriler) -> Tüketiciler (otçul, etçil, hepçil) -> Ayrıştırıcılar (mantarlar, bakteriler). Enerji piramidinde aşağıdan yukarıya çıkıldıkça: Aktarılan enerji azalır (%10 kuralı), biyokütle azalır, canlı sayısı azalır, zehirli madde birikimi (biyolojik birikim) ARTAR!"
                        },
                        {
                            title: "Enerji Dönüşümleri: Fotosentez ve Solunum",
                            code: "F.8.6.2.1",
                            summary: "Fotosentez: Işık enerjisinin kimyasal bağ enerjisine çevrilmesi (Kloroplastta gerçekleşir, sadece ışıklı ortamda olur). Fotosentez hızını etkileyen faktörler: Işık şiddeti, ışığın rengi (morda/kırmızıda en hızlı, yeşilde en yavaş!), CO2 miktarı, sıcaklık. Solunum: Oksijenli solunum (mitokondri, çok ATP), Oksijensiz solunum (sitoplazma, az ATP), Fermantasyon (Laktik asit - yoğurt/çizgili kas, Etil alkol - ekmek mayası)."
                        },
                        {
                            title: "Madde Döngüleri ve Çevre Sorunları",
                            code: "F.8.6.3.1",
                            summary: "Su döngüsü, Karbon döngüsü, Oksijen döngüsü ve Azot döngüsü (Azot bağlayıcı bakteriler). Ozon tabakasının incelmesi (CFC gazları), sera etkisi, küresel ısınma ve Ekolojik Ayak İzi'ni küçültme yolları."
                        }
                    ]
                },
                {
                    unitId: 7,
                    unit: "7. Ünite",
                    name: "Elektrik Yükleri ve Elektrik Enerjisi",
                    hours: "14 Saat (%9.7)",
                    period: "2. Dönem (Haziran)",
                    lgsWeight: "LGS'de 1 - 2 Soru (%10)",
                    status: "Mevcut & Aktif",
                    examTip: "Unutma: Yalnızca NEGATİF YÜKLER (-) hareket eder! Pozitif yükler (+) proton çekirdekte olduğu için ASLA hareket etmez. Topraklamada nötrlenme gerçekleşir.",
                    topics: [
                        {
                            title: "Elektrik Yükleri ve Elektriklenme Çeşitleri",
                            code: "F.8.7.1.1",
                            summary: "Pozitif (+) ve Negatif (-) yükler. Aynı yükler iter, zıt yükler çeker. Nötr cisim = (+) ve (-) yük sayıları eşit olan cisim. Sürtünme ile elektriklenme (Ebonit çubuk yün kumaşa sürülürse ebonit eksi (-), Cam çubuk ipek kumaşa sürülürse cam artı (+) yüklenir). Dokunma ile elektriklenme (Toplam yük kapasitelerine göre paylaşılır). Etki (tesir) ile elektriklenme (Yüklerin kutuplanması)."
                        },
                        {
                            title: "Elektroskop ve Topraklama",
                            code: "F.8.7.2.1",
                            summary: "Elektroskop: Bir cismin yüklü olup olmadığını, yüklüyse hangi cins yükle yüklü olduğunu belirleyen araç (Topuz, iletken gövde ve hareketli yapraklar). Topraklama: Yüklü cismin iletken bir telle toprağa bağlanarak nötr hale getirilmesi. Yıldırımsavar (paratoner), tankerlerin topraklama zincirleri."
                        },
                        {
                            title: "Elektrik Enerjisinin Dönüşümü",
                            code: "F.8.7.3.1",
                            summary: "Elektrik enerjisinin ısıya dönüşümü (fırın, ütü, su ısıtıcısı - direnci yüksek tel), ışığa dönüşümü (akkor lamba, floresan, LED), harekete dönüşümü (elektrik motoru - mikser, vantilatör, çamaşır makinesi). Hareketten elektrik üretimi: Jeneratör / Dinamo (manyetik indüksiyon). Sigortanın devreyi koruma görevi ve kaçak akım rölesi."
                        }
                    ]
                }
            ],

            quiz: [
                // 1. ÜNİTE: MEVSİMLER VE İKLİM
                {
                    id: "8-q1",
                    unitId: 1,
                    unitName: "1. Ünite: Mevsimler ve İklim",
                    topic: "Eksen Eğikliği & Mevsimler",
                    difficulty: "LGS Çıkmış Seviyesi",
                    question: "Dünya'nın dönme ekseninin 23° 27' eğik olması ve Güneş etrafında dolanması sonucunda aşağıdakilerden hangisi MEYDANA GELİR?",
                    options: [
                        "Gece ve gündüzün ardalanması (günlük döngü)",
                        "Mevsimlerin oluşması ve yıl boyunca birim yüzeye düşen ışık enerjisinin değişmesi",
                        "Dünya'nın kendi etrafında dönme hızının periyodik olarak yavaşlaması",
                        "Dünya ile Güneş arasındaki mesafenin azalarak havaların ısınması"
                    ],
                    correct: 1,
                    explanation: "Mevsimlerin oluşumu iki temel sebebe bağlıdır: 1) Eksen eğikliği (23° 27'), 2) Dünya'nın Güneş etrafındaki yıllık dolanımı. Gece-gündüz ise günlük dönüşle oluşur."
                },
                {
                    id: "8-q2",
                    unitId: 1,
                    unitName: "1. Ünite: Mevsimler ve İklim",
                    topic: "Rüzgar Oluşumu & Basınç Alanları",
                    difficulty: "Yeni Nesil Beceri Temelli",
                    question: "K ve L şehirleri arasında yatay yönde şiddetli bir rüzgar estiği gözlemleniyor. Rüzgar K şehrinden L şehrine doğru estiğine göre, bu şehirlerle ilgili hangisi KESİNLİKLE DOĞRUDUR?",
                    options: [
                        "K şehri sıcaktır, L şehri soğuktur.",
                        "K şehrinde alçalıcı hava hareketi (Yüksek Basınç), L şehrinde yükselici hava hareketi (Alçak Basınç) görülür.",
                        "L şehrinde hava tamamen açık ve bulutsuzdur.",
                        "K şehrinde yağış ihtimali L şehrine göre çok daha yüksektir."
                    ],
                    correct: 1,
                    explanation: "Rüzgar her zaman YÜKSEK BASINÇTAN (Soğuk) &rarr; ALÇAK BASINCA (Sıcak) doğru eser. Dolayısıyla rüzgarın çıktığı K şehri soğuktur (alçalıcı hava / Yüksek Basınç), ulaştığı L şehri sıcaktır (yükselici hava / Alçak Basınç)."
                },

                // 2. ÜNİTE: DNA VE GENETİK KOD
                {
                    id: "8-q3",
                    unitId: 2,
                    unitName: "2. Ünite: DNA ve Genetik Kod",
                    topic: "DNA'nın Yapısı ve Nükleotidler",
                    difficulty: "LGS Klasik Kalıp",
                    question: "Sağlıklı bir DNA molekülünün yapısı incelendiğinde aşağıdaki eşitliklerden hangisi HER ZAMAN DOĞRUDUR?",
                    options: [
                        "Toplam Adenin sayısı = Toplam Guanin sayısı",
                        "Toplam Deoksiriboz Şekeri Sayısı = Toplam Fosfat Sayısı = Toplam Nükleotid Sayısı",
                        "Bir gende daima yalnızca 4 adet nükleotid bulunur.",
                        "Sitoplazmadaki serbest nükleotid sayısı hücre bölündükçe artar."
                    ],
                    correct: 1,
                    explanation: "Her nükleotidde 1 Fosfat, 1 Şeker ve 1 Organik Baz bulunur. Dolayısıyla Toplam Fosfat = Toplam Şeker = Toplam Nükleotid = Toplam Baz sayısı daima birbirine eşittir."
                },
                {
                    id: "8-q4",
                    unitId: 2,
                    unitName: "2. Ünite: DNA ve Genetik Kod",
                    topic: "Mendel Kalıtımı & Çaprazlama",
                    difficulty: "LGS Hesaplama Taktikleri",
                    question: "Melez sarı tohumlu (Aa) iki bezelye bitkisi kendi arasında çaprazlanıyor (Sarı renk baskın, yeşil renk çekiniktir). Oluşacak yeni bezelyelerin YEŞİL tohumlu olma olasılığı yüzde kaçtır?",
                    options: [
                        "%100",
                        "%75",
                        "%50",
                        "%25"
                    ],
                    correct: 3,
                    explanation: "Aa x Aa çaprazlamasında genotipler: AA (%25), Aa (%50), aa (%25) şeklinde oluşur. Yeşil tohum çekinik (aa) olduğundan oluşma olasılığı %25'tir (1/4)."
                },

                // 3. ÜNİTE: BASINÇ
                {
                    id: "8-q5",
                    unitId: 3,
                    unitName: "3. Ünite: Basınç",
                    topic: "Katı Basıncı & Yüzey Alanı",
                    difficulty: "LGS Deney Sorusu",
                    question: "Özdeş iki tuğla masanın üzerine önce tek olarak geniş yüzeyi üzerine konuluyor, ardından tuğlalar üst üste dik konularak yerleştiriliyor. Bu işlem sonucunda masaya uygulanan KUVVET ve BASINÇ nasıl değişir?",
                    options: [
                        "Kuvvet 2 katına çıkar, Basınç 2 katından fazla artar.",
                        "Kuvvet değişmez, Basınç 2 katına çıkar.",
                        "Kuvvet 2 katına çıkar, Basınç değişmez.",
                        "Her ikisi de yarıya iner."
                    ],
                    correct: 0,
                    explanation: "Masaya uygulanan dik kuvvet tuğlaların toplam ağırlığıdır. 1 tuğladan 2 tuğlaya çıkınca kuvvet 2 katına çıkar (G &rarr; 2G). Yüzey alanı da geniş yüzeyden dar yüzeye küçüldüğü için basınç (P = G / S) 2 katından da fazla artar."
                },
                {
                    id: "8-q6",
                    unitId: 3,
                    unitName: "3. Ünite: Basınç",
                    topic: "Sıvı Basıncı & Derinlik",
                    difficulty: "LGS Klasik Tuzak",
                    question: "Taban alanları ve şekilleri birbirinden farklı olan 3 ayrı kaba aynı yükseklikte (h) saf su konuluyor. Kapların tabanına etki eden sıvı basınçları (P1, P2, P3) arasındaki ilişki nasıldır?",
                    options: [
                        "P1 > P2 > P3",
                        "Geniş olan kabın taban basıncı en büyüktür.",
                        "P1 = P2 = P3 (Basınçlar eşittir)",
                        "Kabın daraldığı noktada sıvı basıncı artar."
                    ],
                    correct: 2,
                    explanation: "Sıvı basıncı formülü: P = h . d . g'dir. Kapların şekli, taban genişliği veya içindeki toplam su miktarı sıvı basıncını ETKİLEMEZ! Derinlik (h) ve yoğunluk (d) aynı olduğu için taban basınçları eşittir."
                },

                // 4. ÜNİTE: MADDE VE ENDÜSTRİ
                {
                    id: "8-q7",
                    unitId: 4,
                    unitName: "4. Ünite: Madde ve Endüstri",
                    topic: "Kimyasal Tepkimeler & Kütlenin Korunumu",
                    difficulty: "LGS Grafik Sorusu",
                    question: "Kapalı bir kapta gerçekleşen kimyasal bir tepkimede X ve Y maddeleri tepkimeye girerek Z maddesini oluşturmaktadır. Bu tepkime süresince hangisi KESİNLİKLE KORUNMAZ?",
                    options: [
                        "Kaptaki toplam kütle",
                        "Toplam atom sayısı ve atom cinsi",
                        "Toplam proton ve nötron sayısı",
                        "Kaptaki toplam molekül sayısı"
                    ],
                    correct: 3,
                    explanation: "Kimyasal tepkimelerde toplam kütle, atom sayısı, atom cinsi ve çekirdek yükü daima korunur. Ancak molekül sayısı korunmak zorunda değildir (Örn: 2H2 + O2 &rarr; 2H2O tepkimesinde 3 molekül girip 2 molekül çıkar)."
                },

                // 5. ÜNİTE: BASİT MAKİNELER
                {
                    id: "8-q8",
                    unitId: 5,
                    unitName: "5. Ünite: Basit Makineler",
                    topic: "Basit Makinelerin Genel Kuralları",
                    difficulty: "LGS Altın İlke",
                    question: "Aşağıdakilerden hangisi tüm basit makineler (kaldıraç, eğik düzlem, makara vb.) için GEÇERLİ BİR KURALDIR?",
                    options: [
                        "Daima kuvvetten kazanç sağlarlar.",
                        "Yapılan işten veya enerjiden kesinlikle kazanç sağlanamaz.",
                        "Kuvvetin yönünü daima değiştirirler.",
                        "Yoldan kazanç sağlandığında kuvvetten de kazanç sağlanır."
                    ],
                    correct: 1,
                    explanation: "Altın Kural: Hiçbir basit makine işten veya enerjiden kazanç sağlamaz! Sadece iş yapma kolaylığı sağlar. Kuvvetten kazanç varsa aynı oranda yoldan kayıp vardır."
                },

                // 6. ÜNİTE: ENERJİ DÖNÜŞÜMLERİ
                {
                    id: "8-q9",
                    unitId: 6,
                    unitName: "6. Ünite: Enerji Dönüşümleri",
                    topic: "Besin Zinciri & Enerji Piramidi",
                    difficulty: "Yeni Nesil Ekoloji",
                    question: "Bir besin piramidinde üreticilerden (en alttan) son tüketicilere (en üste) doğru çıkıldıkça aşağıdakilerden hangisi GERÇEKLEŞİR?",
                    options: [
                        "Biyolojik birikim (zehir miktarı) artar, aktarılan enerji azalır.",
                        "Canlı sayısı artar, aktarılan enerji artar.",
                        "Biyolojik birikim azalır, canlı vücut büyüklüğü küçülür.",
                        "Her basamakta enerjinin %90'ı bir üst basamağa aktarılır."
                    ],
                    correct: 0,
                    explanation: "Besin piramidinde yukarı çıkıldıkça: 1) Canlı dokularında biriken zehirli madde (biyolojik birikim) ARTAR, 2) Aktarılan enerji azalır (sadece %10 aktarılır, %90 kaybolur)."
                },

                // 7. ÜNİTE: ELEKTRİK YÜKLERİ
                {
                    id: "8-q10",
                    unitId: 7,
                    unitName: "7. Ünite: Elektrik Yükleri ve Enerjisi",
                    topic: "Elektriklenme Çeşitleri & Elektroskop",
                    difficulty: "LGS Yorum Sorusu",
                    question: "Ebonit (plastik) bir çubuk yün kumaşa sürtüldükten sonra nötr bir elektroskobun topuzuna DOKUNDURULUYOR. Bu deneyle ilgili hangisi DOĞRUDUR?",
                    options: [
                        "Ebonit çubuk pozitif (+) yüklenir.",
                        "Elektroskobun yaprakları negatif (-) yükle yüklenerek açılır.",
                        "Yün kumaş negatif (-) yüklenir.",
                        "Elektroskobun yaprakları nötr kalır ve açılmaz."
                    ],
                    correct: 1,
                    explanation: "Plastik (ebonit) çubuk yün kumaşa sürtülünce elektron alarak EKSİ (-) yüklenir. Eksi yüklü çubuk nötr elektroskoba dokundurulunca elektroskop da eksi yüklenir ve yaprakları aynı yüklerin birbirini itmesiyle açılır."
                },

                // 2. ÜNİTE EK SORULAR
                {
                    id: "8-q11",
                    unitId: 2,
                    unitName: "2. Ünite: DNA ve Genetik Kod",
                    topic: "Mutasyon vs Modifikasyon",
                    difficulty: "LGS Ayırt Etme",
                    question: "Aşağıdakilerden hangisi MUTASYON örneğidir?",
                    options: [
                        "Spor yapan kişinin kaslarının gelişmesi",
                        "Güneş altında tenin bronzlaşması",
                        "Down sendromunda 21. kromozomun üç kopya olması",
                        "Ç belgelerinin soğukta kısalması"
                    ],
                    correct: 2,
                    explanation: "Mutasyon gen/kromozom yapısındaki kalıtsal değişimdir. Kas gelişimi ve bronzlaşma modifikasyondur."
                },
                {
                    id: "8-q12",
                    unitId: 2,
                    unitName: "2. Ünite: DNA ve Genetik Kod",
                    topic: "DNA Eşlenmesi",
                    difficulty: "Yeni Nesil",
                    question: "DNA eşlenmesi sırasında A-T ve G-C eşleşmesi bozulursa ne olur?",
                    options: [
                        "Hücre daha hızlı bölünür",
                        "Genetik bilgi bozulabilir (mutasyon riski)",
                        "Fosfat sayısı otomatik artar",
                        "Şeker molekülü yok olur"
                    ],
                    correct: 1,
                    explanation: "Yanlış baz eşleşmesi genetik bilginin bozulmasına yani mutasyona yol açabilir."
                }
            ],

            flashcards: [
                { id: "8f-fc1", front: "Mevsimleri ne oluşturur?", back: "Eksen eğikliği (23°27') + Dünya'nın Güneş etrafında dolanması. Mesafe değil!" },
                { id: "8f-fc2", front: "Rüzgar hangi yönde eser?", back: "Yüksek basıçtan (soğuk) → alçak basınca (sıcak)." },
                { id: "8f-fc3", front: "A daima ne ile eşleşir?", back: "Timin (T) ile; G ise Sitozin (C) ile." },
                { id: "8f-fc4", front: "Katı basıncı formülü?", back: "P = G / S → yüzey küçüldükçe basınç artar." },
                { id: "8f-fc5", front: "Aa x Aa yeşil (aa) olasılığı?", back: "%25 (1/4). Fenotip 3:1 baskın:çekinik." }
            ]
        },

        // ==========================================
        // 7. SINIF FEN BİLİMLERİ - TÜM ÜNİTELER DETAYLI
        // ==========================================
        "7-fen": {
            title: "7. Sınıf Fen Bilimleri",
            subtitle: "1–7. Ünite + Sınav Şampiyonu hap + yazılı prova",
            presentation: {
                title: "7. Sınıf Fen · Tüm Üniteler",
                desc: "1–7. ünite: Uzaydan sürdürülebilir yaşama tam MEB paketi.",
                file: "7-sinif.html",
                slidesCount: "Not + Test + Hap + Yazılı",
                badge: "Şampiyon Paketi"
            },
            notes: [
                {
                    unitId: 0,
                    unitName: "⚡ Sınav Şampiyonu",
                    title: "En Çok Düşülen Sınav Tuzakları",
                    important: "True / False & Traps",
                    badge: "HAP",
                    content: `
                        <div class="note-alert">
                            🚨 <strong>TUZAK:</strong> “Işık yılı zaman dilimini belirten bir birimdir.”<br>
                            <strong>CEVAP: YANLIŞ!</strong> Işık yılı zaman birimi değil; ışığın boşlukta 1 yılda katettiği <strong>mesafe / uzaklık</strong> birimidir.
                        </div>
                        <div class="note-alert">
                            🚨 <strong>TUZAK:</strong> “Sırtındaki ağır çantayla düz yolda yatay yürüyen öğrenci fiziksel anlamda iş yapar.”<br>
                            <strong>CEVAP: YANLIŞ!</strong> İş için kuvvet ile hareket aynı doğrultuda olmalı. Kuvvet yukarı, hareket yatay → iş yok.
                        </div>
                        <div class="note-alert">
                            🚨 <strong>TUZAK:</strong> “Tüm yıldızlar aynı sıcaklıktadır; kırmızı yıldızlar en sıcaktır.”<br>
                            <strong>CEVAP: YANLIŞ!</strong> En sıcak: <strong>mavi / beyaz</strong> · Orta: <strong>sarı</strong> (Güneş) · En soğuk: <strong>kırmızı</strong>.
                        </div>
                        <div class="note-alert">
                            🚨 <strong>TUZAK:</strong> “Işık az yoğundan çok yoğuna geçerken normalden uzaklaşarak kırılır.”<br>
                            <strong>CEVAP: YANLIŞ!</strong> Az → çok: <strong>normale yaklaşır</strong>, hız azalır. Normalden uzaklaşma = çok → az.
                        </div>
                        <div class="note-alert">
                            🚨 <strong>TUZAK:</strong> “Hipermetrop için kalın kenarlı mercek kullanılır.”<br>
                            <strong>CEVAP: YANLIŞ!</strong> Hipermetrop → <strong>ince kenarlı (yakınsak)</strong>. Miyop → kalın kenarlı (ıraksak).
                        </div>
                        <div class="note-alert">
                            🚨 <strong>TUZAK:</strong> “Elementler formüllerle, bileşikler sembollerle gösterilir.”<br>
                            <strong>CEVAP: YANLIŞ!</strong> Element = <strong>sembol</strong> (Fe, O) · Bileşik = <strong>formül</strong> (H₂O, CO₂).
                        </div>
                        <div class="note-alert">
                            🚨 <strong>TUZAK:</strong> “Ekoloji piramidinde yukarı çıkıldıkça aktarılan enerji artar.”<br>
                            <strong>CEVAP: YANLIŞ!</strong> Yukarı: enerji ve canlı kütlesi <strong>azalır</strong>; biyolojik birikim <strong>artar</strong>.
                        </div>
                    `
                },
                {
                    unitId: 1,
                    unitName: "1. Ünite: Uzay Çağı",
                    title: "Uzay Teknolojileri ve Uzay Araçları",
                    important: "Tanımlar Yazılıda Çıkar",
                    badge: "F.7.1.1",
                    content: `
                        <p><strong>Uzay:</strong> Dünya'nın atmosferi dışında; Güneş, Ay, yıldızlar, gezegenler ve diğer gök cisimlerinin bulunduğu çok geniş ortamdır. Tamamen boş değildir.</p>
                        <ul class="styled-list">
                            <li><strong>Uzay Sondası:</strong> Gök cismini veya uzay olaylarını incelemek için gönderilen, Dünya'dan kontrol edilen <em>insansız ve robotik</em> araçtır. Enerjisini çoğunlukla güneş panelleriyle sağlar.</li>
                            <li><strong>Uzay Roketi:</strong> Uzay araçlarını / uyduları yeryüzünden yörüngeye taşıyan sivri burunlu silindir araçlardır. Günümüzde yeniden kullanılabilir roketler de üretilmektedir.</li>
                            <li><strong>Yapay Uydular:</strong> Dünya veya başka gök cisimleri çevresinde belirli yörüngede dolanan; iletişim, haberleşme, gözlem ve keşif amaçlı araçlardır.</li>
                            <li><strong>Uzay Mekiği:</strong> Yeniden kullanılabilen; astronotları, büyük uyduları ve malzemeleri uzay istasyonuna taşıyan araçtır.</li>
                            <li><strong>Uzay İstasyonu:</strong> Astronotların uzayda kalıp düşük yerçekimli ortamda bilimsel araştırma ve deney yapabildiği büyük uzay üssüdür.</li>
                            <li><strong>Uzay Teleskobu:</strong> Atmosferin ışığı engellemesinden etkilenmeden uzayı net incelemek için yörüngeye yerleştirilen teleskoplardır. Örn: <em>Hubble</em>, <em>James Webb</em> (günümüzün en gelişmişi).</li>
                        </ul>
                    `
                },
                {
                    unitId: 1,
                    unitName: "1. Ünite: Uzay Çağı",
                    title: "Türkiye'nin Yapay Uyduları",
                    important: "Türksat 6A & İMECE",
                    badge: "F.7.1.1",
                    content: `
                        <div class="note-highlight">
                            <strong>Aktif uydu sayısı:</strong> 6 haberleşme + 3 yer gözlem/keşif = <strong>toplam 9 aktif uydu</strong>.
                        </div>
                        <p><strong>Aktif haberleşme:</strong> Türksat 3A, 4A, 4B, 5A, 5B (iletişim, TV/veri). <strong>Türksat 6A (9 Temmuz 2024):</strong> Türkiye'nin ilk <em>yerli ve millî</em> haberleşme uydusu.</p>
                        <p><strong>Aktif gözlem / keşif:</strong></p>
                        <ul class="styled-list">
                            <li><strong>Göktürk-2:</strong> İlk yüksek çözünürlüklü keşif uydumuz</li>
                            <li><strong>Göktürk-1:</strong> Yüksek çözünürlüklü görüntü</li>
                            <li><strong>İMECE (15 Nisan 2023):</strong> Yerli ve millî gözlem; hedef tespit, doğal afet, tarım</li>
                        </ul>
                        <p><strong>Görevini tamamlamış (pasif):</strong> Haberleşme — Türksat 1B, 1C, 2A · Gözlem — Bilsat, Rasat.</p>
                        <div class="note-alert">
                            ⚠️ <strong>Not:</strong> Türksat 1A (1994) fırlatılırken roket arızası nedeniyle okyanusa düşmüştür.
                        </div>
                    `
                },
                {
                    unitId: 1,
                    unitName: "1. Ünite: Uzay Çağı",
                    title: "TUA, TÜBİTAK UZAY ve Alper Gezeravcı",
                    important: "İlk İnsanlı Misyon",
                    badge: "F.7.1.1",
                    content: `
                        <ul class="styled-list">
                            <li><strong>TÜBİTAK UZAY:</strong> Yerli ve millî uydular, uydu alt sistemleri ve uzay teknolojileri geliştiren lider araştırma merkezi.</li>
                            <li><strong>TUA (Türkiye Uzay Ajansı):</strong> 2018'de uzay ve havacılık bilimi amaçlarını gerçekleştirmek üzere kuruldu.</li>
                            <li><strong>Alper Gezeravcı:</strong> Türkiye'nin ilk uzay yolcusu. ISS'te biyoloji, malzeme bilimi ve genetik alanlarında <strong>13 bilimsel deney</strong> yaptı. Uzaydan ilk mesajı: <em>“İstikbal göklerdedir.”</em></li>
                        </ul>
                    `
                },
                {
                    unitId: 1,
                    unitName: "1. Ünite: Uzay Çağı",
                    title: "Uzay Kirliliği, Rasathane ve Teleskoplar",
                    important: "Gözlemevi Şartları",
                    badge: "F.7.1.1",
                    content: `
                        <p><strong>Uzay kirliliği:</strong> İşlevini yitirmiş uydular, roket parçaları ve yakıt tankları “uzay çöpü” oluşturur; aktif araçlar için tehlike yaratır.</p>
                        <div class="note-highlight">
                            <strong>Gözlemevi (rasathane) kurma şartları:</strong> şehir ışıklarından uzak (ışık kirliliği az), yüksek / yayla, bulutsuz gece sayısı fazla, hava temiz ve nemsiz.
                        </div>
                        <p><strong>Teleskop türleri:</strong> Aynalı (yansıtmalı), mercekli (kırılmalı), radyo teleskopları.</p>
                        <p><strong>Katki sağlayanlar:</strong> Ali Kuşçu (müderris / gök bilimci); Prof. Dr. Nüzhet Gökdoğan (ilk Türk kadın astronom doçenti / profesörü).</p>
                    `
                },
                {
                    unitId: 1,
                    unitName: "1. Ünite: Uzay Çağı",
                    title: "Yıldız Oluşumu ve Yaşam Döngüsü",
                    important: "Küçük vs Büyük Kütle",
                    badge: "F.7.1.2",
                    content: `
                        <p>Yıldızlar <strong>bulutsu (nebula)</strong> adı verilen hidrojen gazı ve toz bulutlarının kütle çekimiyle sıkışmasıyla oluşur. Örn: Atbaşı, Orion, Tarantula bulutsuları.</p>
                        <p>Yıldızın ömrünü ve sonunu <strong>başlangıç kütlesi</strong> belirler.</p>
                        <div class="comparison-grid">
                            <div class="comp-card cold">
                                <h4>Küçük kütleli (&lt; 8 Güneş)</h4>
                                <ul>
                                    <li>Bulutsu → Ön yıldız → Küçük kütleli yıldız</li>
                                    <li>→ Kırmızı dev → Gezegenimsi bulutsu</li>
                                    <li>→ <strong>Beyaz cüce</strong></li>
                                </ul>
                            </div>
                            <div class="comp-card warm">
                                <h4>Büyük kütleli (&gt; 8 Güneş)</h4>
                                <ul>
                                    <li>Bulutsu → Ön yıldız → Büyük kütleli yıldız</li>
                                    <li>→ Kırmızı süperdev → <strong>Süpernova</strong></li>
                                    <li>→ <strong>Nötron yıldızı (pulsar)</strong> veya <strong>kara delik</strong></li>
                                </ul>
                            </div>
                        </div>
                    `
                },
                {
                    unitId: 1,
                    unitName: "1. Ünite: Uzay Çağı",
                    title: "Yıldızların Sıcaklığı ve Renkleri",
                    important: "Mavi = En Sıcak",
                    badge: "F.7.1.2",
                    content: `
                        <ul class="styled-list">
                            <li><strong>En sıcak:</strong> Mavi veya beyaz</li>
                            <li><strong>Orta sıcaklık:</strong> Sarı (Güneş orta sıcaklıkta sarı bir yıldızdır)</li>
                            <li><strong>Soğuk:</strong> Kırmızı veya turuncu</li>
                        </ul>
                        <div class="note-alert">
                            💡 <strong>Şifre:</strong> Renk sıcaklığı gösterir — mavi/beyaz sıcak, kırmızı soğuk.
                        </div>
                    `
                },
                {
                    unitId: 1,
                    unitName: "1. Ünite: Uzay Çağı",
                    title: "Takımyıldızlar, Galaksiler ve Evren",
                    important: "Işık Yılı = Mesafe",
                    badge: "F.7.1.2",
                    content: `
                        <p><strong>Takımyıldız:</strong> Gökyüzünde bir aradaymış gibi görünen yıldız gruplarıdır (Büyükayı, Küçükayı, Kraliçe, Avcı/Orion, Başak, Ejderha, Çoban).</p>
                        <div class="note-highlight">
                            <strong>Kutup Yıldızı (Polaris):</strong> Küçükayı'dadır; her zaman <strong>Kuzey</strong> yönünü gösterir.
                        </div>
                        <p><strong>Işık yılı:</strong> Zaman birimi değildir; <strong>mesafe (uzunluk)</strong> birimidir — ışığın uzayda 1 yılda aldığı yol.</p>
                        <p><strong>Galaksi (gök ada):</strong> Yıldızlar, gaz, toz ve sistemlerin oluşturduğu dev yapıdır. Güneş sistemimiz sarmal <strong>Samanyolu</strong>'nun <strong>Avcı (Orion) kolunda</strong>dır. En yakın büyük galaksi: sarmal <strong>Andromeda</strong>.</p>
                        <div class="note-alert">
                            📐 <strong>Sıra:</strong> Evren &gt; Galaksi (Samanyolu) &gt; Güneş Sistemi &gt; Dünya
                        </div>
                    `
                },
                {
                    unitId: 2,
                    unitName: "2. Ünite: Kuvvet ve Enerjiyi Keşfedelim",
                    title: "Fiziksel Anlamda İş",
                    important: "İki Şart + Joule",
                    badge: "F.7.2.1",
                    content: `
                        <p>Günlük hayattaki “iş” ile <strong>fiziksel anlamda iş</strong> farklıdır. Fiziksel iş için <strong>iki şart</strong> gerekir:</p>
                        <ol class="styled-list">
                            <li>Cisme <strong>net bir kuvvet</strong> uygulanmalı</li>
                            <li>Cisim, bu net kuvvet <strong>doğrultusunda yer değiştirmeli</strong></li>
                        </ol>
                        <div class="note-highlight">
                            <strong>Birim:</strong> Kuvvet Newton (N), yol metre (m) → yapılan iş <strong>Joule (J)</strong>.
                        </div>
                        <div class="note-alert">
                            🛑 <strong>İş YOK:</strong> Duvarı itip kıpırdatamamak (yer değiştirme yok) · Sırtında çantayla düz yolda yatay yürümek (kuvvet yukarı, hareket yatay) · Halteri baş üstünde sabit tutmak (yer değiştirme yok).
                        </div>
                    `
                },
                {
                    unitId: 2,
                    unitName: "2. Ünite: Kuvvet ve Enerjiyi Keşfedelim",
                    title: "Enerji ve Enerji Çeşitleri",
                    important: "Kinetik & Potansiyel",
                    badge: "F.7.2.1",
                    content: `
                        <p><strong>Enerji:</strong> İş yapabilme yeteneğidir. İş ve enerjinin birimi aynıdır: <strong>Joule (J)</strong>.</p>
                        <p><strong>Kinetik enerji (hareket):</strong> Cismin hareketinden dolayı sahip olduğu enerjidir. <strong>Kütle</strong> ve <strong>hız</strong> ile doğru orantılıdır. Aynı kütlede hızı fazla olanın kinetik enerjisi ve durma mesafesi daha büyüktür.</p>
                        <p><strong>Potansiyel enerji (durum):</strong> Cismin durumundan dolayı depoladığı kabul edilen enerjidir.</p>
                        <div class="comparison-grid">
                            <div class="comp-card cold">
                                <h4>Çekim potansiyel</h4>
                                <ul>
                                    <li>Yerçekimi etkisiyle <strong>yükseklikten</strong> gelir</li>
                                    <li><strong>Ağırlık (kütle)</strong> ve <strong>yükseklik</strong>e bağlıdır</li>
                                </ul>
                            </div>
                            <div class="comp-card warm">
                                <h4>Esneklik potansiyel</h4>
                                <ul>
                                    <li>Esnek cisimlerin (yay, lastik, sünger) sıkışması / gerilmesi</li>
                                    <li>Kuvvet kalkınca eski hâline döner</li>
                                </ul>
                            </div>
                        </div>
                    `
                },
                {
                    unitId: 2,
                    unitName: "2. Ünite: Kuvvet ve Enerjiyi Keşfedelim",
                    title: "Enerjinin Korunumu ve Sarkaç",
                    important: "Yok Olmaz, Dönüşür",
                    badge: "F.7.2.2",
                    content: `
                        <div class="note-highlight">
                            <strong>Enerjinin Korunumu Kanunu:</strong> Enerji yoktan var olamaz, var olan yok olmaz; bir türden başka türe dönüşebilir.
                        </div>
                        <p><strong>Sarkaç / salıncak:</strong></p>
                        <ul class="styled-list">
                            <li><strong>En üst:</strong> Çekim potansiyel enerji en büyük, kinetik = 0</li>
                            <li><strong>İnerken:</strong> Potansiyel azalır, kinetik artar</li>
                            <li><strong>En alt (orta):</strong> Kinetik enerji en büyük değere ulaşır</li>
                        </ul>
                    `
                },
                {
                    unitId: 2,
                    unitName: "2. Ünite: Kuvvet ve Enerjiyi Keşfedelim",
                    title: "Sürtünme Kuvveti ve Enerji",
                    important: "Isı · Ses · Işık",
                    badge: "F.7.2.2",
                    content: `
                        <p>Hareketli cisimlerin kinetik enerjisi sürtünme etkisiyle <strong>ısı, ses ve ışık</strong> enerjisine dönüşür; cisim yavaşlar ve durur.</p>
                        <div class="note-alert">
                            🚗 <strong>Kaçış rampası:</strong> Fren arızasında ağır taşıtlar sürtünmeli yüzey + eğim ile kinetik enerjiyi kademeli olarak ısı ve potansiyel enerjiye dönüştürerek durur.
                        </div>
                    `
                },
                {
                    unitId: 3,
                    unitName: "3. Ünite: Vücudumuzdaki Sistemler",
                    title: "Sindirim Sistemi Organları",
                    important: "Sıra + Emilim",
                    badge: "F.7.3.1",
                    content: `
                        <p><strong>Sindirim:</strong> Besinlerin hücrelere geçebilecek kadar küçük yapı taşlarına ayrılmasıdır.</p>
                        <ul class="styled-list">
                            <li><strong>Ağız:</strong> Besinlerin alındığı ilk organ</li>
                            <li><strong>Yutak:</strong> Ağızdan yemek borusuna iletir</li>
                            <li><strong>Yemek borusu:</strong> Kasılma–gevşeme ile mideye taşır</li>
                            <li><strong>Mide:</strong> Kaslı yapıyla çalkalayarak bulamaç hâline getirir</li>
                            <li><strong>İnce bağırsak:</strong> Sindirimin tamamlandığı ve <strong>emilimin</strong> gerçekleştiği yer</li>
                            <li><strong>Kalın bağırsak:</strong> Atıklardaki su, mineral ve vitamin emilimi</li>
                            <li><strong>Anüs:</strong> Sindirilmeyen atıkların dışarı atıldığı kısım</li>
                        </ul>
                    `
                },
                {
                    unitId: 3,
                    unitName: "3. Ünite: Vücudumuzdaki Sistemler",
                    title: "Sindirim Çeşitleri ve Yardımcı Organlar",
                    important: "Safra = Fiziksel",
                    badge: "F.7.3.1",
                    content: `
                        <div class="comparison-grid">
                            <div class="comp-card cold">
                                <h4>Fiziksel (mekanik)</h4>
                                <ul>
                                    <li>Enzim kullanılmaz</li>
                                    <li>Dişler ve kas hareketleriyle parçalama</li>
                                </ul>
                            </div>
                            <div class="comp-card warm">
                                <h4>Kimyasal</h4>
                                <ul>
                                    <li><strong>Enzimler</strong> + su ile yapı taşlarına bölünme</li>
                                </ul>
                            </div>
                        </div>
                        <ul class="styled-list" style="margin-top:0.75rem;">
                            <li><strong>Karaciğer:</strong> <em>Safra</em> sıvısı → yağların <strong>fiziksel</strong> sindirimi</li>
                            <li><strong>Pankreas:</strong> <em>Pankreas öz suyu</em> → karbonhidrat, protein ve yağların <strong>kimyasal</strong> sindirimi</li>
                        </ul>
                        <div class="note-alert">
                            💡 <strong>Sağlık:</strong> Aşırı yağlı/baharatlı/paketli gıda mideyi bozar. Su, lifli besin ve düzenli egzersiz sindirimi destekler.
                        </div>
                    `
                },
                {
                    unitId: 3,
                    unitName: "3. Ünite: Vücudumuzdaki Sistemler",
                    title: "Dolaşım Sistemi: Kalp, Damar, Kan",
                    important: "Alyuvar · Akyuvar · Pulcuk",
                    badge: "F.7.3.2",
                    content: `
                        <p>Besin ve oksijeni hücrelere taşır; atıkları uzaklaştırır.</p>
                        <ul class="styled-list">
                            <li><strong>Kalp:</strong> Göğüs kafesinde; kanı vücuda pompalayan kaslı organ</li>
                            <li><strong>Atardamar:</strong> Kalpten organlara</li>
                            <li><strong>Toplardamar:</strong> Organlardan kalbe</li>
                            <li><strong>Kılcal damar:</strong> Hücre–kan madde alışverişi</li>
                        </ul>
                        <div class="note-highlight">
                            <strong>Kan hücreleri:</strong> Alyuvar (O₂–CO₂ taşıma) · Akyuvar (mikrop/hastalık savunu) · Kan pulcukları (pıhtılaşma / kanamayı durdurma)
                        </div>
                    `
                },
                {
                    unitId: 3,
                    unitName: "3. Ünite: Vücudumuzdaki Sistemler",
                    title: "Küçük ve Büyük Kan Dolaşımı",
                    important: "Küçük = Akciğer",
                    badge: "F.7.3.2",
                    content: `
                        <div class="comparison-grid">
                            <div class="comp-card cold">
                                <h4>Küçük dolaşım</h4>
                                <ul>
                                    <li>Kalp ↔ akciğerler</li>
                                    <li>Kirli kanı oksijence zenginleştirir</li>
                                    <li>Sağ karıncık → akciğer atardamarı → akciğerler → akciğer toplardamarı → sol kulakçık</li>
                                </ul>
                            </div>
                            <div class="comp-card warm">
                                <h4>Büyük dolaşım</h4>
                                <ul>
                                    <li>Kalp ↔ tüm vücut organları</li>
                                    <li>Temiz kanı dağıtır, kirli kanı kalbe toplar</li>
                                </ul>
                            </div>
                        </div>
                        <p style="margin-top:0.75rem;"><strong>Türk Kızılay:</strong> Kan bağışı stoklarını yöneten temel kuruluş. Hareketsizlik, aşırı tuz/yağ, stres damar sağlığını bozar; su ve spor korur.</p>
                    `
                },
                {
                    unitId: 3,
                    unitName: "3. Ünite: Vücudumuzdaki Sistemler",
                    title: "Solunum Sistemi",
                    important: "Alveol = Gaz Alışverişi",
                    badge: "F.7.3.3",
                    content: `
                        <p>Oksijen alımı ve karbon dioksit atımı için çalışır.</p>
                        <div class="note-highlight">
                            <strong>Yol:</strong> Burun → Yutak → Gırtlak → Soluk borusu → Akciğerler (bronş, bronşçuk, alveol)
                        </div>
                        <ul class="styled-list">
                            <li><strong>Alveol (hava keseciği):</strong> Kılcal damarlarla çevrili; <strong>gaz alışverişinin</strong> yapıldığı yer</li>
                            <li><strong>Diyafram:</strong> Akciğerlerin altında; kasılıp gevşeyerek soluk alıp vermeyi sağlar</li>
                        </ul>
                        <div class="note-alert">
                            🚭 Sigara/alkol/tütün zararlıdır. <strong>Yeşilay</strong> bağımlılıklarla mücadele eder. Ortam havalandırma + temiz hava egzersizi şarttır.
                        </div>
                    `
                },
                {
                    unitId: 3,
                    unitName: "3. Ünite: Vücudumuzdaki Sistemler",
                    title: "Boşaltım Sistemi ve Yardımcı Organlar",
                    important: "Böbrek → İdrar",
                    badge: "F.7.3.4",
                    content: `
                        <p>Kandaki zararlı atıkları ve fazla suyu süzerek uzaklaştırır.</p>
                        <ul class="styled-list">
                            <li><strong>Böbrekler:</strong> Kanı süzüp idrar oluşturur (fasulye biçimi)</li>
                            <li><strong>Üreter (idrar borusu):</strong> Böbrek → mesane</li>
                            <li><strong>Mesane:</strong> İdrarın depolandığı yer</li>
                            <li><strong>Üretra (idrar kanalı):</strong> Vücut dışına atım</li>
                        </ul>
                        <div class="note-highlight">
                            <strong>Yardımcı:</strong> Deri (ter → su/tuz) · Akciğerler (soluk verme → CO₂ + su buharı) · Kalın bağırsak (sindirilmeyen atık + su)
                        </div>
                        <p>Yeterli su böbrek taşı ve enfeksiyonu önler. Aşırı tuz, gereksiz ilaç ve hijyen ihmalinden kaçınılmalı.</p>
                    `
                },
                {
                    unitId: 4,
                    unitName: "4. Ünite: Işığın Kırılması ve Mercekler",
                    title: "Işığın Kırılması Nedir?",
                    important: "Yoğunluk ↑ Hız ↓",
                    badge: "F.7.4.1",
                    content: `
                        <p><strong>Işığın kırılması:</strong> Işık ışınlarının saydam bir ortamdan yoğunluğu farklı başka bir saydam ortama geçerken <strong>doğrultu ve hız değiştirerek</strong> ilerlemesidir.</p>
                        <div class="note-highlight">
                            <strong>Sebep:</strong> Farklı yoğunluktaki ortamlarda ışığın yayılma hızı farklıdır. Saydam ortamın <strong>yoğunluğu arttıkça ışığın hızı azalır</strong>.
                        </div>
                    `
                },
                {
                    unitId: 4,
                    unitName: "4. Ünite: Işığın Kırılması ve Mercekler",
                    title: "Kırılma Kanunları",
                    important: "Normale Yaklaş / Uzaklaş",
                    badge: "F.7.4.1",
                    content: `
                        <ul class="styled-list">
                            <li><strong>Gelen ışın:</strong> Ortama ulaşan ışın</li>
                            <li><strong>Kırılan ışın:</strong> Yoğunluğu farklı ortama geçerken doğrultu değiştiren ışın</li>
                            <li><strong>Yüzey normali (N):</strong> Temas noktasından yüzeye dik (90°) varsayılan çizgi</li>
                            <li><strong>Gelme / kırılma açısı:</strong> Işın ile normal arasındaki açı</li>
                        </ul>
                        <div class="comparison-grid">
                            <div class="comp-card cold">
                                <h4>Az → Çok yoğun</h4>
                                <ul>
                                    <li><strong>Normale yaklaşarak</strong> kırılır</li>
                                    <li>Kırılma açısı &lt; gelme açısı</li>
                                    <li>Hız azalır</li>
                                </ul>
                            </div>
                            <div class="comp-card warm">
                                <h4>Çok → Az yoğun</h4>
                                <ul>
                                    <li><strong>Normalden uzaklaşarak</strong> kırılır</li>
                                    <li>Kırılma açısı &gt; gelme açısı</li>
                                    <li>Hız artar</li>
                                </ul>
                            </div>
                        </div>
                        <div class="note-alert" style="margin-top:0.75rem;">
                            💡 Gelen, normal ve kırılan ışın <strong>aynı düzlemdedir</strong>. Dike (90°) gelen ışın <strong>doğrultu değiştirmeden</strong> geçer; yalnızca hızı değişir.
                        </div>
                    `
                },
                {
                    unitId: 4,
                    unitName: "4. Ünite: Işığın Kırılması ve Mercekler",
                    title: "Görünür Derinlik ve Günlük Örnekler",
                    important: "Balık Daha Yakın",
                    badge: "F.7.4.1",
                    content: `
                        <ul class="styled-list">
                            <li><strong>Havadan suya bakış (az → çok):</strong> Sudaki cisimler / balıklar olduğundan <strong>daha yakında</strong> görünür.</li>
                            <li><strong>Sudan havaya bakış (çok → az):</strong> Dalgıç dışarıdaki cisimleri olduğundan <strong>daha uzakta</strong> görür.</li>
                            <li>Su dolu bardaktaki kalemin kırık görünmesi, su birikintisindeki paranın yüzeye yakın görünmesi kırılmadandır.</li>
                        </ul>
                    `
                },
                {
                    unitId: 4,
                    unitName: "4. Ünite: Işığın Kırılması ve Mercekler",
                    title: "Mercek Nedir?",
                    important: "Optik Merkez = Kırılmaz",
                    badge: "F.7.4.2",
                    content: `
                        <p><strong>Mercek:</strong> En az bir yüzeyi küresel olan, cam veya sert plastikten saydam cisimlerdir.</p>
                        <ul class="styled-list">
                            <li><strong>Asal eksen:</strong> Merceğin yatay merkezinden geçen çizgi</li>
                            <li><strong>Optik merkez (O):</strong> Asal eksende merceğin ortası — buraya gelen ışınlar <strong>kırılmadan</strong> geçer</li>
                        </ul>
                    `
                },
                {
                    unitId: 4,
                    unitName: "4. Ünite: Işığın Kırılması ve Mercekler",
                    title: "İnce Kenarlı (Yakınsak) Mercek",
                    important: "Toplar · Hipermetrop",
                    badge: "F.7.4.2",
                    content: `
                        <p>Ortası kalın, kenarları ince; çift taraflı ok sembolüyle gösterilir. Işınları bir noktada <strong>toplar</strong>.</p>
                        <ul class="styled-list">
                            <li><strong>Odak (F):</strong> Asal eksene paralel ışınların kırılıp toplandığı nokta</li>
                            <li><strong>Görüntü:</strong> Yakındaki cisimleri <strong>büyük ve düz</strong> gösterir (büyüteç)</li>
                            <li><strong>Kullanım:</strong> Büyüteç, mikroskop, teleskop, fotoğraf makinesi, projeksiyon; <strong>hipermetrop</strong> (yakını görememe) gözlükleri</li>
                        </ul>
                        <div class="note-alert">
                            ⚠️ <strong>Orman yangını:</strong> Cam şişe / su dolu pet şişe ince kenarlı mercek gibi güneş ışığını toplar; kuru otları tutuşturabilir.
                        </div>
                    `
                },
                {
                    unitId: 4,
                    unitName: "4. Ünite: Işığın Kırılması ve Mercekler",
                    title: "Kalın Kenarlı (Iraksak) Mercek",
                    important: "Dağıtır · Miyop",
                    badge: "F.7.4.2",
                    content: `
                        <p>Kenarları kalın, ortası ince; uçları içe dönük ok sembolüyle gösterilir. Işınları <strong>dağıtır</strong>.</p>
                        <ul class="styled-list">
                            <li><strong>Odak (F):</strong> Paralel ışınlar dağılarak kırılır; uzantıların kesiştiği nokta odaktır</li>
                            <li><strong>Görüntü:</strong> Cisimleri olduğundan <strong>küçük</strong> gösterir; daha geniş alan görülür</li>
                            <li><strong>Kullanım:</strong> Dış kapı dürbünü, araç feneri; <strong>miyop</strong> (uzağı görememe) gözlükleri</li>
                        </ul>
                    `
                },
                {
                    unitId: 5,
                    unitName: "5. Ünite: Maddenin Doğasına Yolculuk",
                    title: "Atomun Yapısı ve Temel Parçacıklar",
                    important: "Kütle = Proton + Nötron",
                    badge: "F.7.5.1",
                    content: `
                        <p>Maddeler gözle görülemeyecek kadar küçük taneciklerden oluşur; bu taneciklere <strong>atom</strong> denir. Atom: <strong>çekirdek</strong> + <strong>katmanlar</strong> (elektron bulutu).</p>
                        <ul class="styled-list">
                            <li><strong>Çekirdek:</strong> Merkez; kütlenin neredeyse tamamı burada. İçinde proton ve nötron vardır.</li>
                            <li><strong>Proton (p⁺):</strong> Pozitif yüklü. Atomun kimliğini belirler; farklı maddelerin proton sayıları farklıdır.</li>
                            <li><strong>Nötron (n⁰):</strong> Yüksüz (nötr) parçacık.</li>
                            <li><strong>Elektron (e⁻):</strong> Katmanlarda çok hızlı hareket eden negatif yüklü parçacık.</li>
                        </ul>
                        <div class="note-highlight">
                            Proton ≈ nötron kütlesi. Elektron kütlesi yaklaşık <strong>1/2000</strong> kadar — atom kütlesi hesabında sadece proton + nötron alınır.
                        </div>
                    `
                },
                {
                    unitId: 5,
                    unitName: "5. Ünite: Maddenin Doğasına Yolculuk",
                    title: "Geçmişten Günümüze Atom",
                    important: "Elektron Bulutu",
                    badge: "F.7.5.1",
                    content: `
                        <ul class="styled-list">
                            <li><strong>Democritus (MÖ 400):</strong> “Atom” ifadesini ilk kullanan; maddelerin taneciklerden oluştuğunu savundu.</li>
                            <li><strong>Dalton, Thomson, Rutherford, Bohr:</strong> Deneylerle yükler ve çekirdek kavramı keşfedildi.</li>
                            <li><strong>Modern atom teorisi:</strong> Elektronlar sabit yörüngede değil; bulunma ihtimalinin yüksek olduğu <strong>elektron bulutunda</strong> çok hızlı hareket eder.</li>
                        </ul>
                    `
                },
                {
                    unitId: 5,
                    unitName: "5. Ünite: Maddenin Doğasına Yolculuk",
                    title: "Saf Madde: Elementler",
                    important: "Tek Cins Atom",
                    badge: "F.7.5.2",
                    content: `
                        <p><strong>Saf madde:</strong> Tek çeşit atom veya molekül; kendine özgü erime/kaynama noktası ve yoğunluk.</p>
                        <p><strong>Element:</strong> Aynı cins atomlardan oluşur; fiziksel/kimyasal yollarla daha basit maddelere ayrılamaz. Dünyada ortak dil için <strong>sembollerle</strong> gösterilir (Latince adın ilk harfi / iki harfi).</p>
                        <ul class="styled-list">
                            <li><strong>Atomik:</strong> örn. bakır (Cu), demir (Fe)</li>
                            <li><strong>Moleküler:</strong> örn. oksijen (O₂), hidrojen (H₂)</li>
                        </ul>
                    `
                },
                {
                    unitId: 5,
                    unitName: "5. Ünite: Maddenin Doğasına Yolculuk",
                    title: "Saf Madde: Bileşikler",
                    important: "Kimyasal Ayrılma",
                    badge: "F.7.5.2",
                    content: `
                        <p><strong>Bileşik:</strong> Farklı cins atomlar belirli oranlarda birleşir; kendi özelliklerini kaybeder. Yalnızca <strong>kimyasal</strong> yollarla bileşenlerine ayrılır. <strong>Formüllerle</strong> gösterilir.</p>
                        <ul class="styled-list">
                            <li><strong>Su (H₂O):</strong> 2 H + 1 O</li>
                            <li><strong>Karbondioksit (CO₂):</strong> 1 C + 2 O</li>
                            <li><strong>Tuz / NaCl:</strong> sodyum + klor</li>
                            <li><strong>Glikoz (C₆H₁₂O₆):</strong> 6 C + 12 H + 6 O</li>
                        </ul>
                        <div class="note-alert">
                            ⚠️ Element ve bileşik <strong>fiziksel yöntemlerle</strong> daha basit maddelere ayrılamaz. (Karışımlar ayrılabilir.)
                        </div>
                    `
                },
                {
                    unitId: 5,
                    unitName: "5. Ünite: Maddenin Doğasına Yolculuk",
                    title: "Karışımlar ve Çözünme Hızı",
                    important: "Homojen vs Heterojen",
                    badge: "F.7.5.3",
                    content: `
                        <p><strong>Karışım:</strong> En az iki farklı madde kendi kimyasal özelliklerini kaybetmeden bir araya gelir. Sembol/formül yok; belirli erime/kaynama noktası yok; <strong>fiziksel</strong> yöntemlerle ayrılır.</p>
                        <div class="comparison-grid">
                            <div class="comp-card cold">
                                <h4>Homojen (çözelti)</h4>
                                <ul>
                                    <li>Her yerinde aynı özellik; tek madde gibi görünür</li>
                                    <li>Çözücü + çözünen</li>
                                    <li>Örn: tuzlu/şekerli su, hava, gazoz, kolonya</li>
                                    <li>Tuz çözeltisi elektriği iletir; şeker çözeltisi iletmez</li>
                                </ul>
                            </div>
                            <div class="comp-card warm">
                                <h4>Heterojen</h4>
                                <ul>
                                    <li>Her yerinde aynı özellik göstermez</li>
                                    <li>Bileşenler gözle / mercekle ayırt edilebilir</li>
                                    <li>Örn: zeytinyağı–su, çorba, salata, ayran, sis</li>
                                </ul>
                            </div>
                        </div>
                        <div class="note-highlight" style="margin-top:0.75rem;">
                            <strong>Çözünme hızını artıranlar:</strong> sıcaklık ↑ · tanecik boyutu ↓ (temas yüzeyi ↑) · karıştırma / çalkalama
                        </div>
                    `
                },
                {
                    unitId: 5,
                    unitName: "5. Ünite: Maddenin Doğasına Yolculuk",
                    title: "Karışımların Ayrılması",
                    important: "Ayırma Hunisi · Damıtma",
                    badge: "F.7.5.4",
                    content: `
                        <p>Tanecik boyutu, yoğunluk, çözünürlük, kaynama noktası farkından yararlanılır.</p>
                        <ul class="styled-list">
                            <li><strong>Buharlaştırma:</strong> Katı–sıvı homojen (çözelti) → sıvıyı buharlaştırıp katıyı elde et (deniz suyundan tuz)</li>
                            <li><strong>Ayırma hunisi:</strong> Birbiri içinde çözünmeyen, yoğunluğu farklı sıvı–sıvı (zeytinyağı–su)</li>
                            <li><strong>Yüzdürme:</strong> Yoğunluğu sıvıdan farklı katılar (kum–talaş + su)</li>
                            <li><strong>Damıtma / ayrımsal damıtma:</strong> Kaynama noktaları farklı sıvı–sıvı homojen (alkol–su)</li>
                            <li><strong>Mıknatısla ayırma:</strong> Demir, nikel, kobalt içeren karışımlar</li>
                        </ul>
                    `
                },
                {
                    unitId: 6,
                    unitName: "6. Ünite: Elektriklenme",
                    title: "Elektriklenme ve Yük Durumları",
                    important: "Elektron Kazanma / Kaybetme",
                    badge: "F.7.6.1",
                    content: `
                        <p><strong>Elektriklenme:</strong> Atomların elektron kazanması veya kaybetmesiyle yük yer değiştirmesidir.</p>
                        <ul class="styled-list">
                            <li><strong>Proton (+):</strong> Pozitif · <strong>Elektron (−):</strong> Negatif · <strong>Nötron:</strong> Yüksüz</li>
                            <li><strong>Pozitif cisim:</strong> + yük miktarı − yükten fazla</li>
                            <li><strong>Negatif cisim:</strong> − yük miktarı + yükten fazla</li>
                            <li><strong>Nötr cisim:</strong> + ve − yük miktarları eşit</li>
                        </ul>
                    `
                },
                {
                    unitId: 6,
                    unitName: "6. Ünite: Elektriklenme",
                    title: "Yüklü Cisimlerin Birbirine Etkisi",
                    important: "Aynı İter · Zıt Çeker",
                    badge: "F.7.6.1",
                    content: `
                        <div class="comparison-grid">
                            <div class="comp-card cold">
                                <h4>Aynı yükler</h4>
                                <ul>
                                    <li>+ / + veya − / −</li>
                                    <li>Birbirini <strong>iter</strong></li>
                                </ul>
                            </div>
                            <div class="comp-card warm">
                                <h4>Zıt yükler</h4>
                                <ul>
                                    <li>+ / −</li>
                                    <li>Birbirini <strong>çeker</strong></li>
                                </ul>
                            </div>
                        </div>
                        <div class="note-alert" style="margin-top:0.75rem;">
                            💡 Nötr–nötr: itme/çekme yok. <strong>Yüklü + nötr</strong> yaklaşınca aralarında <strong>çekme</strong> oluşur.
                        </div>
                    `
                },
                {
                    unitId: 6,
                    unitName: "6. Ünite: Elektriklenme",
                    title: "Temaslı Elektriklenme: Sürtünme ve Dokunma",
                    important: "Sürtünme = Zıt · Dokunma = Aynı",
                    badge: "F.7.6.2",
                    content: `
                        <p>Elektriklenme <strong>temaslı</strong> veya <strong>temassız</strong> olur.</p>
                        <p><strong>Sürtünme:</strong> Nötr iki cisim sürtülünce elektron transferi olur; biri (−), diğeri (+) yüklenir → <strong>zıt yük</strong>.</p>
                        <ul class="styled-list">
                            <li><strong>Plastik (ebonit) + yün:</strong> elektronde yün → plastik · plastik (−), yün (+)</li>
                            <li><strong>Cam + ipek:</strong> elektron cam → ipek · cam (+), ipek (−)</li>
                        </ul>
                        <div class="note-highlight">
                            <strong>Dokunma:</strong> Yüklü cisim iletken cisme dokununca yük paylaşılır → son durumda <strong>aynı tür</strong> yük.
                        </div>
                    `
                },
                {
                    unitId: 6,
                    unitName: "6. Ünite: Elektriklenme",
                    title: "Temassız (Etki / Tesir) Elektriklenme",
                    important: "Temas Yok · Yaklaştırma",
                    badge: "F.7.6.2",
                    content: `
                        <p>Temas olmadan, yüklü cismin iletken nötr cisme <strong>yaklaştırılmasıyla</strong> gerçekleşir. Yüklü cisim zıt yükleri yakın tarafa çeker, aynı tür yükleri uzak tarafa iter.</p>
                    `
                },
                {
                    unitId: 6,
                    unitName: "6. Ünite: Elektriklenme",
                    title: "Elektroskop",
                    important: "Yük Var mı? Türü Ne?",
                    badge: "F.7.6.3",
                    content: `
                        <p><strong>Elektroskop:</strong> Cismin elektrikle yüklü olup olmadığını ve yüklüyse <strong>+ veya −</strong> türünü tespit eden alettir. Dokunma ve etki ile elektriklenme ilkeleriyle çalışır.</p>
                    `
                },
                {
                    unitId: 6,
                    unitName: "6. Ünite: Elektriklenme",
                    title: "Teknoloji, Şimşek ve Yıldırım",
                    important: "Şimşek ≠ Yıldırım",
                    badge: "F.7.6.3",
                    content: `
                        <ul class="styled-list">
                            <li><strong>Otomobil / beyaz eşya boyama:</strong> Sprey ve yüzey zıt yük → boya eşit dağılır</li>
                            <li><strong>Lazer yazıcı:</strong> Toner tozları elektrostatik çekimle kâğıda yapışır</li>
                            <li><strong>Elektrostatik baca filtresi:</strong> Duman, is, yağ partiküllerini tutar</li>
                            <li><strong>Klima / süpürge:</strong> Toz ve duman tutulması</li>
                            <li><strong>Parmak izi:</strong> Tozlama ile iz üzerine yapışma</li>
                        </ul>
                        <div class="note-alert">
                            ⚡ <strong>Şimşek:</strong> Bulutlar arası yük aktarımı · <strong>Yıldırım:</strong> Bulut–yeryüzü arası şiddetli yük aktarımı
                        </div>
                    `
                },
                {
                    unitId: 7,
                    unitName: "7. Ünite: Sürdürülebilir Yaşam ve Enerji",
                    title: "Besin Zinciri: Üretici, Tüketici, Ayrıştırıcı",
                    important: "Ayrıştırıcı Her Basamakta",
                    badge: "F.7.7.1",
                    content: `
                        <p><strong>Besin zinciri:</strong> Ekosistemde madde ve enerjinin organizmadan organizmaya besin biçiminde aktarılmasıdır.</p>
                        <ul class="styled-list">
                            <li><strong>Üreticiler:</strong> Güneş ışığıyla kendi besinini üretir (yeşil bitkiler, bazı algler/bakteriler). Piramidin en alt–en geniş basamağı.</li>
                            <li><strong>Tüketiciler:</strong> Besini dışarıdan alır. Birincil = otçul (üreticiyle beslenir); ikincil/üçüncül = etçil veya hepsiçil.</li>
                            <li><strong>Ayrıştırıcılar (çürükçüller):</strong> Mantarlar ve bazı bakteriler; atık ve ölü organizmaları çürüterek maddeyi ekosisteme döndürür. <strong>Her basamakta bulunabilir.</strong></li>
                        </ul>
                    `
                },
                {
                    unitId: 7,
                    unitName: "7. Ünite: Sürdürülebilir Yaşam ve Enerji",
                    title: "Besin Ağı",
                    important: "Zincirler Birleşir",
                    badge: "F.7.7.1",
                    content: `
                        <p>Canlılar tek zincirle sınırlı değildir; bir canlı birden fazla canlıyla beslenebilir. Birden çok besin zincirinin bir arada oluşturduğu yapıya <strong>besin ağı</strong> denir.</p>
                    `
                },
                {
                    unitId: 7,
                    unitName: "7. Ünite: Sürdürülebilir Yaşam ve Enerji",
                    title: "Ekoloji Piramidi ve Enerji Akışı",
                    important: "Yukarı: Enerji ↓ · Birikim ↑",
                    badge: "F.7.7.1",
                    content: `
                        <p><strong>Ekoloji piramidi:</strong> Canlı sayısı, enerji akışı ve toplam canlı kütlesini gösteren model. Her alan = beslenme basamağı. En altta üreticiler, üstte tüketiciler.</p>
                        <div class="note-highlight">
                            <strong>Aşağıdan yukarı çıkıldıkça:</strong>
                            <ul class="styled-list">
                                <li>Aktarılan <strong>enerji azalır</strong> (büyük kısım yaşamsal faaliyetlerde harcanır)</li>
                                <li>Toplam canlı <strong>kütlesi ve birey sayısı azalır</strong></li>
                                <li>Bireysel <strong>vücut büyüklüğü genellikle artar</strong></li>
                                <li><strong>Biyolojik birikim artar</strong> (atılamayan zehirli maddelerin dokularda birikmesi)</li>
                            </ul>
                        </div>
                    `
                },
                {
                    unitId: 7,
                    unitName: "7. Ünite: Sürdürülebilir Yaşam ve Enerji",
                    title: "Su Kaynakları ve Atık Su",
                    important: "Atık Yağı Lavaboya Dökme",
                    badge: "F.7.7.2",
                    content: `
                        <ul class="styled-list">
                            <li><strong>Tatlı su:</strong> Kullanılabilir miktar kısıtlıdır; en büyük kısmı buzullardadır. Kullanım: nehir, göl, yer altı suları.</li>
                            <li><strong>Atık su:</strong> Evsel, endüstriyel veya tarımsal kullanımla kirlenmiş / özellikleri değişmiş su.</li>
                            <li><strong>Su arıtma tesisleri:</strong> Atık suyu arındırıp çevreye kazandırır; su döngüsünü korur.</li>
                        </ul>
                        <div class="note-alert">
                            ⚠️ Atık yağları lavaboya dökmemek kanalizasyon ve su kaynaklarının korunması için kritiktir.
                        </div>
                    `
                },
                {
                    unitId: 7,
                    unitName: "7. Ünite: Sürdürülebilir Yaşam ve Enerji",
                    title: "Su Ayak İzi",
                    important: "Doğrudan + Dolaylı Su",
                    badge: "F.7.7.2",
                    content: `
                        <p><strong>Su ayak izi:</strong> Mal/hizmet üretimi ve günlük tüketimde harcanan <strong>doğrudan ve dolaylı (görünmez)</strong> toplam su miktarını gösteren ölçüttür.</p>
                        <p>Örn: Bir tişört veya akıllı telefonun ham maddeden mağazaya yolculuğunda binlerce litre görünmez su harcanır. İhtiyaçtan fazla ürün almak su israfıdır.</p>
                    `
                },
                {
                    unitId: 7,
                    unitName: "7. Ünite: Sürdürülebilir Yaşam ve Enerji",
                    title: "Sürdürülebilir Yaşam ve Tasarruf",
                    important: "Geri Dönüşüm · Atık Yağ",
                    badge: "F.7.7.2",
                    content: `
                        <p><strong>Sürdürülebilir yaşam:</strong> Gelecek nesillerin ihtiyaçlarını tehlikeye atmadan bugünün gereksinimlerini karşılamaktır.</p>
                        <ul class="styled-list">
                            <li><strong>Su:</strong> Musluğu boşuna akıtmamak, damlayan bataryayı tamir etmek</li>
                            <li><strong>Gıda / enerji:</strong> İhtiyaç kadar almak, boşa yanan lambayı söndürmek</li>
                            <li><strong>Dönüşüm:</strong> Kâğıt, plastik, cam, metal geri dönüşümü; atık yağların toplanması</li>
                        </ul>
                    `
                }
            ],
            curriculum: [
                {
                    unitId: 1,
                    unit: "1. Ünite",
                    name: "Uzay Çağı",
                    hours: "1. Dönem",
                    period: "1. Dönem",
                    status: "Aktif",
                    examTip: "Türksat 6A = ilk yerli-millî haberleşme (9 Temmuz 2024). İMECE = yerli gözlem. Alper Gezeravcı = 13 deney. Işık yılı = mesafe. Büyük yıldız sonu = süpernova → nötron yıldızı / kara delik.",
                    topics: [
                        { code: "F.7.1.1", title: "Türkiye ve uzay araştırmaları", summary: "Uzay araçları; aktif/pasif uydular; TUA; Alper Gezeravcı; uzay kirliliği; rasathane; teleskoplar." },
                        { code: "F.7.1.2", title: "Uzayda neler var?", summary: "Yıldız oluşumu ve döngü; renk-sıcaklık; takımyıldız; ışık yılı; galaksi; evren hiyerarşisi." }
                    ]
                },
                {
                    unitId: 2,
                    unit: "2. Ünite",
                    name: "Kuvvet ve Enerjiyi Keşfedelim",
                    hours: "1. Dönem",
                    period: "1. Dönem",
                    status: "Aktif",
                    examTip: "İş = net kuvvet + aynı doğrultuda yer değiştirme. Çanta ile yatay yürümek = iş yok. Enerji = iş yapabilme (J). Sarkaç en üstte Ep max, en altta Ek max. Sürtünme → ısı/ses/ışık.",
                    topics: [
                        { code: "F.7.2.1", title: "Kuvvet, iş ve enerji", summary: "Fiziksel iş şartları; Joule; kinetik; çekim ve esneklik potansiyel enerji." },
                        { code: "F.7.2.2", title: "Enerji dönüşümleri ve korunumu", summary: "Korunum kanunu; sarkaç; sürtünme; kaçış rampası." }
                    ]
                },
                {
                    unitId: 3,
                    unit: "3. Ünite",
                    name: "Vücudumuzdaki Sistemler",
                    hours: "1.–2. Dönem",
                    period: "1.–2. Dönem",
                    status: "Aktif",
                    examTip: "Safra = yağların fiziksel sindirimi (kimyasal değil!). Küçük dolaşım: sağ karıncık → akciğer → sol kulakçık. Gaz alışverişi = alveol. Böbrek oksijen süzmez.",
                    topics: [
                        { code: "F.7.3.1", title: "Sindirim sistemi", summary: "Organ sırası; fiziksel/kimyasal sindirim; karaciğer–pankreas; sağlık." },
                        { code: "F.7.3.2", title: "Dolaşım sistemi", summary: "Kalp, damarlar, kan hücreleri; küçük/büyük dolaşım; Kızılay." },
                        { code: "F.7.3.3", title: "Solunum sistemi", summary: "Yol sırası; alveol; diyafram; Yeşilay." },
                        { code: "F.7.3.4", title: "Boşaltım sistemi", summary: "Böbrek–üreter–mesane–üretra; yardımcı organlar; sağlık." }
                    ]
                },
                {
                    unitId: 4,
                    unit: "4. Ünite",
                    name: "Işığın Kırılması ve Mercekler",
                    hours: "2. Dönem",
                    period: "2. Dönem",
                    status: "Aktif",
                    examTip: "Az→çok: normale yaklaşır, hız ↓. İnce kenarlı = yakınsak = toplar = hipermetrop. Kalın kenarlı = ıraksak = dağıtır = miyop. Pet şişe = ince kenarlı yangın riski.",
                    topics: [
                        { code: "F.7.4.1", title: "Işığın kırılması", summary: "Tanım; normale yaklaşma/uzaklaşma; dik geliş; görünür derinlik." },
                        { code: "F.7.4.2", title: "Mercekler", summary: "Optik merkez; ince/kalın kenarlı; odak; kullanım; yangın uyarısı." }
                    ]
                },
                {
                    unitId: 5,
                    unit: "5. Ünite",
                    name: "Maddenin Doğasına Yolculuk",
                    hours: "2. Dönem",
                    period: "2. Dönem",
                    status: "Aktif",
                    examTip: "Atom kütlesi ≈ p + n. Safra değil — saf madde: element/bileşik. Bileşik fiziksel yolla ayrılmaz. Zeytinyağı–su = ayırma hunisi. Çözünme hızı: sıcaklık + toz + karıştırma.",
                    topics: [
                        { code: "F.7.5.1", title: "Maddenin tanecikli yapısı", summary: "Atom; p⁺ n⁰ e⁻; modeller; modern elektron bulutu." },
                        { code: "F.7.5.2", title: "Saf maddeler", summary: "Element ve bileşik; sembol/formül; örnekler." },
                        { code: "F.7.5.3", title: "Karışımlar", summary: "Homojen/heterojen; çözünme hızı faktörleri." },
                        { code: "F.7.5.4", title: "Karışımların ayrılması", summary: "Buharlaştırma, ayırma hunisi, yüzdürme, damıtma, mıknatıs." }
                    ]
                },
                {
                    unitId: 6,
                    unit: "6. Ünite",
                    name: "Elektriklenme",
                    hours: "2. Dönem",
                    period: "2. Dönem",
                    status: "Aktif",
                    examTip: "Cam+ipek: cam +, ipek −. Sürtünme→zıt yük; dokunma→aynı yük. Elektroskop = yük varlığı/türü. Şimşek=bulutlar arası; yıldırım=bulut–yer.",
                    topics: [
                        { code: "F.7.6.1", title: "Elektrik yükleri", summary: "Elektriklenme; +, −, nötr; itme–çekme." },
                        { code: "F.7.6.2", title: "Elektriklenme çeşitleri", summary: "Sürtünme, dokunma, etki (tesir)." },
                        { code: "F.7.6.3", title: "Elektroskop ve uygulamalar", summary: "Elektroskop; teknoloji; şimşek–yıldırım." }
                    ]
                },
                {
                    unitId: 7,
                    unit: "7. Ünite",
                    name: "Sürdürülebilir Yaşam ve Enerji",
                    hours: "2. Dönem",
                    period: "2. Dönem",
                    status: "Aktif",
                    examTip: "Piramitte yukarı: enerji ↓, biyolojik birikim ↑. Ayrıştırıcı her basamakta. Su ayak izi = doğrudan + dolaylı su. Fazla kıyafet almak tasarruf değildir.",
                    topics: [
                        { code: "F.7.7.1", title: "Besin zinciri ve enerji akışı", summary: "Üretici–tüketici–ayrıştırıcı; besin ağı; ekoloji piramidi; biyolojik birikim." },
                        { code: "F.7.7.2", title: "Sürdürülebilir yaşam", summary: "Su kaynakları; atık su; su ayak izi; tasarruf ve geri dönüşüm." }
                    ]
                }
            ],
            quiz: [
                {
                    id: "7-q1",
                    unitId: 1,
                    unitName: "1. Ünite: Uzay Çağı",
                    topic: "Türkiye'nin Yapay Uyduları",
                    difficulty: "Klasik",
                    question: "9 Temmuz 2024 tarihinde uzaya fırlatılan ve Türkiye'nin ilk yerli ve millî haberleşme uydusu olma özelliğini taşıyan yapay uydu aşağıdakilerden hangisidir?",
                    options: [
                        "Göktürk-1",
                        "Türksat 6A",
                        "İMECE",
                        "Türksat 5B"
                    ],
                    correct: 1,
                    explanation: "Türksat 6A, 9 Temmuz 2024'te fırlatılan Türkiye'nin ilk yerli ve millî haberleşme uydusudur. İMECE gözlem uydusudur; Göktürk serisi de keşif/gözlem amaçlıdır."
                },
                {
                    id: "7-q2",
                    unitId: 1,
                    unitName: "1. Ünite: Uzay Çağı",
                    topic: "İlk İnsanlı Uzay Misyonu",
                    difficulty: "Klasik",
                    question: "Türkiye'nin ilk insanlı uzay misyonunu gerçekleştirerek Uluslararası Uzay İstasyonu'nda (ISS) 13 farklı bilimsel deney yapan astronotumuz kimdir?",
                    options: [
                        "Ali Kuşçu",
                        "Umut Yıldız",
                        "Alper Gezeravcı",
                        "Canan Dağdeviren"
                    ],
                    correct: 2,
                    explanation: "Alper Gezeravcı Türkiye'nin ilk uzay yolcusudur; ISS'te 13 bilimsel deney gerçekleştirmiş, uzaydan ilk mesajı “İstikbal göklerdedir.” olmuştur."
                },
                {
                    id: "7-q3",
                    unitId: 1,
                    unitName: "1. Ünite: Uzay Çağı",
                    topic: "Yıldız Yaşam Döngüsü",
                    difficulty: "Yazılı Seviyesi",
                    question: "Başlangıç kütlesi Güneş kütlesinden çok büyük olan bir yıldızın yaşam döngüsünün sonunda geçirdiği şiddetli patlamaya ve sonrasında dönüşebileceği yapıya ne ad verilir?",
                    options: [
                        "Süpernova patlaması — kara delik / nötron yıldızı",
                        "Gezegenimsi bulutsu — beyaz cüce",
                        "Kırmızı dev — önyıldız",
                        "Atbaşı patlaması — takımyıldız"
                    ],
                    correct: 0,
                    explanation: "Büyük kütleli yıldızlar kırmızı süperdev olduktan sonra süpernova patlaması yaşar; sonuç nötron yıldızı (pulsar) veya kara deliktir. Beyaz cüce küçük kütleli yıldızların sonudur."
                },
                {
                    id: "7-q4",
                    unitId: 1,
                    unitName: "1. Ünite: Uzay Çağı",
                    topic: "Işık Yılı",
                    difficulty: "Tuzak Soru",
                    question: "Astronomi derslerinde kullanılan “ışık yılı” kavramı ile ilgili verilen bilgilerden hangisi DOĞRUDUR?",
                    options: [
                        "Yıldızların yaşını ölçmeye yarayan bir zaman birimidir.",
                        "Işığın boşlukta 1 yılda katettiği mesafeyi belirten bir uzunluk / uzaklık birimidir.",
                        "Teleskopların büyütme gücünü gösteren bir birimdir.",
                        "Güneş'in kendi etrafında dönme süresini ifade eder."
                    ],
                    correct: 1,
                    explanation: "Işık yılı zaman birimi değildir; ışığın bir yılda aldığı yolu ifade eden mesafe (uzunluk) birimidir."
                },
                {
                    id: "7-q5",
                    unitId: 2,
                    unitName: "2. Ünite: Kuvvet ve Enerjiyi Keşfedelim",
                    topic: "Fiziksel Anlamda İş",
                    difficulty: "Klasik",
                    question: "Bir cisme uygulanan kuvvet sonucunda fiziksel anlamda iş yapılmış sayılabilmesi için gerekli koşullar aşağıdakilerden hangisinde doğru verilmiştir?",
                    options: [
                        "Cisme kuvvet uygulanması ve cismin uygulanan kuvvet doğrultusunda yer değiştirmesi gerekir.",
                        "Cismin sabit hızla durmadan dairesel hareket yapması gerekir.",
                        "Cisme etki eden net kuvvetin sıfır olması gerekir.",
                        "Uygulanan kuvvetin cismin hareket yönüne dik olması gerekir."
                    ],
                    correct: 0,
                    explanation: "Fiziksel iş için net kuvvet ve bu kuvvet doğrultusunda yer değiştirme şarttır. Kuvvet harekete dikse veya yer değiştirme yoksa iş yapılmaz."
                },
                {
                    id: "7-q6",
                    unitId: 2,
                    unitName: "2. Ünite: Kuvvet ve Enerjiyi Keşfedelim",
                    topic: "İş Yapılmayan Durumlar",
                    difficulty: "Tuzak Soru",
                    question: "Aşağıdaki günlük yaşam durumlarından hangisinde FİZİKSEL ANLAMDA İŞ YAPILMAMIŞTIR?",
                    options: [
                        "Oyuncak arabayı iterek hareket ettiren çocuk",
                        "Sırtındaki ağır çanta ile düz koridorda yatay doğrultuda sabit hızla yürüyen öğrenci",
                        "Düşen tahta kalemini yerden kaldırıp masaya koyan öğretmen",
                        "Halteri yerden havaya kaldıran sporcu"
                    ],
                    correct: 1,
                    explanation: "Çantanın ağırlığı yukarı yöndedir; öğrenci yatay yürür. Kuvvet ile yer değiştirme aynı doğrultuda olmadığı için fiziksel iş yapılmamıştır."
                },
                {
                    id: "7-q7",
                    unitId: 2,
                    unitName: "2. Ünite: Kuvvet ve Enerjiyi Keşfedelim",
                    topic: "Çekim Potansiyel Enerji",
                    difficulty: "Yazılı Seviyesi",
                    question: "Aynı yükseklikten serbest bırakılan iki cisimden ağırlığı büyük olanın kuma batma miktarı daha fazla olmaktadır. Bu durum aşağıdakilerden hangisini ispatlar?",
                    options: [
                        "Kinetik enerjinin hıza bağlı olduğunu",
                        "Çekim potansiyel enerjisinin ağırlığa (kütleye) bağlı olduğunu",
                        "Esneklik potansiyel enerjisinin gerilme miktarına bağlı olduğunu",
                        "Enerjinin kaybolduğunu"
                    ],
                    correct: 1,
                    explanation: "Aynı yükseklikte ağırlığı büyük olanın çekim potansiyel enerjisi daha fazladır; bu enerji dönüşerek kuma daha çok batmasını sağlar."
                },
                {
                    id: "7-q8",
                    unitId: 2,
                    unitName: "2. Ünite: Kuvvet ve Enerjiyi Keşfedelim",
                    topic: "Enerji Dönüşümü · Sarkaç",
                    difficulty: "Klasik",
                    question: "Sürtünmesiz ortamda A noktasından serbest bırakılan sarkaç bilyesi en alt B noktasından geçip C'ye çıkmaktadır. A'dan B'ye gelirken enerji değişimi nasıldır?",
                    options: [
                        "Potansiyel enerji artar, kinetik enerji azalır.",
                        "Potansiyel enerji azalır, kinetik enerji artar.",
                        "Hem potansiyel hem kinetik enerji artar.",
                        "Toplam enerji sürekli azalır."
                    ],
                    correct: 1,
                    explanation: "Yükseklik azalınca potansiyel enerji azalır, kinetik enerji artar. Sürtünmesiz ortamda toplam mekanik enerji korunur."
                },
                {
                    id: "7-q9",
                    unitId: 3,
                    unitName: "3. Ünite: Vücudumuzdaki Sistemler",
                    topic: "Sindirime Yardımcı Organlar",
                    difficulty: "Tuzak Soru",
                    question: "Karaciğer ve pankreas organlarından salgılanan sıvılar ile ilgili aşağıdakilerden hangisi DOĞRUDUR?",
                    options: [
                        "Karaciğerin salgıladığı safra sıvısı yağların kimyasal sindirimini sağlar.",
                        "Pankreas öz suyu sadece karbonhidratların fiziksel sindiriminde görev alır.",
                        "Karaciğerden salgılanan safra sıvısı yağların fiziksel (mekanik) sindirimini gerçekleştirir.",
                        "Mide öz suyu ince bağırsakta salgılanarak proteinleri parçalar."
                    ],
                    correct: 2,
                    explanation: "Safra yağları fiziksel/mekanik olarak parçalar (emülsiyon). Kimyasal sindirim pankreas öz suyu ve enzimlerle yapılır."
                },
                {
                    id: "7-q10",
                    unitId: 3,
                    unitName: "3. Ünite: Vücudumuzdaki Sistemler",
                    topic: "Küçük Kan Dolaşımı",
                    difficulty: "Yazılı Seviyesi",
                    question: "Küçük kan dolaşımının temel amacı ve izlediği yol aşağıdakilerden hangisinde doğru ifade edilmiştir?",
                    options: [
                        "Kirli kanın akciğerlerde temizlenmesini sağlar; sağ karıncıktan başlayıp sol kulakçıkta biter.",
                        "Temiz kanı tüm vücuda dağıtır; sol karıncıktan başlayıp sağ kulakçıkta biter.",
                        "Oksijence zengin kanı böbreklere taşımaktır.",
                        "Sindirilmiş besinleri hücrelere ulaştırmaktır."
                    ],
                    correct: 0,
                    explanation: "Küçük dolaşım kalp–akciğer arasındadır: sağ karıncık → akciğer atardamarı → akciğerler → akciğer toplardamarı → sol kulakçık."
                },
                {
                    id: "7-q11",
                    unitId: 3,
                    unitName: "3. Ünite: Vücudumuzdaki Sistemler",
                    topic: "Alveol",
                    difficulty: "Klasik",
                    question: "Akciğerlerde etrafı kılcal damarlarla kaplı olan ve gaz alışverişinin (oksijen–karbon dioksit) gerçekleştiği temel yapı hangisidir?",
                    options: [
                        "Bronş",
                        "Alveol (hava keseciği)",
                        "Gırtlak",
                        "Soluk borusu"
                    ],
                    correct: 1,
                    explanation: "Alveoller kılcal damarlarla çevrilidir; O₂–CO₂ gaz alışverişi burada gerçekleşir."
                },
                {
                    id: "7-q12",
                    unitId: 3,
                    unitName: "3. Ünite: Vücudumuzdaki Sistemler",
                    topic: "Boşaltıma Yardımcı Organlar",
                    difficulty: "Tuzak Soru",
                    question: "Boşaltım sistemine yardımcı organlar ve atıkları ile ilgili eşleştirmelerden hangisi YANLIŞTIR?",
                    options: [
                        "Deri → terleme ile su ve tuz atılması",
                        "Akciğer → soluk verme ile karbon dioksit ve su buharı atılması",
                        "Kalın bağırsak → sindirilmeyen besin atıklarının atılması",
                        "Böbrek → soluk alma ile oksijenin süzülmesi"
                    ],
                    correct: 3,
                    explanation: "Böbrek kanı süzerek idrar oluşturur; oksijen süzmez. Oksijen solunum sistemiyle alınır."
                },
                {
                    id: "7-q13",
                    unitId: 4,
                    unitName: "4. Ünite: Işığın Kırılması ve Mercekler",
                    topic: "Az → Çok Yoğun Kırılma",
                    difficulty: "Klasik",
                    question: "Işık ışınlarının az yoğun saydam ortamdan çok yoğun saydam ortama geçerken izlediği yol ile ilgili hangisi DOĞRUDUR?",
                    options: [
                        "Normale yaklaşarak kırılır ve hızı azalır.",
                        "Normalden uzaklaşarak kırılır ve hızı artar.",
                        "Hiç kırılmadan aynı hızla yoluna devam eder.",
                        "Kırılma açısı gelme açısından daha büyük olur."
                    ],
                    correct: 0,
                    explanation: "Az yoğundan çok yoğuna geçişte ışık normale yaklaşır, kırılma açısı küçülür ve hız azalır."
                },
                {
                    id: "7-q14",
                    unitId: 4,
                    unitName: "4. Ünite: Işığın Kırılması ve Mercekler",
                    topic: "Görünür Derinlik",
                    difficulty: "Yazılı Seviyesi",
                    question: "İskelede duran balıkçının sudaki balığı olduğundan daha yakında görmesinin temel sebebi nedir?",
                    options: [
                        "Işığın suda tamamen soğurulması",
                        "Sudan havaya geçen ışık ışınlarının kırılarak göze ulaşması",
                        "Düzlem aynadaki simetrik görüntü oluşumu",
                        "Balığın ışık kaynağı olması"
                    ],
                    correct: 1,
                    explanation: "Balıktan çıkan ışınlar sudan havaya (çok → az) geçerken kırılır; balıkçı balığı gerçek konumundan daha yakında görür."
                },
                {
                    id: "7-q15",
                    unitId: 4,
                    unitName: "4. Ünite: Işığın Kırılması ve Mercekler",
                    topic: "İnce Kenarlı Mercek",
                    difficulty: "Klasik",
                    question: "Asal eksene paralel ışınları bir noktada toplayan, yakınsak mercek olarak adlandırılan ve hipermetrop düzelten mercek hangisidir?",
                    options: [
                        "Kalın kenarlı (ıraksak) mercek",
                        "İnce kenarlı (yakınsak) mercek",
                        "Tümsek ayna",
                        "Düzlem ayna"
                    ],
                    correct: 1,
                    explanation: "İnce kenarlı (yakınsak) mercek ışığı toplar; hipermetrop gözlüklerinde kullanılır."
                },
                {
                    id: "7-q16",
                    unitId: 4,
                    unitName: "4. Ünite: Işığın Kırılması ve Mercekler",
                    topic: "Orman Yangını · Pet Şişe",
                    difficulty: "Tuzak Soru",
                    question: "Ormanlara bırakılan su dolu pet şişelerin güneşli havada yangına yol açabilmesinin nedeni şişenin hangi optik araç gibi davranmasıdır?",
                    options: [
                        "Kalın kenarlı mercek gibi ışığı dağıtması",
                        "İnce kenarlı mercek gibi ışığı bir noktada toplaması",
                        "Düzlem ayna gibi ışığı yansıtması",
                        "Işığı tamamen soğurarak yok etmesi"
                    ],
                    correct: 1,
                    explanation: "Su dolu pet şişe ince kenarlı mercek gibi davranır; güneş ışığını bir noktada toplayarak tutuşmaya yol açabilir."
                },
                {
                    id: "7-q17",
                    unitId: 5,
                    unitName: "5. Ünite: Maddenin Doğasına Yolculuk",
                    topic: "Atomun Yapısı",
                    difficulty: "Klasik",
                    question: "Atomun yapısındaki temel parçacıklar ile ilgili hangisi DOĞRUDUR?",
                    options: [
                        "Elektronlar pozitif yüklüdür ve atomun çekirdeğinde yer alır.",
                        "Atomun kütlesinin neredeyse tamamını çekirdekteki proton ve nötronlar oluşturur.",
                        "Nötronlar katmanlarda çok hızlı hareket eden negatif yüklü parçacıklardır.",
                        "Farklı maddelerin atomlarındaki proton sayıları her zaman eşittir."
                    ],
                    correct: 1,
                    explanation: "Kütlenin neredeyse tamamı çekirdekteki proton ve nötronlardadır. Elektron negatif ve katmanlardadır; proton sayısı maddeye özgüdür."
                },
                {
                    id: "7-q18",
                    unitId: 5,
                    unitName: "5. Ünite: Maddenin Doğasına Yolculuk",
                    topic: "Element ve Bileşik",
                    difficulty: "Tuzak Soru",
                    question: "Bileşikler ve elementler ile ilgili karşılaştırmalardan hangisi YANLIŞTIR?",
                    options: [
                        "Elementler tek cins atomdan, bileşikler farklı cins atomlardan oluşur.",
                        "Elementler sembollerle, bileşikler formüllerle gösterilir.",
                        "Bileşiği oluşturan elementler kendi kimyasal özelliklerini kaybederler.",
                        "Hem elementler hem bileşikler fiziksel yöntemlerle daha basit maddelere ayrıştırılabilir."
                    ],
                    correct: 3,
                    explanation: "Element ve bileşik fiziksel yöntemlerle ayrılmaz. Bileşikler yalnızca kimyasal yollarla bileşenlerine ayrılabilir."
                },
                {
                    id: "7-q19",
                    unitId: 5,
                    unitName: "5. Ünite: Maddenin Doğasına Yolculuk",
                    topic: "Çözünme Hızı",
                    difficulty: "Klasik",
                    question: "Çay bardağına atılan şekerin daha HIZLI çözünmesi için öğrenci ne yapmalıdır?",
                    options: [
                        "Çayın sıcaklığını düşürüp küp şeker atmak",
                        "Çayın sıcaklığını artırıp toz şeker atmak ve çayı karıştırmak",
                        "Çayı buzdolabında soğutarak karıştırmak",
                        "Şekeri tek parça hâlinde atıp karıştırmadan beklemek"
                    ],
                    correct: 1,
                    explanation: "Sıcaklık ↑, tanecik boyutu ↓ (toz şeker) ve karıştırma çözünme hızını artırır."
                },
                {
                    id: "7-q20",
                    unitId: 5,
                    unitName: "5. Ünite: Maddenin Doğasına Yolculuk",
                    topic: "Ayırma Hunisi",
                    difficulty: "Yazılı Seviyesi",
                    question: "Birbiri içinde çözünmeyen, yoğunlukları farklı zeytinyağı–su karışımını ayırmak için en uygun malzeme ve yöntem hangisidir?",
                    options: [
                        "Buharlaştırma kabı — buharlaştırma",
                        "Ayırma hunisi — yoğunluk farkı ile ayırma",
                        "Liebig soğutucusu — ayrımsal damıtma",
                        "Elek — tanecik boyutu farkı"
                    ],
                    correct: 1,
                    explanation: "Zeytinyağı–su heterojen sıvı–sıvı karışımdır; ayırma hunisi ile yoğunluk farkından yararlanılarak ayrılır."
                },
                {
                    id: "7-q21",
                    unitId: 6,
                    unitName: "6. Ünite: Elektriklenme",
                    topic: "Sürtünme ile Elektriklenme",
                    difficulty: "Klasik",
                    question: "Nötr cam çubuk ipek kumaşa sürtüldüğünde yük değişimi ve son yük durumları için hangisi DOĞRUDUR?",
                    options: [
                        "Cam çubuk elektron kazanarak (−), ipek elektron kaybederek (+) yüklenir.",
                        "Cam çubuk elektron kaybederek (+), ipek elektron kazanarak (−) yüklenir.",
                        "Her iki cisim de pozitif (+) yük ile yüklenir.",
                        "Cisimler arasında proton alışverişi gerçekleşir."
                    ],
                    correct: 1,
                    explanation: "Camdan ipeğe elektron geçer: cam pozitif (+), ipek negatif (−) olur. Proton transferi olmaz."
                },
                {
                    id: "7-q22",
                    unitId: 6,
                    unitName: "6. Ünite: Elektriklenme",
                    topic: "Teknoloji ve Doğa",
                    difficulty: "Tuzak Soru",
                    question: "Elektriklenmenin teknolojideki kullanım alanları ile ilgili hangisi YANLIŞTIR?",
                    options: [
                        "Araç boyamada sprey ve yüzey zıt yüklerle yüklenerek boyanın eşit dağılması sağlanır.",
                        "Lazer yazıcılarda toner tozlarının kâğıda yapışmasında elektrostatik çekimden yararlanılır.",
                        "Bacadaki duman ve is partiküllerini tutmak için elektrostatik baca filtreleri kullanılır.",
                        "Elektriklenme sadece laboratuvarda suni olarak oluşur; doğa olaylarında görülmez."
                    ],
                    correct: 3,
                    explanation: "Elektriklenme doğada da görülür: şimşek (bulutlar arası) ve yıldırım (bulut–yeryüzü)."
                },
                {
                    id: "7-q23",
                    unitId: 6,
                    unitName: "6. Ünite: Elektriklenme",
                    topic: "Elektroskop",
                    difficulty: "Klasik",
                    question: "Bir cismin elektrikle yüklü olup olmadığını ve yüklüyse yükünün cinsini tespit etmeye yarayan araç hangisidir?",
                    options: [
                        "Dinamometre",
                        "Elektroskop",
                        "Ampermetre",
                        "Termometre"
                    ],
                    correct: 1,
                    explanation: "Elektroskop yük varlığını ve türünü (+ / −) tespit eder."
                },
                {
                    id: "7-q24",
                    unitId: 6,
                    unitName: "6. Ünite: Elektriklenme",
                    topic: "Dokunma ile Elektriklenme",
                    difficulty: "Yazılı Seviyesi",
                    question: "Dokunma ile elektriklenme sonucunda etkileşen iki iletken cismin son yük durumları için hangisi söylenebilir?",
                    options: [
                        "Her zaman zıt yükle yüklenirler.",
                        "Her zaman aynı tür elektrik yükü ile yüklenirler.",
                        "Biri mutlaka nötr kalır.",
                        "Yük transferi gerçekleşmez."
                    ],
                    correct: 1,
                    explanation: "Dokunmada yük paylaşılır; cisimler son durumda aynı tür yükle yüklenir. Zıt yük sürtünme sonucudur."
                },
                {
                    id: "7-q25",
                    unitId: 7,
                    unitName: "7. Ünite: Sürdürülebilir Yaşam ve Enerji",
                    topic: "Ekoloji Piramidi",
                    difficulty: "Yazılı Seviyesi",
                    question: "Ekoloji piramidinde üreticilerden tüketicilere (aşağıdan yukarıya) çıkıldıkça hangisi DOĞRUDUR?",
                    options: [
                        "Aktarılan enerji miktarı ve biyolojik birikim artar.",
                        "Toplam canlı kütlesi artar, zehirli madde birikimi azalır.",
                        "Aktarılan enerji miktarı azalırken dokulardaki biyolojik birikim artar.",
                        "Birey sayısı artar, vücut büyüklüğü azalır."
                    ],
                    correct: 2,
                    explanation: "Yukarı çıkıldıkça aktarılan enerji azalır; biyolojik birikim artar. Kütle ve birey sayısı genellikle azalır."
                },
                {
                    id: "7-q26",
                    unitId: 7,
                    unitName: "7. Ünite: Sürdürülebilir Yaşam ve Enerji",
                    topic: "Ayrıştırıcılar",
                    difficulty: "Klasik",
                    question: "Besin zincirindeki ayrıştırıcı (çürükçül) canlılar ile ilgili hangisi DOĞRUDUR?",
                    options: [
                        "Sadece ekoloji piramidinin en üst basamağında yer alırlar.",
                        "Güneş ışığını kullanarak kendi besinlerini üretirler.",
                        "Canlı atıklarını ve ölü organizmaları parçalayarak besin zincirinin her basamağında görev yaparlar.",
                        "Yalnızca birincil tüketicilerle beslenirler."
                    ],
                    correct: 2,
                    explanation: "Ayrıştırıcılar (mantar, bazı bakteriler) her basamakta bulunabilir; atık ve ölü organizmaları parçalar."
                },
                {
                    id: "7-q27",
                    unitId: 7,
                    unitName: "7. Ünite: Sürdürülebilir Yaşam ve Enerji",
                    topic: "Su Ayak İzi",
                    difficulty: "Klasik",
                    question: "Bir ürünün ham maddeden tüketiciye kadar tüm süreçte tüketilen doğrudan ve dolaylı su miktarını gösteren ölçüte ne ad verilir?",
                    options: [
                        "Su ayak izi",
                        "Biyolojik birikim",
                        "Atık su arıtımı",
                        "Karbon yükü"
                    ],
                    correct: 0,
                    explanation: "Su ayak izi, doğrudan ve dolaylı (görünmez) toplam su tüketimini gösteren ölçüttür."
                },
                {
                    id: "7-q28",
                    unitId: 7,
                    unitName: "7. Ünite: Sürdürülebilir Yaşam ve Enerji",
                    topic: "Sürdürülebilir Yaşam",
                    difficulty: "Tuzak Soru",
                    question: "Hangisi kaynakların tasarruflu kullanımına ve sürdürülebilir yaşama katkı sağlayan davranışlar arasında YER ALMAZ?",
                    options: [
                        "Kızartmalık atık yağların biriktirilip geri dönüşüm merkezlerine teslim edilmesi",
                        "Kullanılmış kâğıt, cam ve plastik atıkların geri dönüşüm kutularına atılması",
                        "İhtiyaçtan fazla tekstil ürünü ve kıyafet satın alınması",
                        "Evsel atık suların arıtma tesislerinde işlenerek doğaya kazandırılması"
                    ],
                    correct: 2,
                    explanation: "İhtiyaçtan fazla ürün almak su ve kaynak israfına yol açar; sürdürülebilir yaşama katkı sağlamaz."
                }
            ],
            flashcards: [
                { id: "7fc-1", unitId: 1, front: "Türkiye'nin ilk yerli ve millî haberleşme uydusunun adı nedir?", back: "Türksat 6A uydusudur." },
                { id: "7fc-2", unitId: 1, front: "Alper Gezeravcı ISS'de kaç bilimsel deney yapmıştır?", back: "Uluslararası Uzay İstasyonu'nda (ISS) 13 farklı bilimsel deney gerçekleştirmiştir." },
                { id: "7fc-3", unitId: 2, front: "Fiziksel anlamda iş birimi nedir ve hangi simgeyle gösterilir?", back: "İş birimi Joule'dur ve 'J' harfi ile gösterilir." },
                { id: "7fc-4", unitId: 2, front: "Kinetik enerji hangi iki temel değişkene bağlıdır?", back: "Cismin kütlesine ve hızına bağlıdır (her ikisiyle de doğru orantılıdır)." },
                { id: "7fc-5", unitId: 3, front: "Karaciğerin ürettiği safra sıvısının sindirimdeki görevi nedir?", back: "Yağların fiziksel (mekanik) sindirimini gerçekleştirmektir." },
                { id: "7fc-6", unitId: 4, front: "Sudan havaya bakan dalgıç dışarıdaki insanları nasıl görür?", back: "Çok yoğundan az yoğuna bakıldığı için olduklarından DAHA UZAKTA görür." },
                { id: "7fc-7", unitId: 5, front: "Atomun çekirdeğindeki pozitif yüklü parçacığa ne ad verilir?", back: "Proton (p⁺) adı verilir." },
                { id: "7fc-8", unitId: 6, front: "Ebonit (plastik) çubuk yün kumaşa sürtülünce yük durumları?", back: "Plastik çubuk negatif (−), yün kumaş pozitif (+) yüklenir." },
                { id: "7fc-9", unitId: 7, front: "Ürünün hammaddesinden tüketimine kadar harcanan görünmez su ölçütü?", back: "Su Ayak İzi olarak adlandırılır." },
                { id: "7f-fc1", unitId: 1, front: "Türksat 6A ne zaman fırlatıldı? Özelliği?", back: "9 Temmuz 2024 — Türkiye'nin ilk yerli ve millî haberleşme uydusu." },
                { id: "7f-fc2", unitId: 1, front: "İMECE ne işe yarar?", back: "Yerli ve millî gözlem uydusu; hedef tespit, doğal afet, tarım (15 Nisan 2023)." },
                { id: "7f-fc3", unitId: 1, front: "Alper Gezeravcı'nın ISS'te yaptığı deney sayısı?", back: "13 bilimsel deney. İlk mesaj: “İstikbal göklerdedir.”" },
                { id: "7f-fc4", unitId: 1, front: "Işık yılı nedir?", back: "Zaman değil mesafe birimi; ışığın 1 yılda aldığı yol." },
                { id: "7f-fc5", unitId: 1, front: "Büyük kütleli yıldızın sonu?", back: "Süpernova → nötron yıldızı (pulsar) veya kara delik." },
                { id: "7f-fc6", unitId: 1, front: "Kutup Yıldızı hangi yönde?", back: "Küçükayı'da; her zaman Kuzey'i gösterir." },
                { id: "7f-fc7", unitId: 2, front: "Fiziksel iş için iki şart nedir?", back: "Net kuvvet + bu kuvvet doğrultusunda yer değiştirme. Birim: Joule (J)." },
                { id: "7f-fc8", unitId: 2, front: "Çantayla yatay yürümek iş midir?", back: "Hayır — kuvvet yukarı, hareket yatay; aynı doğrultuda değil." },
                { id: "7f-fc9", unitId: 2, front: "Enerji nedir? Birimi?", back: "İş yapabilme yeteneği. Birim: Joule (J)." },
                { id: "7f-fc10", unitId: 2, front: "Sarkaçta en üst / en alt enerji?", back: "En üst: Ep max, Ek = 0. En alt: Ek max." },
                { id: "7f-fc11", unitId: 2, front: "Sürtünme kinetik enerjiyi neye dönüştürür?", back: "Isı, ses ve ışık enerjisine — cisim yavaşlar/durur." },
                { id: "7f-fc12", unitId: 3, front: "Safra ne işe yarar?", back: "Karaciğerden salgılanır; yağların fiziksel (mekanik) sindirimini sağlar." },
                { id: "7f-fc13", unitId: 3, front: "Küçük kan dolaşımı yolu?", back: "Sağ karıncık → akciğer atardamarı → akciğerler → akciğer toplardamarı → sol kulakçık." },
                { id: "7f-fc14", unitId: 3, front: "Gaz alışverişi nerede olur?", back: "Alveol (hava kesecikleri) — kılcal damarlarla çevrili." },
                { id: "7f-fc15", unitId: 3, front: "Boşaltım organ sırası?", back: "Böbrek → üreter → mesane → üretra." },
                { id: "7f-fc16", unitId: 3, front: "Alyuvar / akyuvar / pulcuk?", back: "Alyuvar: O₂–CO₂ · Akyuvar: savunma · Pulcuk: pıhtılaşma." },
                { id: "7f-fc17", unitId: 4, front: "Az → çok yoğun kırılma?", back: "Normale yaklaşır; kırılma açısı küçülür; hız azalır." },
                { id: "7f-fc18", unitId: 4, front: "İnce kenarlı mercek ne yapar?", back: "Yakınsak — ışığı toplar; hipermetrop; büyüteç." },
                { id: "7f-fc19", unitId: 4, front: "Kalın kenarlı mercek ne yapar?", back: "Iraksak — ışığı dağıtır; miyop; cisimleri küçük gösterir." },
                { id: "7f-fc20", unitId: 4, front: "Pet şişe neden yangın riski?", back: "İnce kenarlı mercek gibi güneş ışığını bir noktada toplar." },
                { id: "7f-fc21", unitId: 5, front: "Atom kütlesini ne belirler?", back: "Çekirdekteki proton + nötron. Elektron kütlesi ihmal edilir." },
                { id: "7f-fc22", unitId: 5, front: "Element vs bileşik ayrılma?", back: "Element ayrılamaz. Bileşik yalnızca kimyasal yolla ayrılır (fiziksel değil)." },
                { id: "7f-fc23", unitId: 5, front: "Çözünme hızını artıranlar?", back: "Sıcaklık ↑ · tanecik küçültme · karıştırma." },
                { id: "7f-fc24", unitId: 5, front: "Zeytinyağı–su nasıl ayrılır?", back: "Ayırma hunisi — yoğunluk farkı." },
                { id: "7f-fc25", unitId: 6, front: "Cam + ipek sürtünme sonucu?", back: "Cam (+), ipek (−). Elektron camdan ipeğe geçer." },
                { id: "7f-fc26", unitId: 6, front: "Sürtünme vs dokunma yükü?", back: "Sürtünme → zıt yük. Dokunma → aynı tür yük." },
                { id: "7f-fc27", unitId: 6, front: "Elektroskop ne işe yarar?", back: "Cismin yüklü olup olmadığını ve yük türünü (+/−) tespit eder." },
                { id: "7f-fc28", unitId: 6, front: "Şimşek ile yıldırım farkı?", back: "Şimşek: bulutlar arası. Yıldırım: bulut–yeryüzü." },
                { id: "7f-fc29", unitId: 7, front: "Piramitte yukarı çıkınca ne olur?", back: "Enerji ↓ · kütle/birey sayısı ↓ · biyolojik birikim ↑" },
                { id: "7f-fc30", unitId: 7, front: "Ayrıştırıcılar nerede bulunur?", back: "Besin zincirinin her basamağında (mantar, bazı bakteriler)." },
                { id: "7f-fc31", unitId: 7, front: "Su ayak izi nedir?", back: "Doğrudan + dolaylı (görünmez) toplam su tüketimi ölçütü." },
                { id: "7f-fc32", unitId: 7, front: "Sürdürülebilir yaşam nedir?", back: "Gelecek nesilleri tehlikeye atmadan bugünün ihtiyaçlarını karşılamak." }
            ],
            exams: [
                {
                    id: "7f-exam-1d1y",
                    title: "7. Sınıf Fen Bilimleri — 1. Dönem 1. Yazılı Prova Sınavı",
                    subtitle: "1.–3. Ünite · Senaryo soruları",
                    questions: [
                        {
                            id: "7f-e1-q1",
                            section: "🚀 I. Bölüm: Uzay Çağı (1. Ünite)",
                            unit: "1. Ünite",
                            topic: "Uydu Teknolojileri",
                            questionNumber: 1,
                            points: 10,
                            scenario: "Ülkemiz uzay araştırmalarında aktif rol alarak yörüngeye haberleşme ve gözlem uyduları fırlatmaktadır.",
                            question: "9 Temmuz 2024'te fırlatılan ilk yerli ve millî haberleşme uydumuzun adı ile ilk yerli ve millî gözlem uydumuzun (2023) adını yazınız.",
                            idealAnswer: "Yerli haberleşme: Türksat 6A. Yerli gözlem: İMECE."
                        },
                        {
                            id: "7f-e1-q2",
                            section: "🚀 I. Bölüm: Uzay Çağı (1. Ünite)",
                            unit: "1. Ünite",
                            topic: "Yıldız Yaşam Döngüsü",
                            questionNumber: 2,
                            points: 10,
                            scenario: "Öğretmen tahtaya Güneş büyüklüğündeki küçük kütleli bir yıldız ile Güneş'ten çok daha büyük kütleli bir dev yıldızın yaşam sonlarını şematize etmiştir.",
                            question: "Büyük kütleli yıldızların süpernova patlaması sonrasında dönüşebileceği 2 farklı son yapıyı yazınız.",
                            idealAnswer: "Kara delik veya nötron yıldızı (pulsar)."
                        },
                        {
                            id: "7f-e1-q3",
                            section: "🚀 I. Bölüm: Uzay Çağı (1. Ünite)",
                            unit: "1. Ünite",
                            topic: "Rasathaneler",
                            questionNumber: 3,
                            points: 10,
                            scenario: "Bir üniversite heyeti yeni bir astronomik gözlemevi (rasathane) kurmak için arazi arayışına girmiştir.",
                            question: "Gözlemevi kurulacak bölgenin seçiminde dikkat edilmesi gereken 2 temel coğrafi/çevresel özelliği yazınız.",
                            idealAnswer: "Şehir ışıklarından uzak (ışık kirliliği az); bulutsuz gece sayısı fazla; yüksek / nemi az bölgeler tercih edilir. (Herhangi ikisi)"
                        },
                        {
                            id: "7f-e1-q4",
                            section: "🏋️ II. Bölüm: Kuvvet ve Enerji (2. Ünite)",
                            unit: "2. Ünite",
                            topic: "Fiziksel İş",
                            questionNumber: 4,
                            points: 10,
                            scenario: "Ahmet odasındaki ağır kütüphaneyi iterek 3 metre ileri taşımıştır. Mehmet duvarı 10 dakika itmiş fakat kıpırdatamamıştır.",
                            question: "Hangi öğrenci fiziksel anlamda iş yapmıştır? Nedenini işin şartlarını belirterek açıklayınız.",
                            idealAnswer: "Ahmet iş yapmıştır: kuvvet uygulamış ve cisim kuvvet doğrultusunda yer değiştirmiştir. Mehmet yer değiştirme sağlayamadığı için iş yapmamıştır."
                        },
                        {
                            id: "7f-e1-q5",
                            section: "🏋️ II. Bölüm: Kuvvet ve Enerji (2. Ünite)",
                            unit: "2. Ünite",
                            topic: "Kinetik ve Potansiyel Enerji",
                            questionNumber: 5,
                            points: 10,
                            scenario: "Sürtünmesiz ortamda bir basketbol topu yüksekten serbest bırakılıyor.",
                            question: "Top aşağı doğru düşerken çekim potansiyel enerjisi ve kinetik enerjisindeki değişim nasıl olur? Açıklayınız.",
                            idealAnswer: "Yükseklik azaldığı için çekim potansiyel enerjisi azalır; hız arttığı için kinetik enerji artar."
                        },
                        {
                            id: "7f-e1-q6",
                            section: "🏋️ II. Bölüm: Kuvvet ve Enerji (2. Ünite)",
                            unit: "2. Ünite",
                            topic: "Enerjinin Korunumu",
                            questionNumber: 6,
                            points: 10,
                            scenario: "Sallanan salıncakta çocuk en üst noktada bir anlık duraklar; en alt noktada en yüksek hıza ulaşır.",
                            question: "Salıncağın en alt ve en üst noktasındaki enerji türlerinin büyüklüklerini karşılaştırınız.",
                            idealAnswer: "En üstte çekim potansiyel enerjisi en büyük (kinetik ≈ 0). En altta kinetik enerji en büyüktür."
                        },
                        {
                            id: "7f-e1-q7",
                            section: "🫀 III. Bölüm: Vücudumuzdaki Sistemler (3. Ünite)",
                            unit: "3. Ünite",
                            topic: "Sindirim Öz Suları",
                            questionNumber: 7,
                            points: 10,
                            scenario: "İnce bağırsağa dökülen karaciğerin safra sıvısı ile pankreasın pankreas öz suyu besinlerin sindiriminde görev alır.",
                            question: "Safra sıvısı ile pankreas öz suyunun gerçekleştirdiği sindirim çeşitlerini (fiziksel / kimyasal) yazınız.",
                            idealAnswer: "Safra: fiziksel (mekanik) sindirim. Pankreas öz suyu: kimyasal sindirim."
                        },
                        {
                            id: "7f-e1-q8",
                            section: "🫀 III. Bölüm: Vücudumuzdaki Sistemler (3. Ünite)",
                            unit: "3. Ünite",
                            topic: "Dolaşım Sistemi",
                            questionNumber: 8,
                            points: 10,
                            scenario: "Kalpten çıkan kirli kan akciğerlere gidip temizlendikten sonra tekrar kalbe geri döner.",
                            question: "Bu dolaşım çeşidinin adı nedir? Kanı kalpten akciğere taşıyan damarın adını yazınız.",
                            idealAnswer: "Küçük kan dolaşımı. Damar: akciğer atardamarı."
                        },
                        {
                            id: "7f-e1-q9",
                            section: "🫀 III. Bölüm: Vücudumuzdaki Sistemler (3. Ünite)",
                            unit: "3. Ünite",
                            topic: "Solunum ve Gaz Alışverişi",
                            questionNumber: 9,
                            points: 10,
                            scenario: "Akciğerlerde etrafı kılcal damarlarla sarılı milyonlarca küçük hava keseciği bulunur.",
                            question: "Bu hava keseciklerinin adı nedir ve burada hangi hayati olay gerçekleşir?",
                            idealAnswer: "Alveol. Oksijen ve karbon dioksit gaz alışverişi gerçekleşir."
                        },
                        {
                            id: "7f-e1-q10",
                            section: "🫀 III. Bölüm: Vücudumuzdaki Sistemler (3. Ünite)",
                            unit: "3. Ünite",
                            topic: "Boşaltım Sistemi",
                            questionNumber: 10,
                            points: 10,
                            scenario: "Kandaki zararlı süzüntü maddeler böbreklerde idrara dönüştürülür.",
                            question: "Böbreklerde oluşan idrarın mesaneye (idrar kesesine) taşınmasını sağlayan yapının adını yazınız.",
                            idealAnswer: "Üreter (idrar borusu)."
                        }
                    ]
                },
                {
                    id: "7f-exam-2d1y",
                    title: "7. Sınıf Fen Bilimleri — 2. Dönem 1. Yazılı Prova Sınavı",
                    subtitle: "4.–7. Ünite · Senaryo soruları",
                    questions: [
                        {
                            id: "7f-e2-q1",
                            section: "🔍 I. Bölüm: Işığın Kırılması ve Mercekler (4. Ünite)",
                            unit: "4. Ünite",
                            topic: "Işığın Kırılması",
                            questionNumber: 1,
                            points: 10,
                            scenario: "Işık ışını hava ortamından su ortamına (az yoğun → çok yoğun) geçmektedir.",
                            question: "Işık ışınının doğrultusundaki ve hızındaki değişimi normale yaklaşma/uzaklaşma durumunu belirterek yazınız.",
                            idealAnswer: "Normale yaklaşarak kırılır; yoğun ortama geçtiği için hızı azalır."
                        },
                        {
                            id: "7f-e2-q2",
                            section: "🔍 I. Bölüm: Işığın Kırılması ve Mercekler (4. Ünite)",
                            unit: "4. Ünite",
                            topic: "Mercek Çeşitleri",
                            questionNumber: 2,
                            points: 10,
                            scenario: "Işığı toplayan merceklere ince kenarlı, dağıtanlara kalın kenarlı mercek denir.",
                            question: "Miyop (uzağı görememe) göz kusurunu düzeltmek için hangi mercek türü kullanılır?",
                            idealAnswer: "Kalın kenarlı (ıraksak) mercek."
                        },
                        {
                            id: "7f-e2-q3",
                            section: "⚛️ II. Bölüm: Maddenin Doğasına Yolculuk (5. Ünite)",
                            unit: "5. Ünite",
                            topic: "Atom Parçacıkları",
                            questionNumber: 3,
                            points: 10,
                            scenario: "Atomun çekirdeğinde iki temel parçacık, katmanlarda ise elektron bulunur.",
                            question: "Çekirdekte bulunan pozitif (+) ve yüksüz parçacıkların adlarını yazınız.",
                            idealAnswer: "Pozitif: proton (p⁺). Yüksüz: nötron (n⁰)."
                        },
                        {
                            id: "7f-e2-q4",
                            section: "⚛️ II. Bölüm: Maddenin Doğasına Yolculuk (5. Ünite)",
                            unit: "5. Ünite",
                            topic: "Saf Maddeler",
                            questionNumber: 4,
                            points: 10,
                            scenario: "Sodyum simgesi Na ile, su formülü H₂O ile gösterilir.",
                            question: "Sodyum ve su maddelerini 'element' ve 'bileşik' olarak sınıflandırınız.",
                            idealAnswer: "Sodyum (Na): element. Su (H₂O): bileşik."
                        },
                        {
                            id: "7f-e2-q5",
                            section: "⚛️ II. Bölüm: Maddenin Doğasına Yolculuk (5. Ünite)",
                            unit: "5. Ünite",
                            topic: "Çözünme Hızı",
                            questionNumber: 5,
                            points: 10,
                            scenario: "Eşit miktarda sıcak su bulunan iki bardağın 1.sine küp şeker, 2.sine toz şeker atılıp karıştırılıyor.",
                            question: "Hangi bardaktaki şeker daha hızlı çözünür? Nedenini temas yüzeyi açısından açıklayınız.",
                            idealAnswer: "2. bardaktaki toz şeker daha hızlı çözünür; tanecik boyutu küçüldükçe temas yüzeyi artar."
                        },
                        {
                            id: "7f-e2-q6",
                            section: "⚡ III. Bölüm: Elektriklenme (6. Ünite)",
                            unit: "6. Ünite",
                            topic: "Sürtünme ile Elektriklenme",
                            questionNumber: 6,
                            points: 10,
                            scenario: "Plastik (ebonit) bir çubuk yün kumaşa sürtülüyor.",
                            question: "Sürtünme sonrasında plastik çubuğun ve yün kumaşın elektrik yük türleri (+ veya −) nasıl olur?",
                            idealAnswer: "Plastik çubuk: negatif (−). Yün kumaş: pozitif (+)."
                        },
                        {
                            id: "7f-e2-q7",
                            section: "⚡ III. Bölüm: Elektriklenme (6. Ünite)",
                            unit: "6. Ünite",
                            topic: "Elektroskop",
                            questionNumber: 7,
                            points: 10,
                            scenario: "Nötr bir elektroskobun topuzuna negatif (−) yüklü bir çubuk dokunduruluyor.",
                            question: "Elektroskobun yapraklarında nasıl bir hareket gözlemlenir? Nedenini açıklayınız.",
                            idealAnswer: "Yapraklar açılır / birbirinden uzaklaşır. Elektroskop negatif yüklenir; aynı yükler birbirini iter."
                        },
                        {
                            id: "7f-e2-q8",
                            section: "🌿 IV. Bölüm: Sürdürülebilir Yaşam ve Enerji (7. Ünite)",
                            unit: "7. Ünite",
                            topic: "Besin Zinciri",
                            questionNumber: 8,
                            points: 10,
                            scenario: "Otlak ekosisteminde: Ot → Çekirge → Kurbağa → Yılan → Kartal besin zinciri yer almaktadır.",
                            question: "Bu besin zincirindeki üretici canlı ile birincil tüketici canlıyı yazınız.",
                            idealAnswer: "Üretici: Ot. Birincil tüketici: Çekirge."
                        },
                        {
                            id: "7f-e2-q9",
                            section: "🌿 IV. Bölüm: Sürdürülebilir Yaşam ve Enerji (7. Ünite)",
                            unit: "7. Ünite",
                            topic: "Ekoloji Piramidi",
                            questionNumber: 9,
                            points: 10,
                            scenario: "Ekoloji piramidinde üreticilerden tüketicilere doğru (aşağıdan yukarıya) çıkılmaktadır.",
                            question: "Piramitte yukarı çıkıldıkça canlıların dokularındaki biyolojik birikim ve aktarılan enerji nasıl değişir?",
                            idealAnswer: "Biyolojik birikim artar. Aktarılan enerji azalır."
                        },
                        {
                            id: "7f-e2-q10",
                            section: "🌿 IV. Bölüm: Sürdürülebilir Yaşam ve Enerji (7. Ünite)",
                            unit: "7. Ünite",
                            topic: "Su Ayak İzi",
                            questionNumber: 10,
                            points: 10,
                            scenario: "Gereksiz kıyafet ve teknolojik ürün alımı gizli su tüketimini artırmaktadır.",
                            question: "Bir ürünün hammaddesinden üretimine kadar harcanan toplam gizli su miktarını gösteren kavrama ne ad verilir?",
                            idealAnswer: "Su ayak izi."
                        }
                    ]
                }
            ]
        },
        // ==========================================
        // 8. SINIF TÜRKÇE (LGS)
        // ==========================================
        "8-turkce": {
            title: "8. Sınıf Türkçe (LGS)",
            subtitle: "Fiilimsiler, paragraf, cümle türleri ve sözel mantık taktikleri",
            presentation: {
                title: "Fiilimsiler & Paragraf Taktikleri",
                desc: "LGS sözel bölümünde en çok karıştırılan fiilimsi şifreleri, paragraf ana fikir ve cümle türleri.",
                file: "#",
                slidesCount: "Not + Test Odaklı",
                badge: "LGS Sözel Hazırlık"
            },
            notes: [
                {
                    unitId: 1,
                    unitName: "1. Ünite: Fiilimsiler",
                    title: "Fiilimsi Şifreleri (İsim-Sıfat-Zarf Fiil)",
                    important: "LGS'de Garanti Konu",
                    badge: "T.8.1",
                    content: `
                        <div class="note-highlight">
                            <strong>Üçlü Şifre:</strong> İsim-fiil (-ma, -ış, -mak) / Sıfat-fiil (-an, -ası, -mez, -ar, -dik, -ecek, -miş) / Zarf-fiil (-ınca, -arak, -ıp, -ken, -madan, -alı, -dıkça...).
                        </div>
                        <ul class="styled-list">
                            <li><strong>İsim-fiil:</strong> Eylemi isimleştirir. Örn: <em>okumak</em>, <em>gülüş</em>, <em>yazma</em>.</li>
                            <li><strong>Sıfat-fiil:</strong> İsmi niteleyen fiilimsidir. Örn: <em>gülən çocuk</em>, <em>yazılacak ödev</em>.</li>
                            <li><strong>Zarf-fiil:</strong> Fiili durum/zaman yönünden açıklar. Örn: <em>koşarak geldi</em>, <em>gelince anladı</em>.</li>
                        </ul>
                        <div class="note-alert">⚠️ <strong>Tuzak:</strong> "mayışmak" gibi ekler fiilimsi değildir; kök+ek ayrımını iyi yap.</div>
                    `
                },
                {
                    unitId: 2,
                    unitName: "2. Ünite: Paragrafta Anlam",
                    title: "Ana Fikir & Yardımcı Düşünce",
                    important: "Zaman Kazandıran Taktik",
                    badge: "T.8.2",
                    content: `
                        <p><strong>Ana fikir:</strong> Paragrafın tamamını kapsayan tek cümledir. Çoğu zaman paragrafın ilk veya son cümlesinde gizlenir.</p>
                        <ul class="styled-list">
                            <li>Önce seçenekleri oku, sonra paragrafı tara (ters okuma).</li>
                            <li>Aşırı genelleme yapan seçenekleri ele.</li>
                            <li>"Yalnızca, asla, her zaman" gibi mutlak ifadeler genelde yanlıştır.</li>
                        </ul>
                    `
                },
                {
                    unitId: 3,
                    unitName: "3. Ünite: Cümle Türleri",
                    title: "Yüklemine ve Anlamına Göre Cümle",
                    important: "Yazılı + LGS",
                    badge: "T.8.3",
                    content: `
                        <div class="comparison-grid">
                            <div class="comp-card cold">
                                <h4>Yüklemine Göre</h4>
                                <ul>
                                    <li>İsim cümlesi (ek-fiil)</li>
                                    <li>Fiil cümlesi</li>
                                </ul>
                            </div>
                            <div class="comp-card warm">
                                <h4>Anlamına Göre</h4>
                                <ul>
                                    <li>Olumlu / olumsuz</li>
                                    <li>Soru / ünlem</li>
                                </ul>
                            </div>
                        </div>
                    `
                }
            ],
            curriculum: [
                { unitId: 1, unit: "1. Ünite", name: "Fiilimsiler", hours: "12 Saat", period: "1. Dönem", status: "Aktif", lgsWeight: "Yüksek", examTip: "Fiilimsi eklerini ezberlemeden örnek cümleyle ayırt et.", topics: [
                    { code: "T.8.1.1", title: "İsim-fiil", summary: "-mak, -ma, -ış ekleri ile eylem isimleşir." },
                    { code: "T.8.1.2", title: "Sıfat-fiil", summary: "İsmi niteleyen fiilimsi ekleri (-an, -ası, -mez...)." },
                    { code: "T.8.1.3", title: "Zarf-fiil", summary: "Fiili zaman/durum yönünden tamamlayan ekler." }
                ]},
                { unitId: 2, unit: "2. Ünite", name: "Paragrafta Anlam", hours: "14 Saat", period: "1. Dönem", status: "Aktif", lgsWeight: "Çok Yüksek", examTip: "Önce seçenek, sonra metin; zaman kazanırsın.", topics: [
                    { code: "T.8.2.1", title: "Ana fikir", summary: "Paragrafın tamamını kapsayan düşünce." },
                    { code: "T.8.2.2", title: "Yardımcı düşünce", summary: "Ana fikri destekleyen ayrıntılar." }
                ]},
                { unitId: 3, unit: "3. Ünite", name: "Cümle Türleri", hours: "10 Saat", period: "2. Dönem", status: "Aktif", topics: [
                    { code: "T.8.3.1", title: "Yüklemine göre", summary: "İsim / fiil cümlesi ayrımı." },
                    { code: "T.8.3.2", title: "Anlamına göre", summary: "Olumlu, olumsuz, soru, ünlem." }
                ]}
            ],
            quiz: [
                {
                    id: "8t-q1",
                    unitId: 1,
                    unitName: "1. Ünite: Fiilimsiler",
                    topic: "Fiilimsi Ayırt Etme",
                    difficulty: "LGS Klasik",
                    question: "Aşağıdaki cümlelerin hangisinde sıfat-fiil vardır?",
                    options: [
                        "Koşarak eve geldi.",
                        "Gülmek sağlığa yararlıdır.",
                        "Okuyan öğrenci başarılı olur.",
                        "Gelince haber ver."
                    ],
                    correct: 2,
                    explanation: "'Okuyan' sözcüğü 'öğrenci' ismini nitelediği için sıfat-fiildir. Koşarak/gelince zarf-fiil, gülmek isim-fiildir."
                },
                {
                    id: "8t-q2",
                    unitId: 1,
                    unitName: "1. Ünite: Fiilimsiler",
                    topic: "Zarf-fiil",
                    difficulty: "Yeni Nesil",
                    question: "'Kapıyı çalmadan içeri girdi.' cümlesindeki fiilimsi türü nedir?",
                    options: ["İsim-fiil", "Sıfat-fiil", "Zarf-fiil", "Fiilimsi yoktur"],
                    correct: 2,
                    explanation: "'-madan' eki zarf-fiil ekidir; eylemin nasıl/ne zaman yapıldığını belirtir."
                },
                {
                    id: "8t-q3",
                    unitId: 2,
                    unitName: "2. Ünite: Paragrafta Anlam",
                    topic: "Ana Fikir",
                    difficulty: "LGS Taktik",
                    question: "Paragrafta ana fikir bulunuraken en doğru yaklaşım hangisidir?",
                    options: [
                        "Sadece ilk cümleye bakmak yeterlidir.",
                        "Tüm paragrafı kapsayan düşünceyi bulmak gerekir.",
                        "En uzun cümleyi ana fikir kabul etmek.",
                        "Yazarın duygusunu ana fikir saymak."
                    ],
                    correct: 1,
                    explanation: "Ana fikir paragrafın tamamını kuşatan tek düşüncedir; tek cümleye kilitlenmek yanılgıya açıkır."
                },
                {
                    id: "8t-q4",
                    unitId: 3,
                    unitName: "3. Ünite: Cümle Türleri",
                    topic: "Yüklemine Göre",
                    difficulty: "Yazılı",
                    question: "'Bu kitap çok ilginç.' cümlesi yüklemine göre hangi türdedir?",
                    options: ["Fiil cümlesi", "İsim cümlesi", "Soru cümlesi", "Ünlem cümlesi"],
                    correct: 1,
                    explanation: "Yüklem 'ilginç' isim soylu bir sözcüktür (ek-fiil gizlidir); bu nedenle isim cümlesidir."
                }
            ],
            flashcards: [
                { id: "8t-fc1", front: "Sıfat-fiil ne işe yarar?", back: "İsmi niteler: gülən çocuk, yazılacak ödev." },
                { id: "8t-fc2", front: "Zarf-fiil örnekleri?", back: "koşarak, gelince, bakıp, gülmeden, çalışırken..." },
                { id: "8t-fc3", front: "Ana fikir nedir?", back: "Paragrafın tamamını kapsayan tek düşüncedir." },
                { id: "8t-fc4", front: "İsim cümlesi nasıl anlaşılır?", back: "Yüklem isim soyludur / ek-fiil taşır: 'Hava güzel.'" }
            ]
        },

        // ==========================================
        // 7. SINIF TÜRKÇE
        // ==========================================
        "7-turkce": {
            title: "7. Sınıf Türkçe",
            subtitle: "İçerikler güncelleniyor — yakında yeni MEB notları eklenecek",
            presentation: {
                title: "Yakında",
                desc: "7. sınıf Türkçe üniteleri yeniden hazırlanıyor.",
                file: "#",
                slidesCount: "Hazırlanıyor",
                badge: "Güncelleniyor"
            },
            notes: [],
            curriculum: [],
            quiz: [],
            flashcards: []
        },

        // ==========================================
        // 6. SINIF FEN BİLİMLERİ - 1. ÜNİTE (GÜNCEL MEB)
        // ==========================================
        "6-fen": {
            title: "6. Sınıf Fen Bilimleri",
            subtitle: "1–7. Ünite + Sınav Şampiyonu hap bilgiler",
            presentation: {
                title: "6. Sınıf Fen • 1–7. Ünite + Hap + Yazılı",
                desc: "Tüm üniteler, sınav tuzakları, şampiyon flaş kartlar ve 1.–2. dönem yazılı prova.",
                file: "#",
                slidesCount: "Not + Test + Hap + Yazılı",
                badge: "Şampiyon Paketi"
            },
            notes: [
                {
                    unitId: 0,
                    unitName: "⚡ Sınav Şampiyonu",
                    title: "En Çok Düşülen Sınav Tuzakları",
                    important: "True / False & Traps",
                    badge: "HAP",
                    content: `
                        <div class="note-alert">
                            🚨 <strong>TUZAK:</strong> “Güneş tutulması gece vakti gerçekleşir ve Dolunay evresindedir.”<br>
                            <strong>CEVAP: YANLIŞ!</strong> Güneş tutulması <strong>gündüz</strong> ve <strong>Yeni Ay</strong> evresindedir. Gece + Dolunay = Ay tutulması.
                        </div>
                        <div class="note-alert">
                            🚨 <strong>TUZAK:</strong> “Uranüs ve Neptün karasal (kayalık) gezegenlerdir.”<br>
                            <strong>CEVAP: YANLIŞ!</strong> Uranüs ve Neptün <strong>gazsal (dış)</strong>tır. Karasal: Merkür, Venüs, Dünya, Mars.
                        </div>
                        <div class="note-alert">
                            🚨 <strong>TUZAK:</strong> “Bileşke kuvvet sıfır olan bir cisim kesinlikle duruyordur.”<br>
                            <strong>CEVAP: YANLIŞ!</strong> R = 0 iken duruyorsa durur; hareketliyorsa <strong>sabit süratle</strong> devam eder.
                        </div>
                        <div class="note-alert">
                            🚨 <strong>TUZAK:</strong> “Tohumun çimlenmesi için ışık ve toprak şarttır.”<br>
                            <strong>CEVAP: YANLIŞ!</strong> Işık ve toprak gerekmez. <strong>SOS:</strong> Su, Oksijen, Sıcaklık.
                        </div>
                        <div class="note-alert">
                            🚨 <strong>TUZAK:</strong> “Çukur ayna görüntüyü her zaman düz ve küçük gösterir.”<br>
                            <strong>CEVAP: YANLIŞ!</strong> Her zaman düz ve küçük = <strong>tümsek</strong> ayna. Çukur mesafeye göre değişir.
                        </div>
                        <div class="note-alert">
                            🚨 <strong>TUZAK:</strong> “Suyun donmasıyla hacmi azalır ve buz dibe çöker.”<br>
                            <strong>CEVAP: YANLIŞ!</strong> Su donunca hacim <strong>artar</strong>, yoğunluk azalır; buz <strong>yüzeyde yüzer</strong>.
                        </div>
                        <div class="note-alert">
                            🚨 <strong>TUZAK:</strong> “İletken telin uzunluğu artarsa ampul daha parlak yanar.”<br>
                            <strong>CEVAP: YANLIŞ!</strong> Uzunluk ↑ → direnç ↑ → akım ↓ → ampul daha <strong>sönük</strong>.
                        </div>
                    `
                },
                {
                    unitId: 1,
                    unitName: "1. Ünite: Güneş Sistemi ve Tutulmalar",
                    title: "Güneş Sistemi ve Gezegenlerin Sıralaması",
                    important: "Ezber + Sıra",
                    badge: "F.6.1.1",
                    content: `
                        <p>Güneş etrafında dolanan gezegenler, uydular, asteroitler ve gök taşlarının oluşturduğu sisteme <strong>Güneş sistemi</strong> denir.</p>
                        <div class="note-highlight">
                            <strong>Güneş’e yakınlığa göre sıra:</strong><br>
                            1. Merkür → 2. Venüs → 3. Dünya → 4. Mars → 5. Jüpiter → 6. Satürn → 7. Uranüs → 8. Neptün
                        </div>
                        <p style="margin-top:0.6rem; font-size:0.9rem; color:var(--text-muted);">Kısaltma ipucu: <em>MerVenDüMar · JüpSatUraNep</em></p>
                    `
                },
                {
                    unitId: 1,
                    unitName: "1. Ünite: Güneş Sistemi ve Tutulmalar",
                    title: "Karasal (İç) ve Gazsal (Dış) Gezegenler",
                    important: "Yazılıda Kesin",
                    badge: "F.6.1.1",
                    content: `
                        <div class="comparison-grid">
                            <div class="comp-card cold">
                                <h4>🪨 Karasal (İç)</h4>
                                <ul>
                                    <li><strong>Merkür, Venüs, Dünya, Mars</strong></li>
                                    <li>Yüzeyleri kayalık ve katı</li>
                                    <li>Hacimce daha küçük</li>
                                    <li>Güneş’e daha yakın</li>
                                </ul>
                            </div>
                            <div class="comp-card warm">
                                <h4>🌫️ Gazsal (Dış)</h4>
                                <ul>
                                    <li><strong>Jüpiter, Satürn, Uranüs, Neptün</strong></li>
                                    <li>Yüzey kayalık değil; temelde <strong>gaz</strong></li>
                                    <li>Hacimce çok daha büyük (sistemin en büyük 4’ü)</li>
                                    <li>Güneş’e daha uzak; <strong>asteroit kuşağının ötesinde</strong></li>
                                </ul>
                            </div>
                        </div>
                        <div class="note-highlight" style="margin-top:0.75rem;">
                            <strong>Gazsal gezegenlerin ortak özellikleri:</strong>
                            <ul style="margin:0.4rem 0 0; padding-left:1.1rem;">
                                <li>Gazsal yapıda olmaları</li>
                                <li>Hepsinin <strong>halka</strong> sistemi vardır (en belirgin: <strong>Satürn</strong>)</li>
                                <li>Hepsinin doğal <strong>uydusu</strong> vardır</li>
                                <li>Hacim sırası: Jüpiter &gt; Satürn &gt; Uranüs &gt; Neptün</li>
                                <li>Asteroit kuşağı (Mars–Jüpiter arası) <strong>ötesinde</strong> yer alırlar</li>
                            </ul>
                        </div>
                    `
                },
                {
                    unitId: 1,
                    unitName: "1. Ünite: Güneş Sistemi ve Tutulmalar",
                    title: "Gezegenlerin Ayırt Edici Özellikleri",
                    important: "Tuzak Noktaları",
                    badge: "F.6.1.1",
                    content: `
                        <ul class="styled-list">
                            <li><strong>Merkür:</strong> Güneş’e en yakın; hacimce <strong>en küçük</strong>; uydu/halka yok; karasal.</li>
                            <li><strong>Venüs:</strong> 2. sırada; yoğun atmosfer nedeniyle <strong>en sıcak</strong>; uydu/halka yok; karasal.</li>
                            <li><strong>Dünya:</strong> 3. sırada; <strong>canlı yaşamının olduğu bilinen tek gezegen</strong>; tek uydu (Ay), halka yok; karasal.</li>
                            <li><strong>Mars:</strong> “Kızıl Gezegen”; uydusu var, halkası yok; karasal.</li>
                            <li><strong>Jüpiter:</strong> Hacimce <strong>en büyük</strong>; uydu + halka var; gazsal.</li>
                            <li><strong>Satürn:</strong> <strong>Halkaları en belirgin</strong>; hacimce 2. büyük; uydu + halka; gazsal.</li>
                            <li><strong>Uranüs:</strong> Hacimce 3. büyük; dönme ekseni eğik (yan yatmış varil gibi); uydu + halka; gazsal.</li>
                            <li><strong>Neptün:</strong> Güneş’e <strong>en uzak</strong>; gazsalların en küçüğü (sistemde 4. büyük); uydu + halka; gazsal.</li>
                        </ul>
                        <div class="note-alert">
                            ⚠️ <strong>MEB Tuzağı:</strong> “En sıcak = Güneş’e en yakın (Merkür)” YANLIŞ! En sıcak <strong>Venüs</strong>’tür (sera etkisi).
                        </div>
                    `
                },
                {
                    unitId: 1,
                    unitName: "1. Ünite: Güneş Sistemi ve Tutulmalar",
                    title: "Asteroit, Gök Taşı, Meteor ve Meteorit",
                    important: "Kavram Karıştırmayın",
                    badge: "F.6.1.2",
                    content: `
                        <ul class="styled-list">
                            <li><strong>Asteroit Kuşağı:</strong> <u>Mars ile Jüpiter arasında</u>; kaya ve metal parçalarından oluşan bölge.</li>
                            <li><strong>Gök Taşı:</strong> Asteroitlerden kopmuş küçük kaya/metal parçaları.</li>
                            <li><strong>Meteor:</strong> Atmosfere giren gök taşının sürtünmeyle ısınıp ışık saçması; halk arasında “yıldız kayması”.</li>
                            <li><strong>Meteorit:</strong> Atmosferde tamamen yanmayıp <strong>yeryüzüne ulaşan</strong> gök taşı.</li>
                            <li><strong>Meteor Çukuru:</strong> Meteoritlerin yeryüzünde oluşturduğu çukur.</li>
                        </ul>
                        <div class="note-highlight">
                            <strong>Zincir:</strong> Asteroit → Gök taşı → (atmosfer) Meteor → (yere düşerse) Meteorit → Meteor çukuru
                        </div>
                    `
                },
                {
                    unitId: 1,
                    unitName: "1. Ünite: Güneş Sistemi ve Tutulmalar",
                    title: "Güneş Tutulması",
                    important: "Sıra + Evre",
                    badge: "F.6.1.3",
                    content: `
                        <p>Güneş, Dünya ve Ay’ın aynı hizada sıralanmasıyla tutulmalar oluşur; bu, ışığın doğrusal yayıldığının göstergesidir.</p>
                        <ul class="styled-list">
                            <li><strong>Sıralama:</strong> Güneş — Ay — Dünya (Ay, Güneş ile Dünya arasındadır).</li>
                            <li><strong>Ay’ın evresi:</strong> <strong>Yeni Ay</strong></li>
                            <li><strong>Gözlem:</strong> <strong>Gündüz</strong>; gölgenin düştüğü <strong>dar bir alanda</strong></li>
                            <li><strong>Süre:</strong> Kısa sürelidir.</li>
                        </ul>
                        <div class="note-alert">
                            ☀️ <strong>Uyarı:</strong> Güneş tutulmasına doğrudan bakmak tehlikelidir; filtreli gözlükle izlenmelidir.
                        </div>
                    `
                },
                {
                    unitId: 1,
                    unitName: "1. Ünite: Güneş Sistemi ve Tutulmalar",
                    title: "Ay Tutulması",
                    important: "Karşılaştır",
                    badge: "F.6.1.3",
                    content: `
                        <ul class="styled-list">
                            <li><strong>Sıralama:</strong> Güneş — Dünya — Ay (Dünya, Güneş ile Ay arasındadır; Ay Dünya’nın gölgesinde kalır).</li>
                            <li><strong>Ay’ın evresi:</strong> <strong>Dolunay</strong></li>
                            <li><strong>Gözlem:</strong> <strong>Gece</strong>; daha <strong>geniş bir alanda</strong></li>
                            <li><strong>Süre:</strong> Güneş tutulmasına göre daha <strong>uzun</strong> sürer.</li>
                        </ul>
                        <div class="comparison-grid" style="margin-top:0.75rem;">
                            <div class="comp-card warm">
                                <h4>☀️ Güneş Tutulması</h4>
                                <ul>
                                    <li>Güneş — Ay — Dünya</li>
                                    <li>Yeni Ay</li>
                                    <li>Gündüz · dar alan · kısa</li>
                                </ul>
                            </div>
                            <div class="comp-card cold">
                                <h4>🌙 Ay Tutulması</h4>
                                <ul>
                                    <li>Güneş — Dünya — Ay</li>
                                    <li>Dolunay</li>
                                    <li>Gece · geniş alan · daha uzun</li>
                                </ul>
                            </div>
                        </div>
                    `
                },
                // 2. ÜNİTE
                {
                    unitId: 2,
                    unitName: "2. Ünite: Kuvvet ve Hareket",
                    title: "Kuvvetin Temel Özellikleri",
                    important: "4 Özellik",
                    badge: "F.6.2.1",
                    content: `
                        <p>Bir cisme uygulanan kuvvet tanımlanırken ve gösterilirken 4 temel özellik kullanılır:</p>
                        <ul class="styled-list">
                            <li><strong>Uygulama noktası:</strong> Kuvvetin cisme etki ettiği nokta.</li>
                            <li><strong>Doğrultu:</strong> Birbirine zıt iki yönü kapsayan hat (ör. Doğu–Batı).</li>
                            <li><strong>Yön:</strong> Kuvvetin uygulandığı taraf (Doğu, Batı, Kuzey, Güney).</li>
                            <li><strong>Büyüklük (şiddet):</strong> Dinamometre ile ölçülen kuvvet miktarı; birimi <strong>Newton (N)</strong>; simgesi <strong>F</strong>.</li>
                        </ul>
                    `
                },
                {
                    unitId: 2,
                    unitName: "2. Ünite: Kuvvet ve Hareket",
                    title: "Bileşke Kuvvet (Net Kuvvet)",
                    important: "R = …",
                    badge: "F.6.2.1",
                    content: `
                        <p><strong>Tanım:</strong> Bir cisme etki eden birden fazla kuvvetin yaptığı etkiyi tek başına yapabilen kuvvete <strong>bileşke kuvvet (net kuvvet)</strong> denir; simgesi <strong>R</strong>.</p>
                        <div class="comparison-grid">
                            <div class="comp-card warm">
                                <h4>➡️ Aynı doğrultu, aynı yön</h4>
                                <ul>
                                    <li>Kuvvetler <strong>toplanır</strong></li>
                                    <li>Yön ve doğrultu aynı kalır</li>
                                    <li><strong>R = F₁ + F₂</strong></li>
                                </ul>
                            </div>
                            <div class="comp-card cold">
                                <h4>↔️ Aynı doğrultu, zıt yön</h4>
                                <ul>
                                    <li>Büyükten küçük <strong>çıkarılır</strong></li>
                                    <li>Yön = büyük kuvvetin yönü</li>
                                    <li><strong>R = F_büyük − F_küçük</strong></li>
                                </ul>
                            </div>
                        </div>
                        <div class="note-highlight" style="margin-top:0.75rem;">
                            <strong>Örnek:</strong> Doğu 8 N + Batı 3 N → R = 5 N, yön <strong>doğu</strong>.
                        </div>
                    `
                },
                {
                    unitId: 2,
                    unitName: "2. Ünite: Kuvvet ve Hareket",
                    title: "Dengelenmiş ve Dengelenmemiş Kuvvetler",
                    important: "R = 0 mı?",
                    badge: "F.6.2.2",
                    content: `
                        <div class="comparison-grid">
                            <div class="comp-card cold">
                                <h4>⚖️ Dengelenmiş (R = 0)</h4>
                                <ul>
                                    <li>Duran cisim <strong>durmaya devam eder</strong></li>
                                    <li>Hareketli cisim <strong>sabit süratle</strong> devam eder</li>
                                    <li>Örn: masada kitap, sabit süratle araç, duvarda tablo</li>
                                </ul>
                            </div>
                            <div class="comp-card warm">
                                <h4>🚗 Dengelenmemiş (R ≠ 0)</h4>
                                <ul>
                                    <li>Cisim hızlanabilir, yavaşlayabilir, durabilir veya yön değiştirebilir</li>
                                    <li>Duruyorsa bileşke kuvvet yönünde harekete geçer</li>
                                    <li>Örn: düşen elma, hızlanan araba, fırlatılan top</li>
                                </ul>
                            </div>
                        </div>
                        <div class="note-alert" style="margin-top:0.75rem;">
                            🛡️ <strong>Dengeleyici kuvvet:</strong> Dengelenmemiş kuvvet etkisindeki cismi dengeye getirmek için R’yi sıfırlayan kuvvettir. Bileşke ile <strong>aynı büyüklük, aynı doğrultu, zıt yön</strong>.
                        </div>
                    `
                },
                {
                    unitId: 2,
                    unitName: "2. Ünite: Kuvvet ve Hareket",
                    title: "Alınan Yol, Yer Değiştirme, Sürat ve Hız",
                    important: "Kavram Farkı",
                    badge: "F.6.2.3",
                    content: `
                        <ul class="styled-list">
                            <li><strong>Alınan yol:</strong> İzlenen yörüngenin toplam uzunluğu (yön gözetilmez).</li>
                            <li><strong>Yer değiştirme:</strong> İlk konum ile son konum arasındaki en kısa doğrusal ve <strong>yönlü</strong> mesafe.</li>
                        </ul>
                        <div class="comparison-grid" style="margin-top:0.75rem;">
                            <div class="comp-card cold">
                                <h4>🏃 Sürat</h4>
                                <ul>
                                    <li>Birim zamanda alınan yol</li>
                                    <li>Yönlü değildir</li>
                                    <li>Birim: m/s veya km/h</li>
                                </ul>
                            </div>
                            <div class="comp-card warm">
                                <h4>➡️ Hız</h4>
                                <ul>
                                    <li>Birim zamandaki yer değiştirme</li>
                                    <li>Yönlü bir büyüklüktür</li>
                                    <li>Birim: m/s veya km/h</li>
                                </ul>
                            </div>
                        </div>
                        <div class="note-highlight" style="margin-top:0.75rem;">
                            <strong>Sabit süratli hareket:</strong> Eşit zaman aralıklarında eşit yollar alınmasıdır. Sabit süratle giden araç dengelenmiş kuvvet etkisindedir (R = 0).
                        </div>
                        <div class="note-alert">
                            ⚠️ <strong>MEB Tuzağı:</strong> Sürat ile hız aynı kavram değildir; hız yönlüdür.
                        </div>
                    `
                },
                // 3. ÜNİTE
                {
                    unitId: 3,
                    unitName: "3. Ünite: Üreme, Büyüme ve Gelişme",
                    title: "Üreme Çeşitleri",
                    important: "Eşeysiz / Eşeyli",
                    badge: "F.6.3.1",
                    content: `
                        <p>Canlıların nesillerini devam ettirmek için yeni bireyler oluşturmasına <strong>üreme</strong> denir.</p>
                        <div class="comparison-grid">
                            <div class="comp-card cold">
                                <h4>🧬 Eşeysiz üreme</h4>
                                <ul>
                                    <li>Üreme hücreleri yok; tek ata</li>
                                    <li>Kalıtsal olarak birebir aynı yavrular</li>
                                    <li><strong>Bölünme:</strong> amip, öglena, paramesyum, bakteri</li>
                                    <li><strong>Tomurcuklanma:</strong> hidra, denizanası, maya</li>
                                    <li><strong>Rejenerasyon:</strong> denizyıldızı, planarya</li>
                                    <li><strong>Vejetatif:</strong> gül çeliği, patates gözü</li>
                                </ul>
                            </div>
                            <div class="comp-card warm">
                                <h4>🌸 Eşeyli üreme</h4>
                                <ul>
                                    <li>Dişi + erkek gamet birleşmesi</li>
                                    <li>Kalıtsal <strong>çeşitlilik</strong> sağlar</li>
                                    <li>Çiçekli bitkiler ve çoğu hayvan</li>
                                </ul>
                            </div>
                        </div>
                    `
                },
                {
                    unitId: 3,
                    unitName: "3. Ünite: Üreme, Büyüme ve Gelişme",
                    title: "Çiçekli Bitkilerde Üreme ve Çimlenme",
                    important: "SOS = Çimlenme",
                    badge: "F.6.3.1",
                    content: `
                        <ul class="styled-list">
                            <li><strong>Tozlaşma:</strong> Polenlerin tepeciğe taşınması (rüzgâr, su, böcek).</li>
                            <li><strong>Döllenme:</strong> Polen çekirdeği ile yumurta hücresinin birleşmesi.</li>
                            <li><strong>Tohum &amp; meyve:</strong> Döllenmiş yumurta → tohum; yumurtalık → meyve.</li>
                            <li><strong>Çimlenme:</strong> Uygun şartlarda kök ve gövde çıkması.</li>
                        </ul>
                        <div class="note-highlight">
                            <strong>Çimlenme şartları (SOS):</strong> Su/Nem + Oksijen + Sıcaklık<br>
                            ❌ Işık ve toprak çimlenme için <strong>gerekli değildir</strong>.
                        </div>
                    `
                },
                {
                    unitId: 3,
                    unitName: "3. Ünite: Üreme, Büyüme ve Gelişme",
                    title: "Hayvanlarda Üreme ve Başkalaşım",
                    important: "Metamorfoz",
                    badge: "F.6.3.1",
                    content: `
                        <ul class="styled-list">
                            <li><strong>Doğurarak:</strong> memeliler (insan, balina, kedi…)</li>
                            <li><strong>Yumurtlayarak:</strong> kuşlar, sürüngenler, balıklar, kurbağalar</li>
                            <li><strong>Başkalaşım (metamorfoz):</strong> Yumurtadan çıkan yavru ana canlıya benzemez; evreler geçirerek benzer hâle gelir (kurbağa, kelebek).</li>
                        </ul>
                    `
                },
                {
                    unitId: 3,
                    unitName: "3. Ünite: Üreme, Büyüme ve Gelişme",
                    title: "İnsanda Üreme Organları ve Gelişim",
                    important: "Döllenme = yumurta kanalı",
                    badge: "F.6.3.2",
                    content: `
                        <div class="comparison-grid">
                            <div class="comp-card cold">
                                <h4>♂️ Erkek</h4>
                                <ul>
                                    <li><strong>Testis:</strong> sperm üretimi</li>
                                    <li><strong>Sperm kanalı:</strong> taşıma</li>
                                    <li><strong>Salgı bezleri:</strong> hareketi kolaylaştıran sıvı</li>
                                    <li><strong>Penis:</strong> sperm ve idrarın dışarı atılması</li>
                                </ul>
                            </div>
                            <div class="comp-card warm">
                                <h4>♀️ Dişi</h4>
                                <ul>
                                    <li><strong>Yumurtalık:</strong> yumurta üretimi</li>
                                    <li><strong>Yumurta kanalı:</strong> <u>döllenme yeri</u></li>
                                    <li><strong>Döl yatağı (rahim):</strong> zigotun tutunup gelişmesi</li>
                                    <li><strong>Vajina:</strong> döl yatağını dışa bağlar</li>
                                </ul>
                            </div>
                        </div>
                        <div class="note-highlight" style="margin-top:0.75rem;">
                            <strong>Gelişim:</strong> Sperm + Yumurta → <strong>Zigot</strong> → Embriyo (~8. haftaya) → Fetüs → Bebek
                        </div>
                        <p style="margin-top:0.6rem;"><strong>Âdet döngüsü (regl):</strong> Ergenlikle başlar; döllenmeyen yumurtanın bir miktar doku ve kan ile dışarı atılmasıdır.</p>
                    `
                },
                {
                    unitId: 3,
                    unitName: "3. Ünite: Üreme, Büyüme ve Gelişme",
                    title: "Sinir Sistemi",
                    important: "Refleks = omurilik",
                    badge: "F.6.3.3",
                    content: `
                        <p>Sinir hücresine <strong>nöron</strong> denir. Sinir sistemi iki bölümdür:</p>
                        <ul class="styled-list">
                            <li><strong>Beyin:</strong> öğrenme, hafıza, duyular, acıkma/susama, uyku, istemli hareketler</li>
                            <li><strong>Beyincik:</strong> denge; kasların uyumlu çalışması</li>
                            <li><strong>Omurilik soğanı:</strong> iç organlar (solunum, dolaşım…); yutma, öksürme, hapşırma</li>
                            <li><strong>Omurilik:</strong> refleks merkezi — doğuştan (diz kapağı, emme) ve sonradan (bisiklet, araba)</li>
                            <li><strong>Çevresel sinir sistemi:</strong> merkezî sistem ile organlar arası ileti ağı</li>
                        </ul>
                    `
                },
                {
                    unitId: 3,
                    unitName: "3. Ünite: Üreme, Büyüme ve Gelişme",
                    title: "İç Salgı Bezleri ve Hormonlar",
                    important: "Tablo Ezber",
                    badge: "F.6.3.3",
                    content: `
                        <p>İç salgı bezleri hormonları doğrudan <strong>kana</strong> salgılar.</p>
                        <ul class="styled-list">
                            <li><strong>Hipofiz → büyüme hormonu:</strong> büyüme + diğer bezleri denetler</li>
                            <li><strong>Tiroit → tiroksin:</strong> metabolizma hızı</li>
                            <li><strong>Pankreas → insülin &amp; glukagon:</strong> kan şekeri (insülin ↓, glukagon ↑)</li>
                            <li><strong>Böbrek üstü → adrenalin:</strong> korku/heyecan; kalp atışı ve kan basıncı ↑</li>
                            <li><strong>Eşeylik bezleri → östrojen / testosteron:</strong> ergenlikte eşeysel özellikler</li>
                        </ul>
                    `
                },
                {
                    unitId: 3,
                    unitName: "3. Ünite: Üreme, Büyüme ve Gelişme",
                    title: "Ergenlik Dönemi ve Sağlığı",
                    important: "10–19 yaş",
                    badge: "F.6.3.4",
                    content: `
                        <p><strong>Ergenlik:</strong> Çocukluktan yetişkinliğe geçiş (~10–19 yaş).</p>
                        <ul class="styled-list">
                            <li><strong>Bedensel:</strong> boy/kilo artışı, kas–kemik gelişimi, sivilce, ter artışı</li>
                            <li><strong>Ruhsal:</strong> bağımsızlık isteği, duygu dalgalanmaları, kimlik arayışı, arkadaş grubu</li>
                            <li><strong>Sağlık:</strong> dengeli beslenme, kişisel temizlik; alkol, sigara ve uyuşturucudan uzak durma</li>
                        </ul>
                    `
                },
                // 4. ÜNİTE
                {
                    unitId: 4,
                    unitName: "4. Ünite: Işığın Yansıması ve Aynalar",
                    title: "Yansıma ve Temel Kavramlar",
                    important: "Normal = dik",
                    badge: "F.6.4.1",
                    content: `
                        <p><strong>Yansıma:</strong> Işık ışınlarının yansıtıcı bir yüzeye çarpıp geldiği ortama geri dönmesidir.</p>
                        <ul class="styled-list">
                            <li><strong>Gelen ışın:</strong> Kaynaktan yüzeye ulaşan ışın</li>
                            <li><strong>Yansıyan ışın:</strong> Yüzeyden geri dönen ışın</li>
                            <li><strong>Yüzey normali (N):</strong> Temas noktasından çizilen hayalî <strong>dik (90°)</strong> çizgi</li>
                            <li><strong>Gelme açısı:</strong> Gelen ışın ile normal arasındaki açı</li>
                            <li><strong>Yansıma açısı:</strong> Yansıyan ışın ile normal arasındaki açı</li>
                        </ul>
                    `
                },
                {
                    unitId: 4,
                    unitName: "4. Ünite: Işığın Yansıması ve Aynalar",
                    title: "Yansıma Kanunları",
                    important: "i = i′",
                    badge: "F.6.4.1",
                    content: `
                        <ul class="styled-list">
                            <li>Gelme açısı = yansıma açısı (ör. 35° → 35°).</li>
                            <li>Gelen ışın, yansıyan ışın ve normal <strong>aynı düzlemdedir</strong>.</li>
                            <li>Yüzeye dik (normal üzerinden) gelen ışın <strong>kendi üzerinden geri yansır</strong>.</li>
                        </ul>
                        <div class="comparison-grid" style="margin-top:0.75rem;">
                            <div class="comp-card warm">
                                <h4>✨ Düzgün yansıma</h4>
                                <ul>
                                    <li>Pürüzsüz yüzey (düzlem ayna, durgun su)</li>
                                    <li>Paralel gelen → paralel yansıyan</li>
                                    <li><strong>Net görüntü</strong> oluşur</li>
                                </ul>
                            </div>
                            <div class="comp-card cold">
                                <h4>🌊 Dağınık yansıma</h4>
                                <ul>
                                    <li>Pürüzlü yüzey (halı, çim, buruşuk folyo)</li>
                                    <li>Paralel gelen → farklı yönlere dağılır</li>
                                    <li><strong>Net görüntü oluşmaz</strong></li>
                                </ul>
                            </div>
                        </div>
                    `
                },
                {
                    unitId: 4,
                    unitName: "4. Ünite: Işığın Yansıması ve Aynalar",
                    title: "Düzlem Ayna",
                    important: "Simetri",
                    badge: "F.6.4.2",
                    content: `
                        <p>Yansıtıcı yüzeyi düz olan aynadır.</p>
                        <ul class="styled-list">
                            <li>Görüntü cisimle <strong>aynı boyda</strong> ve <strong>düzdür</strong>.</li>
                            <li>Cisme göre <strong>simetriktir</strong> (sol–sağ yer değiştirir).</li>
                            <li>Cisim–ayna uzaklığı = görüntü–ayna uzaklığı.</li>
                            <li><strong>Kullanım:</strong> ev, mağaza, periskop, ambulans/itfaiye yazıları.</li>
                        </ul>
                    `
                },
                {
                    unitId: 4,
                    unitName: "4. Ünite: Işığın Yansıması ve Aynalar",
                    title: "Çukur ve Tümsek Ayna",
                    important: "Toplar / Dağıtır",
                    badge: "F.6.4.2",
                    content: `
                        <div class="comparison-grid">
                            <div class="comp-card warm">
                                <h4>⚽ Çukur (bükey)</h4>
                                <ul>
                                    <li>Kürenin <strong>iç</strong> yüzeyi; ışığı <strong>toplar</strong></li>
                                    <li>Görüntü uzaklığa göre değişir (büyük–düz, büyük–ters, küçük–ters…)</li>
                                    <li>Dişçi/makyaj aynası, far, güneş fırını, teleskop</li>
                                </ul>
                            </div>
                            <div class="comp-card cold">
                                <h4>🛡️ Tümsek (tümkey)</h4>
                                <ul>
                                    <li>Kürenin <strong>dış</strong> yüzeyi; ışığı <strong>dağıtır</strong></li>
                                    <li>Görüntü <strong>her zaman düz ve küçük</strong></li>
                                    <li>Dikiz aynası, kavşak/güvenlik aynası</li>
                                </ul>
                            </div>
                        </div>
                        <div class="note-alert" style="margin-top:0.75rem;">
                            ⚠️ <strong>MEB Tuzağı:</strong> “İçbükey” = çukur ayna. Tümsek aynada görüntü asla ters değildir.
                        </div>
                    `
                },
                {
                    unitId: 4,
                    unitName: "4. Ünite: Işığın Yansıması ve Aynalar",
                    title: "Işığın Soğurulması ve Renkler",
                    important: "Yansıttığı renkte görünür",
                    badge: "F.6.4.3",
                    content: `
                        <ul class="styled-list">
                            <li><strong>Soğurma:</strong> Işığın madde tarafından tutulması; enerji ısıya dönüşür, sıcaklık artar.</li>
                            <li>Koyu (siyah) cisimler daha çok soğurur; açık (beyaz) cisimler daha çok yansıtır.</li>
                            <li>Beyaz ışık tüm renklerin bileşimidir (prizmada ayrışır).</li>
                            <li>Cisimler <strong>yansıttığı ışığın renginde</strong> görünür.</li>
                        </ul>
                        <div class="note-highlight" style="margin-top:0.75rem;">
                            <strong>Örnekler:</strong><br>
                            Beyaz cisim + beyaz ışık → beyaz · Siyah cisim → tümünü soğurur → siyah<br>
                            Kırmızı elma + beyaz → kırmızı yansıtır<br>
                            Yeşil şapka + <u>mavi</u> ışık → soğurur → <strong>siyah</strong><br>
                            Mavi cisim + kırmızı ışık → soğurur → <strong>siyah</strong>
                        </div>
                        <p style="margin-top:0.6rem;"><strong>Güneş panelleri:</strong> ışık → elektrik veya ısı (sıcak su, sokak lambası, uydu, hesap makinesi).</p>
                    `
                },
                // 5. ÜNİTE
                {
                    unitId: 5,
                    unitName: "5. Ünite: Madde ve Isı",
                    title: "Genleşme ve Büzülme",
                    important: "Isı al / ver",
                    badge: "F.6.5.1",
                    content: `
                        <ul class="styled-list">
                            <li><strong>Genleşme:</strong> Isı alma → hacim artar.</li>
                            <li><strong>Büzülme:</strong> Isı verme → hacim azalır.</li>
                            <li>Birbirinin <strong>tersi</strong> olaylardır.</li>
                        </ul>
                        <div class="note-highlight">
                            <strong>Ayırt edici özellik:</strong> Eşit boy/kalınlıktaki farklı katılar aynı ısıtıcıyla ısıtılınca genleşme miktarları farklıdır → genleşme/büzülme saf maddeler için ayırt edicidir.
                        </div>
                        <ul class="styled-list" style="margin-top:0.75rem;">
                            <li><strong>Termostat:</strong> ütü, fırın, şofben — genleşme ile sıcaklık ayarı</li>
                            <li><strong>Tren rayı / köprü:</strong> yazın genleşmeye boşluk bırakılır</li>
                            <li><strong>Elektrik teli:</strong> yazın sarkar, kışın büzülüp gerginleşir</li>
                            <li><strong>Gözlük:</strong> metal çerçeve genleşince cam düşebilir</li>
                        </ul>
                    `
                },
                {
                    unitId: 5,
                    unitName: "5. Ünite: Madde ve Isı",
                    title: "Erime, Donma ve Kaynama Noktası",
                    important: "Erime = Donma",
                    badge: "F.6.5.2",
                    content: `
                        <ul class="styled-list">
                            <li><strong>Erime noktası:</strong> Saf katının ısı alıp sıvılaşmaya başladığı sıcaklık; erime boyunca sıcaklık <strong>sabit</strong>.</li>
                            <li><strong>Donma noktası:</strong> Saf sıvının ısı verip katılaşmaya başladığı sıcaklık.</li>
                            <li><strong>Eşitlik:</strong> Aynı saf maddede erime noktası = donma noktası (su/buz: 0 °C).</li>
                            <li><strong>Kaynama noktası:</strong> Saf sıvının kabarcıklarla hızlı gaz hâline geçtiği sabit sıcaklık; kaynama boyunca sıcaklık değişmez.</li>
                        </ul>
                        <div class="note-highlight">
                            <strong>Örnekler:</strong> Su 100 °C · etil alkol 78 °C · aseton 56 °C · cıva 357 °C kaynar.<br>
                            Bakır 1085 °C · kalay 232 °C · alüminyum 660 °C erir.
                        </div>
                        <div class="note-alert">
                            ⚠️ <strong>MEB Tuzağı:</strong> Madde miktarı (kütle) artınca kaynama/erime noktası değişmez; bunlar ayırt edici özelliktir.
                        </div>
                    `
                },
                {
                    unitId: 5,
                    unitName: "5. Ünite: Madde ve Isı",
                    title: "Yoğunluk",
                    important: "d = m / V",
                    badge: "F.6.5.3",
                    content: `
                        <div class="note-highlight">
                            <strong>Yoğunluk (d) = Kütle (m) / Hacim (V)</strong><br>
                            Birim: g/cm³ · Saf maddeler için ayırt edicidir.
                        </div>
                        <ul class="styled-list" style="margin-top:0.75rem;">
                            <li>Kütle artınca hacim aynı oranda artar → yoğunluk <strong>sabit</strong> kalır.</li>
                            <li>Çözünmeyen sıvılar: yoğunluğu büyük olan <strong>dibe</strong>, küçük olan <strong>üste</strong> çıkar.</li>
                        </ul>
                        <div class="note-alert">
                            🧊 <strong>Su–buz özel durum:</strong> Su donunca hacim <strong>artar</strong>, yoğunluk <strong>azalır</strong> (~0,9 g/cm³ &lt; 1 g/cm³). Bu yüzden buz yüzeyde yüzer; altta sıvı su kalır, canlılar yaşar.
                        </div>
                        <p style="margin-top:0.6rem; font-size:0.9rem; color:var(--text-muted);">Örnek: m = 120 g, V = 40 cm³ → d = 120/40 = <strong>3 g/cm³</strong></p>
                    `
                },
                // 6. ÜNİTE
                {
                    unitId: 6,
                    unitName: "6. Ünite: Elektriğin İletimi",
                    title: "İletken ve Yalıtkan Maddeler",
                    important: "Tuzlu su ≠ Saf su",
                    badge: "F.6.6.1",
                    content: `
                        <div class="comparison-grid">
                            <div class="comp-card warm">
                                <h4>⚡ İletken</h4>
                                <ul>
                                    <li>Elektriğin geçişine izin verir</li>
                                    <li><strong>Katı:</strong> bakır, Al, Ag, Au, demir, çivi…</li>
                                    <li><strong>Sıvı:</strong> tuzlu/sirkeli/limon/çeşme suyu</li>
                                </ul>
                            </div>
                            <div class="comp-card cold">
                                <h4>🛡️ Yalıtkan</h4>
                                <ul>
                                    <li>Elektriğin geçişini engeller</li>
                                    <li><strong>Katı:</strong> plastik, cam, porselen, kauçuk, tahta, silgi, yün…</li>
                                    <li><strong>Sıvı:</strong> saf su, şekerli su, alkollü su, zeytinyağı</li>
                                </ul>
                            </div>
                        </div>
                        <div class="note-alert" style="margin-top:0.75rem;">
                            ⚠️ <strong>MEB Tuzağı:</strong> Saf su yalıtkandır; tuzlu su iletkendir. Şekerli su yalıtkandır.
                        </div>
                        <ul class="styled-list" style="margin-top:0.75rem;">
                            <li>Priz, anahtar, kablo örtüsü: plastik/mika (çarpmayı önler).</li>
                            <li>Teknisyen: yalıtkan eldiven, ayakkabı, izole halı.</li>
                            <li>Hava normalde yalıtkan; nemli hava / şimşek–yıldırımda iletkenleşebilir.</li>
                        </ul>
                    `
                },
                {
                    unitId: 6,
                    unitName: "6. Ünite: Elektriğin İletimi",
                    title: "Elektriksel Direnç ve Faktörleri",
                    important: "R ↑ → parlaklık ↓",
                    badge: "F.6.6.2",
                    content: `
                        <p><strong>Direnç:</strong> Maddenin elektriğin geçişine gösterdiği zorluk. Birim: <strong>Ohm (Ω)</strong>.</p>
                        <ul class="styled-list">
                            <li><strong>Uzunluk (ℓ) ↑ → direnç ↑</strong> → ampul daha sönük. Kısa tel → daha parlak.</li>
                            <li><strong>Kesit / kalınlık (S) ↑ → direnç ↓</strong> → kalın telde ampul daha parlak; ince telde direnç fazla.</li>
                            <li><strong>Cins:</strong> Aynı boy/kalınlıkta demir &gt; bakır direnç. Bakırda ampul daha parlak. Gümüş bakırdan daha iyi iletir ama pahalıdır → kablolarda bakır tercih edilir.</li>
                        </ul>
                        <div class="note-highlight">
                            <strong>Ampul filamanı:</strong> İnce, yüksek dirençli tungsten/volfram teli. Akım geçerken ısınır → akkor → ışık.
                        </div>
                    `
                },
                {
                    unitId: 6,
                    unitName: "6. Ünite: Elektriğin İletimi",
                    title: "Reosta (Değişken Direnç)",
                    important: "Sürgü = uzunluk",
                    badge: "F.6.6.2",
                    content: `
                        <p><strong>Reosta:</strong> Devrede direnç büyüklüğünü değiştiren elemandır.</p>
                        <ul class="styled-list">
                            <li>Sürgü hareket ettirilerek iletken uzunluğu değişir → direnç artar/azalır → ampul parlaklığı ayarlanır.</li>
                            <li><strong>Kullanım:</strong> ütü, elektrikli fırın, saç kurutma makinesi, radyo ses/sıcaklık ayarı.</li>
                        </ul>
                    `
                },
                // 7. ÜNİTE
                {
                    unitId: 7,
                    unitName: "7. Ünite: Biyoçeşitlilik ve Çevre",
                    title: "Tür, Habitat, Ekosistem, Biyoçeşitlilik",
                    important: "Kavram Ayrımı",
                    badge: "F.6.7.1",
                    content: `
                        <ul class="styled-list">
                            <li><strong>Tür:</strong> Kendi aralarında çiftleşip verimli döl veren benzer bireyler topluluğu.</li>
                            <li><strong>Habitat:</strong> Canlının doğal yaşam alanı (ör. hamsi → Karadeniz).</li>
                            <li><strong>Ekosistem:</strong> Canlı + cansız varlıkların etkileşim sistemi (orman, göl).</li>
                            <li><strong>Biyoçeşitlilik:</strong> Bölgedeki tür ve popülasyon zenginliği; orman &gt; şehir parkı.</li>
                        </ul>
                    `
                },
                {
                    unitId: 7,
                    unitName: "7. Ünite: Biyoçeşitlilik ve Çevre",
                    title: "Endemik Canlılar ve Önemi",
                    important: "Sadece belirli bölge",
                    badge: "F.6.7.1",
                    content: `
                        <p><strong>Endemik:</strong> Yalnızca belirli bir bölgede yaşayan tür. Türkiye endemik türlerce zengindir.</p>
                        <ul class="styled-list">
                            <li><strong>Hayvan:</strong> Van kedisi, Ankara keçisi, Kangal, Denizli horozu, Türk tazısı, çizgili sırtlan, inci kefali, turna</li>
                            <li><strong>Bitki:</strong> kardelen, ters lale, sığla, Datça hurması, günlük ağacı, Kazdağı göknarı</li>
                        </ul>
                        <div class="note-highlight">
                            <strong>Önem:</strong> Tarım, hayvancılık, eczacılık, turizm kaynağıdır. Arı azalırsa tozlaşma ve meyve verimi düşer. Ormanlar heyelan/sel önler, havayı temizler.<br>
                            📜 Kanuni (1539, Edirne): dünyanın ilk çevre koruma kanunlarından biri.
                        </div>
                    `
                },
                {
                    unitId: 7,
                    unitName: "7. Ünite: Biyoçeşitlilik ve Çevre",
                    title: "Tehditler ve Nesli Tükenen / Tehlikedeki Canlılar",
                    important: "Tükenmiş ≠ Tehlikede",
                    badge: "F.6.7.1",
                    content: `
                        <p><strong>Tehditler:</strong> kaçak av, yangın, ormansızlaşma, sanayi, nüfus artışı, anız yakma, bilinçsiz ilaç/gübre, mera tahribi, kirlilik.</p>
                        <div class="comparison-grid" style="margin-top:0.75rem;">
                            <div class="comp-card cold">
                                <h4>💀 Nesli tükenmiş</h4>
                                <ul>
                                    <li><strong>TR:</strong> Asya fili, çita, kunduz, Asya kaplanı, Kafkas bizonu, yılanboyun</li>
                                    <li><strong>Dünya:</strong> dinozor, dodo, moa, mamut</li>
                                </ul>
                            </div>
                            <div class="comp-card warm">
                                <h4>⚠️ Tehlike altında</h4>
                                <ul>
                                    <li><strong>TR:</strong> Caretta, Akdeniz foku, kelaynak, flamingo, alageyik, sülün, kardelen, ters lale…</li>
                                    <li><strong>Dünya:</strong> gergedan, orangutan, Afrika fili, kutup ayısı…</li>
                                </ul>
                            </div>
                        </div>
                        <div class="note-alert" style="margin-top:0.75rem;">
                            ⚠️ <strong>MEB Tuzağı:</strong> Akdeniz foku / kelaynak / Caretta = tehlike altında. Asya fili = ülkemizde nesli tükenmiş.
                        </div>
                    `
                },
                {
                    unitId: 7,
                    unitName: "7. Ünite: Biyoçeşitlilik ve Çevre",
                    title: "Yakıtlar, Kirlilik ve Çevre Günleri",
                    important: "187 / 112",
                    badge: "F.6.7.2",
                    content: `
                        <ul class="styled-list">
                            <li><strong>Katı yakıt:</strong> kömür, odun · <strong>Sıvı:</strong> benzin, mazot, gaz yağı, fuel-oil · <strong>Gaz:</strong> doğal gaz, LPG</li>
                            <li>Soba/doğal gaz zehirlenmesi: baca temizliği, TSE cihaz; acil <strong>187</strong> / <strong>112</strong></li>
                        </ul>
                        <ul class="styled-list" style="margin-top:0.5rem;">
                            <li><strong>Hava kirliliği:</strong> fosil yakıt, baca, egzoz → astım, bronşit; iklim değişikliği</li>
                            <li><strong>Su kirliliği:</strong> atık, petrol, tarım ilacı → tifo, kolera, sarılık, dizanteri</li>
                            <li><strong>Toprak kirliliği:</strong> çöp, plastik, pil, aşırı gübre → besin zinciri → böbrek/sinir hasarı</li>
                        </ul>
                        <div class="note-highlight">
                            <strong>22 Mayıs:</strong> Dünya Biyolojik Çeşitlilik Günü · <strong>5 Haziran:</strong> Dünya Çevre Günü
                        </div>
                        <div class="note-alert">
                            ⚠️ Hava kirliliğini azaltmak için özel araç teşvik edilip toplu taşıma azaltmak <strong>uygun değildir</strong>.
                        </div>
                    `
                }
            ],
            curriculum: [
                {
                    unitId: 1,
                    unit: "1. Ünite",
                    name: "Güneş Sistemi ve Tutulmalar",
                    hours: "1. Dönem",
                    period: "1. Dönem",
                    status: "Aktif",
                    examTip: "En sıcak = Venüs (Merkür değil). Asteroit kuşağı = Mars–Jüpiter arası. Güneş tutulması = Yeni Ay; Ay tutulması = Dolunay.",
                    topics: [
                        { code: "F.6.1.1", title: "Güneş sistemi ve gezegenler", summary: "Sıralama; karasal (iç) / gazsal (dış); ayırt edici özellikler." },
                        { code: "F.6.1.2", title: "Asteroit ve gök taşları", summary: "Asteroit kuşağı, gök taşı, meteor, meteorit, meteor çukuru." },
                        { code: "F.6.1.3", title: "Tutulmalar", summary: "Güneş ve Ay tutulması sıralaması, evre, gözlem alanı ve süre." }
                    ]
                },
                {
                    unitId: 2,
                    unit: "2. Ünite",
                    name: "Kuvvet ve Hareket",
                    hours: "1. Dönem",
                    period: "1. Dönem",
                    status: "Aktif",
                    examTip: "Zıt yönlü kuvvetlerde R = büyük − küçük; yön büyükte. R = 0 → dengelenmiş (sabit sürat veya durma). Sürat ≠ hız.",
                    topics: [
                        { code: "F.6.2.1", title: "Bileşke kuvvet", summary: "Uygulama noktası, doğrultu, yön, büyüklük; aynı/zıt yönlü kuvvetler; R." },
                        { code: "F.6.2.2", title: "Dengelenmiş / dengelenmemiş", summary: "R = 0 ve R ≠ 0 durumları; dengeleyici kuvvet." },
                        { code: "F.6.2.3", title: "Sürat ve hız", summary: "Alınan yol, yer değiştirme; sürat–hız farkı; sabit süratli hareket." }
                    ]
                },
                {
                    unitId: 3,
                    unit: "3. Ünite",
                    name: "Üreme, Büyüme ve Gelişme",
                    hours: "1.–2. Dönem",
                    period: "1.–2. Dönem",
                    status: "Aktif",
                    examTip: "Çimlenmede ışık gerekmez (SOS). Döllenme = yumurta kanalı. Refleks = omurilik. Adrenalin = böbrek üstü.",
                    topics: [
                        { code: "F.6.3.1", title: "Bitki ve hayvanlarda üreme", summary: "Eşeysiz/eşeyli; tozlaşma–döllenme–çimlenme; başkalaşım." },
                        { code: "F.6.3.2", title: "İnsanda üreme", summary: "Organlar; zigot–embriyo–fetüs; âdet döngüsü." },
                        { code: "F.6.3.3", title: "Denetleyici sistemler", summary: "Sinir sistemi organları; iç salgı bezleri ve hormonlar." },
                        { code: "F.6.3.4", title: "Ergenlik", summary: "Bedensel/ruhsal değişimler ve sağlık." }
                    ]
                },
                {
                    unitId: 4,
                    unit: "4. Ünite",
                    name: "Işığın Yansıması ve Renkler",
                    hours: "2. Dönem",
                    period: "2. Dönem",
                    status: "Aktif",
                    examTip: "Gelme = yansıma. Tümsek = her zaman düz ve küçük. Yeşil cisim + mavi ışık = siyah.",
                    topics: [
                        { code: "F.6.4.1", title: "Yansıma kanunları", summary: "Normal, gelme/yansıma açısı; düzgün ve dağınık yansıma." },
                        { code: "F.6.4.2", title: "Aynalar", summary: "Düzlem, çukur ve tümsek ayna; kullanım alanları." },
                        { code: "F.6.4.3", title: "Soğurma ve renkler", summary: "Cisimlerin görünme rengi; güneş enerjisi kullanımları." }
                    ]
                },
                {
                    unitId: 5,
                    unit: "5. Ünite",
                    name: "Madde ve Isı",
                    hours: "2. Dönem",
                    period: "2. Dönem",
                    status: "Aktif",
                    examTip: "Kışın tel gerginleşmesi = büzülme. Erime = donma. Kütle artınca kaynama noktası değişmez. Su donunca hacim ↑ yoğunluk ↓.",
                    topics: [
                        { code: "F.6.5.1", title: "Genleşme ve büzülme", summary: "Tanım, ayırt edici özellik, günlük hayat örnekleri." },
                        { code: "F.6.5.2", title: "Hâl değişimi noktaları", summary: "Erime, donma, kaynama; sıcaklık sabitliği." },
                        { code: "F.6.5.3", title: "Yoğunluk", summary: "d = m/V; su–buz özel durumu; sıvı sıralaması." }
                    ]
                },
                {
                    unitId: 6,
                    unit: "6. Ünite",
                    name: "Elektriğin İletimi",
                    hours: "2. Dönem",
                    period: "2. Dönem",
                    status: "Aktif",
                    examTip: "Tuzlu su iletken, saf/şekerli su yalıtkan. Uzunluk ↑ → R ↑ → parlaklık ↓. Kalınlık ↑ → R ↓. Reosta = değişken direnç.",
                    topics: [
                        { code: "F.6.6.1", title: "İletken ve yalıtkan", summary: "Katı/sıvı örnekler; yalıtım ve iş güvenliği." },
                        { code: "F.6.6.2", title: "Direnç ve reosta", summary: "Uzunluk, kesit, cins; filaman; reosta kullanımı." }
                    ]
                },
                {
                    unitId: 7,
                    unit: "7. Ünite",
                    name: "Biyoçeşitlilik ve Çevre",
                    hours: "2. Dönem",
                    period: "2. Dönem",
                    status: "Aktif",
                    examTip: "Habitat ≠ ekosistem. Asya fili = TR’de tükenmiş; Caretta/foku/kelaynak = tehlike. Toplu taşıma azaltmak hava kirliliğine iyi gelmez.",
                    topics: [
                        { code: "F.6.7.1", title: "Biyoçeşitlilik", summary: "Tür, habitat, ekosistem; endemik türler; tehditler ve nesil durumu." },
                        { code: "F.6.7.2", title: "İnsan ve çevre", summary: "Yakıtlar, kirlilik türleri, çevre günleri, güvenlik." }
                    ]
                }
            ],
            quiz: [
                {
                    id: "6th-unit1-q1",
                    unitId: 1,
                    unitName: "1. Ünite: Güneş Sistemi ve Tutulmalar",
                    topic: "Karasal / Gazsal",
                    difficulty: "Temel",
                    question: "Güneş sistemindeki gezegenler karasal ve gazsal olarak iki gruba ayrılır. Aşağıdaki gezegenlerden hangisi karasal (iç) gezegenler sınıfında yer almaz?",
                    options: [
                        "Merkür",
                        "Venüs",
                        "Mars",
                        "Jüpiter"
                    ],
                    correct: 3,
                    explanation: "Karasal (iç) gezegenler Merkür, Venüs, Dünya ve Mars’tır. Jüpiter gazsal (dış) gezegendir."
                },
                {
                    id: "6th-unit1-q2",
                    unitId: 1,
                    unitName: "1. Ünite: Güneş Sistemi ve Tutulmalar",
                    topic: "Asteroit Kuşağı",
                    difficulty: "Yazılı",
                    question: "Güneş sisteminde Mars ile Jüpiter gezegenleri arasında bulunan ve içerisinde kaya ile metal parçalarının yer aldığı yapıya ne ad verilir?",
                    options: [
                        "Asteroit Kuşağı",
                        "Meteorit Çukuru",
                        "Kuiper Kuşağı",
                        "Samanyolu Halka Bölgesi"
                    ],
                    correct: 0,
                    explanation: "Mars ile Jüpiter arasında yer alan kaya ve metal parçaları bölgesine Asteroit Kuşağı denir."
                },
                {
                    id: "6th-unit1-q3",
                    unitId: 1,
                    unitName: "1. Ünite: Güneş Sistemi ve Tutulmalar",
                    topic: "Güneş Tutulması",
                    difficulty: "Tuzak",
                    question: "Güneş tutulması olayı ile ilgili aşağıda verilen ifadelerden hangisi DOĞRUDUR?",
                    options: [
                        "Dünya, Güneş ile Ay’ın arasında yer alır.",
                        "Ay’ın Dolunay evresinde gerçekleşir.",
                        "Ay, Güneş ile Dünya’nın arasındadır ve Yeni Ay evresinde gerçekleşir.",
                        "Gece saatlerinde geniş bir alandan çıplak gözle rahatça izlenebilir."
                    ],
                    correct: 2,
                    explanation: "Güneş tutulmasında sıralama Güneş — Ay — Dünya’dır ve Yeni Ay evresinde gerçekleşir. Dolunay Ay tutulmasındadır; doğrudan bakmak tehlikelidir."
                },
                {
                    id: "6th-unit2-q1",
                    unitId: 2,
                    unitName: "2. Ünite: Kuvvet ve Hareket",
                    topic: "Bileşke Kuvvet",
                    difficulty: "Yazılı",
                    question: "Bir kutuya doğu yönünde 8 N ve batı yönünde 3 N büyüklüğünde iki kuvvet uygulanmaktadır. Buna göre kutuya etki eden bileşke kuvvetin yönü ve büyüklüğü aşağıdakilerden hangisidir?",
                    options: [
                        "Doğu yönünde 11 N",
                        "Batı yönünde 5 N",
                        "Doğu yönünde 5 N",
                        "Batı yönünde 11 N"
                    ],
                    correct: 2,
                    explanation: "Zıt yönlü kuvvetlerde R = 8 − 3 = 5 N; yön büyük kuvvetin yönü olan doğudur."
                },
                {
                    id: "6th-unit2-q2",
                    unitId: 2,
                    unitName: "2. Ünite: Kuvvet ve Hareket",
                    topic: "Dengelenmiş Kuvvet",
                    difficulty: "Temel",
                    question: "Aşağıda verilen günlük yaşam durumlarından hangisinde cisim DENGELENMİŞ KUVVETLERİN etkisi altındadır?",
                    options: [
                        "Kırmızı ışıkta yavaşlayan otobüs",
                        "Düz yolda sabit süratle ilerleyen bisiklet",
                        "Daldan kopup yere doğru hızlanan elma",
                        "Kalkışa geçen yolcu uçağı"
                    ],
                    correct: 1,
                    explanation: "Sabit süratle ilerleyen bisiklette R = 0’dır; hareket dengelenmiş kuvvetler etkisindedir. Diğerlerinde hız değişimi vardır (R ≠ 0)."
                },
                {
                    id: "6th-unit2-q3",
                    unitId: 2,
                    unitName: "2. Ünite: Kuvvet ve Hareket",
                    topic: "Sürat ve Hız",
                    difficulty: "Tuzak",
                    question: "Sürat ve hız kavramları ile ilgili aşağıda verilen ifadelerden hangisi YANLIŞTIR?",
                    options: [
                        "Sürat birim zamanda alınan yoldur ve yönlü bir büyüklük değildir.",
                        "Hız birim zamandaki yer değiştirmedir ve yönlü bir büyüklüktür.",
                        "Hem süratin hem de hızın birimi m/s veya km/h olabilir.",
                        "Sürat ile hız birebir aynı kavramlardır, aralarında hiçbir fark yoktur."
                    ],
                    correct: 3,
                    explanation: "Sürat yönsüz, hız yönlüdür; aynı kavram değildir. Bu yüzden D yanlıştır."
                },
                {
                    id: "6th-unit3-q1",
                    unitId: 3,
                    unitName: "3. Ünite: Üreme, Büyüme ve Gelişme",
                    topic: "Çimlenme",
                    difficulty: "Tuzak",
                    question: "Çiçekli bir bitkinin tohumunun ÇİMLENMESİ sürecinde aşağıdakilerden hangisine ihtiyaç duyulmaz?",
                    options: [
                        "Su (Nem)",
                        "Işık",
                        "Oksijen",
                        "Uygun Sıcaklık"
                    ],
                    correct: 1,
                    explanation: "Çimlenme için Su, Oksijen ve Sıcaklık (SOS) gerekir. Işık ve toprak gerekli değildir."
                },
                {
                    id: "6th-unit3-q2",
                    unitId: 3,
                    unitName: "3. Ünite: Üreme, Büyüme ve Gelişme",
                    topic: "Döllenme",
                    difficulty: "Yazılı",
                    question: "İnsanda döllenme olayı dişi üreme sisteminin hangi bölümünde gerçekleşir?",
                    options: [
                        "Yumurtalık",
                        "Döl Yatağı (Rahim)",
                        "Yumurta Kanalı",
                        "Vajina"
                    ],
                    correct: 2,
                    explanation: "Döllenme yumurta kanalında gerçekleşir. Zigot döl yatağına tutunup gelişir."
                },
                {
                    id: "6th-unit3-q3",
                    unitId: 3,
                    unitName: "3. Ünite: Üreme, Büyüme ve Gelişme",
                    topic: "Refleks",
                    difficulty: "Yazılı",
                    question: "Bisiklete binmek, dans etmek veya gözümüze ışık tutulduğunda göz bebeğinin küçülmesi gibi olayları kontrol eden merkezî sinir sistemi organı aşağıdakilerden hangisidir?",
                    options: [
                        "Beyin",
                        "Omurilik",
                        "Beyincik",
                        "Omurilik Soğanı"
                    ],
                    correct: 1,
                    explanation: "Omurilik refleks merkezidir; doğuştan ve sonradan kazanılan refleksleri kontrol eder."
                },
                {
                    id: "6th-unit3-q4",
                    unitId: 3,
                    unitName: "3. Ünite: Üreme, Büyüme ve Gelişme",
                    topic: "Adrenalin",
                    difficulty: "Temel",
                    question: "Korku, heyecan ve öfke anında salgılanarak kalp atış hızını ve kan basıncını artıran hormon ve salgılandığı bez eşleştirmesi hangisidir?",
                    options: [
                        "İnsülin - Pankreas",
                        "Tiroksin - Tiroit Bezi",
                        "Adrenalin - Böbrek Üstü Bezleri",
                        "Büyüme Hormonu - Hipofiz Bezi"
                    ],
                    correct: 2,
                    explanation: "Adrenalin böbrek üstü bezlerinden salgılanır; korku/heyecan anında kalp atışı ve kan basıncını artırır."
                },
                {
                    id: "6th-unit4-q1",
                    unitId: 4,
                    unitName: "4. Ünite: Işığın Yansıması ve Aynalar",
                    topic: "Yansıma Kanunu",
                    difficulty: "Temel",
                    question: "Pürüzsüz bir düzlem aynaya gelen bir ışık ışınının yüzey normali ile yaptığı açı (gelme açısı) 35° olarak ölçülmüştür. Buna göre ışının yansıma açısı kaç derecedir?",
                    options: [
                        "35°",
                        "55°",
                        "70°",
                        "90°"
                    ],
                    correct: 0,
                    explanation: "Yansıma kanununa göre gelme açısı = yansıma açısıdır. 35° → 35°."
                },
                {
                    id: "6th-unit4-q2",
                    unitId: 4,
                    unitName: "4. Ünite: Işığın Yansıması ve Aynalar",
                    topic: "Tümsek Ayna",
                    difficulty: "Yazılı",
                    question: "Görüntünün her zaman DÜZ ve CİSİMDEN KÜÇÜK olduğu, araçların yan dikiz aynalarında ve keskin virajlarda geniş alanları görmek amacıyla kullanılan ayna türü aşağıdakilerden hangisidir?",
                    options: [
                        "Düzlem Ayna",
                        "Çukur Ayna",
                        "Tümsek Ayna",
                        "İçbükey Ayna"
                    ],
                    correct: 2,
                    explanation: "Tümsek ayna ışığı dağıtır; görüntü her zaman düz ve küçüktür. Dikiz ve kavşak aynalarında kullanılır. İçbükey = çukur aynadır."
                },
                {
                    id: "6th-unit4-q3",
                    unitId: 4,
                    unitName: "4. Ünite: Işığın Yansıması ve Aynalar",
                    topic: "Renkler",
                    difficulty: "Tuzak",
                    question: "Karanlık bir odada yeşil renkli bir şapkaya MAVİ IŞIK altında bakıldığında şapka hangi renkte görünür?",
                    options: [
                        "Yeşil",
                        "Mavi",
                        "Siyah",
                        "Beyaz"
                    ],
                    correct: 2,
                    explanation: "Yeşil cisim yalnızca yeşil ışığı yansıtır. Mavi ışığı soğurduğu için şapka siyah görünür."
                },
                {
                    id: "6th-unit5-q1",
                    unitId: 5,
                    unitName: "5. Ünite: Madde ve Isı",
                    topic: "Büzülme",
                    difficulty: "Temel",
                    question: "Maddelerin ısı alması sonucu hacimlerinin artmasına genleşme, ısı vermesi sonucu hacimlerinin azalmasına büzülme denir. Aşağıdaki olaylardan hangisi BÜZÜLME olayına örnektir?",
                    options: [
                        "Sıcak ortama konulan balonun şişmesi",
                        "Kış aylarında sokaktaki elektrik tellerinin gerginleşmesi",
                        "Termometredeki cıva seviyesinin sıcak ortamda yükselmesi",
                        "Kaynamaya başlayan sütün tencereden taşması"
                    ],
                    correct: 1,
                    explanation: "Kışın teller soğuyup büzülerek gerginleşir. Diğerleri genleşme veya hacim artışı örnekleridir."
                },
                {
                    id: "6th-unit5-q2",
                    unitId: 5,
                    unitName: "5. Ünite: Madde ve Isı",
                    topic: "Hâl Değişimi",
                    difficulty: "Tuzak",
                    question: "Saf bir maddenin erime, donma ve kaynama noktaları ile ilgili aşağıda verilen ifadelerden hangisi YANLIŞTIR?",
                    options: [
                        "Saf bir maddenin erime noktası ile donma noktası birbirine eşittir.",
                        "Saf sıvılar kaynarken ısı almalarına rağmen sıcaklıkları sabit kalır.",
                        "Erime ve kaynama noktaları saf maddeler için ayırt edici bir özelliktir.",
                        "Bir maddenin kütlesi artırılırsa kaynama sıcaklığı da artar."
                    ],
                    correct: 3,
                    explanation: "Kaynama noktası ayırt edici özelliktir; madde miktarı (kütle) artınca değişmez."
                },
                {
                    id: "6th-unit5-q3",
                    unitId: 5,
                    unitName: "5. Ünite: Madde ve Isı",
                    topic: "Yoğunluk",
                    difficulty: "Yazılı",
                    question: "Kütlesi 120 gram, hacmi ise 40 cm³ olarak ölçülen düzgün yapılı saf bir katı maddenin yoğunluğu kaç g/cm³'tür?",
                    options: [
                        "2 g/cm³",
                        "3 g/cm³",
                        "4 g/cm³",
                        "80 g/cm³"
                    ],
                    correct: 1,
                    explanation: "d = m/V = 120/40 = 3 g/cm³."
                },
                {
                    id: "6th-unit5-q4",
                    unitId: 5,
                    unitName: "5. Ünite: Madde ve Isı",
                    topic: "Su–Buz",
                    difficulty: "Yazılı",
                    question: "Suyun donarak buza dönüşmesi esnasında gerçekleşen durumla ilgili aşağıdakilerden hangisi DOĞRUDUR?",
                    options: [
                        "Hacmi azalır ve yoğunluğu artar.",
                        "Kütlesi artar ve dibe çöker.",
                        "Hacmi artar ve yoğunluğu azalarak su yüzeyinde yüzer.",
                        "Yoğunluğu değişmez."
                    ],
                    correct: 2,
                    explanation: "Su donunca hacim artar, yoğunluk azalır (~0,9 g/cm³); buz yüzeyde yüzer. Kütle değişmez."
                },
                {
                    id: "6th-unit6-q1",
                    unitId: 6,
                    unitName: "6. Ünite: Elektriğin İletimi",
                    topic: "İletken / Yalıtkan",
                    difficulty: "Tuzak",
                    question: "Aşağıdaki maddelerden hangisi katı veya sıvı yalıtkan maddelere bir örnek DEĞİLDİR?",
                    options: [
                        "Şekerli Su",
                        "Plastik Çubuk",
                        "Porselen Fincan",
                        "Tuzlu Su"
                    ],
                    correct: 3,
                    explanation: "Tuzlu su iletkendir. Şekerli su, plastik ve porselen yalıtkandır."
                },
                {
                    id: "6th-unit6-q2",
                    unitId: 6,
                    unitName: "6. Ünite: Elektriğin İletimi",
                    topic: "Direnç",
                    difficulty: "Yazılı",
                    question: "Bir elektrik devresinde kullanılan iletken telin uzunluğu artırılırsa devredeki elektriksel direnç ve ampul parlaklığı nasıl değişir?",
                    options: [
                        "Direnç artar, ampul parlaklığı azalır.",
                        "Direnç azalır, ampul parlaklığı artar.",
                        "Hem direnç hem ampul parlaklığı artar.",
                        "Direnç ve ampul parlaklığı değişmez."
                    ],
                    correct: 0,
                    explanation: "Uzunluk artınca direnç artar; ampul daha sönük yanar."
                },
                {
                    id: "6th-unit6-q3",
                    unitId: 6,
                    unitName: "6. Ünite: Elektriğin İletimi",
                    topic: "Reosta",
                    difficulty: "Temel",
                    question: "Elektrikli fırın, ütü veya radyolarda akımı ve direnç büyüklüğünü ayarlayarak sıcaklık ya da ses seviyesini değiştirmemizi sağlayan devre elemanı aşağıdakilerden hangisidir?",
                    options: [
                        "Ampermetre",
                        "Voltmetre",
                        "Reosta (Değişken Direnç)",
                        "Sigorta"
                    ],
                    correct: 2,
                    explanation: "Reosta (değişken direnç) sürgü ile direnci değiştirir; ütü, fırın, radyo ayarlarında kullanılır."
                },
                {
                    id: "6th-unit7-q1",
                    unitId: 7,
                    unitName: "7. Ünite: Biyoçeşitlilik ve Çevre",
                    topic: "Nesli Tükenen",
                    difficulty: "Tuzak",
                    question: "Aşağıdaki canlılardan hangisi geçmişte ülkemizde yaşamış ancak günümüzde ülkemizde NESLİ TAMAMEN TÜKENMİŞ canlılar arasında yer alır?",
                    options: [
                        "Akdeniz Foku",
                        "Asya Fili",
                        "Kelaynak Kuşu",
                        "Caretta Caretta"
                    ],
                    correct: 1,
                    explanation: "Asya fili ülkemizde nesli tükenmiş canlılardandır. Akdeniz foku, kelaynak ve Caretta tehlike altındadır."
                },
                {
                    id: "6th-unit7-q2",
                    unitId: 7,
                    unitName: "7. Ünite: Biyoçeşitlilik ve Çevre",
                    topic: "Habitat",
                    difficulty: "Temel",
                    question: "Bir canlı türünün yaşam faaliyetlerini doğal olarak sürdürdüğü ve uyum sağladığı yaşam alanına ne ad verilir?",
                    options: [
                        "Ekosistem",
                        "Biyoçeşitlilik",
                        "Habitat",
                        "Popülasyon"
                    ],
                    correct: 2,
                    explanation: "Habitat, canlının doğal yaşam alanıdır. Ekosistem canlı+cansız etkileşim sistemidir."
                },
                {
                    id: "6th-unit7-q3",
                    unitId: 7,
                    unitName: "7. Ünite: Biyoçeşitlilik ve Çevre",
                    topic: "Hava Kirliliği",
                    difficulty: "Yazılı",
                    question: "Hava kirliliğini önlemek ve solunum yolu hastalıklarının önüne geçmek isteyen bir yerleşim yerinde aşağıdaki uygulamalardan hangisinin yapılması UYGUN DEĞİLDİR?",
                    options: [
                        "Fabrika ve ev bacalarına filtre takılması",
                        "Isınmada kömür yerine doğal gaz ve yenilenebilir enerjiye geçilmesi",
                        "Özel araç kullanımının teşvik edilip toplu taşımanın azaltılması",
                        "Ağaçlandırma çalışmalarının artırılması"
                    ],
                    correct: 2,
                    explanation: "Özel araç artıp toplu taşıma azalırsa egzoz kirliliği artar. Filtre, temiz yakıt ve ağaçlandırma uygundur."
                }
            ],
            exams: [
                {
                    id: "6f-exam-1d1y",
                    title: "6. Sınıf Fen Bilimleri — 1. Dönem 1. Yazılı Prova Sınavı",
                    subtitle: "1.–3. Ünite · Senaryo soruları",
                    questions: [
                        {
                            id: "6f-e1-q1",
                            section: "🪐 I. Bölüm: Güneş Sistemi ve Tutulmalar (1. Ünite)",
                            unit: "1. Ünite",
                            topic: "Karasal / Gazsal",
                            questionNumber: 1,
                            points: 10,
                            scenario: "Fen bilimleri öğretmeniniz derse Merkür, Venüs, Dünya, Mars, Jüpiter, Satürn, Uranüs ve Neptün isimlerinin yazılı olduğu kartlarla gelmiştir.",
                            question: "Bu gezegenleri Karasal (İç) ve Gazsal (Dış) gezegenler olarak iki gruba ayırıp yazınız.",
                            idealAnswer: "Karasal: Merkür, Venüs, Dünya, Mars. Gazsal: Jüpiter, Satürn, Uranüs, Neptün."
                        },
                        {
                            id: "6f-e1-q2",
                            section: "🪐 I. Bölüm: Güneş Sistemi ve Tutulmalar (1. Ünite)",
                            unit: "1. Ünite",
                            topic: "Gök Taşları",
                            questionNumber: 2,
                            points: 10,
                            scenario: "Dünya atmosferine hızlı giren bir kaya parçası sürtünmeyle ısınıp ışık yaymıştır; halk arasında buna “yıldız kayması” denir.",
                            question: "Atmosfere giren bu gök taşına ne ad verilir? Tamamen yanmayıp yeryüzüne düşerse oluşan çukura ne ad verilir?",
                            idealAnswer: "Atmosferdeki adı: Meteor. Yere düşen taş: meteorit. Oluşan çukur: meteor çukuru."
                        },
                        {
                            id: "6f-e1-q3",
                            section: "🪐 I. Bölüm: Güneş Sistemi ve Tutulmalar (1. Ünite)",
                            unit: "1. Ünite",
                            topic: "Güneş Tutulması",
                            questionNumber: 3,
                            points: 10,
                            scenario: "Öğrenci Güneş tutulmasını modellemek için el feneri (Güneş), tenis topu (Ay) ve basketbol topunu (Dünya) aynı doğrultuda dizer.",
                            question: "Güneş tutulması için ortadaki gök cisminde Ay hangi evrede olmalıdır? Tutulma gece mi gündüz mü gözlemlenir?",
                            idealAnswer: "Yeni Ay evresi. Gündüz vakti gözlemlenir."
                        },
                        {
                            id: "6f-e1-q4",
                            section: "🚗 II. Bölüm: Kuvvetin Etkisinde Hareket (2. Ünite)",
                            unit: "2. Ünite",
                            topic: "Bileşke Kuvvet",
                            questionNumber: 4,
                            points: 10,
                            scenario: "Bir masaya Doğu yönünde 12 N ve Batı yönünde 5 N kuvvet etki etmektedir.",
                            question: "Bileşke (net) kuvvetin büyüklüğünü ve yönünü hesaplayınız.",
                            idealAnswer: "R = 12 − 5 = 7 N, yön Doğu."
                        },
                        {
                            id: "6f-e1-q5",
                            section: "🚗 II. Bölüm: Kuvvetin Etkisinde Hareket (2. Ünite)",
                            unit: "2. Ünite",
                            topic: "Dengeleyici Kuvvet",
                            questionNumber: 5,
                            points: 10,
                            scenario: "Doğu yönünde 15 N bileşke kuvvet etkisinde hareket eden bir araba vardır.",
                            question: "Arabayı dengelenmiş kuvvetler etkisine sokmak için dengeleyici kuvvetin yönü ve büyüklüğü ne olmalıdır?",
                            idealAnswer: "Batı yönünde 15 N."
                        },
                        {
                            id: "6f-e1-q6",
                            section: "🚗 II. Bölüm: Kuvvetin Etkisinde Hareket (2. Ünite)",
                            unit: "2. Ünite",
                            topic: "Dengelenmiş Kuvvet",
                            questionNumber: 6,
                            points: 10,
                            scenario: "Otobüs durağında bekleyen bir yolcu ile düz yolda sabit süratle ilerleyen bir araç gözlemlenmektedir.",
                            question: "Bu iki durumdan hangileri dengelenmiş, hangileri dengelenmemiş kuvvet etkisindedir?",
                            idealAnswer: "Her iki durum da dengelenmiş kuvvetler etkisindedir (R = 0)."
                        },
                        {
                            id: "6f-e1-q7",
                            section: "🧠 III. Bölüm: Canlılarda Sistemler (3. Ünite)",
                            unit: "3. Ünite",
                            topic: "Çimlenme",
                            questionNumber: 7,
                            points: 10,
                            scenario: "1. kap: ıslak pamuk, karanlık ve ılık. 2. kap: kuru pamuk, ışıklı ortam. Her ikisinde fasulye tohumu vardır.",
                            question: "Hangi kaptaki tohumlar çimlenir? Çimlenme için ışık gerekli midir?",
                            idealAnswer: "1. kaptakiler çimlenir. Işık gerekli değildir; Su, Oksijen ve Sıcaklık (SOS) yeterlidir."
                        },
                        {
                            id: "6f-e1-q8",
                            section: "🧠 III. Bölüm: Canlılarda Sistemler (3. Ünite)",
                            unit: "3. Ünite",
                            topic: "Sinir Sistemi",
                            questionNumber: 8,
                            points: 10,
                            scenario: "İp üstünde yürüyen cambazın dengesi ile sıcak çaydanlığa dokununca elini çekme refleksi gözlemlenir.",
                            question: "Bu iki olayı kontrol eden merkezî sinir sistemi organlarını sırasıyla yazınız.",
                            idealAnswer: "Denge: Beyincik. Refleks: Omurilik."
                        },
                        {
                            id: "6f-e1-q9",
                            section: "🧠 III. Bölüm: Canlılarda Sistemler (3. Ünite)",
                            unit: "3. Ünite",
                            topic: "Hormonlar",
                            questionNumber: 9,
                            points: 10,
                            scenario: "Aniden köpek gören birinin kalbi hızlanır, solunumu artar.",
                            question: "Kandaki miktarı artan hormon nedir ve hangi bez üretir?",
                            idealAnswer: "Adrenalin; böbrek üstü bezleri."
                        },
                        {
                            id: "6f-e1-q10",
                            section: "🧠 III. Bölüm: Canlılarda Sistemler (3. Ünite)",
                            unit: "3. Ünite",
                            topic: "Ergenlik",
                            questionNumber: 10,
                            points: 10,
                            scenario: "Ergenlikte bedensel ve ruhsal değişimler yaşanır.",
                            question: "Ergenlikte görülen ruhsal (duygusal) değişimlere 2 örnek veriniz.",
                            idealAnswer: "Örn: bağımsızlık arayışı, duygu durum dalgalanmaları, yalnız kalma isteği, arkadaş grubunun önem kazanması."
                        }
                    ]
                },
                {
                    id: "6f-exam-2d1y",
                    title: "6. Sınıf Fen Bilimleri — 2. Dönem 1. Yazılı Prova Sınavı",
                    subtitle: "4.–7. Ünite · Senaryo soruları",
                    questions: [
                        {
                            id: "6f-e2-q1",
                            section: "🔦 I. Bölüm: Işığın Yansıması ve Renkler (4. Ünite)",
                            unit: "4. Ünite",
                            topic: "Yansıma Kanunları",
                            questionNumber: 1,
                            points: 10,
                            scenario: "Düzlem aynaya gönderilen gelen ışının ayna yüzeyiyle yaptığı açı 30° olarak verilmiştir.",
                            question: "Yansıma açısı kaç derecedir? Gelme açısını bularak açıklayınız.",
                            idealAnswer: "Yüzey normali diktir (90°). Gelme açısı = 90° − 30° = 60°. Yansıma açısı = gelme açısı = 60°."
                        },
                        {
                            id: "6f-e2-q2",
                            section: "🔦 I. Bölüm: Işığın Yansıması ve Renkler (4. Ünite)",
                            unit: "4. Ünite",
                            topic: "Aynalar",
                            questionNumber: 2,
                            points: 10,
                            scenario: "Diş hekimi ayna ile araç yan dikiz aynası farklı türlerdedir.",
                            question: "Bu aynaların türlerini (çukur/tümsek) belirleyip kullanım amaçlarını eşleştiriniz.",
                            idealAnswer: "Dişçi aynası: çukur (görüntüyü büyütmek). Dikiz aynası: tümsek (geniş alan göstermek)."
                        },
                        {
                            id: "6f-e2-q3",
                            section: "🔦 I. Bölüm: Işığın Yansıması ve Renkler (4. Ünite)",
                            unit: "4. Ünite",
                            topic: "Renkler",
                            questionNumber: 3,
                            points: 10,
                            scenario: "Karanlık odada yeşil yaprağa kırmızı ışık altında bakılmaktadır.",
                            question: "Yaprak hangi renkte görünür? Nedenini yansıma/soğurma ile açıklayınız.",
                            idealAnswer: "Siyah görünür. Yeşil yaprak kırmızı ışığı yansıtmaz, soğurur."
                        },
                        {
                            id: "6f-e2-q4",
                            section: "🧊 II. Bölüm: Maddenin Ayırt Edici Özellikleri (5. Ünite)",
                            unit: "5. Ünite",
                            topic: "Genleşme",
                            questionNumber: 4,
                            points: 10,
                            scenario: "Yazın tren raylarında şekil bozukluğu olmasın diye ray aralarına boşluk bırakılır.",
                            question: "Bu uygulama hangi ısısal olayla açıklanır? Kışın raylarda nasıl bir değişim olur?",
                            idealAnswer: "Genleşme. Kışın raylar soğuyup büzülür (hacim azalır)."
                        },
                        {
                            id: "6f-e2-q5",
                            section: "🧊 II. Bölüm: Maddenin Ayırt Edici Özellikleri (5. Ünite)",
                            unit: "5. Ünite",
                            topic: "Yoğunluk",
                            questionNumber: 5,
                            points: 10,
                            scenario: "K cisminin kütlesi 150 g. 100 mL suya atılınca seviye 150 mL’ye yükselir.",
                            question: "K cisminin hacmini ve yoğunluğunu (g/cm³) hesaplayınız.",
                            idealAnswer: "Hacim = 150 − 100 = 50 cm³. Yoğunluk = 150/50 = 3 g/cm³."
                        },
                        {
                            id: "6f-e2-q6",
                            section: "🧊 II. Bölüm: Maddenin Ayırt Edici Özellikleri (5. Ünite)",
                            unit: "5. Ünite",
                            topic: "Su–Buz",
                            questionNumber: 6,
                            points: 10,
                            scenario: "Kışın göllerin yüzeyi buz tutarken altta su kalır ve balıklar yaşar.",
                            question: "Suyun donmasındaki bu yoğunluk özelliği olmasaydı sucul yaşam nasıl etkilenirdi?",
                            idealAnswer: "Buz dibe çökseydi göller dip kısımdan donar, sucul canlıların yaşamı tehlikeye girer / sona ererdi."
                        },
                        {
                            id: "6f-e2-q7",
                            section: "🔌 III. Bölüm: Elektriğin İletimi ve Direnç (6. Ünite)",
                            unit: "6. Ünite",
                            topic: "İletken / Yalıtkan",
                            questionNumber: 7,
                            points: 10,
                            scenario: "Kontrol kaleminin metal ucu prize sokulunca ışık yanar; plastik sap elektriği iletmez.",
                            question: "Metaller ve plastikler iletme durumuna göre nasıl adlandırılır? Sıvı iletkenlere 2 örnek veriniz.",
                            idealAnswer: "Metaller iletken, plastikler yalıtkandır. Sıvı iletken: tuzlu su, sirkeli su, çeşme suyu vb."
                        },
                        {
                            id: "6f-e2-q8",
                            section: "🔌 III. Bölüm: Elektriğin İletimi ve Direnç (6. Ünite)",
                            unit: "6. Ünite",
                            topic: "Direnç",
                            questionNumber: 8,
                            points: 10,
                            scenario: "Aynı maddeden, eşit kalınlıkta iki tel: 1. tel 10 cm, 2. tel 30 cm.",
                            question: "Hangisinin direnci daha büyüktür? Özdeş devrelerde hangi ampul daha parlak yanar?",
                            idealAnswer: "2. telin (30 cm) direnci daha büyük. 1. telin (10 cm) bulunduğu devrede ampul daha parlak yanar."
                        },
                        {
                            id: "6f-e2-q9",
                            section: "🌿 IV. Bölüm: Sürdürülebilir Yaşam (7. Ünite)",
                            unit: "7. Ünite",
                            topic: "Endemik",
                            questionNumber: 9,
                            points: 10,
                            scenario: "Ülkemiz endemik canlılar açısından zengindir.",
                            question: "Ülkemize özgü endemik hayvan ve endemik bitkiye 1’er örnek veriniz.",
                            idealAnswer: "Hayvan: Van kedisi / Ankara keçisi / Kangal vb. Bitki: ters lale / kardelen / sığla ağacı vb."
                        },
                        {
                            id: "6f-e2-q10",
                            section: "🌿 IV. Bölüm: Sürdürülebilir Yaşam (7. Ünite)",
                            unit: "7. Ünite",
                            topic: "Hava Kirliliği",
                            questionNumber: 10,
                            points: 10,
                            scenario: "Fabrika bacalarına filtre, fosil yakıt yerine doğal gaz ve güneş enerjisi önerilmektedir.",
                            question: "Bu önlemler öncelikle hangi kirlilik türünü engeller? İnsan sağlığına olumsuz etkisi nedir?",
                            idealAnswer: "Hava kirliliği. Astım, bronşit ve solunum yolu hastalıklarına yol açabilir."
                        }
                    ]
                }
            ],
            flashcards: [
                { id: "6fc-1", front: "Asteroit Kuşağı Güneş sisteminde hangi iki gezegen arasında yer alır?", back: "Mars ile Jüpiter gezegenleri arasında yer alır." },
                { id: "6fc-2", front: "Güneş ve Ay tutulmalarında sıralama nasıldır?", back: "Güneş Tutulması: Güneş — Ay — Dünya | Ay Tutulması: Güneş — Dünya — Ay" },
                { id: "6fc-3", front: "Dengelenmiş kuvvetler etkisindeki bir cismin hareket durumu nasıl olur?", back: "Duruyorsa durmaya devam eder; hareket hâlindeyse sabit süratle yoluna devam eder." },
                { id: "6fc-4", front: "Vücudun dengesini sağlayan merkezî sinir sistemi organı hangisidir?", back: "Beyincik vücut dengesini sağlar." },
                { id: "6fc-5", front: "Korku ve heyecanda kalbi hızlandıran hormon ve bezi?", back: "Adrenalin — Böbrek üstü bezleri." },
                { id: "6fc-6", front: "Gelme açısı ile yansıma açısı ilişkisi?", back: "Gelme açısı yansıma açısına HER ZAMAN eşittir." },
                { id: "6fc-7", front: "Saf maddenin kütlesi iki katına çıkarsa yoğunluk nasıl değişir?", back: "Değişmez. Kütle artarken hacim aynı oranda artar." },
                { id: "6fc-8", front: "İletken telin direncini azaltmak için ne yapılmalı?", back: "Tel kısaltılmalı veya kalınlaştırılmalı (kesit artırılmalı)." },
                { id: "6fc-9", front: "Yalnızca belirli bölgede yaşayan canlı türüne ne denir?", back: "Endemik canlı." },
                { id: "6f-fc1", front: "Güneş’e yakınlığa göre gezegen sırası?", back: "Merkür, Venüs, Dünya, Mars, Jüpiter, Satürn, Uranüs, Neptün." },
                { id: "6f-fc2", front: "Karasal (iç) gezegenler hangileri?", back: "Merkür, Venüs, Dünya, Mars." },
                { id: "6f-fc3", front: "Gazsal (dış) gezegenlerin ortak özellikleri?", back: "Gaz yapı; hepsinin halkası ve uydusu var; hacimce en büyük 4’ü; asteroit kuşağının ötesinde (Jüpiter, Satürn, Uranüs, Neptün)." },
                { id: "6f-fc4", front: "Güneş sisteminin en sıcak gezegeni hangisi? Neden?", back: "Venüs. Atmosferindeki yoğun gazlar (sera etkisi) nedeniyle." },
                { id: "6f-fc5", front: "Asteroit kuşağı nerede?", back: "Mars ile Jüpiter arasında." },
                { id: "6f-fc6", front: "Meteor ile meteorit farkı?", back: "Meteor: atmosferde yanan ve ışık saçan gök taşı (yıldız kayması). Meteorit: yeryüzüne ulaşan gök taşı." },
                { id: "6f-fc7", front: "Güneş tutulması sıralaması ve evresi?", back: "Güneş — Ay — Dünya; Yeni Ay evresinde; gündüz, dar alanda, kısa süreli." },
                { id: "6f-fc8", front: "Ay tutulması sıralaması ve evresi?", back: "Güneş — Dünya — Ay; Dolunay evresinde; gece, geniş alanda, daha uzun sürer." },
                { id: "6f-fc9", front: "Kuvvetin 4 temel özelliği nedir?", back: "Uygulama noktası, doğrultu, yön, büyüklük (şiddet). Birim: Newton (N), simge: F." },
                { id: "6f-fc10", front: "Aynı doğrultulu zıt yönlü kuvvetlerde R nasıl bulunur?", back: "R = F_büyük − F_küçük; yön büyük kuvvetin yönündedir." },
                { id: "6f-fc11", front: "R = 0 ise cisim nasıl hareket eder?", back: "Dengelenmiş kuvvet: duruyorsa durur; hareketliyorsa sabit süratle devam eder." },
                { id: "6f-fc12", front: "Dengeleyici kuvvet nedir?", back: "R’yi sıfırlayan kuvvettir; bileşke ile aynı büyüklük ve doğrultuda, zıt yöndedir." },
                { id: "6f-fc13", front: "Sürat ile hız farkı?", back: "Sürat: birim zamanda alınan yol (yönsüz). Hız: birim zamandaki yer değiştirme (yönlü)." },
                { id: "6f-fc14", front: "Sabit süratli hareket nedir?", back: "Eşit zaman aralıklarında eşit yollar alınmasıdır." },
                { id: "6f-fc15", front: "Çimlenme için gerekli şartlar (SOS)?", back: "Su/Nem, Oksijen, Sıcaklık. Işık ve toprak gerekli değildir." },
                { id: "6f-fc16", front: "İnsanda döllenme nerede olur?", back: "Yumurta kanalında. Zigot döl yatağına tutunur." },
                { id: "6f-fc17", front: "Gelişim sırası nedir?", back: "Zigot → Embriyo → Fetüs → Bebek." },
                { id: "6f-fc18", front: "Refleks merkezi hangi organdır?", back: "Omurilik (doğuştan ve sonradan kazanılan refleksler)." },
                { id: "6f-fc19", front: "Adrenalin nereden salgılanır? Etkisi?", back: "Böbrek üstü bezleri; korku/heyecanda kalp atışı ve kan basıncını artırır." },
                { id: "6f-fc20", front: "İnsülin ve glukagon ne yapar?", back: "Pankreastan salgılanır: insülin kan şekerini düşürür, glukagon yükseltir." },
                { id: "6f-fc21", front: "Yansıma kanununda gelme ve yansıma açısı ilişkisi?", back: "Gelme açısı = yansıma açısıdır. Normal yüzeye diktir." },
                { id: "6f-fc22", front: "Düzgün ve dağınık yansıma farkı?", back: "Düzgün: pürüzsüz yüzey, net görüntü. Dağınık: pürüzlü yüzey, net görüntü yok." },
                { id: "6f-fc23", front: "Tümsek ayna görüntüsü nasıldır?", back: "Her zaman düz ve cisimden küçüktür; geniş alan gösterir (dikiz aynası)." },
                { id: "6f-fc24", front: "Çukur ayna ne yapar? Kullanım?", back: "Işığı toplar. Dişçi/makyaj aynası, far, güneş fırını, teleskop." },
                { id: "6f-fc25", front: "Yeşil cisim mavi ışıkta ne renk görünür?", back: "Siyah. Yeşil cisim mavi ışığı soğurur, yansıtmaz." },
                { id: "6f-fc26", front: "Genleşme ve büzülme nedir?", back: "Genleşme: ısı alınca hacim artar. Büzülme: ısı verince hacim azalır." },
                { id: "6f-fc27", front: "Erime ve donma noktası ilişkisi?", back: "Aynı saf maddede erime noktası = donma noktasıdır (su: 0 °C)." },
                { id: "6f-fc28", front: "Yoğunluk formülü ve birimi?", back: "d = m/V; birim g/cm³. Saf madde için ayırt edicidir." },
                { id: "6f-fc29", front: "Su donunca hacim ve yoğunluk ne olur?", back: "Hacim artar, yoğunluk azalır; buz yüzeyde yüzer." },
                { id: "6f-fc30", front: "Kütle artınca kaynama noktası değişir mi?", back: "Hayır. Kaynama noktası ayırt edici özelliktir; madde miktarına bağlı değildir." },
                { id: "6f-fc31", front: "Tuzlu su ile saf su elektrik açısından farkı?", back: "Tuzlu su iletken; saf su (ve şekerli su) yalıtkandır." },
                { id: "6f-fc32", front: "Tel uzunluğu artınca direnç ve parlaklık?", back: "Direnç artar, ampul parlaklığı azalır." },
                { id: "6f-fc33", front: "Tel kalınlaşınca direnç ne olur?", back: "Kesit artınca direnç azalır; ampul daha parlak yanar." },
                { id: "6f-fc34", front: "Reosta nedir? Ne işe yarar?", back: "Değişken dirençtir; sürgü ile direnci değiştirip parlaklık/sıcaklık/ses ayarlar." },
                { id: "6f-fc35", front: "Ampul filamanı neden ışık verir?", back: "İnce, yüksek dirençli tungsten teli ısınır; akkor hâle gelip ışık yayar." },
                { id: "6f-fc36", front: "Habitat nedir?", back: "Canlı türünün doğal yaşam alanıdır (ör. hamsi → Karadeniz)." },
                { id: "6f-fc37", front: "Endemik canlı ne demektir?", back: "Yalnızca belirli bir bölgede yaşayan türdür (Van kedisi, ters lale vb.)." },
                { id: "6f-fc38", front: "Ülkemizde nesli tükenmiş örnek?", back: "Asya fili, çita, kunduz, Asya kaplanı, Kafkas bizonu, yılanboyun kuşu." },
                { id: "6f-fc39", front: "22 Mayıs ve 5 Haziran ne günüdür?", back: "22 Mayıs: Dünya Biyolojik Çeşitlilik Günü. 5 Haziran: Dünya Çevre Günü." },
                { id: "6f-fc40", front: "Hava kirliliği insan sağlığını nasıl etkiler?", back: "Astım ve bronşit gibi solunum yolu hastalıklarına yol açabilir." }
            ]
        },

        // ==========================================
        // 5. SINIF FEN BİLİMLERİ - 1. ÜNİTE (GÜNCEL MEB)
        // ==========================================
        "5-fen": {
            title: "5. Sınıf Fen Bilimleri",
            subtitle: "1–7. Ünite + Sınav Şampiyonu hap bilgiler",
            presentation: {
                title: "5. Sınıf Fen • 1–7. Ünite + Hap Bilgi",
                desc: "Güncel MEB notları, sınav tuzakları, karşılaştırma tabloları ve şampiyon flaş kartlar.",
                file: "#",
                slidesCount: "Not + Test + Hap",
                badge: "Şampiyon Paketi"
            },
            notes: [
                {
                    unitId: 0,
                    unitName: "⚡ Sınav Şampiyonu",
                    title: "En Çok Düşülen Sınav Tuzakları",
                    important: "True / False & Traps",
                    badge: "HAP",
                    content: `
                        <div class="note-alert">
                            🚨 <strong>TUZAK:</strong> “Ay bir ışık kaynağıdır.”<br>
                            <strong>CEVAP: YANLIŞ!</strong> Ay ışık kaynağı değildir; Güneş’ten aldığı ışığı yansıtır.
                        </div>
                        <div class="note-alert">
                            🚨 <strong>TUZAK:</strong> “Kütle uzaya veya Ay’a gidildiğinde değişir.”<br>
                            <strong>CEVAP: YANLIŞ!</strong> Kütle her yerde aynıdır. Değişen şey <strong>ağırlıktır</strong> (Ay’da ~1/6).
                        </div>
                        <div class="note-alert">
                            🚨 <strong>TUZAK:</strong> “Buzlu cam saydam olmayan (opak) bir maddedir.”<br>
                            <strong>CEVAP: YANLIŞ!</strong> Buzlu cam ve yağlı kâğıt <strong>yarı saydamdır</strong>; arkası bulanık görünür.
                        </div>
                        <div class="note-alert">
                            🚨 <strong>TUZAK:</strong> “Sıcaklık bir enerjidir ve kalorimetre ile ölçülür.”<br>
                            <strong>CEVAP: YANLIŞ!</strong> <strong>Isı</strong> enerjidir; sıcaklık enerji değildir, termometre ile °C ölçülür.
                        </div>
                        <div class="note-alert">
                            🚨 <strong>TUZAK:</strong> “Duy ve pil yatağının sembolü vardır.”<br>
                            <strong>CEVAP: YANLIŞ!</strong> Duy ve pil yatağının belirlenmiş sembolü <strong>yoktur</strong>.
                        </div>
                    `
                },
                {
                    unitId: 0,
                    unitName: "⚡ Sınav Şampiyonu",
                    title: "Kafa Karıştıran İkililer",
                    important: "Karşılaştırma tablosu",
                    badge: "HAP",
                    content: `
                        <div class="comparison-grid">
                            <div class="comp-card cold">
                                <h4>⚖️ Kütle</h4>
                                <ul>
                                    <li>Madde miktarı</li>
                                    <li>Eşit kollu terazi</li>
                                    <li>g / kg</li>
                                    <li>Konuma göre <strong>DEĞİŞMEZ</strong></li>
                                </ul>
                            </div>
                            <div class="comp-card warm">
                                <h4>🌍 Ağırlık</h4>
                                <ul>
                                    <li>Yer çekimi kuvveti</li>
                                    <li>Dinamometre</li>
                                    <li>Newton (N)</li>
                                    <li>Konuma göre <strong>DEĞİŞİR</strong></li>
                                </ul>
                            </div>
                        </div>
                        <div class="comparison-grid" style="margin-top:0.75rem;">
                            <div class="comp-card warm">
                                <h4>🔥 Isı</h4>
                                <ul>
                                    <li>Enerji türü</li>
                                    <li>Joule / Kalori</li>
                                    <li>Alınıp verilebilir</li>
                                </ul>
                            </div>
                            <div class="comp-card cold">
                                <h4>🌡️ Sıcaklık</h4>
                                <ul>
                                    <li>Enerji değildir</li>
                                    <li>°C · termometre</li>
                                    <li>Ortalama hareket enerjisi göstergesi</li>
                                </ul>
                            </div>
                        </div>
                        <div class="comparison-grid" style="margin-top:0.75rem;">
                            <div class="comp-card cold">
                                <h4>🌿 Bitki hücresi</h4>
                                <ul>
                                    <li>Köşeli şekil</li>
                                    <li>Hücre duvarı + kloroplast var</li>
                                    <li>Koful büyük / az</li>
                                </ul>
                            </div>
                            <div class="comp-card warm">
                                <h4>🐾 Hayvan hücresi</h4>
                                <ul>
                                    <li>Oval / yuvarlak</li>
                                    <li>Duvar + kloroplast yok</li>
                                    <li>Koful küçük / çok · sentrozom var</li>
                                </ul>
                            </div>
                        </div>
                    `
                },
                {
                    unitId: 1,
                    unitName: "1. Ünite: Güneş, Dünya ve Ay",
                    title: "Gökyüzündeki Komşumuz Güneş",
                    important: "Doğrudan bakma!",
                    badge: "F.5.1.1",
                    content: `
                        <ul class="styled-list">
                            <li><strong>Isı ve ışık kaynağı:</strong> Dünya’mızın temel yaşam, ısı ve ışık kaynağıdır.</li>
                            <li><strong>Şekil ve yapı:</strong> Şekli <strong>küreye</strong> benzer. Dünya gibi <strong>katmanlardan</strong> oluşur; yapısında sıcak <strong>gazlar</strong> bulunur.</li>
                            <li><strong>Güneş lekeleri:</strong> Yüzeyde diğer bölgelere göre daha soğuk ve koyu görünen alanlardır.</li>
                            <li><strong>Hareketi:</strong> Kendi ekseni etrafında <strong>saat yönünün tersine</strong> (batıdan doğuya) döner.</li>
                        </ul>
                        <div class="note-alert">
                            ⚠️ <strong>Önemli uyarı:</strong> Güneş’e doğrudan ya da teleskop, dürbün, mercek ile bakmak göz sağlığı için çok tehlikelidir.
                        </div>
                    `
                },
                {
                    unitId: 1,
                    unitName: "1. Ünite: Güneş, Dünya ve Ay",
                    title: "Gökyüzündeki Komşumuz Ay",
                    important: "Ay ışık kaynağı değildir",
                    badge: "F.5.1.2",
                    content: `
                        <ul class="styled-list">
                            <li><strong>Dünya’nın uydusu:</strong> Dünya’ya en yakın gök cismi; tek doğal uydumuzdur.</li>
                            <li><strong>Işık kaynağı değildir:</strong> Güneş’ten aldığı ışığı yansıtır.</li>
                            <li><strong>Atmosfer:</strong> Yok denecek kadar incedir → rüzgâr ve yağmur görülmez; gece-gündüz sıcaklık farkı çok yüksektir.</li>
                            <li><strong>Krater:</strong> Gök taşlarının (meteor) çarpmasıyla oluşan çukurlardır.</li>
                        </ul>
                        <div class="note-highlight">
                            <strong>Ay’ın 3 hareketi</strong> (hepsi saat yönünün tersine):
                            <ol>
                                <li>Kendi ekseni etrafında döner</li>
                                <li>Dünya etrafında dolanır</li>
                                <li>Dünya ile birlikte Güneş etrafında dolanır</li>
                            </ol>
                            <p style="margin-top:0.6rem;"><strong>Neden hep aynı yüz görünür?</strong> Kendi etrafında dönme süresi ≈ Dünya etrafında dolanma süresi (~27,3 gün) olduğundan Dünya’dan bakınca Ay’ın hep aynı yüzü görünür.</p>
                        </div>
                    `
                },
                {
                    unitId: 1,
                    unitName: "1. Ünite: Güneş, Dünya ve Ay",
                    title: "Ay’ın Evreleri",
                    important: "D / ters D / C şekilleri",
                    badge: "F.5.1.3",
                    content: `
                        <p>Ay Dünya etrafında dolanırken Güneş ışığını alan kısmı değişir; bu yüzden farklı şekillerde görünür. Ana evreler arası ~1 hafta; tüm döngü ~4 hafta / 29,5 gündür.</p>
                        <div class="comparison-grid">
                            <div class="comp-card cold">
                                <h4>🌑 Ana Evreler</h4>
                                <ul>
                                    <li><strong>Yeni Ay:</strong> Dünya ile Güneş arasında; bize bakan yüz karanlık.</li>
                                    <li><strong>İlk Dördün:</strong> Sağ yarı aydınlık, düz <strong>“D”</strong>.</li>
                                    <li><strong>Dolunay:</strong> Bize bakan yüz tamamen aydınlık, daire.</li>
                                    <li><strong>Son Dördün:</strong> Sol yarı aydınlık, ters <strong>“D”</strong>.</li>
                                </ul>
                            </div>
                            <div class="comp-card warm">
                                <h4>🌒 Ara Evreler</h4>
                                <ul>
                                    <li><strong>Hilal:</strong> “C” veya ters “C” (Yeni Ay ↔ dördünler arası).</li>
                                    <li><strong>Şişkin Ay:</strong> Daireye yakın ama az eksik (dördün ↔ dolunay arası).</li>
                                </ul>
                            </div>
                        </div>
                    `
                },
                {
                    unitId: 1,
                    unitName: "1. Ünite: Güneş, Dünya ve Ay",
                    title: "Güneş, Dünya ve Ay Karşılaştırması",
                    important: "Büyüklük modeli",
                    badge: "F.5.1.4",
                    content: `
                        <ul class="styled-list">
                            <li><strong>Büyüklük:</strong> Güneş &gt; Dünya &gt; Ay</li>
                            <li><strong>Model:</strong> Güneş = <strong>karpuz</strong>, Dünya = <strong>elma</strong>, Ay = <strong>erik</strong></li>
                            <li><strong>Dünya’nın kendi etrafında dönmesi:</strong> 24 saat (1 gün)</li>
                            <li><strong>Dünya’nın Güneş etrafında dolanması:</strong> 365 gün 6 saat (1 yıl)</li>
                        </ul>
                    `
                },
                {
                    unitId: 2,
                    unitName: "2. Ünite: Kuvvetin Ölçülmesi ve Sürtünme",
                    title: "Kuvvet ve Kuvvetin Ölçülmesi",
                    important: "Birim: Newton (N)",
                    badge: "F.5.2.1",
                    content: `
                        <ul class="styled-list">
                            <li><strong>Kuvvet:</strong> Duran cismi hareket ettiren; hareketli cismi hızlandıran, yavaşlatan veya durduran; yönünü ve şeklini değiştirebilen etkidir.</li>
                            <li><strong>Birim:</strong> <strong>Newton (N)</strong> — Isaac Newton’ın soyadından gelir.</li>
                            <li><strong>Ölçüm aleti:</strong> <strong>Dinamometre</strong>.</li>
                            <li><strong>Esnek cisim:</strong> Kuvvetle şekli değişir, kuvvet kalkınca eski hâline döner (paket lastiği, sarmal yay). Dinamometre içinde esnek sarmal yay kullanılır.</li>
                        </ul>
                        <div class="note-highlight">
                            <strong>Dinamometre ipuçları:</strong>
                            <ul class="styled-list">
                                <li><strong>İnce yay</strong> → küçük kuvvetleri daha <em>hassas</em> ölçer.</li>
                                <li><strong>Kalın yay</strong> → daha büyük kuvvetleri ölçebilir.</li>
                                <li><strong>Esneklik sınırı:</strong> Maksimum değer aşılırsa yayın esnekliği bozulur.</li>
                                <li><strong>Bölme hesabı:</strong> Maksimum değer ÷ bölme sayısı = her bölmenin N değeri. Örn: 50 N / 5 bölme = <strong>10 N</strong>.</li>
                            </ul>
                        </div>
                    `
                },
                {
                    unitId: 2,
                    unitName: "2. Ünite: Kuvvetin Ölçülmesi ve Sürtünme",
                    title: "Kütle ve Ağırlık İlişkisi",
                    important: "Kütle değişmez, ağırlık değişir",
                    badge: "F.5.2.2",
                    content: `
                        <div class="comparison-grid">
                            <div class="comp-card cold">
                                <h4>⚖️ Kütle</h4>
                                <ul>
                                    <li>Maddenin değişmeyen madde miktarıdır.</li>
                                    <li>Ölçüm: <strong>eşit kollu terazi</strong></li>
                                    <li>Birim: <strong>g</strong> veya <strong>kg</strong></li>
                                    <li>Konuma göre <strong>DEĞİŞMEZ</strong></li>
                                </ul>
                            </div>
                            <div class="comp-card warm">
                                <h4>🌍 Ağırlık</h4>
                                <ul>
                                    <li>Kütleye etki eden yer çekimi kuvvetidir.</li>
                                    <li>Ölçüm: <strong>dinamometre</strong></li>
                                    <li>Birim: <strong>Newton (N)</strong></li>
                                    <li>Konuma / gök cismine göre <strong>DEĞİŞİR</strong></li>
                                </ul>
                            </div>
                        </div>
                        <div class="note-alert" style="margin-top:0.85rem;">
                            💡 Dünya 1 kg’a yaklaşık <strong>10 N</strong> uygular. Dünya’nın çekimi Ay’ın ~<strong>6 katı</strong>dır.<br>
                            Örn: 60 kg cisim → Dünya’da kütle 60 kg / ağırlık <strong>600 N</strong>; Ay’da kütle yine 60 kg / ağırlık <strong>100 N</strong>.<br>
                            Dağ zirvesinde yer çekimi azalır → ağırlık azalır, kütle aynı kalır.
                        </div>
                    `
                },
                {
                    unitId: 2,
                    unitName: "2. Ünite: Kuvvetin Ölçülmesi ve Sürtünme",
                    title: "Sürtünme Kuvveti",
                    important: "Harekete zıt yönlü",
                    badge: "F.5.2.3",
                    content: `
                        <p>Temas eden yüzeyler arasında, genelde <strong>harekete zıt</strong> engelleyici kuvvettir.</p>
                        <ul class="styled-list">
                            <li><strong>Pürüzlü yüzey</strong> (halı, toprak): sürtünme fazla</li>
                            <li><strong>Kaygan yüzey</strong> (cam, mermer, cilalı tahta): sürtünme az</li>
                            <li><strong>Hava direnci:</strong> Uçak/araç önlerinin sivri olması direnci azaltır.</li>
                            <li><strong>Su direnci:</strong> Gemilerin V biçimli önü direnci azaltır.</li>
                        </ul>
                        <div class="comparison-grid">
                            <div class="comp-card warm">
                                <h4>🔼 Sürtünmeyi artır</h4>
                                <ul>
                                    <li>Kışın lastiğe zincir</li>
                                    <li>Krampon, pudra (halter)</li>
                                    <li>Kaydırmaz bant</li>
                                </ul>
                            </div>
                            <div class="comp-card cold">
                                <h4>🔽 Sürtünmeyi azalt</h4>
                                <ul>
                                    <li>Menteşe / makine yağlama</li>
                                    <li>Yüzeyi cilalama</li>
                                    <li>Valize tekerlek</li>
                                </ul>
                            </div>
                        </div>
                    `
                },
                {
                    unitId: 3,
                    unitName: "3. Ünite: Canlılar ve Yaşam",
                    title: "Hücre ve Organelleri",
                    important: "En küçük canlılık birimi",
                    badge: "F.5.3.1",
                    content: `
                        <p><strong>Hücre:</strong> Canlıların yapısını oluşturan ve canlılık özelliği gösteren en küçük birimdir. Gözle görülemeyecek kadar küçük olduğundan <strong>mikroskop</strong> ile incelenir.</p>
                        <div class="note-highlight">
                            <strong>3 temel kısım (bitki + hayvan ortak):</strong>
                            <ul class="styled-list">
                                <li><strong>Hücre zarı:</strong> Canlı, esnek, seçici-geçirgen; şekil verir, dağılmayı önler, madde giriş-çıkışını denetler.</li>
                                <li><strong>Çekirdek:</strong> Yaşamsal olayları yönetir; kalıtsal bilgiyi taşır ve aktarır.</li>
                                <li><strong>Sitoplazma:</strong> Yarı akışkan saydam sıvı; organelleri barındırır.</li>
                            </ul>
                            <p style="margin-top:0.5rem;"><em>Not:</em> Bitki hücresinde zarın dışında cansız <strong>hücre duvarı (çeper)</strong> vardır; hayvan hücresinde yoktur.</p>
                        </div>
                        <div class="comparison-grid">
                            <div class="comp-card cold">
                                <h4>⚙️ Organeller</h4>
                                <ul>
                                    <li><strong>Ribozom:</strong> Protein üretir (tüm hücreler)</li>
                                    <li><strong>Mitokondri:</strong> Enerji üretir (bitki + hayvan)</li>
                                    <li><strong>Kloroplast:</strong> Fotosentez (sadece bitki)</li>
                                    <li><strong>Koful:</strong> Su, besin, atık depolar</li>
                                    <li><strong>Golgi:</strong> Salgı üretimi / paketleme</li>
                                    <li><strong>ER:</strong> Madde iletimi</li>
                                    <li><strong>Lizozom:</strong> Hücre içi sindirim</li>
                                    <li><strong>Sentrozom:</strong> Bölünme (hayvan)</li>
                                </ul>
                            </div>
                            <div class="comp-card warm">
                                <h4>🌿 Bitki vs 🐾 Hayvan</h4>
                                <ul>
                                    <li>Bitki: köşeli; çeper + kloroplast var; sentrozom yok; koful büyük/az</li>
                                    <li>Hayvan: oval; çeper + kloroplast yok; sentrozom var; koful küçük/çok</li>
                                </ul>
                            </div>
                        </div>
                    `
                },
                {
                    unitId: 3,
                    unitName: "3. Ünite: Canlılar ve Yaşam",
                    title: "Hücreden Organizmaya",
                    important: "Hiyerarşik düzen",
                    badge: "F.5.3.2",
                    content: `
                        <div class="note-highlight">
                            <strong>Basitten karmaşığa:</strong><br>
                            Hücre → Doku → Organ → Sistem → Organizma
                        </div>
                        <ul class="styled-list">
                            <li><strong>Hücre:</strong> En küçük birim (örn: kas hücresi)</li>
                            <li><strong>Doku:</strong> Benzer görevli hücrelerin birleşmesi (örn: kas dokusu)</li>
                            <li><strong>Organ:</strong> Dokuların belirli görev için birleşmesi (örn: kalp, kol)</li>
                            <li><strong>Sistem:</strong> Organların uyumlu çalışması (örn: dolaşım, destek ve hareket)</li>
                            <li><strong>Organizma:</strong> Sistemlerin oluşturduğu canlı bütün (örn: insan, elma ağacı)</li>
                        </ul>
                    `
                },
                {
                    unitId: 3,
                    unitName: "3. Ünite: Canlılar ve Yaşam",
                    title: "Destek ve Hareket Sistemi",
                    important: "İskelet + kaslar",
                    badge: "F.5.3.3",
                    content: `
                        <p>Vücudun dik durmasını sağlar, iç organları korur, hareketi gerçekleştirir. <strong>İskelet</strong> ve <strong>kaslar</strong> olmak üzere iki bölümdür. İskelet canlıdır; mineral depolar ve kan hücreleri üretir.</p>
                        <div class="comparison-grid">
                            <div class="comp-card cold">
                                <h4>🦴 Kemik çeşitleri</h4>
                                <ul>
                                    <li><strong>Uzun:</strong> boy &gt; en (uyluk, kaval, kol)</li>
                                    <li><strong>Kısa:</strong> en ≈ boy (el/ayak bileği)</li>
                                    <li><strong>Yassı:</strong> levha (kafatası, kürek, kaburga)</li>
                                </ul>
                            </div>
                            <div class="comp-card warm">
                                <h4>🔗 Eklemler</h4>
                                <ul>
                                    <li><strong>Oynar:</strong> hareket yüksek (kol, bacak)</li>
                                    <li><strong>Yarı oynar:</strong> kısıtlı (omurga)</li>
                                    <li><strong>Oynamaz:</strong> hareketsiz (kafatası)</li>
                                </ul>
                            </div>
                        </div>
                        <ul class="styled-list">
                            <li><strong>Kıkırdak:</strong> Kemikten yumuşak/esnek; burun, kulak, soluk borusu, uzun kemik uçlarında; aşınma ve sürtünmeyi azaltır.</li>
                        </ul>
                        <div class="note-alert">
                            <strong>Kas çeşitleri:</strong><br>
                            • <strong>Çizgili (iskelet) kas:</strong> İsteğimizle, hızlı, çabuk yorulur.<br>
                            • <strong>Düz kas:</strong> Mide, bağırsak… İstemsiz, yavaş, yorulmaz.<br>
                            • <strong>Kalp kası:</strong> Yapı çizgiliye benzer; istemsiz, ritmik, yorulmadan çalışır.
                        </div>
                    `
                },
                {
                    unitId: 4,
                    unitName: "4. Ünite: Işığın Yayılması ve Gölge",
                    title: "Işığın Yayılması",
                    important: "Doğrusal + her yöne",
                    badge: "F.5.4.1",
                    content: `
                        <ul class="styled-list">
                            <li><strong>Doğrusal yayılma:</strong> Engel yoksa ışık <strong>doğrusal yolla</strong> yayılır.</li>
                            <li><strong>Her yöne yayılma:</strong> Kaynak etrafında her yöne gider (ampul, el feneri).</li>
                            <li><strong>Işık ışını:</strong> Işığın yolunu gösteren, başlangıcı belli doğru ve oklar.</li>
                        </ul>
                        <div class="note-highlight">
                            💡 Düz / delikli borudan bakınca kaynak görülür; <strong>bükülmüş</strong> borunun arkasındaki kaynak görülmez → doğrusal yayılmanın gözlemi.
                        </div>
                    `
                },
                {
                    unitId: 4,
                    unitName: "4. Ünite: Işığın Yayılması ve Gölge",
                    title: "Maddenin Işık Geçirgenliği",
                    important: "Saydam / yarı saydam / opak",
                    badge: "F.5.4.2",
                    content: `
                        <div class="comparison-grid">
                            <div class="comp-card cold">
                                <h4>✨ Saydam</h4>
                                <ul>
                                    <li>Işığı tamamen / net geçirir</li>
                                    <li>Arkadaki cisimler <strong>net</strong></li>
                                    <li>Cam, hava, temiz su, gözlük camı</li>
                                </ul>
                            </div>
                            <div class="comp-card warm">
                                <h4>🌫️ Yarı saydam</h4>
                                <ul>
                                    <li>Işığın bir kısmını geçirir</li>
                                    <li>Arkadaki cisimler <strong>bulanık</strong></li>
                                    <li>Buzlu cam, yağlı kâğıt, ince tül</li>
                                </ul>
                            </div>
                        </div>
                        <div class="note-alert" style="margin-top:0.75rem;">
                            <strong>Opak (saydam olmayan):</strong> Işığı hiç geçirmez; arkadaki cisimler görülmez. Örn: kitap, tahta, tuğla, demir, alüminyum folyo.
                        </div>
                    `
                },
                {
                    unitId: 4,
                    unitName: "4. Ünite: Işığın Yayılması ve Gölge",
                    title: "Tam Gölgenin Oluşumu",
                    important: "Doğrusal yayılmanın kanıtı",
                    badge: "F.5.4.3",
                    content: `
                        <p><strong>Tam gölge:</strong> Işık ışınlarının <strong>opak</strong> cisimle karşılaşmasıyla cismin arkasında kalan, ışık almayan karanlık bölgedir. Gölge oluşumu, ışığın <strong>doğrusal yayıldığının</strong> önemli kanıtıdır.</p>
                        <div class="note-highlight">
                            <strong>Gölge büyüklüğünü etkileyenler:</strong>
                            <ul class="styled-list">
                                <li><strong>Cisim büyüdükçe</strong> gölge büyür (aynı uzaklıkta futbol topu &gt; tenis topu).</li>
                                <li>Cisim ışığa <strong>yaklaşırsa</strong> → gölge <strong>BÜYÜR</strong>; uzaklaşırsa → <strong>KÜÇÜLÜR</strong>.</li>
                                <li>Cisim ekrana <strong>yaklaşırsa</strong> → gölge <strong>KÜÇÜLÜR</strong>; ekrandan uzaklaşıp ışığa yaklaşırsa → <strong>BÜYÜR</strong>.</li>
                            </ul>
                        </div>
                    `
                },
                {
                    unitId: 5,
                    unitName: "5. Ünite: Madde ve Değişim",
                    title: "Maddenin Tanecikli Yapısı",
                    important: "Katı / sıvı / gaz",
                    badge: "F.5.5.1",
                    content: `
                        <p>Tüm maddeler <strong>tanecikli, boşluklu ve hareketli</strong> yapıya sahiptir.</p>
                        <div class="comparison-grid">
                            <div class="comp-card cold">
                                <h4>🧊 Katı</h4>
                                <ul>
                                    <li>Boşluk <strong>en az</strong></li>
                                    <li>Sadece <strong>titreşim</strong></li>
                                    <li>Belirli şekil + hacim; sıkıştırılamaz</li>
                                </ul>
                            </div>
                            <div class="comp-card warm">
                                <h4>💧 Sıvı</h4>
                                <ul>
                                    <li>Boşluk katıdan fazla</li>
                                    <li>Titreşim, öteleme, dönme</li>
                                    <li>Belirli hacim; şekil kabın şekli</li>
                                </ul>
                            </div>
                        </div>
                        <div class="note-alert" style="margin-top:0.75rem;">
                            <strong>💨 Gaz:</strong> Boşluk <strong>en fazla</strong>; tanecikler bağımsız titreşim–öteleme–dönme yapar. Belirli şekil/hacim yok; kabın her yerine yayılır.
                        </div>
                    `
                },
                {
                    unitId: 5,
                    unitName: "5. Ünite: Madde ve Değişim",
                    title: "Isı ve Sıcaklık",
                    important: "Isı enerji, sıcaklık değil",
                    badge: "F.5.5.2",
                    content: `
                        <div class="comparison-grid">
                            <div class="comp-card warm">
                                <h4>🔥 Isı</h4>
                                <ul>
                                    <li>Bir <strong>enerji türü</strong></li>
                                    <li>Kalorimetre ile hesaplanır</li>
                                    <li>Birim: <strong>Joule (J)</strong> / Kalori (cal)</li>
                                    <li>Maddeler arasında alınıp verilir</li>
                                </ul>
                            </div>
                            <div class="comp-card cold">
                                <h4>🌡️ Sıcaklık</h4>
                                <ul>
                                    <li>Enerji değildir; ortalama hareket enerjisi göstergesi</li>
                                    <li><strong>Termometre</strong> ile ölçülür</li>
                                    <li>Birim: <strong>°C</strong></li>
                                    <li>Alınıp verilen bir şey değildir</li>
                                </ul>
                            </div>
                        </div>
                        <div class="note-highlight" style="margin-top:0.75rem;">
                            Isı akışı <strong>yüksek sıcaklıktan düşük sıcaklığa</strong> doğrudur; sıcaklıklar eşitlenene kadar devam eder.
                        </div>
                    `
                },
                {
                    unitId: 5,
                    unitName: "5. Ünite: Madde ve Değişim",
                    title: "Maddenin Hâl Değişimi",
                    important: "Isı alan / ısı veren",
                    badge: "F.5.5.3",
                    content: `
                        <div class="comparison-grid">
                            <div class="comp-card warm">
                                <h4>☀️ Isı alarak</h4>
                                <ul>
                                    <li><strong>Erime:</strong> katı → sıvı (buz)</li>
                                    <li><strong>Buharlaşma:</strong> sıvı → gaz (yüzeyde, her sıcaklıkta)</li>
                                    <li><strong>Kaynama:</strong> her yerde hızlı, sabit sıcaklıkta, kabarcıklı</li>
                                    <li><strong>Süblimleşme:</strong> katı → gaz (naftalin, kuru buz, katı iyot)</li>
                                </ul>
                            </div>
                            <div class="comp-card cold">
                                <h4>❄️ Isı vererek</h4>
                                <ul>
                                    <li><strong>Donma:</strong> sıvı → katı</li>
                                    <li><strong>Yoğuşma:</strong> gaz → sıvı (yağmur, soğuk şişe damlacıkları)</li>
                                    <li><strong>Kırağılaşma:</strong> gaz → katı (cam/yaprak buz kristalleri)</li>
                                </ul>
                            </div>
                        </div>
                    `
                },
                {
                    unitId: 5,
                    unitName: "5. Ünite: Madde ve Değişim",
                    title: "Isı İletimi ve Yalıtım",
                    important: "İletken vs yalıtkan",
                    badge: "F.5.5.4",
                    content: `
                        <ul class="styled-list">
                            <li><strong>Isı iletkeni:</strong> Isıyı iyi/hızlı aktarır — bakır, alüminyum, demir (metaller).</li>
                            <li><strong>Isı yalıtkanı:</strong> Isıyı iyi iletmez — tahta, plastik, strafor, cam yünü.</li>
                            <li><strong>Isı yalıtımı:</strong> Bina/araçlarda ısı kaybını önler; <strong>enerji tasarrufu</strong> sağlar.</li>
                        </ul>
                    `
                },
                {
                    unitId: 6,
                    unitName: "6. Ünite: Basit Elektrik Devreleri",
                    title: "Devre Elemanları ve Semboller",
                    important: "Duy ve pil yatağının sembolü yok",
                    badge: "F.5.6.1",
                    content: `
                        <ul class="styled-list">
                            <li><strong>Pil:</strong> Güç kaynağı; (+) uzun, (-) kısa çizgi.</li>
                            <li><strong>Ampul:</strong> Elektrik → ışık; sembol <strong>⊗</strong> (çember içinde çarpı).</li>
                            <li><strong>Anahtar:</strong> Açık = akım kesilir; kapalı = devre tamamlanır.</li>
                            <li><strong>Bağlantı kablosu:</strong> Enerjiyi ileten iletken tel.</li>
                        </ul>
                        <div class="note-alert">
                            ⚠️ <strong>Duy</strong> ve <strong>pil yatağının</strong> belirli bir sembolü <strong>yoktur</strong>.
                        </div>
                        <div class="note-highlight">
                            Semboller <strong>ortak bilimsel dil</strong> oluşturur; çizim pratikliği sağlar. Sembollerle yapılan çizime <strong>devre şeması</strong> denir.
                        </div>
                    `
                },
                {
                    unitId: 6,
                    unitName: "6. Ünite: Basit Elektrik Devreleri",
                    title: "Ampul Parlaklığı ve Değişkenler",
                    important: "Pil artarsa parlaklık artar",
                    badge: "F.5.6.2",
                    content: `
                        <div class="note-highlight">
                            <strong>Deney değişkenleri:</strong>
                            <ul class="styled-list">
                                <li><strong>Bağımsız:</strong> Bilinçli değiştirilen (etkisini merak ettiğimiz)</li>
                                <li><strong>Bağımlı:</strong> Ölçülen / gözlenen sonuç</li>
                                <li><strong>Kontrol edilen:</strong> Sabit tutulanlar</li>
                            </ul>
                        </div>
                        <ul class="styled-list">
                            <li><strong>Pil sayısı ↑</strong> (ampul sabit) → parlaklık <strong>artar</strong>. Bağımsız: pil; bağımlı: parlaklık.</li>
                            <li><strong>Ampul sayısı ↑</strong> (pil sabit) → parlaklık <strong>azalır</strong> (enerji paylaşılır).</li>
                        </ul>
                    `
                },
                {
                    unitId: 7,
                    unitName: "7. Ünite: Evsel Atıklar ve Sıfır Atık",
                    title: "Evsel Atıklar ve Sınıflandırılması",
                    important: "Atık ≠ çöp",
                    badge: "F.5.7.1",
                    content: `
                        <ul class="styled-list">
                            <li><strong>Evsel atık:</strong> Ev, okul, iş yeri, restoran gibi yerlerde ihtiyaç duyulmayan ve atılan maddeler.</li>
                            <li><strong>Çöp:</strong> Evsel atıkların içinde geri dönüştürülemeyen ve tekrar kullanılamayan kısım.</li>
                            <li><strong>Sıvı atık:</strong> Deterjanlı su, kullanılmış kızartma / bitkisel yağlar.</li>
                            <li><strong>Katı atık:</strong> Plastik, cam, metal, kâğıt, kumaş, besin artıkları, sebze-meyve kabukları.</li>
                        </ul>
                    `
                },
                {
                    unitId: 7,
                    unitName: "7. Ünite: Evsel Atıklar ve Sıfır Atık",
                    title: "Atık Yönetimi ve Dönüşüm Türleri",
                    important: "Geri dönüşüm ≠ ileri dönüşüm",
                    badge: "F.5.7.2",
                    content: `
                        <ul class="styled-list">
                            <li><strong>Geri dönüşüm:</strong> Atıkların fiziksel/kimyasal işlemle <em>ham maddeye</em> dönüştürülüp üretime kazandırılması.</li>
                            <li><strong>Geri kazanım:</strong> Atığın ikincil ham maddeye dönüştürülüp imalata alınması.</li>
                            <li><strong>Yeniden kullanım:</strong> Endüstriyel işlem olmadan aynı/benzer amaçla tekrar kullanmak (kavanoz → salça kabı, yoğurt kabı → saksı, eski elbise bağışı).</li>
                            <li><strong>İleri dönüşüm (upcycling):</strong> Atığı daha yüksek değerli / estetik ürüne dönüştürmek (kot → çanta, deterjan kutusu → kitaplık).</li>
                        </ul>
                    `
                },
                {
                    unitId: 7,
                    unitName: "7. Ünite: Evsel Atıklar ve Sıfır Atık",
                    title: "Geri Dönüştürülebilen / Dönüştürülemeyen",
                    important: "Tıbbi atık kutuya atılmaz",
                    badge: "F.5.7.3",
                    content: `
                        <div class="comparison-grid">
                            <div class="comp-card cold">
                                <h4>✅ Dönüştürülebilir</h4>
                                <ul>
                                    <li>Plastik, cam, kâğıt/karton, metal</li>
                                    <li>Atık piller, araba aküleri</li>
                                    <li>Bitkisel atık yağlar</li>
                                </ul>
                            </div>
                            <div class="comp-card warm">
                                <h4>❌ Dönüştürülemez</h4>
                                <ul>
                                    <li>Yağlı kâğıt, kâğıt havlu, tuvalet kâğıdı</li>
                                    <li>Duvar kâğıdı, yapışkan bant, kömür külü</li>
                                    <li>Çürümüş/bozuk gıda artıkları</li>
                                    <li>Tıbbi atıklar (özel imha)</li>
                                </ul>
                            </div>
                        </div>
                    `
                },
                {
                    unitId: 7,
                    unitName: "7. Ünite: Evsel Atıklar ve Sıfır Atık",
                    title: "Özel Atıklar ve Sıfır Atık",
                    important: "Önleme en öncelikli",
                    badge: "F.5.7.4",
                    content: `
                        <ul class="styled-list">
                            <li><strong>Atık piller:</strong> Zehirli/ağır metal içerir; toprak ve suyu kirletir → <strong>kırmızı atık pil kutusu</strong>.</li>
                            <li><strong>Bitkisel atık yağ:</strong> Lavaboya dökülmez (tıkanma + su kirliliği) → sızdırmaz kapta lisanslı toplama noktasına.</li>
                        </ul>
                        <div class="note-highlight">
                            <strong>Sıfır Atık hiyerarşisi (öncelik):</strong><br>
                            1. Önleme → 2. Azaltma → 3. Tekrar kullanım → 4. Geri dönüşüm → 5. Enerji geri kazanımı → 6. Bertaraf (en son)
                        </div>
                        <p style="margin-top:0.6rem; font-size:0.9rem; color:var(--text-muted);">Faydalar: doğal kaynak ve enerji korunur, maliyet düşer, gelecek nesillere temiz çevre bırakılır.</p>
                    `
                }
            ],
            curriculum: [
                {
                    unitId: 1,
                    unit: "1. Ünite",
                    name: "Güneş, Dünya ve Ay",
                    hours: "1. Dönem",
                    period: "1. Dönem",
                    status: "Aktif",
                    examTip: "Ay’ın aynı yüzünün görünmesi = dönme süresi ≈ dolanma süresi. Ay ışık kaynağı değildir; krater ≠ Güneş lekesi.",
                    topics: [
                        { code: "F.5.1.1", title: "Güneş", summary: "Küreye benzer, sıcak gazlar, katmanlar, Güneş lekeleri, saat yönünün tersine dönme; doğrudan bakılmaz." },
                        { code: "F.5.1.2", title: "Ay", summary: "Doğal uydu, ışığı yansıtır, ince atmosfer, kraterler; 3 hareket; aynı yüzün görünmesi." },
                        { code: "F.5.1.3", title: "Ay’ın evreleri", summary: "Yeni Ay, İlk Dördün (D), Dolunay, Son Dördün (ters D); hilal ve şişkin Ay." },
                        { code: "F.5.1.4", title: "Karşılaştırma", summary: "Büyüklük: Güneş > Dünya > Ay; karpuz-elma-erik modeli; 24 saat / 365 gün 6 saat." }
                    ]
                },
                {
                    unitId: 2,
                    unit: "2. Ünite",
                    name: "Kuvvetin Ölçülmesi ve Sürtünme",
                    hours: "1. Dönem",
                    period: "1. Dönem",
                    status: "Aktif",
                    examTip: "Kütle (kg, terazi) değişmez; ağırlık (N, dinamometre) konuma göre değişir. Dünya’da 1 kg ≈ 10 N; Ay’da ağırlık ~1/6.",
                    topics: [
                        { code: "F.5.2.1", title: "Kuvvet ve dinamometre", summary: "Newton (N); dinamometre; ince yay hassas, kalın yay büyük kuvvet; esneklik sınırı; bölme hesabı." },
                        { code: "F.5.2.2", title: "Kütle ve ağırlık", summary: "Kütle değişmez; ağırlık yer çekimine bağlıdır. 60 kg → Dünya 600 N, Ay 100 N." },
                        { code: "F.5.2.3", title: "Sürtünme kuvveti", summary: "Harekete zıt; yüzey cinsine bağlı; hava/su direnci; artırma ve azaltma yöntemleri." }
                    ]
                },
                {
                    unitId: 3,
                    unit: "3. Ünite",
                    name: "Canlılar ve Yaşam",
                    hours: "1.–2. Dönem",
                    period: "1.–2. Dönem",
                    status: "Aktif",
                    examTip: "Kloroplast ve hücre çeperi sadece bitkide. Hiyerarşi: hücre→doku→organ→sistem→organizma. Düz kas istemsiz; çizgili kas istemli.",
                    topics: [
                        { code: "F.5.3.1", title: "Hücre ve organeller", summary: "Zar, çekirdek, sitoplazma; organel görevleri; bitki–hayvan farkları." },
                        { code: "F.5.3.2", title: "Hücreden organizmaya", summary: "Hücre, doku, organ, sistem, organizma hiyerarşisi." },
                        { code: "F.5.3.3", title: "Destek ve hareket", summary: "Kemik/kıkırdak/eklem çeşitleri; çizgili, düz ve kalp kası." }
                    ]
                },
                {
                    unitId: 4,
                    unit: "4. Ünite",
                    name: "Işığın Yayılması ve Gölge",
                    hours: "2. Dönem",
                    period: "2. Dönem",
                    status: "Aktif",
                    examTip: "Yarı saydam = bulanık (net değil). Gölge büyütmek için ışığı cisme yaklaştır. Gölge = doğrusal yayılma kanıtı.",
                    topics: [
                        { code: "F.5.4.1", title: "Işığın yayılması", summary: "Doğrusal ve her yöne yayılma; ışık ışını; düz/bükük boru gözlemi." },
                        { code: "F.5.4.2", title: "Işık geçirgenliği", summary: "Saydam, yarı saydam, opak maddeler ve örnekleri." },
                        { code: "F.5.4.3", title: "Tam gölge", summary: "Opak cisim arkasında karanlık bölge; gölge büyüklüğünü etkileyen mesafeler." }
                    ]
                },
                {
                    unitId: 5,
                    unit: "5. Ünite",
                    name: "Madde ve Değişim",
                    hours: "2. Dönem",
                    period: "2. Dönem",
                    status: "Aktif",
                    examTip: "Isı = enerji (J); sıcaklık = °C (termometre). Süblimleşme: katı→gaz. Kırağılaşma: gaz→katı. Katı sadece titreşir.",
                    topics: [
                        { code: "F.5.5.1", title: "Tanecikli yapı", summary: "Katı, sıvı, gaz tanecik boşluğu ve hareketleri." },
                        { code: "F.5.5.2", title: "Isı ve sıcaklık", summary: "Farklar, birimler, ısı alışverişi yönü." },
                        { code: "F.5.5.3", title: "Hâl değişimi", summary: "Erime, buharlaşma, kaynama, süblimleşme; donma, yoğuşma, kırağılaşma." },
                        { code: "F.5.5.4", title: "İletim ve yalıtım", summary: "İletken/yalıtkan maddeler; enerji tasarrufu." }
                    ]
                },
                {
                    unitId: 6,
                    unit: "6. Ünite",
                    name: "Basit Elektrik Devreleri",
                    hours: "2. Dönem",
                    period: "2. Dönem",
                    status: "Aktif",
                    examTip: "Duy ve pil yatağının sembolü yoktur. Pil ↑ → parlaklık ↑; ampul ↑ → parlaklık ↓. Değiştirilen = bağımsız değişken.",
                    topics: [
                        { code: "F.5.6.1", title: "Devre elemanları ve semboller", summary: "Pil, ampul, anahtar, kablo; sembol avantajları; duy/pil yatağı sembolsüz." },
                        { code: "F.5.6.2", title: "Parlaklık ve değişkenler", summary: "Bağımsız/bağımlı/kontrol; pil ve ampul sayısının etkisi." }
                    ]
                },
                {
                    unitId: 7,
                    unit: "7. Ünite",
                    name: "Evsel Atıklar ve Sıfır Atık",
                    hours: "2. Dönem",
                    period: "2. Dönem",
                    status: "Aktif",
                    examTip: "İleri dönüşüm = daha değerli yeni ürün (kot→çanta). Yağ lavaboya dökülmez. Sıfır Atık’ta en öncelikli adım: önleme/azaltma.",
                    topics: [
                        { code: "F.5.7.1", title: "Evsel atık ve çöp", summary: "Tanımlar; sıvı ve katı atık türleri." },
                        { code: "F.5.7.2", title: "Dönüşüm türleri", summary: "Geri dönüşüm, geri kazanım, yeniden kullanım, ileri dönüşüm." },
                        { code: "F.5.7.3", title: "Dönüştürülebilir / edilemeyen", summary: "Plastik-cam-kâğıt-metal vs yağlı kâğıt, gıda, tıbbi atık." },
                        { code: "F.5.7.4", title: "Özel atık ve sıfır atık", summary: "Pil (kırmızı kutu), bitkisel yağ; sıfır atık hiyerarşisi ve faydalar." }
                    ]
                }
            ],
            quiz: [
                {
                    id: "5f-q1",
                    unitId: 1,
                    unitName: "1. Ünite: Güneş, Dünya ve Ay",
                    topic: "Ay’ın Aynı Yüzü",
                    difficulty: "Yazılı Klasik",
                    question: "Dünya'dan bakıldığında Ay'ın her zaman aynı yüzünün görünmesinin temel sebebi aşağıdakilerden hangisidir?",
                    options: [
                        "Ay'ın ışık kaynağı olmaması",
                        "Ay'ın atmosferinin çok ince olması",
                        "Ay'ın kendi etrafında dönme süresi ile Dünya etrafında dolanma süresinin eşit olması",
                        "Ay'ın Güneş etrafındaki dolanma süresinin Dünya ile aynı olması"
                    ],
                    correct: 2,
                    explanation: "Ay’ın kendi etrafında dönme süresi ile Dünya etrafında dolanma süresi yaklaşık eşittir (~27,3 gün); bu yüzden hep aynı yüzü görünür."
                },
                {
                    id: "5f-q2",
                    unitId: 1,
                    unitName: "1. Ünite: Güneş, Dünya ve Ay",
                    topic: "Büyüklük Modeli",
                    difficulty: "Yazılı",
                    question: "Güneş, Dünya ve Ay'ın büyüklüklerini modellemek isteyen bir öğrenci aşağıdaki meyve eşleştirmelerinden hangisini seçmelidir?",
                    options: [
                        "Güneş: Erik | Dünya: Elma | Ay: Karpuz",
                        "Güneş: Karpuz | Dünya: Elma | Ay: Erik",
                        "Güneş: Elma | Dünya: Karpuz | Ay: Erik",
                        "Güneş: Karpuz | Dünya: Erik | Ay: Elma"
                    ],
                    correct: 1,
                    explanation: "Büyüklük sırası Güneş > Dünya > Ay’dır. Model: Karpuz (Güneş), Elma (Dünya), Erik (Ay)."
                },
                {
                    id: "5f-q3",
                    unitId: 1,
                    unitName: "1. Ünite: Güneş, Dünya ve Ay",
                    topic: "Krater",
                    difficulty: "Temel",
                    question: "Ay'ın yüzeyine gök taşlarının çarpması sonucu oluşan çukurlara ne ad verilir?",
                    options: [
                        "Güneş Lekesi",
                        "Krater",
                        "Katman",
                        "Hilal"
                    ],
                    correct: 1,
                    explanation: "Gök taşlarının (meteor) çarpmasıyla oluşan çukurlara krater denir. Güneş lekesi Güneş yüzeyindeki koyu alanlardır."
                },
                {
                    id: "5f-q4",
                    unitId: 1,
                    unitName: "1. Ünite: Güneş, Dünya ve Ay",
                    topic: "Ay Evreleri",
                    difficulty: "Yazılı",
                    question: "Ay’ın sağ yarısının aydınlık göründüğü düz “D” şeklindeki ana evre hangisidir?",
                    options: [
                        "Yeni Ay",
                        "İlk Dördün",
                        "Dolunay",
                        "Son Dördün"
                    ],
                    correct: 1,
                    explanation: "İlk Dördün’de Ay’ın sağ yarısı aydınlıktır (düz D). Son Dördün’de sol yarı aydınlıktır (ters D)."
                },
                {
                    id: "5f-q5",
                    unitId: 1,
                    unitName: "1. Ünite: Güneş, Dünya ve Ay",
                    topic: "Ay’ın Özellikleri",
                    difficulty: "Tuzak",
                    question: "Ay ile ilgili aşağıdakilerden hangisi DOĞRUDUR?",
                    options: [
                        "Ay kendi ışığını üretir.",
                        "Ay’ın atmosferi Dünya kadar kalındır ve yağmur yağar.",
                        "Ay, Güneş’ten aldığı ışığı yansıtır; ışık kaynağı değildir.",
                        "Ay yalnızca Dünya etrafında dolanır, kendi ekseni etrafında dönmez."
                    ],
                    correct: 2,
                    explanation: "Ay ışık kaynağı değildir; Güneş ışığını yansıtır. Atmosferi çok incedir; kendi ekseni etrafında da döner."
                },
                {
                    id: "5f-q6",
                    unitId: 2,
                    unitName: "2. Ünite: Kuvvetin Ölçülmesi ve Sürtünme",
                    topic: "Kütle ve Ağırlık",
                    difficulty: "Yazılı Klasik",
                    question: "Kütlesi 60 kg olan bir astronotun Dünya ve Ay'daki kütle ve ağırlık değerleri ile ilgili aşağıdakilerden hangisi doğrudur? (Dünya'da 1 kg = 10 N)",
                    options: [
                        "Dünya'da kütlesi 60 kg, ağırlığı 600 N'dır; Ay'da kütlesi 10 kg, ağırlığı 100 N'dır.",
                        "Dünya'da kütlesi 60 kg, ağırlığı 600 N'dır; Ay'da kütlesi 60 kg, ağırlığı 100 N'dır.",
                        "Dünya'da kütlesi 600 N, ağırlığı 60 kg'dır; Ay'da kütlesi 100 N, ağırlığı 60 kg'dır.",
                        "Hem Dünya'da hem Ay'da ağırlığı 600 N ölçülür."
                    ],
                    correct: 1,
                    explanation: "Kütle her yerde 60 kg’dır. Dünya’da ağırlık 600 N; Ay’da çekim ~1/6 olduğundan ağırlık 100 N’dır."
                },
                {
                    id: "5f-q7",
                    unitId: 2,
                    unitName: "2. Ünite: Kuvvetin Ölçülmesi ve Sürtünme",
                    topic: "Dinamometre",
                    difficulty: "Yazılı",
                    question: "Hassas ölçüm yapmak isteyen bir öğrenci dinamometre seçerken aşağıdakilerden hangisine dikkat etmelidir?",
                    options: [
                        "İçinde kalın ve sert yay olan dinamometreyi seçmelidir.",
                        "Ölçebileceği maksimum kuvvet değeri çok büyük olan dinamometreyi seçmelidir.",
                        "İçinde ince ve esnek yay bulunan dinamometreyi seçmelidir.",
                        "Dinamometrenin dış kabının rengine dikkat etmelidir."
                    ],
                    correct: 2,
                    explanation: "İnce ve esnek yaylı dinamometreler küçük kuvvetleri daha hassas ölçer."
                },
                {
                    id: "5f-q8",
                    unitId: 2,
                    unitName: "2. Ünite: Kuvvetin Ölçülmesi ve Sürtünme",
                    topic: "Sürtünme Kuvveti",
                    difficulty: "Yazılı",
                    question: "Aşağıdaki uygulamalardan hangisi sürtünme kuvvetini AZALTMAK amacıyla yapılır?",
                    options: [
                        "Kışın buzlu yollarda araç lastiklerine zincir takılması",
                        "Haltercilerin halteri kaldırmadan önce ellerine pudra sürmesi",
                        "Kapı menteşelerinin ve makine çarklarının yağlanması",
                        "Futbolcuların çim sahada krampon giymesi"
                    ],
                    correct: 2,
                    explanation: "Yağlama sürtünmeyi azaltır. Zincir, pudra ve krampon sürtünmeyi artırmaya yöneliktir."
                },
                {
                    id: "5f-q9",
                    unitId: 3,
                    unitName: "3. Ünite: Canlılar ve Yaşam",
                    topic: "Bitki–Hayvan Hücresi",
                    difficulty: "Yazılı Klasik",
                    question: "Mikroskop altında bir bitki hücresi ile hayvan hücresini inceleyen bir öğrenci, aşağıdaki yapılardan hangisini sadece bitki hücresinde gözlemler?",
                    options: [
                        "Mitokondri",
                        "Hücre Zarı",
                        "Kloroplast",
                        "Ribozom"
                    ],
                    correct: 2,
                    explanation: "Kloroplast yalnızca bitki hücresinde bulunur ve fotosentez yapar. Mitokondri, zar ve ribozom ortak yapılardır."
                },
                {
                    id: "5f-q10",
                    unitId: 3,
                    unitName: "3. Ünite: Canlılar ve Yaşam",
                    topic: "Hiyerarşi",
                    difficulty: "Yazılı",
                    question: "Bir organizmanın yapısındaki karmaşıklık sıralaması basitten karmaşığa doğru verilmiştir. Aşağıdaki eşleştirmelerden hangisinde 'Organ' düzeyindeki yapı gösterilmiştir?",
                    options: [
                        "Kas Hücresi",
                        "Kas Dokusu",
                        "Kalp",
                        "Dolaşım Sistemi"
                    ],
                    correct: 2,
                    explanation: "Kalp organ düzeyindedir. Kas hücresi=hücre, kas dokusu=doku, dolaşım=sistem."
                },
                {
                    id: "5f-q11",
                    unitId: 3,
                    unitName: "3. Ünite: Canlılar ve Yaşam",
                    topic: "Kas Çeşitleri",
                    difficulty: "Yazılı",
                    question: "Mide ve bağırsak gibi iç organlarımızın yapısında bulunan, isteğimiz dışında yavaş ve düzenli çalışan kas çeşidi aşağıdakilerden hangisidir?",
                    options: [
                        "Çizgili Kas",
                        "Düz Kas",
                        "Kalp Kası",
                        "İskelet Kası"
                    ],
                    correct: 1,
                    explanation: "Düz kas iç organlarda bulunur; istemsiz, yavaş çalışır ve yorulmaz. Çizgili/iskelet kası istemlidir."
                },
                {
                    id: "5f-q12",
                    unitId: 4,
                    unitName: "4. Ünite: Işığın Yayılması ve Gölge",
                    topic: "Işık Geçirgenliği",
                    difficulty: "Yazılı Tuzak",
                    question: "Saydam, yarı saydam ve opak maddelerin ışık geçirme özellikleri ile ilgili aşağıda verilen bilgilerden hangisi YANLIŞTIR?",
                    options: [
                        "Pencere camı ve hava saydam maddelere örnektir.",
                        "Buzlu cam ve yağlı kâğıt arkasındaki cisimleri net gösterir.",
                        "Tahta ve tuğla üzerlerine düşen ışığı geçirmeyen opak maddelerdir.",
                        "Yarı saydam maddeler ışığın sadece bir kısmını geçirir."
                    ],
                    correct: 1,
                    explanation: "Buzlu cam ve yağlı kâğıt yarı saydamdır; arkadaki cisimler bulanık (net değil) görünür."
                },
                {
                    id: "5f-q13",
                    unitId: 4,
                    unitName: "4. Ünite: Işığın Yayılması ve Gölge",
                    topic: "Gölge Boyu",
                    difficulty: "Yazılı",
                    question: "Ekranda oluşan bir cismin tam gölgesinin boyunu BÜYÜTMEK isteyen bir öğrenci aşağıdaki işlemlerden hangisini yapmalıdır?",
                    options: [
                        "Cismi ışık kaynağından uzaklaştırmalıdır.",
                        "Işık kaynağını cisme yaklaştırmalıdır.",
                        "Ekranı cisme yaklaştırmalıdır.",
                        "Işık kaynağı ile cisim arasındaki mesafeyi artırmalıdır."
                    ],
                    correct: 1,
                    explanation: "Işık kaynağı cisme yaklaşırsa (veya cisim ışığa yaklaşırsa) gölge boyu büyür."
                },
                {
                    id: "5f-q14",
                    unitId: 4,
                    unitName: "4. Ünite: Işığın Yayılması ve Gölge",
                    topic: "Doğrusal Yayılma",
                    difficulty: "Yazılı Klasik",
                    question: "Güneşli bir günde sokakta yürüyen bir insanın arkasında gölgesinin oluşması, ışığın hangi özelliği ile doğrudan açıklanır?",
                    options: [
                        "Işığın sadece tek bir renkten oluşmasıyla",
                        "Işığın her yönde ve doğrusal bir yolla yayılmasıyla",
                        "Işığın tüm maddelerden geçebilmesiyle",
                        "Işık kaynağının sürekli yer değiştirmesiyle"
                    ],
                    correct: 1,
                    explanation: "Gölge oluşumu, ışığın her yönde ve doğrusal yayılmasının doğrudan sonucudur."
                },
                {
                    id: "5f-q15",
                    unitId: 5,
                    unitName: "5. Ünite: Madde ve Değişim",
                    topic: "Isı ve Sıcaklık",
                    difficulty: "Yazılı Klasik",
                    question: "Isı ve sıcaklık kavramları ile ilgili aşağıda verilen ifadelerden hangisi DOĞRUDUR?",
                    options: [
                        "Sıcaklık bir enerji türüdür, ısı ise ölçüm sonucudur.",
                        "Isı birimi derece Celsius (°C), sıcaklık birimi Jouledür.",
                        "Isı termometre ile ölçülür, sıcaklık kalorimetre kabı ile hesaplanır.",
                        "Sıcaklıkları farklı iki madde arasında alınıp verilen enerji ısıdır."
                    ],
                    correct: 3,
                    explanation: "Isı bir enerji türüdür ve sıcaklıkları farklı maddeler arasında alınıp verilir. Sıcaklık °C ile termometrede ölçülür."
                },
                {
                    id: "5f-q16",
                    unitId: 5,
                    unitName: "5. Ünite: Madde ve Değişim",
                    topic: "Hâl Değişimi",
                    difficulty: "Yazılı",
                    question: "Katı bir maddenin sıvı hâle geçmeden doğrudan gaz hâline geçmesine ne ad verilir?",
                    options: [
                        "Süblimleşme",
                        "Kırağılaşma",
                        "Yoğuşma",
                        "Buharlaşma"
                    ],
                    correct: 0,
                    explanation: "Süblimleşme: katı → gaz (sıvı olmadan). Kırağılaşma ters yön: gaz → katı."
                },
                {
                    id: "5f-q17",
                    unitId: 5,
                    unitName: "5. Ünite: Madde ve Değişim",
                    topic: "Tanecikli Yapı",
                    difficulty: "Yazılı",
                    question: "Maddenin katı, sıvı ve gaz hâllerindeki tanecik hareketleri düşünüldüğünde, sadece 'titreşim' hareketi yapabilen madde hâli aşağıdakilerden hangisidir?",
                    options: [
                        "Gaz",
                        "Katı",
                        "Sıvı",
                        "Plazma"
                    ],
                    correct: 1,
                    explanation: "Katı maddelerde tanecikler yalnızca titreşim hareketi yapar."
                },
                {
                    id: "5f-q18",
                    unitId: 6,
                    unitName: "6. Ünite: Basit Elektrik Devreleri",
                    topic: "Semboller",
                    difficulty: "Yazılı Tuzak",
                    question: "Basit bir elektrik devresinde yer alan aşağıdaki elemanlardan hangisinin belirli bir SEMBOLÜ YOKTUR?",
                    options: [
                        "Pil",
                        "Ampul",
                        "Duy",
                        "Anahtar"
                    ],
                    correct: 2,
                    explanation: "Duy ve pil yatağının belirli bir sembolü yoktur. Pil, ampul ve anahtarın sembolü vardır."
                },
                {
                    id: "5f-q19",
                    unitId: 6,
                    unitName: "6. Ünite: Basit Elektrik Devreleri",
                    topic: "Sembol Amacı",
                    difficulty: "Yazılı",
                    question: "Devre elemanlarının tüm dünyada sembollerle gösterilmesinin temel amacı aşağıdakilerden hangisidir?",
                    options: [
                        "Devre elemanlarının daha az enerji harcamasını sağlamak",
                        "Ortak bir bilimsel dil oluşturarak iletişimi ve anlaşılırlığı kolaylaştırmak",
                        "Ampullerin daha parlak ışık vermesini sağlamak",
                        "Pillerin kullanım ömrünü uzatmak"
                    ],
                    correct: 1,
                    explanation: "Sembol kullanımı ortak bilimsel dil oluşturur; herkes aynı şemayı anlayabilir."
                },
                {
                    id: "5f-q20",
                    unitId: 6,
                    unitName: "6. Ünite: Basit Elektrik Devreleri",
                    topic: "Değişkenler",
                    difficulty: "Yazılı Klasik",
                    question: "Bir öğrenci, ampul sayısını sabit tutup pil sayısını artırdığında ampul parlaklığının arttığını gözlemliyor. Bu deneyde 'Pil Sayısı' hangi değişken grubuna girer?",
                    options: [
                        "Bağımsız Değişken",
                        "Bağımlı Değişken",
                        "Kontrol Edilen Değişken",
                        "Sabit Değişken"
                    ],
                    correct: 0,
                    explanation: "Pil sayısı bilinçli değiştirilen değişkendir → bağımsız değişken. Parlaklık bağımlı değişkendir."
                },
                {
                    id: "5f-q21",
                    unitId: 7,
                    unitName: "7. Ünite: Evsel Atıklar ve Sıfır Atık",
                    topic: "İleri Dönüşüm",
                    difficulty: "Yazılı Klasik",
                    question: "Eski bir kot pantolondan şık bir çanta veya fırın eldiveni tasarlayarak kullanmaya başlamak aşağıdaki kavramlardan hangisine en uygun örnektir?",
                    options: [
                        "Geri Dönüşüm",
                        "İleri Dönüşüm (Upcycling)",
                        "Bertaraf Etme",
                        "Geri Kazanım"
                    ],
                    correct: 1,
                    explanation: "Atığın daha yüksek değerli/estetik ürüne dönüştürülmesi ileri dönüşümdür (upcycling)."
                },
                {
                    id: "5f-q22",
                    unitId: 7,
                    unitName: "7. Ünite: Evsel Atıklar ve Sıfır Atık",
                    topic: "Bitkisel Atık Yağ",
                    difficulty: "Yazılı",
                    question: "Kullanılmış kızartmalık atık yağların lavaboya dökülmeyip sızdırmaz kaplarda toplanarak atık yağ kumbaralarına atılmasının temel sebebi aşağıdakilerden hangisidir?",
                    options: [
                        "Yağların lavaboda donarak koku yapmasını engellemek",
                        "İçme ve kullanma suyu kaynaklarının kirlenmesini önlemek",
                        "Yağların tekrar yemeklerde kullanılmasını sağlamak",
                        "Sabun yapımında kullanılan malzemeleri azaltmak"
                    ],
                    correct: 1,
                    explanation: "Atık yağlar lavaboya dökülürse kanalizasyonu tıkar ve içme/kullanma suyu kaynaklarını kirletir."
                },
                {
                    id: "5f-q23",
                    unitId: 7,
                    unitName: "7. Ünite: Evsel Atıklar ve Sıfır Atık",
                    topic: "Sıfır Atık Hiyerarşisi",
                    difficulty: "Yazılı Klasik",
                    question: "Sıfır Atık hiyerarşisinde atık yönetimini sağlamak için atılması gereken EN ÖNCELİKLİ adım aşağıdakilerden hangisidir?",
                    options: [
                        "Atıkların yakılarak bertaraf edilmesi",
                        "Atıkların geri dönüşüm kutularında toplanması",
                        "Atık oluşumunun en baştan önlenmesi ve azaltılması",
                        "Atıkların enerjiye dönüştürülmesi"
                    ],
                    correct: 2,
                    explanation: "En öncelikli adım atık oluşumunu önlemek ve azaltmaktır. Bertaraf en son seçenektir."
                }
            ],
            exams: [
                {
                    id: "5f-exam-1d1y",
                    title: "5. Sınıf Fen Bilimleri — 1. Dönem 1. Yazılı Prova Sınavı",
                    subtitle: "1. ve 2. Ünite · Senaryo soruları",
                    questions: [
                        {
                            id: "exam-1-q1",
                            section: "☀️ I. Bölüm: Gökyüzündeki Komşularımız (1. Ünite)",
                            unit: "1. Ünite",
                            topic: "Güneş'in Dönme Hareketi",
                            questionNumber: 1,
                            points: 10,
                            scenario: "Ünlü bilim insanı Galileo Galilei, tasarladığı teleskopla Güneş'i gözlemlemiş ve yüzeyinde koyu renkli lekeler (Güneş lekeleri) tespit etmiştir. Galilei, zaman içinde bu lekelerin hep aynı yöne doğru kaydığını fark etmiştir.",
                            question: "Buna göre Galileo Galilei, Güneş lekelerinin kaydığını gözlemleyerek Güneş'in hangi hareketi hakkında bilgi edinmiştir? Yazınız.",
                            idealAnswer: "Güneş'in kendi ekseni etrafında dönme hareketi yaptığını kanıtlamıştır / ispatlamıştır."
                        },
                        {
                            id: "exam-1-q2",
                            section: "☀️ I. Bölüm: Gökyüzündeki Komşularımız (1. Ünite)",
                            unit: "1. Ünite",
                            topic: "Ay'ın Özellikleri",
                            questionNumber: 2,
                            points: 10,
                            scenario: "Dünya'mızda yağmur, rüzgâr, kar gibi hava olayları yaşanırken Ay'a giden astronotlar orada hiçbir hava olayının gerçekleşmediğini ve diktikleri bayrakların dalgalanmadığını gözlemlemişlerdir.",
                            question: "Ay'da rüzgâr ve yağmur gibi hava olaylarının görülmemesinin temel sebebi nedir? Açıklayınız.",
                            idealAnswer: "Ay'ın atmosferinin yok denecek kadar ince olmasıdır."
                        },
                        {
                            id: "exam-1-q3",
                            section: "☀️ I. Bölüm: Gökyüzündeki Komşularımız (1. Ünite)",
                            unit: "1. Ünite",
                            topic: "Ay'ın Hareketleri",
                            questionNumber: 3,
                            points: 10,
                            scenario: "Öğretmen, sınıfta Dünya ve Ay modelleriyle bir etkinlik yaptırmaktadır. Dünya'yı temsil eden öğrenci, etrafında dönen arkadaşının her zaman sadece yüzünü gördüğünü, sırtını hiç göremediğini fark etmiştir.",
                            question: "Dünya'dan bakıldığında Ay'ın her zaman aynı yüzünün görünmesinin sebebini açıklayınız.",
                            idealAnswer: "Ay'ın kendi ekseni etrafındaki dönme süresi ile Dünya etrafındaki dolanma süresinin birbirine eşit (yaklaşık 27,3 gün) olmasıdır."
                        },
                        {
                            id: "exam-1-q4",
                            section: "☀️ I. Bölüm: Gökyüzündeki Komşularımız (1. Ünite)",
                            unit: "1. Ünite",
                            topic: "Ay'ın Evreleri",
                            questionNumber: 4,
                            points: 10,
                            scenario: "Ay'ın Dünya etrafındaki dolanımı sırasında 4 ana ve 2 ara evre gözlemlenir.",
                            question: "Ay'ın \"Yeni Ay\" ana evresinden tam 2 hafta (14 gün) sonra hangi ana evre görülür? Bu evrede Ay'ın görünümü nasıldır? Yazınız.",
                            idealAnswer: "Dolunay evresidir. Ay'ın Dünya'ya bakan yüzü tamamen aydınlık ve dairesel görünür."
                        },
                        {
                            id: "exam-1-q5",
                            section: "☀️ I. Bölüm: Gökyüzündeki Komşularımız (1. Ünite)",
                            unit: "1. Ünite",
                            topic: "Güneş, Dünya ve Ay Büyüklükleri",
                            questionNumber: 5,
                            points: 10,
                            scenario: "Fen bilimleri dersinde Güneş, Dünya ve Ay'ın büyüklüklerini modellemek isteyen bir öğrenci grubuna karpuz, elma ve erik verilmiştir.",
                            question: "Bu meyveleri Güneş, Dünya ve Ay ile doğru şekilde eşleştiriniz.",
                            idealAnswer: "Güneş: Karpuz | Dünya: Elma | Ay: Erik."
                        },
                        {
                            id: "exam-1-q6",
                            section: "⚖️ II. Bölüm: Kuvvet ve Kuvvetin Ölçülmesi (2. Ünite)",
                            unit: "2. Ünite",
                            topic: "Dinamometreler",
                            questionNumber: 6,
                            points: 10,
                            scenario: "Kuvvetin büyüklüğünü ölçmek için dinamometre adı verilen araçlar kullanılır. Dinamometrelerin içinde esnek sarmal yaylar bulunur.",
                            question: "Hassas (küçük) kuvvetleri ölçmek isteyen bir öğrenci, dinamometre tercih ederken ince yaylı mı yoksa kalın yaylı mı bir dinamometre seçmelidir? Nedeniyle birlikte açıklayınız.",
                            idealAnswer: "İnce yaylı dinamometre seçmelidir. İnce yaylar küçük kuvvetlerde daha kolay esneyeceği için ölçümü hassas yapar."
                        },
                        {
                            id: "exam-1-q7",
                            section: "⚖️ II. Bölüm: Kuvvet ve Kuvvetin Ölçülmesi (2. Ünite)",
                            unit: "2. Ünite",
                            topic: "Kütle ve Ağırlık",
                            questionNumber: 7,
                            points: 10,
                            scenario: "Pazardan 3 kg elma alan bir öğrenci \"Elmaların ağırlığı 3 kg geldi.\" demiştir.",
                            question: "Öğrencinin bu ifadesindeki bilimsel hatayı düzeltiniz. Kütle ve ağırlık kavramlarının ölçüm aletlerini ve birimlerini belirterek açıklayınız.",
                            idealAnswer: "Kilogram (kg) kütle birimidir, ağırlık birimi değildir. Kütle eşit kollu terazi ile kg/g olarak ölçülür. Ağırlık dinamometre ile Newton (N) cinsinden ölçülen yer çekimi kuvvetidir."
                        },
                        {
                            id: "exam-1-q8",
                            section: "⚖️ II. Bölüm: Kuvvet ve Kuvvetin Ölçülmesi (2. Ünite)",
                            unit: "2. Ünite",
                            topic: "Yer Çekimi ve Konum",
                            questionNumber: 8,
                            points: 10,
                            scenario: "Dünya üzerinde kütlesi 60 kg olan bir kolinin ağırlığı Dünya'da yaklaşık 600 N gelmektedir. Bu koli Ay'a götürülüyor. (Ay'ın çekim kuvveti Dünya'nın 1/6'sı kadardır.)",
                            question: "Kutunun Ay'daki kütlesi ve ağırlığı kaç olur?",
                            idealAnswer: "Ay'daki kütle: 60 kg (değişmez). Ay'daki ağırlık: 100 N (600 ÷ 6 = 100)."
                        },
                        {
                            id: "exam-1-q9",
                            section: "⚖️ II. Bölüm: Kuvvet ve Kuvvetin Ölçülmesi (2. Ünite)",
                            unit: "2. Ünite",
                            topic: "Sürtünme Kuvveti",
                            questionNumber: 9,
                            points: 10,
                            scenario: "Bir oyuncak araba sırasıyla cam yüzey, halı yüzey ve tahta yüzeyde eşit kuvvetlerle itiliyor.",
                            question: "Arabanın en kolay ve en zor ilerlediği yüzeyleri sürtünme kuvveti açısından karşılaştırarak yazınız.",
                            idealAnswer: "En kolay cam yüzeyde ilerler (sürtünme en az). En zor halı yüzeyde ilerler (pürüzlü yüzeyde sürtünme en fazla)."
                        },
                        {
                            id: "exam-1-q10",
                            section: "⚖️ II. Bölüm: Kuvvet ve Kuvvetin Ölçülmesi (2. Ünite)",
                            unit: "2. Ünite",
                            topic: "Sürtünmeyi Artıran Durumlar",
                            questionNumber: 10,
                            points: 10,
                            scenario: "Sürtünme kuvveti hayatımızı bazen kolaylaştırırken bazen de zorlaştırır.",
                            question: "Sürtünmeyi ARTTIRMAK amacıyla günlük hayatta yapılan 2 farklı uygulamaya örnek veriniz.",
                            idealAnswer: "Örnekler: Kışın araç lastiklerine zincir takılması; sporcuların krampon giymesi / tırtıklı taban; merdiven basamaklarına kaydırmaz bant yapıştırılması. (Her doğru örnek 5 puan)"
                        }
                    ]
                },
                {
                    id: "5f-exam-2d1y",
                    title: "5. Sınıf Fen Bilimleri — 2. Dönem 1. Yazılı Prova Sınavı",
                    subtitle: "4., 5., 6. ve 7. Ünite · Senaryo soruları",
                    questions: [
                        {
                            id: "exam-2-q1",
                            section: "💡 I. Bölüm: Işığın Dünyası (4. Ünite)",
                            unit: "4. Ünite",
                            topic: "Işığın Yayılması",
                            questionNumber: 1,
                            points: 10,
                            scenario: "Ahmet, düz bir plastik borunun bir ucundan yakılan mum ışığına baktığında mumu görebilmektedir. Ancak boruyu ortasından büktüğünde mum ışığını görememektedir.",
                            question: "Bu durum ışığın hangi temel özelliği ile açıklanır? Yazınız.",
                            idealAnswer: "Işığın doğrusal bir yolla yayıldığını gösterir / doğrusal yayılma özelliği ile açıklanır."
                        },
                        {
                            id: "exam-2-q2",
                            section: "💡 I. Bölüm: Işığın Dünyası (4. Ünite)",
                            unit: "4. Ünite",
                            topic: "Maddenin Işık Geçirgenliği",
                            questionNumber: 2,
                            points: 10,
                            scenario: "Pencere camı, buzlu cam ve tahta kapı üzerine eşit miktarda ışık gönderiliyor.",
                            question: "Bu maddeleri ışığı geçirme durumlarına göre (Saydam, Yarı Saydam, Opak) sınıflandırarak arkalarındaki cisimlerin nasıl göründüğünü yazınız.",
                            idealAnswer: "Pencere camı: Saydam (arkası net). Buzlu cam: Yarı saydam (arkası bulanık). Tahta kapı: Opak (ışığı geçirmez, arkası görünmez)."
                        },
                        {
                            id: "exam-2-q3",
                            section: "💡 I. Bölüm: Işığın Dünyası (4. Ünite)",
                            unit: "4. Ünite",
                            topic: "Tam Gölge Oluşumu",
                            questionNumber: 3,
                            points: 10,
                            scenario: "Bir öğrenci, karanlık bir odada el feneri (ışık kaynağı) ile duvarda bir topun tam gölgesini oluşturuyor. Öğrenci duvardaki gölgenin boyutunu büyütmek istiyor.",
                            question: "Topun duvardaki gölgesini BÜYÜTMEK için ışık kaynağı veya top hangi yönde hareket ettirilmelidir? İki farklı yöntem yazınız.",
                            idealAnswer: "1) Topu ışık kaynağına yaklaştırmak. 2) Işık kaynağını topa yaklaştırmak (veya duvarı toptan uzaklaştırmak)."
                        },
                        {
                            id: "exam-2-q4",
                            section: "🌡️ II. Bölüm: Maddenin Doğası (5. Ünite)",
                            unit: "5. Ünite",
                            topic: "Maddenin Tanecikli Yapısı",
                            questionNumber: 4,
                            points: 10,
                            scenario: "Katı, sıvı ve gaz maddeleri oluşturan tanecikler titreşim, öteleme ve dönme hareketleri yaparlar.",
                            question: "Sadece \"titreşim\" hareketi yapabilen madde hâlini ve bu hâldeki tanecikler arası boşluk miktarını yazınız.",
                            idealAnswer: "Katı hâldedir. Katı maddelerde tanecikler arası boşluk en azdır."
                        },
                        {
                            id: "exam-2-q5",
                            section: "🌡️ II. Bölüm: Maddenin Doğası (5. Ünite)",
                            unit: "5. Ünite",
                            topic: "Isı Alışverişi",
                            questionNumber: 5,
                            points: 10,
                            scenario: "Sıcaklıkları farklı 80°C ve 20°C olan iki sıvı birbirine temas ettiriliyor.",
                            question: "Bu sıvılar arasında gerçekleşen ısı akışının yönünü ve ısı alışverişinin ne zamana kadar devam edeceğini açıklayınız.",
                            idealAnswer: "Isı akışı 80°C olan sıvıdan 20°C olan sıvıya doğrudur. Isı alışverişi her iki sıvının son sıcaklıkları eşitleninceye kadar devam eder."
                        },
                        {
                            id: "exam-2-q6",
                            section: "🌡️ II. Bölüm: Maddenin Doğası (5. Ünite)",
                            unit: "5. Ünite",
                            topic: "Hâl Değişimleri",
                            questionNumber: 6,
                            points: 10,
                            scenario: "Derin dondurucudan çıkarılan soğuk su şişesinin dış yüzeyinde bir süre sonra su damlacıkları oluşmaktadır.",
                            question: "Şişenin dışında gerçekleşen bu hâl değişiminin adı nedir? Isı alma/verme durumunu belirterek açıklayınız.",
                            idealAnswer: "Yoğuşma (yoğunlaşma) olayıdır. Havadaki su buharı soğuk şişeye çarparak ısı verir ve sıvı hâle geçer."
                        },
                        {
                            id: "exam-2-q7",
                            section: "🌡️ II. Bölüm: Maddenin Doğası (5. Ünite)",
                            unit: "5. Ünite",
                            topic: "Isı Yalıtımı",
                            questionNumber: 7,
                            points: 10,
                            scenario: "Binaların dış cephelerinde köpük (strafor), cam yünü veya taş yünü gibi malzemeler kullanılır.",
                            question: "Binalarda yapılan bu uygulamanın amacı nedir? Çevreye ve aile ekonomisine katkısını açıklayınız.",
                            idealAnswer: "Amacı ısı yalıtımı sağlamaktır. Isı kaybını önleyerek yakıt tüketimini azaltır, aile ekonomisine tasarruf sağlar ve çevre kirliliğini önler."
                        },
                        {
                            id: "exam-2-q8",
                            section: "🔌 III. Bölüm: Yaşamımızdaki Elektrik (6. Ünite)",
                            unit: "6. Ünite",
                            topic: "Devre Elemanları ve Semboller",
                            questionNumber: 8,
                            points: 10,
                            scenario: "Bir öğrenci elektrik devresi çizerken pil, ampul, anahtar ve kablonun resimlerini çizmek yerine sembollerini kullanmıştır. Ancak devrede kullandığı pil yatağı ve duy için sembol çizmemiştir.",
                            question: "Devre elemanlarının sembollerle gösterilmesinin amacını ve pil yatağı/duy için neden sembol çizilmediğini açıklayınız.",
                            idealAnswer: "Semboller ortak bilimsel dil oluşturur ve çizimi kolaylaştırır. Duy ve pil yatağının belirlenmiş standart bir sembolü yoktur."
                        },
                        {
                            id: "exam-2-q9",
                            section: "🔌 III. Bölüm: Yaşamımızdaki Elektrik (6. Ünite)",
                            unit: "6. Ünite",
                            topic: "Deneylerde Değişkenler",
                            questionNumber: 9,
                            points: 10,
                            scenario: "Zeynep, basit bir elektrik devresinde pil sayısını sabit tutup ampul sayısını 1'den 3'e çıkarıyor ve ampul parlaklığının azaldığını gözlemliyor.",
                            question: "Zeynep'in yaptığı bu deneydeki Bağımsız Değişken, Bağımlı Değişken ve Kontrol Edilen (Sabit Tutulan) Değişkeni yazınız.",
                            idealAnswer: "Bağımsız: Ampul sayısı. Bağımlı: Ampul parlaklığı. Kontrol edilen: Pil sayısı ve kablo uzunluğu."
                        },
                        {
                            id: "exam-2-q10",
                            section: "🔌 III. Bölüm: Yaşamımızdaki Elektrik (6.–7. Ünite)",
                            unit: "7. Ünite",
                            topic: "Atık Yönetimi",
                            questionNumber: 10,
                            points: 10,
                            scenario: "Evde kullanılan kızartmalık bitkisel atık yağlar lavaboya dökülmeyip cam bir kavanozda biriktirilerek belediyenin atık toplama merkezine teslim edilmektedir.",
                            question: "Atık yağların lavaboya dökülmemesinin çevre ve su kaynakları açısından önemini açıklayınız.",
                            idealAnswer: "Atık yağlar lavaboya döküldüğünde kanalizasyonu tıkar; içme/kullanma su kaynaklarını ve toprağı kirletir. Biriktirilip geri dönüştürülmesi çevre kirliliğini önler."
                        }
                    ]
                }
            ],
            flashcards: [
                { id: "fc-1", front: "Dünya'dan bakıldığında Ay'ın her zaman aynı yüzünün görünmesinin sebebi nedir?", back: "Ay'ın kendi etrafında dönme süresi ile Dünya etrafında dolanma süresinin birbirine eşit (yaklaşık 27,3 gün) olmasıdır." },
                { id: "fc-2", front: "Gök taşlarının Ay yüzeyinde oluşturduğu çukurlara ne ad verilir?", back: "Krater adı verilir." },
                { id: "fc-3", front: "İnce yaylı bir dinamometre ile kalın yaylı bir dinamometre arasındaki fark nedir?", back: "İnce yaylı dinamometre küçük kuvvetleri daha HASSAS ölçer; kalın yaylı dinamometre ise daha BÜYÜK kuvvetleri ölçebilir." },
                { id: "fc-4", front: "Canlılarda basitten karmaşığa doğru hiyerarşik sıralama nasıldır?", back: "Hücre → Doku → Organ → Sistem → Organizma" },
                { id: "fc-5", front: "Mide ve bağırsak gibi iç organlarımızda hangi kas çeşidi bulunur ve nasıl çalışır?", back: "Düz kas bulunur. İsteğimiz dışında (istemsiz), yavaş ve yorulmadan çalışır." },
                { id: "fc-6", front: "Bir cismin tam gölgesini BÜYÜTMEK için cisim veya ışık kaynağı nasıl hareket ettirilmelidir?", back: "Cisim ışık kaynağına YAKLAŞTIRILMALI (veya ışık kaynağı cisme yaklaştırılmalıdır)." },
                { id: "fc-7", front: "Katı bir maddenin sıvılaşmadan doğrudan gaz hâline geçmesine ne ad verilir? Örnek veriniz.", back: "Süblimleşme denir. Örnek: Naftalin veya kuru buz." },
                { id: "fc-8", front: "Bir deneyde sayısı/miktarı bilinçli olarak değiştirilen değişkene ne ad verilir?", back: "Bağımsız Değişken denir." },
                { id: "fc-9", front: "Eski bir malzemeyi işleyip tasarlayarak daha yüksek değerli yeni bir ürüne dönüştürmeye ne ad verilir?", back: "İleri Dönüşüm (Upcycling) denir." },
                { id: "5f-fc1", front: "Ay ışık kaynağı mıdır?", back: "Hayır. Güneş’ten aldığı ışığı yansıtır." },
                { id: "5f-fc8", front: "Kütle ile ağırlık farkı?", back: "Kütle (kg) değişmez; ağırlık (N) konuma göre değişir." },
                { id: "5f-fc17", front: "Yarı saydam ne gösterir?", back: "Bulanık (net değil). Örn: buzlu cam, yağlı kâğıt." },
                { id: "5f-fc20", front: "Isı ile sıcaklık farkı?", back: "Isı = enerji (J); sıcaklık = °C, termometre ile ölçülür." },
                { id: "5f-fc23", front: "Hangi elemanın sembolü yok?", back: "Duy ve pil yatağı." },
                { id: "5f-fc12", front: "Sadece bitkide olan organel?", back: "Kloroplast (fotosentez). Ayrıca hücre çeperi vardır." },
                { id: "5f-fc28", front: "Atık piller nereye?", back: "Kırmızı renkli atık pil toplama kutularına." }
            ]
        }
    }
};
