/**
 * MEB 2026 - 2027 EĞİTİM ÖĞRETİM YILI
 * FEN BİLİMLERİ VE TÜRKÇE RESMİ ÖĞRETİM PROGRAMI VERİTABANI
 * (Tüm Üniteler, Detaylı Konu Anlatımları, Formüller, Altın Taktikler ve Soru Havuzu)
 */
const EDUCATION_DATA = {
    academicYear: "2026 - 2027",

    classes: [
        { id: "8", name: "8. Sınıf (LGS)", badge: "LGS Hazırlık", active: true },
        { id: "7", name: "7. Sınıf", badge: "Kritik Kademe", active: true },
        { id: "6", name: "6. Sınıf", badge: "Temel Güçlendirme", active: false },
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
            subtitle: "2026 - 2027 MEB Resmi Öğretim Programı & Yazılı Hazırlık",
            
            presentation: {
                title: "1. Ünite: Güneş Sistemi ve Ötesi",
                desc: "Uzay araştırmaları, Türkiye'nin uyduları, uzay kirliliği, teleskoplar, ışık yılı, bulutsular ve yıldız döngüsü.",
                file: "7-sinif.html",
                slidesCount: "7 Kapsamlı Bölüm",
                badge: "Yazılıda Çıkacak Konular"
            },

            notes: [
                // 1. ÜNİTE
                {
                    unitId: 1,
                    unitName: "1. Ünite: Güneş Sistemi ve Ötesi",
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
                    `
                },
                {
                    unitId: 1,
                    unitName: "1. Ünite: Güneş Sistemi ve Ötesi",
                    title: "Türkiye'nin Yapay Uyduları & Işık Yılı",
                    important: "Kritik Bilgi",
                    badge: "F.7.1.1.2",
                    content: `
                        <p><strong>Aktif Haberleşme:</strong> Türksat 3A, 4A, 4B, 5A, 5B ve ilk yerli haberleşme uydumuz <strong>Türksat 6A</strong>.</p>
                        <p><strong>Aktif Gözlem:</strong> Göktürk-1, Göktürk-2 ve yerli gözlem uydumuz <strong>İMECE</strong>.</p>
                        <div class="note-alert">
                            🚫 <strong>BÜYÜK TUZAK:</strong> 'Işık Yılı' kesinlikle ZAMAN BİRİMİ DEĞİLDİR! Işığın boşlukta 1 yılda aldığı <strong>MESAFE / UZAKLIK</strong> birimidir.
                        </div>
                    `
                },

                // 2. ÜNİTE
                {
                    unitId: 2,
                    unitName: "2. Ünite: Hücre ve Bölünmeler",
                    title: "Hücrenin Temel Kısımları & Organeller",
                    important: "Bitki vs Hayvan Hücresi",
                    badge: "F.7.2.1.1",
                    content: `
                        <p>Hücre 3 temel kısımdan oluşur: <strong>Hücre Zarı, Sitoplazma ve Çekirdek</strong>.</p>
                        <div class="comparison-grid">
                            <div class="comp-card cold">
                                <h4>🌿 Bitki Hücresi</h4>
                                <ul>
                                    <li>Hücre duvarı (çeperi) VARDIR.</li>
                                    <li>Kloroplast VARDIR (Fotosentez yapar).</li>
                                    <li>Koful BÜYÜK ve AZ sayıdadır.</li>
                                    <li>Hücre şekli KÖŞELİDİR.</li>
                                </ul>
                            </div>
                            <div class="comp-card warm">
                                <h4>🐾 Hayvan Hücresi</h4>
                                <ul>
                                    <li>Hücre duvarı YOKTUR.</li>
                                    <li>Sentrozom (Sentriyoller) VARDIR.</li>
                                    <li>Koful KÜÇÜK ve ÇOK sayıdadır.</li>
                                    <li>Hücre şekli YUVARLAKTIR.</li>
                                </ul>
                            </div>
                        </div>
                    `
                },
                {
                    unitId: 2,
                    unitName: "2. Ünite: Hücre ve Bölünmeler",
                    title: "Mitoz vs Mayoz Bölünme Farkları",
                    important: "Yazılı Klasik Soru Tipi",
                    badge: "F.7.2.2.1",
                    content: `
                        <div class="comparison-grid">
                            <div class="comp-card cold">
                                <h4>🔬 Mitoz Bölünme</h4>
                                <ul>
                                    <li>Vücut hücrelerinde görülür.</li>
                                    <li>Büyüme, gelişme ve onarımı sağlar.</li>
                                    <li><strong>2 yeni hücre</strong> oluşur.</li>
                                    <li>Kromozom sayısı <strong>SABİT KALIR (2n &rarr; 2n)</strong>.</li>
                                    <li>Kalıtsal çeşitlilik YOKTUR (Fotokopi).</li>
                                </ul>
                            </div>
                            <div class="comp-card warm">
                                <h4>🧬 Mayoz Bölünme</h4>
                                <ul>
                                    <li>Üreme ana hücrelerinde (2n) görülür.</li>
                                    <li>Üreme hücrelerini (Sperm/Yumurta, n) üretir.</li>
                                    <li><strong>4 yeni hücre</strong> oluşur.</li>
                                    <li>Kromozom sayısı <strong>YARIYA İNER (2n &rarr; n)</strong>.</li>
                                    <li>Parça Değişimi (Crossing-Over) ile kalıtsal çeşitlilik SAĞLANIR.</li>
                                </ul>
                            </div>
                        </div>
                    `
                },

                // 3. ÜNİTE
                {
                    unitId: 3,
                    unitName: "3. Ünite: Kuvvet ve Enerji",
                    title: "Kütle vs Ağırlık & Fiziksel İş",
                    important: "İş = Kuvvet x Yol",
                    badge: "F.7.3.1.1",
                    content: `
                        <p><strong>Kütle (m):</strong> Değişmeyen madde miktarıdır. Birimi kg/g, eşit kollu terazi ile ölçülür. Evrenin her yerinde AYNIDIR.</p>
                        <p><strong>Ağırlık (G):</strong> Kütleye etki eden yerçekimi kuvvetidir. Birimi Newton (N), dinamometre ile ölçülür. Bulunulan gök cismine göre DEĞİŞİR (Ay'daki ağırlık Dünya'dakinin 1/6'sıdır!).</p>
                        <div class="note-highlight">
                            💪 <strong>Fiziksel Anlamda İş:</strong> İş = Kuvvet x Alınan Yol (W = F . x). Bir kuvvetin iş yapabilmesi için cismin <strong>kuvvet doğrultusunda hareket etmesi ŞARTTIR!</strong> (Çantayı sırtında sallamadan düz yolda yürüyen öğrenci veya duvarı iten adam fiziksel olarak İŞ YAPMAZ!).
                        </div>
                    `
                },
                {
                    unitId: 3,
                    unitName: "3. Ünite: Kuvvet ve Enerji",
                    title: "Kinetik ve Potansiyel Enerji",
                    important: "Enerjinin Korunumu",
                    badge: "F.7.3.2.1",
                    content: `
                        <ul class="styled-list">
                            <li><strong>Kinetik Enerji (Hareket Enerjisi):</strong> Hareket eden tüm cisimlerin enerjisidir. Cismin <strong>kütlesine</strong> ve <strong>süratine</strong> bağlıdır.</li>
                            <li><strong>Çekim Potansiyel Enerjisi:</strong> Cismin yüksekliğinden dolayı sahip olduğu enerjidir. Cismin <strong>ağırlığına</strong> ve <strong>yerden yüksekliğine (h)</strong> bağlıdır.</li>
                            <li><strong>Esneklik Potansiyel Enerjisi:</strong> Sıkıştırılmış veya gerilmiş esnek cisimlerde (yay, ok) depolanan enerjidir.</li>
                        </ul>
                    `
                },

                // 4. ÜNİTE
                {
                    unitId: 4,
                    unitName: "4. Ünite: Saf Madde ve Karışımlar",
                    title: "Atomun Yapısı, Element ve Bileşikler",
                    important: "Saf Maddeler",
                    badge: "F.7.4.1.1",
                    content: `
                        <p><strong>Atomun Yapısı:</strong> Çekirdekte Proton (+) ve Nötron (yüksüz); katmanlarda dönen Elektron (-) bulunur.</p>
                        <p><strong>Element:</strong> Aynı cins atomlardan oluşan saf maddelerdir (Örn: Demir - Fe, Oksijen - O2, Altın - Au). Sembollerle gösterilir.</p>
                        <p><strong>Bileşik:</strong> En az iki farklı elementin kimyasal bağlarla birleşmesiyle oluşan saf maddelerdir (Örn: Su - H2O, Karbondioksit - CO2, Sofra tuzu - NaCl). Formüllerle gösterilir. Kendini oluşturan maddelerin özelliklerini GÖSTERMEZLER!</p>
                    `
                },

                // 5. ÜNİTE
                {
                    unitId: 5,
                    unitName: "5. Ünite: Işığın Madde ile Etkileşimi",
                    title: "Aynalar ve Kullanım Alanları",
                    important: "Düz, Çukur ve Tümsek Ayna",
                    badge: "F.7.5.1.1",
                    content: `
                        <ul class="styled-list">
                            <li><strong>Düz Ayna:</strong> Görüntü daima düz, cisimle aynı boyda ve simetriktir. (Örn: Evlerimizdeki aynalar, periskop).</li>
                            <li><strong>Çukur Ayna (Dev Aynası):</strong> Işığı odakta toplar. Cisme yaklaştıkça <strong>DÜZ ve DEV GÖRÜNTÜ</strong> oluşturur. (Örn: Dişçi aynası, makyaj aynası, teleskop, araba farı).</li>
                            <li><strong>Tümsek Ayna:</strong> Işığı dağıtır. Daima <strong>DÜZ ve KÜÇÜK</strong> görüntü vererek geniş bir görüş alanı sağlar. (Örn: Araba yan aynaları, kavşak güvenlik aynaları, mağaza aynaları).</li>
                        </ul>
                    `
                },

                // 6. ÜNİTE
                {
                    unitId: 6,
                    unitName: "6. Ünite: Canlılarda Üreme, Büyüme ve Gelişme",
                    title: "İnsanda ve Hayvanlarda Üreme & Başkalaşım",
                    important: "Döllenme & Başkalaşım Aşamaları",
                    badge: "F.7.6.1.1",
                    content: `
                        <p><strong>İnsanda Üreme Sıralaması:</strong></p>
                        <p>Sperm (n) + Yumurta (n) &rarr; <span class="highlight">Döllenme</span> &rarr; <strong>Zigot (2n)</strong> &rarr; <strong>Embriyo</strong> (ilk 8 hafta) &rarr; <strong>Fetüs</strong> &rarr; <strong>Bebek</strong>.</p>
                        <div class="note-highlight">
                            🦋 <strong>Başkalaşım (Metamorfoz):</strong> Yumurtadan çıkan yavrunun ana canlıya benzemeyip zamanla gelişim geçirerek ana canlıya benzemesidir (Örn: Kurbağa, Kelebek, İpekböceği, Sinek).
                        </div>
                    `
                },

                // 7. ÜNİTE
                {
                    unitId: 7,
                    unitName: "7. Ünite: Elektrik Devreleri",
                    title: "Seri & Paralel Bağlama ve Ampul Parlaklığı",
                    important: "Yazılıda Kesin Çıkar!",
                    badge: "F.7.7.1.1",
                    content: `
                        <div class="comparison-grid">
                            <div class="comp-card cold">
                                <h4>🔗 Seri Bağlama</h4>
                                <ul>
                                    <li>Ampuller uç uca tek bir hat üzerinde dizilir.</li>
                                    <li>Ampul sayısı arttıkça eşdeğer direnç artar, ampul parlaklığı <strong>AZALIR</strong>.</li>
                                    <li>Biri patlarsa veya sökülürse <u>hepsi söner</u>!</li>
                                </ul>
                            </div>
                            <div class="comp-card warm">
                                <h4>⚡ Paralel Bağlama</h4>
                                <ul>
                                    <li>Ampuller farklı kollar üzerine bağlanır.</li>
                                    <li>Ampul sayısı artsa da her bir ampulün parlaklığı <strong>DEĞİŞMEZ</strong>.</li>
                                    <li>Biri patlarsa <u>diğerleri yanmaya devam eder</u> (Evlerimizdeki tesisat).</li>
                                </ul>
                            </div>
                        </div>
                        <div class="note-alert">
                            ⚠️ <strong>Ölçü Aletleri Kuralı:</strong> 
                            Ampermetre devreye <strong>SERİ</strong> bağlanır (İç direnci çok küçüktür). 
                            Voltmetre devreye <strong>PARALEL</strong> bağlanır (İç direnci çok büyüktür).
                        </div>
                    `
                }
            ],

            // 2026-2027 MEB Resmi 7. Sınıf Müfredatı (Tüm Ünitelerin Ayrıntılı Konu ve Kazanım Dökümü)
            curriculum: [
                {
                    unitId: 1,
                    unit: "1. Ünite",
                    name: "Güneş Sistemi ve Ötesi",
                    hours: "16 Saat (%11.1)",
                    period: "1. Dönem (Eylül - Ekim)",
                    lgsWeight: "7. Sınıf 1. Yazılı Konusu",
                    status: "Mevcut & Aktif",
                    examTip: "Sınav Tuzağı: Işık yılı bir ZAMAN birimi DEĞİLDİR! Işığın 1 yılda aldığı 9.5 trilyon kilometrelik UZAKLIK birimidir. Yıldızlar ısı ve ışık yayar, gezegenler ise yansıtır.",
                    topics: [
                        {
                            title: "Uzay Araştırmaları ve Teknolojisi",
                            code: "F.7.1.1.1",
                            summary: "Yapay uydular (Türksat, Göktürk, Rasat), uzay istasyonları, uzay mekikleri ve sondaları. Uzay kirliliği nedenleri ve sonuçları. Uzay teknolojisinin günlük yaşama kazandırdıkları (teflon, cırt cırt, duman dedektörü, dijital termometre, GPS)."
                        },
                        {
                            title: "Teleskobun Yapısı & Astronomlar",
                            code: "F.7.1.1.2",
                            summary: "Teleskobun gökbilimindeki önemi (Optik, radyo, x-ışını teleskopları). Rasathanelerin (gözlemevlerinin) kurulma şartları (şehir ışıklarından uzak, yüksek, bulutsuz tepe noktalar). Ali Kuşçu, Uluğ Bey, Galileo ve Hubble."
                        },
                        {
                            title: "Gök Cisimleri: Yıldızlar, Galaksiler ve Evren",
                            code: "F.7.1.2.1",
                            summary: "Bulutsu (Nebula - yıldızların doğum yeri). Yıldızların yaşam döngüsü (Küçük kütleli -> Beyaz cüce; Büyük kütleli -> Süpernova -> Nötron yıldızı veya Karadelik). Takımyıldızları (Büyükayı, Küçükayı, Avcı). Galaksi türleri (Sarmal, Eliptik, Düzensiz; Samanyolu sarmaldır, Avcı kolundayız). Kuyruklu yıldızlar (Kirli kartopu)."
                        }
                    ]
                },
                {
                    unitId: 2,
                    unit: "2. Ünite",
                    name: "Hücre ve Bölünmeler",
                    hours: "28 Saat (%19.4)",
                    period: "1. Dönem (Ekim - Aralık)",
                    lgsWeight: "7. Sınıf 1. ve 2. Yazılı Konusu",
                    status: "Mevcut & Aktif",
                    examTip: "Kritik Fark: Mitoz vücut hücrelerinde görülür (2n -> 2n, 2 hücre, çeşitlilik YOK). Mayoz üreme ana hücrelerinde görülür (2n -> n, 4 hücre, parça değişimi ile çeşitlilik VAR!).",
                    topics: [
                        {
                            title: "Hücrenin Temel Kısımları ve Organeller",
                            code: "F.7.2.1.1",
                            summary: "Hücre zarı (seçici geçirgen), Sitoplazma ve Çekirdek (yönetim merkezi, DNA). Organeller: Ribozom (protein), Mitokondri (enerji/ATP), Kloroplast (fotosentez, sadece bitkide), Koful (bitkide büyük ve az, hayvanda küçük ve çok), Sentrozom (bölünme, sadece hayvanda), Lizozom (sindirim), Golgi (salgı/paket), Endoplazmik retikulum (taşıma). Bitki vs Hayvan hücresi karşılaştırması."
                        },
                        {
                            title: "Mitoz Bölünme ve Evreleri",
                            code: "F.7.2.2.1",
                            summary: "Tek hücrelilerde üremeyi, çok hücrelilerde büyüme, gelişme ve yaraların onarımını sağlar. Kromozom sayısı SABİT kalır (2n -> 2n). Oluşan 2 hücre genetik ikizdir. Evreler (PMAT): Hazırlık (DNA eşlenmesi) -> Profaz -> Metafaz (kromozomlar ortada dizilir) -> Anafaz (kardeş kromatitler zıt kutuplara ayrılır) -> Telofaz ve Sitokinez (boğumlanma/ara lamel)."
                        },
                        {
                            title: "Mayoz Bölünme ve Eşeyli Üreme",
                            code: "F.7.2.3.1",
                            summary: "Üreme ana hücrelerinde (testis, yumurtalık) gerçekleşir, sperm ve yumurta hücrelerini üretir. Kromozom sayısı YARIYA İNER (2n -> n, tür içi kromozom sayısının nesiller boyu sabit kalmasını sağlar). Parça Değişimi (Crossing-over): Homolog kromozomlar arası gen değiş tokuşu genetik çeşitliliği sağlar."
                        }
                    ]
                },
                {
                    unitId: 3,
                    unit: "3. Ünite",
                    name: "Kuvvet ve Enerji",
                    hours: "24 Saat (%16.7)",
                    period: "1. Dönem (Aralık - Ocak)",
                    lgsWeight: "7. Sınıf 2. Yazılı Konusu",
                    status: "Mevcut & Aktif",
                    examTip: "Fiziksel İş Kuralı: Bir kuvvetin iş yapabilmesi için cismin KUVVET DOĞRULTUSUNDA hareket etmesi şarttır! Sırtında çantayla düz yolda yürüyen çocuk fiziksel anlamda İŞ YAPMAZ.",
                    topics: [
                        {
                            title: "Kütle ve Ağırlık İlişkisi",
                            code: "F.7.3.1.1",
                            summary: "Kütle (m): Değişmeyen madde miktarıdır, birimi kg veya g, eşit kollu teraziyle ölçülür, Evren'in her yerinde aynıdır. Ağırlık (G): Kütleye etki eden yer çekimi kuvvetidir, birimi Newton (N), dinamometreyle ölçülür, gök cisminin büyüklüğüne göre değişir (Ay'daki ağırlık Dünya'dakinin 1/6'sı kadardır)."
                        },
                        {
                            title: "Fiziksel Anlamda İş (W = F . x)",
                            code: "F.7.3.2.1",
                            summary: "İş = Uygulanan Kuvvet x Alınan Yol. Birimi Joule (J). İş yapılabilmesi için: 1) Kuvvet uygulanmalı, 2) Cisim kuvvetle aynı doğrultuda yer değiştirmelidir. Örnek: Kutuyu yukarı kaldıran iş yapar, duvara yüklenip hareket ettiremeyen iş yapmaz!"
                        },
                        {
                            title: "Kinetik Enerji, Potansiyel Enerji ve Korunum",
                            code: "F.7.3.3.1",
                            summary: "Kinetik Enerji: Hareket eden cisimlerin enerjisi (kütle ve sürate bağlı). Çekim Potansiyel Enerjisi: Yüksekteki cisimlerin enerjisi (kütle ve yüksekliğe bağlı). Esneklik Potansiyel Enerjisi: Gerilmiş yay veya paket lastiği. Enerjinin Korunumu: Enerji yok olmaz, sadece birbirine dönüşür (Sürtünme yoksa Potansiyel Enerji + Kinetik Enerji = Sabit Mekanik Enerji)."
                        }
                    ]
                },
                {
                    unitId: 4,
                    unit: "4. Ünite",
                    name: "Saf Madde ve Karışımlar",
                    hours: "28 Saat (%19.4)",
                    period: "2. Dönem (Şubat - Mart)",
                    lgsWeight: "7. Sınıf 2. Dönem 1. Yazılı",
                    status: "Mevcut & Aktif",
                    examTip: "Unutma: Element ve Bileşikler SAF MADDELERDİR (belli erime/kaynama noktaları vardır). Karışımlar ise saf değildir, formülle gösterilmezler ve fiziksel yollarla ayrılırlar.",
                    topics: [
                        {
                            title: "Atomun Yapısı ve Geçmişten Günümüze Modeller",
                            code: "F.7.4.1.1",
                            summary: "Atomun temel tanecikleri: Çekirdekte Proton (+), Nötron (yüksüz); katmanlarda dönen Elektron (-). Atom modelleri tarihi: Democritus (bölünemez tanecik) -> Dalton (içi dolu berk küre) -> Thomson (üzümlü kek) -> Rutherford (çekirdekli model, gezegen modeli) -> Bohr (yörüngeli model) -> Modern Atom Teorisi (elektron bulutu)."
                        },
                        {
                            title: "Saf Maddeler: Elementler ve Bileşikler",
                            code: "F.7.4.2.1",
                            summary: "Element: Tek cins atomdan oluşan saf madde. Sembollerle gösterilir (H, He, Li, Be, B, C, N, O, F, Ne, Na, Mg, Al, Si, P, S, Cl, Ar, K, Ca). Bileşik: En az iki farklı elementin kimyasal bağla birleşmesi. Formüllerle gösterilir (H2O, CO2, NaCl, NH3, CH4, HCl). Bileşikler kendini oluşturan elementlerin özelliklerini GÖSTERMEZ!"
                        },
                        {
                            title: "Karışımlar ve Karışımları Ayırma Yöntemleri",
                            code: "F.7.4.3.1",
                            summary: "Homojen Karışım (Çözelti): Her yerinde aynı özellik (Tuzlu su, hava, maden suyu, kolonya, alaşımlar). Heterojen Karışım: Kumlu su, ayran, zeytinyağı-su, salata. Çözünme hızını artıranlar: Sıcaklık artışı, karıştırma, temas yüzeyi (pudra şekeri > küp şeker). Ayırma yöntemleri: Buharlaştırma, Damıtma (ayrımsal damıtma - kaynama noktası farkı), Yoğunluk farkı (ayırma hunisi), Mıknatısla ayırma (demir, nikel, kobalt), Süzme."
                        }
                    ]
                },
                {
                    unitId: 5,
                    unit: "5. Ünite",
                    name: "Işığın Madde ile Etkileşimi",
                    hours: "28 Saat (%19.4)",
                    period: "2. Dönem (Nisan - Mayıs)",
                    lgsWeight: "7. Sınıf 2. Dönem 1. ve 2. Yazılı",
                    status: "Mevcut & Aktif",
                    examTip: "Ayna Kuralları: Düz ayna daima cisimle aynı boyda ve düz görüntü verir. Tümsek ayna DAİMA DÜZ VE KÜÇÜK (Geniş görüş alanı: otopark/kavşak). Çukur ayna devasa düz görüntü veya ters görüntü verebilir (dişçi aynası, teleskop).",
                    topics: [
                        {
                            title: "Işığın Soğurulması ve Cisimlerin Renkli Görünmesi",
                            code: "F.7.5.1.1",
                            summary: "Koyu renkli cisimler ışığı çok soğurur (ısınır), açık renkler yansıtır (serin kalır). Güneş enerjisinin kullanım alanları (güneş panelleri, güneş fırınları). Cisimler kendi renklerindeki ışığı yansıtır, diğer renkleri soğurur. Beyaz cisim tüm renkleri yansıtır, siyah cisim tüm renkleri soğurur."
                        },
                        {
                            title: "Aynalar ve Görüntü Özellikleri",
                            code: "F.7.5.2.1",
                            summary: "Düzlem Aynalar: Simetrik, düz, cisimle eşit boyda ve eşit mesafede görüntü (Ev aynaları, periskop). Çukur Ayna: Işığı bir noktada (odak noktası) toplar. Cisme yakınken DÜZ ve BÜYÜK (makyaj aynası, dişçi aynası), uzaktayken TERS görüntü verir. Tümsek Ayna: Işığı dağıtır. Her zaman DÜZ ve KÜÇÜK görüntü vererek geniş bir alanı gösterir (Araç yan aynası, kavşak güvenlik aynaları)."
                        },
                        {
                            title: "Işığın Kırılması ve Mercekler",
                            code: "F.7.5.3.1",
                            summary: "Işığın yoğunluğu farklı saydam bir ortamdan diğerine geçerken hızının ve doğrultusunun değişmesi. Az yoğundan (hava) -> Çok yoğuna (su/cam) geçerken NORMALE YAKLAŞIR ve yavaşlar. Çok yoğundan -> Az yoğuna geçerken NORMALDEN UZAKLAŞIR ve hızlanır. İnce kenarlı mercek (Işığı toplar, hipermetrop göz kusurunu düzeltir, büyüteç görevi görür). Kalın kenarlı mercek (Işığı dağıtır, miyop göz kusurunu düzeltir)."
                        }
                    ]
                },
                {
                    unitId: 6,
                    unit: "6. Ünite",
                    name: "Canlılarda Üreme, Büyüme ve Gelişme",
                    hours: "10 Saat (%6.9)",
                    period: "2. Dönem (Mayıs)",
                    lgsWeight: "7. Sınıf 2. Yazılı Konusu",
                    status: "Mevcut & Aktif",
                    examTip: "Çimlenme Şartları: SOS (Sıcaklık, Oksijen, Su). Çimlenen tohum fotosentez YAPMAZ (yeşil yaprağı yoktur), bu yüzden çimlenmek için IŞIK GEREKMEZ!",
                    topics: [
                        {
                            title: "İnsanda Üreme, Büyüme ve Gelişme",
                            code: "F.7.6.1.1",
                            summary: "Erkek üreme sistemi (testis, sperm kanalı, salgı bezleri, penis). Dişi üreme sistemi (yumurtalık, yumurta kanalı - döllenmenin olduğu yer!, döl yatağı/rahim, vajina). Zigot (döllenmiş yumurta) -> Embriyo -> Fetüs -> Bebek. Anne adayının dikkat etmesi gerekenler (sağlıklı beslenme, röntgenden/ilaçtan kaçınma)."
                        },
                        {
                            title: "Hayvanlarda Üreme ve Başkalaşım (Metamorfoz)",
                            code: "F.7.6.2.1",
                            summary: "Eşeyli üreme (İç döllenme/iç gelişme - memeliler; İç döllenme/dış gelişme - kuşlar, sürüngenler; Dış döllenme/dış gelişme - balıklar, kurbağalar). Başkalaşım geçiren canlılar: Yumurtadan çıkan yavrunun ana canlıya benzemeyip zamanla değişim geçirmesi (Kurbağa, kelebek, ipek böceği, sinek)."
                        },
                        {
                            title: "Bitkilerde Eşeyli ve Eşeysiz Üreme, Çimlenme",
                            code: "F.7.6.2.2",
                            summary: "Çiçeğin kısımları: Çanak yaprak (yeşil, korur), Taç yaprak (renkli, kokulu, böcekleri çeker), Erkek organ (başçık ve sapçık - polen üretir), Dişi organ (tepecik, dişicik borusu, yumurtalık). Tozlaşma -> Döllenme -> Tohum ve Meyve oluşumu. Çimlenme için gerekli şartlar: Uygun Sıcaklık + Oksijen + Su (Nem). Çimlenmede ışık aranmaz!"
                        }
                    ]
                },
                {
                    unitId: 7,
                    unit: "7. Ünite",
                    name: "Elektrik Devreleri",
                    hours: "10 Saat (%6.9)",
                    period: "2. Dönem (Haziran)",
                    lgsWeight: "7. Sınıf Yıl Sonu Değerlendirmesi",
                    status: "Mevcut & Aktif",
                    examTip: "Altın Kural: Seri bağlı devrede ampul sayısı arttıkça eşdeğer direnç artar, ampul parlaklığı AZALIR (Biri patlarsa hepsi söner). Paralel bağlı devrede ampul sayısı artsa da parlaklık DEĞİŞMEZ (Biri patlarsa diğerleri yanmaya devam eder)!",
                    topics: [
                        {
                            title: "Ampullerin Bağlanma Şekilleri: Seri ve Paralel Bağlama",
                            code: "F.7.7.1.1",
                            summary: "Seri Bağlama: Ampullerin uç uca tek bir hat üzerinde dizilmesi. Akım her ampulden aynı geçer. Ampul sayısı arttıkça toplam direnç artar, kollardan geçen akım azalır, parlaklık düşer. Paralel Bağlama: Ampullerin farklı kollara bağlanması. Her kolun gerilimi pil gerilimine eşittir. Ampul sayısı artsa da parlaklık değişmez. Evlerimizde tesisat paralel bağlıdır."
                        },
                        {
                            title: "Akım, Gerilim ve Direnç İlişkisi (Ohm Kanunu)",
                            code: "F.7.7.1.2",
                            summary: "Ohm Kanunu: Bir iletkenin uçları arasındaki gerilimin (V), iletkenden geçen akıma (I) oranı sabittir ve bu oran iletkenin direncine (R) eşittir: V = I . R. Gerilim birimi Volt (V, Voltmetre ile ölçülür ve devreye PARALEL bağlanır). Akım birimi Amper (A, Ampermetre ile ölçülür ve devreye SERİ bağlanır). Direnç birimi Ohm (Ω)."
                        }
                    ]
                }
            ],

            quiz: [
                // 1. ÜNİTE: GÜNEŞ SİSTEMİ VE ÖTESİ
                {
                    id: "7-q1",
                    unitId: 1,
                    unitName: "1. Ünite: Güneş Sistemi ve Ötesi",
                    topic: "Uzay Araştırmaları & Işık Yılı",
                    difficulty: "Yazılı Klasik Soru",
                    question: "Gökbilimde kullanılan 'Işık Yılı' kavramı ile ilgili olarak aşağıdakilerden hangisi DOĞRUDUR?",
                    options: [
                        "Işığın Dünya etrafında bir yılda kaç tur attığını gösteren zaman birimidir.",
                        "Gök cisimleri arasındaki mesafeyi ölçmek için kullanılan bir UZAKLIK birimidir.",
                        "Yalnızca Güneş Sistemi içerisindeki gezegenler arası süreyi ifade eder.",
                        "Bir yıldızın yaşını belirlemek için kullanılan astronomik süredir."
                    ],
                    correct: 1,
                    explanation: "Işık yılı kesinlikle bir zaman birimi DEĞİLDİR! Işığın boşlukta 1 yılda kat ettiği yaklaşık 9.5 trilyon kilometrelik MESAFE / UZAKLIK birimidir."
                },
                {
                    id: "7-q2",
                    unitId: 1,
                    unitName: "1. Ünite: Güneş Sistemi ve Ötesi",
                    topic: "Türkiye'nin Uyduları",
                    difficulty: "Genel Kültür & MEB Kazanım",
                    question: "Aşağıdakilerden hangisi Türkiye'nin uzayda aktif olarak görev yapan YERLİ VE MİLLİ haberleşme uydusudur?",
                    options: [
                        "Göktürk-1",
                        "BİLSAT",
                        "Türksat 6A",
                        "Rasat"
                    ],
                    correct: 2,
                    explanation: "Türksat 6A, Türkiye'nin ilk yerli ve milli haberleşme uydusudur. Göktürk ve İMECE ise yerli gözlem uydularımızdır."
                },

                // 2. ÜNİTE: HÜCRE VE BÖLÜNMELER
                {
                    id: "7-q3",
                    unitId: 2,
                    unitName: "2. Ünite: Hücre ve Bölünmeler",
                    topic: "Hücre Organelleri",
                    difficulty: "Yazılı Sorusu",
                    question: "Bitki hücresi ile hayvan hücresi mikroskopta incelendiğinde aşağıdakilerden hangisi YALNIZCA bitki hücresinde gözlemlenir?",
                    options: [
                        "Sentrozom organeli",
                        "Hücre zarı ve çekirdek",
                        "Hücre duvarı (çeperi) ve Kloroplast",
                        "Mitokondri ve ribozom"
                    ],
                    correct: 2,
                    explanation: "Hücre çeperi (duvarı) ve fotosentez yaparak besin üreten kloroplast organeli sadece bitki hücrelerinde bulunur; hayvan hücrelerinde bulunmaz."
                },
                {
                    id: "7-q4",
                    unitId: 2,
                    unitName: "2. Ünite: Hücre ve Bölünmeler",
                    topic: "Mitoz vs Mayoz Bölünme",
                    difficulty: "Kritik Karşılaştırma",
                    question: "Mayoz bölünmeyi mitoz bölünmeden ayıran ve tür içi GENETİK ÇEŞİTLİLİĞİ sağlayan en önemli olay hangisidir?",
                    options: [
                        "Kromozomların hücre ortasına dizilmesi",
                        "DNA'nın bölünme öncesinde kendini eşlemesi",
                        "Homolog kromozomlar arasında gerçekleşen Parça Değişimi (Crossing-Over)",
                        "Sitoplazmanın boğumlanarak ikiye ayrılması"
                    ],
                    correct: 2,
                    explanation: "Mayoz-1 evresinde homolog kromozomlar arasında gerçekleşen parça değişimi (crossing-over), genetik çeşitliliğin (kardeşlerin birbirinden farklı olmasının) temel sebebidir."
                },

                // 3. ÜNİTE: KUVVET VE ENERJİ
                {
                    id: "7-q5",
                    unitId: 3,
                    unitName: "3. Ünite: Kuvvet ve Enerji",
                    topic: "Fiziksel Anlamda İş",
                    difficulty: "Yazılı Tuzak Soru",
                    question: "Fiziksel anlamda iş yapılabilmesi için aşağıdaki iki temel şarttan hangisi KESİNLİKLE BİRLİKTE SAĞLANMALIDIR?",
                    options: [
                        "Cisme kuvvet uygulanmalı ve cisim bu uygulanan kuvvet doğrultusunda yol almalıdır.",
                        "Cismin sürati sürekli artmalı ve kütlesi azalmalıdır.",
                        "Cisim yalnızca dikey yönde yukarıya doğru taşınmalıdır.",
                        "Uygulanan kuvvet cisme zıt yönde etki etmelidir."
                    ],
                    correct: 0,
                    explanation: "Fiziksel iş (W = F . x): Bir cisme kuvvet uygulanmalı ve cisim uygulanan bu kuvvetle AYNI DOĞRULTUDA yer değiştirmelidir. Çantasını sırtında sallamadan düz yolda yürüyen öğrenci fiziksel anlamda iş yapmaz!"
                },

                // 4. ÜNİTE: SAF MADDE VE KARIŞIMLAR
                {
                    id: "7-q6",
                    unitId: 4,
                    unitName: "4. Ünite: Saf Madde ve Karışımlar",
                    topic: "Element ve Bileşikler",
                    difficulty: "MEB Kavram Sorusu",
                    question: "Su (H2O) ve Sofra Tuzu (NaCl) gibi maddelerin ortak özelliği aşağıdakilerden hangisidir?",
                    options: [
                        "Aynı cins atomlardan oluşmuş element olmaları",
                        "Fiziksel yöntemlerle daha basit maddelere ayrıştırılabilmeleri",
                        "Belirli formüllerle gösterilen Saf Madde (Bileşik) olmaları",
                        "Kendisini oluşturan maddelerin kimyasal özelliklerini aynen korumaları"
                    ],
                    correct: 2,
                    explanation: "Bileşikler en az iki farklı elementin kimyasal yollarla birleştiği saf maddelerdir. Formüllerle gösterilirler ve kendini oluşturan elementlerin özelliklerini kesinlikle GÖSTERMEZLER (Örn: Yanıcı H2 ve yakıcı O2 birleşip söndürücü H2O suyunu oluşturur)."
                },

                // 5. ÜNİTE: IŞIĞIN MADDE İLE ETKİLEŞİMİ
                {
                    id: "7-q7",
                    unitId: 5,
                    unitName: "5. Ünite: Işığın Madde ile Etkileşimi",
                    topic: "Aynalar ve Kullanım Alanları",
                    difficulty: "Günlük Hayat Uygulaması",
                    question: "Araçların sağ-sol yan aynalarında ve keskin yol virajlarındaki kavşak aynalarında geniş bir görüş alanı sağlamak amacıyla hangi ayna türü kullanılır?",
                    options: [
                        "Çukur Ayna",
                        "Tümsek Ayna",
                        "Düz Ayna",
                        "İnce Kenarlı Mercek"
                    ],
                    correct: 1,
                    explanation: "Tümsek ayna üzerine gelen ışınları dağıtır ve daima düz, cisimden KÜÇÜK görüntü vererek çok geniş bir görüş alanı sağlar. Bu yüzden araç yan aynalarında ve güvenlik kavşak aynalarında tümsek ayna kullanılır."
                },

                // 6. ÜNİTE: CANLILARDA ÜREME
                {
                    id: "7-q8",
                    unitId: 6,
                    unitName: "6. Ünite: Canlılarda Üreme, Büyüme ve Gelişme",
                    topic: "İnsanda Üreme Sıralaması",
                    difficulty: "Sıralama Sorusu",
                    question: "İnsanda döllenmeden bebeğin doğumuna kadar geçen süreçteki biyolojik gelişim aşamalarının doğru sıralanışı hangisidir?",
                    options: [
                        "Zigot &rarr; Embriyo &rarr; Fetüs &rarr; Bebek",
                        "Embriyo &rarr; Zigot &rarr; Fetüs &rarr; Bebek",
                        "Fetüs &rarr; Zigot &rarr; Embriyo &rarr; Bebek",
                        "Zigot &rarr; Fetüs &rarr; Embriyo &rarr; Bebek"
                    ],
                    correct: 0,
                    explanation: "Sperm ve yumurtanın birleşmesiyle oluşan ilk hücreye ZİGOT denir. Zigot bölünüp çoğalarak EMBRİYO'yu, 8. haftadan sonra FETÜS'ü ve en sonunda BEBEK'i oluşturur."
                },

                // 7. ÜNİTE: ELEKTRİK DEVRELERİ
                {
                    id: "7-q9",
                    unitId: 7,
                    unitName: "7. Ünite: Elektrik Devreleri",
                    topic: "Seri ve Paralel Bağlama",
                    difficulty: "Yazılı Garanti Soru",
                    question: "Özdeş ampullerden oluşan paralel bağlı bir devredeki ampullerden biri duydan söküldüğünde diğer ampullerin durumu ne olur?",
                    options: [
                        "Bütün ampuller anında söner.",
                        "Diğer ampuller aynı parlaklıkta yanmaya devam eder.",
                        "Diğer ampullerin parlaklığı 2 katına çıkar.",
                        "Devredeki pil hemen biter."
                    ],
                    correct: 1,
                    explanation: "Paralel bağlı devrelerde her ampul kendi bağımsız elektrik koluna sahiptir. Bir ampul patlasa veya sökülse bile diğer kollar etkilenmez ve aynı parlaklıkta yanmaya devam eder. Evlerimizdeki priz ve lambalar da bu yüzden paralel bağlıdır."
                }
            ],

            flashcards: [
                { id: "7f-fc1", front: "Işık yılı zaman birimi midir?", back: "Hayır. Işığın 1 yılda aldığı MESAFE / UZAKLIK birimidir (~9.5 trilyon km)." },
                { id: "7f-fc2", front: "Çimlenme için ışık gerekir mi?", back: "Hayır. Çimlenme için uygun sıcaklık + oksijen + su yeterlidir (SOS)." },
                { id: "7f-fc3", front: "Mayozda genetik çeşitlilik nasıl artar?", back: "Homolog kromozomlar arasında parça değişimi (crossing-over) ile." },
                { id: "7f-fc4", front: "Ev tesisatı seri mi paralel mi?", back: "Paralel. Bir lamba sönse diğerleri yanmaya devam eder." }
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
            subtitle: "Fiillerde anlam, kipler ve yazım kuralları",
            presentation: {
                title: "Fiillerde Anlam & Kipler",
                desc: "İş-oluş-durum fiilleri, haber/dilek kipleri ve yazılıya hazırlık notları.",
                file: "#",
                slidesCount: "Not + Test Odaklı",
                badge: "Yazılı Hazırlık"
            },
            notes: [
                {
                    unitId: 1,
                    unitName: "1. Ünite: Fiillerde Anlam",
                    title: "İş - Oluş - Durum Fiilleri",
                    important: "Yazılıda Sık Çıkar",
                    badge: "T.7.1",
                    content: `
                        <ul class="styled-list">
                            <li><strong>İş fiili:</strong> İradi ve nesneye yönelir (yazmak, kırmak).</li>
                            <li><strong>Oluş fiili:</strong> Doğal değişim (büyümek, sararmak).</li>
                            <li><strong>Durum fiili:</strong> Durumu bildirir, nesne almaz (uyumak, oturmak).</li>
                        </ul>
                    `
                },
                {
                    unitId: 2,
                    unitName: "2. Ünite: Fiil Kipleri",
                    title: "Haber ve Dilek Kipleri",
                    important: "Tablo Ezberi",
                    badge: "T.7.2",
                    content: `
                        <div class="note-highlight">
                            <strong>Haber:</strong> görülen geçmiş (-di), öğrenilen geçmiş (-miş), şimdiki (-yor), gelecek (-ecek), geniş (-r).<br>
                            <strong>Dilek:</strong> gerekli (-meli), istek (-e), dilek-şart (-se), emir.
                        </div>
                    `
                },
                {
                    unitId: 3,
                    unitName: "3. Ünite: Yazım Kuralları",
                    title: "Sık Karıştırılan Yazımlar",
                    important: "Puan Kaçırmamak İçin",
                    badge: "T.7.3",
                    content: `
                        <ul class="styled-list">
                            <li><em>de / da</em> bağlacı ayrı yazılır; hâl eki bitişik.</li>
                            <li><em>ki</em> bağlacı ayrı; ilgi zamiri ve ek bitişik.</li>
                            <li>Birleşik fiillerde anlam kayması varsa bitişik yazım olabilir.</li>
                        </ul>
                    `
                }
            ],
            curriculum: [
                { unitId: 1, unit: "1. Ünite", name: "Fiillerde Anlam", hours: "10 Saat", period: "1. Dönem", status: "Aktif", topics: [
                    { code: "T.7.1.1", title: "İş-Oluş-Durum", summary: "Fiilleri anlamına göre ayırt etme." }
                ]},
                { unitId: 2, unit: "2. Ünite", name: "Fiil Kipleri", hours: "12 Saat", period: "1. Dönem", status: "Aktif", topics: [
                    { code: "T.7.2.1", title: "Haber kipleri", summary: "-di, -miş, -yor, -ecek, -r." },
                    { code: "T.7.2.2", title: "Dilek kipleri", summary: "-meli, -e, -se, emir." }
                ]},
                { unitId: 3, unit: "3. Ünite", name: "Yazım Kuralları", hours: "8 Saat", period: "2. Dönem", status: "Aktif", topics: [
                    { code: "T.7.3.1", title: "de/da ve ki", summary: "Bağlaç / ek ayrımı." }
                ]}
            ],
            quiz: [
                {
                    id: "7t-q1",
                    unitId: 1,
                    unitName: "1. Ünite: Fiillerde Anlam",
                    topic: "İş-Oluş-Durum",
                    difficulty: "Yazılı",
                    question: "'Yapraklar sonbaharda sarardı.' cümlesindeki fiil türü nedir?",
                    options: ["İş fiili", "Oluş fiili", "Durum fiili", "Yardıcı fiil"],
                    correct: 1,
                    explanation: "'Sararmak' doğal bir değişimi bildirdiği için oluş fiilidir."
                },
                {
                    id: "7t-q2",
                    unitId: 2,
                    unitName: "2. Ünite: Fiil Kipleri",
                    topic: "Haber Kipleri",
                    difficulty: "Yazılı",
                    question: "'Yarın sinemaya gideceğiz.' cümlesindeki kip hangisidir?",
                    options: ["Şimdiki zaman", "Geniş zaman", "Görülen geçmiş", "Gelecek zaman"],
                    correct: 3,
                    explanation: "'-ecek' eki gelecek zaman (haber kipi) bildirir."
                },
                {
                    id: "7t-q3",
                    unitId: 3,
                    unitName: "3. Ünite: Yazım Kuralları",
                    topic: "de/da",
                    difficulty: "Kritik",
                    question: "Aşağıdakilerin hangisinde 'de' bağlacı doğru yazılmıştır?",
                    options: [
                        "Beninde geleceğim.",
                        "Ben de geleceğim.",
                        "Evde ki kitapları getir.",
                        "Okuldada vardı."
                    ],
                    correct: 1,
                    explanation: "Bağlaç olan 'de/da' her zaman ayrı yazılır: 'Ben de geleceğim.'"
                }
            ],
            flashcards: [
                { id: "7t-fc1", front: "Oluş fiili örneği?", back: "büyümek, sararmak, yaşlanmak..." },
                { id: "7t-fc2", front: "Dilek kipleri nelerdir?", back: "gereklik (-meli), istek (-e), dilek-şart (-se), emir." },
                { id: "7t-fc3", front: "de bağlacı nasıl yazılır?", back: "Her zaman ayrı: 'Sen de gel.'" },
                { id: "7t-fc4", front: "Durum fiili nesne alır mı?", back: "Genelde almaz: uyumak, oturmak, gülmek..." }
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
