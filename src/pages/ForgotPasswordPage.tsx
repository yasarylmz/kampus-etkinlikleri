import { useState } from "react";
import type { FormEvent } from "react";
import { Link } from "react-router-dom";

function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const found = email.includes("@") ? "" : "Geçerli bir e-posta girin.";
    setError(found);
    setSent(found === "");
  }

  return (
    <>
      <h2 className="bolum-baslik">Şifremi Unuttum</h2>
      <form className="form-kapsayici" onSubmit={handleSubmit} noValidate>
        <p style={{ marginTop: 0, marginBottom: "16px", color: "#555" }}>
          Hesabınıza kayıtlı e-posta adresinizi girin, şifre sıfırlama
          bağlantısı gönderelim.
        </p>

        {sent && (
          <p className="mesaj mesaj-basari">
            Bağlantı {email} adresine gönderildi (demo).
          </p>
        )}

        <div className="form-grup">
          <label htmlFor="forgot-email">E-posta</label>
          <input
            id="forgot-email"
            type="email"
            placeholder="ornek@kampus.edu.tr"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-invalid={error ? true : undefined}
          />
          <span className="hata-metni">{error}</span>
        </div>

        <button type="submit" className="buton">
          Gönder
        </button>

        <div className="alt-baglantilar">
          <Link to="/login">← Girişe dön</Link>
        </div>
      </form>
    </>
  );
}

export default ForgotPasswordPage;
