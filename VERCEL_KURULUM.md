# 🚀 Vercel ile Ücretsiz Yayınlama & Domain Bağlama Rehberi

Bu proje tamamen **statik HTML, CSS ve JavaScript** teknolojisiyle hazırlandığı için **Vercel üzerinde %100 ÜCRETSİZ, ömür boyu sınırsız ve yıldırım hızında** çalışır.

---

## 🌟 Seçenek 1: Vercel CLI ile 1 Dakikada Yayına Alma (En Kolay)

1. Komut istemcisini (PowerShell veya Terminal) açın ve proje klasöründe çalıştırın:
   ```bash
   npx vercel
   ```
2. Giriş yapmanızı isteyecektir (GitHub, Google veya E-posta ile ücretsiz hesap açabilirsiniz).
3. Ekrana gelen sorulara doğrudan **Enter** tuşuna basarak devam edin.
4. 15 saniye içinde size `https://ders-notlarim-xxx.vercel.app` şeklinde **ücretsiz, SSL sertifikalı (https)** bir canlı bağlantı verecektir!

---

## 🌟 Seçenek 2: GitHub ile Otomatik Dağıtım (Tavsiye Edilen)

1. Bu klasörü bir GitHub reposuna yükleyin (örn: `ders-notlarim`).
2. [vercel.com](https://vercel.com) adresine gidin ve **"Add New Project"** butonuna tıklayın.
3. GitHub reponuzu seçin ve **"Deploy"** butonuna basın.
4. Siteniz saniyeler içinde canlıya alınır. İleride yeni bir not veya dosya eklediğinizde otomatik güncellenir!

---

## 🌐 Kendi Özel Domaininizi (.com, .net) Bağlama

Vercel size ücretsiz `alanadiniz.vercel.app` verir. Kendi aldığınız özel bir domaini bağlamak için:

1. Vercel panelinde projenize tıklayın &rarr; **Settings** &rarr; **Domains** sekmesine gidin.
2. Satın aldığınız alan adını yazın (örn: `dersnotlarim.com` veya `hocamfen.com`) ve **Add** deyin.
3. Domaini satın aldığınız firmanın (GoDaddy, İsimTescil, Turhost, Cloudflare vb.) DNS yönetim ekranına gidip Vercel'in gösterdiği:
   - **A Kaydı:** `76.76.21.21`
   - **CNAME:** `cname.vercel-dns.com`
   değerlerini ekleyin.
4. Birkaç dakika içinde özel domaininiz ücretsiz SSL güvenlik sertifikasıyla aktif olacaktır!
