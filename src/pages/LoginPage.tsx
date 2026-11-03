import { useState } from "react";
import type { FormEvent } from "react";
import { Link } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {}
  );
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const found: { email?: string; password?: string } = {};

    if (!email.includes("@")) {
      found.email = "Geçerli bir e-posta girin.";
    }
    if (password.length < 6) {
      found.password = "Şifre en az 6 karakter olmalı.";
    }

    setErrors(found);
    setSent(Object.keys(found).length === 0);
  }

  return (
    <>
      <h2 className="bolum-baslik">Giriş Yap</h2>
      <form className="form-kapsayici" onSubmit={handleSubmit} noValidate>
        {sent && (
          <p className="mesaj mesaj-basari">Gerçek giriş Sprint 10&apos;da</p>
        )}

        <div className="form-grup">
          <label htmlFor="login-email">E-posta</label>
          <input
            id="login-email"
            type="email"
            placeholder="ornek@kampus.edu.tr"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-invalid={errors.email ? true : undefined}
          />
          <span className="hata-metni">{errors.email}</span>
        </div>

        <div className="form-grup">
          <label htmlFor="login-password">Şifre</label>
          <input
            id="login-password"
            type="password"
            placeholder="••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            aria-invalid={errors.password ? true : undefined}
          />
          <span className="hata-metni">{errors.password}</span>
        </div>

        <button type="submit" className="buton">
          Giriş yap
        </button>

        <div className="alt-baglantilar">
          <Link to="/forgot-password">Şifremi unuttum</Link>
          <Link to="/register">Kayıt ol</Link>
        </div>
      </form>
    </>
  );
}

export default LoginPage;
