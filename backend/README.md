
# Kampüs Etkinlikleri - Backend API (Sprint 7)

Kampüs etkinliklerini JSON formatında sunan Express tabanlı REST API uygulaması.

## Kurulum ve Çalıştırma Komutları

```bash
cd backend
npm install
npm run dev
```

## Ortam Değişkenleri (.env)

Uygulama kök dizininde `.env.example` dosyasını kopyalayarak `.env` oluşturun:

```env
PORT=3000
```

Sunucu varsayılan olarak `http://localhost:3000` adresinde çalışır.

## REST Sözleşmesi

| Method | Endpoint | Amaç | Başarılı | Hata | Durum |
| :--- | :--- | :--- | :--- | :--- | :--- |
| GET | `/health` | Sunucu durum kontrolü | 200 | — | Bu sprint |
| GET | `/events` | Listeyi getir | 200 | — | Bu sprint |
| GET | `/events/:id` | Tek etkinlik | 200 | 404 | Bu sprint |
| POST | `/events` | Yeni etkinlik | 201 | 400 | Bu sprint |
| PATCH | `/events/:id` | Güncelle | 200 | 400, 404 | Sprint 9 |
| DELETE | `/events/:id` | Sil | 204 | 404 | Sprint 9 |

### Hata Biçimi

```json
{
  "error": {
    "message": "Event not found"
  }
}
```