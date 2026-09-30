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
        { id: "5", name: "5. Sınıf", badge: "Ortaokula İlk Adım", active: false }
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

            // 2026-2027 MEB Resmi Müfredatı
            curriculum: [
                { unit: "1. Ünite", name: "Mevsimler ve İklim", hours: "14 Saat (%9.7)", period: "1. Dönem (Eylül - Ekim)", status: "Mevcut & Aktif" },
                { unit: "2. Ünite", name: "DNA ve Genetik Kod", hours: "36 Saat (%25.0)", period: "1. Dönem (Ekim - Aralık)", status: "Mevcut & Aktif" },
                { unit: "3. Ünite", name: "Basınç (Katı, Sıvı, Gaz)", hours: "14 Saat (%9.7)", period: "1. Dönem (Aralık - Ocak)", status: "Mevcut & Aktif" },
                { unit: "4. Ünite", name: "Madde ve Endüstri (Periyodik Sistem, Tepkimeler, Asit-Baz)", hours: "36 Saat (%25.0)", period: "2. Dönem (Şubat - Nisan)", status: "Mevcut & Aktif" },
                { unit: "5. Ünite", name: "Basit Makineler (Kaldıraç, Makara, Eğik Düzlem)", hours: "16 Saat (%11.1)", period: "2. Dönem (Nisan - Mayıs)", status: "Mevcut & Aktif" },
                { unit: "6. Ünite", name: "Enerji Dönüşümleri ve Çevre Bilimi", hours: "14 Saat (%9.7)", period: "2. Dönem (Mayıs)", status: "Mevcut & Aktif" },
                { unit: "7. Ünite", name: "Elektrik Yükleri ve Elektrik Enerjisi", hours: "14 Saat (%9.7)", period: "2. Dönem (Haziran)", status: "Mevcut & Aktif" }
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
                }
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

            curriculum: [
                { unit: "1. Ünite", name: "Güneş Sistemi ve Ötesi", hours: "16 Saat (%11.1)", period: "1. Dönem (Eylül - Ekim)", status: "Mevcut & Aktif" },
                { unit: "2. Ünite", name: "Hücre ve Bölünmeler (Mitoz / Mayoz)", hours: "28 Saat (%19.4)", period: "1. Dönem (Ekim - Aralık)", status: "Mevcut & Aktif" },
                { unit: "3. Ünite", name: "Kuvvet ve Enerji (Kütle, Ağırlık, İş, Enerji)", hours: "24 Saat (%16.7)", period: "1. Dönem (Aralık - Ocak)", status: "Mevcut & Aktif" },
                { unit: "4. Ünite", name: "Saf Madde ve Karışımlar (Atom, Bileşik, Çözelti)", hours: "28 Saat (%19.4)", period: "2. Dönem (Şubat - Mart)", status: "Mevcut & Aktif" },
                { unit: "5. Ünite", name: "Işığın Madde ile Etkileşimi (Aynalar, Kırılma)", hours: "28 Saat (%19.4)", period: "2. Dönem (Nisan - Mayıs)", status: "Mevcut & Aktif" },
                { unit: "6. Ünite", name: "Canlılarda Üreme, Büyüme ve Gelişme", hours: "10 Saat (%6.9)", period: "2. Dönem (Mayıs)", status: "Mevcut & Aktif" },
                { unit: "7. Ünite", name: "Elektrik Devreleri (Seri / Paralel Bağlama)", hours: "10 Saat (%6.9)", period: "2. Dönem (Haziran)", status: "Mevcut & Aktif" }
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
            ]
        }
    }
};
