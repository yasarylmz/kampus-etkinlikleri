# Kampüs Etkinlikleri (Sprint 6 & Vize)

Fakültedeki seminer, atölye, söyleşi ve yarışmaları tek yerden takip etmeyi ve yönetmeyi sağlayan React + TypeScript + Vite uygulaması.

## Canlı Yayın (Vercel)
- **Canlı Adres:** [https://mustafayasaryilmaz-frontend.vercel.app](https://mustafayasaryilmaz-frontend.vercel.app)

## Kurulum ve Çalıştırma

```bash
npm install
npm run dev
```

Üretim derlemesi için:
```bash
npm run build
```

## Route Listesi (10 Adres, 10 Sayfa)

| Adres | Sayfa Bileşeni | Açıklama |
| :--- | :--- | :--- |
| `/` | `HomePage` | Ana sayfa ve yaklaşan 2 etkinlik |
| `/events` | `EventsPage` | Tüm etkinlikler, arama ve kategori filtresi |
| `/events/:id` | `EventDetailPage` | Seçili etkinliğin detay sayfası |
| `/login` | `LoginPage` | Kullanıcı giriş sayfası |
| `/register` | `RegisterPage` | Yeni kullanıcı kayıt sayfası |
| `/forgot-password` | `ForgotPasswordPage` | Şifre sıfırlama sayfası |
| `/admin` | `AdminPage` | Etkinlik yönetim tablosu (Düzenle / Sil) |
| `/admin/new` | `AddEventPage` | Yeni etkinlik ekleme formu |
| `/admin/:id/edit` | `EditEventPage` | Mevcut etkinliği güncelleme formu |
| `*` | `NotFoundPage` | 404 Sayfa bulunamadı ekranı |

---
**Geliştirici:** Mustafa Yaşar Yılmaz - 2211012729
