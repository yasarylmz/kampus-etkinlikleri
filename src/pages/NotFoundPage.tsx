import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div>
      <h2 className="bolum-baslik">Sayfa bulunamadı</h2>
      <p style={{ marginBottom: "20px", color: "#555" }}>
        Aradığınız sayfa ya da etkinlik yok.
      </p>
      <Link className="buton" to="/">
        Ana sayfaya dön
      </Link>
    </div>
  );
}

export default NotFoundPage;
