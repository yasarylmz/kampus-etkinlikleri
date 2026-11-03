import { useState } from "react";
import type { FormEvent } from "react";
import { Link } from "react-router-dom";

interface RegisterErrors {
  name?: string;
  email?: string;
  password?: string;
  password2?: string;
}

function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [errors, setErrors] = useState<RegisterErrors>({});
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const found: RegisterErrors = {};

    if (name.trim().length < 3) {
      found.name = "Ad Soyad en az 3 karakter olmalı.";
    }
    if (!email.includes("@")) {
      found.email = "Geçerli bir e-posta girin.";
    }
    if (password.length < 6) {
      found.password = "Şifre en az 6 karakter olmalı.";
    }
    if (password2 !== password) {
      found.password2 = "Şifreler aynı değil.";
    }

    setErrors(found);
    setSent(Object.keys(found).length === 0);
  }

  return (
    <>
      <h2 className="bolum-baslik">Kayıt Ol</h2>
      <form className="form-kapsayici" onSubmit={handleSubmit} noValidate>
        {sent && (
          <p className="mesaj mesaj-basari">
            Kayıt başarılı! Gerçek kayıt Sprint 10&apos;da.
          </p>
        )}

        <div className="form-grup">
          <label htmlFor="reg-name">Ad Soyad</label>
          <input
            id="reg-name"
            type="text"
            placeholder="Ad Soyad"
            value={name}
            onChange={(e) => setName(e.target.value)}
            aria-invalid={errors.name ? true : undefined}
          />
          <span className="hata-metni">{errors.name}</span>
        </div>

        <div className="form-grup">
          <label htmlFor="reg-email">E-posta</label>
          <input
            id="reg-email"
            type="email"
            placeholder="ornek@kampus.edu.tr"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-invalid={errors.email ? true : undefined}
          />
          <span className="hata-metni">{errors.email}</span>
        </div>

        <div className="form-grup">
          <label htmlFor="reg-pass">Şifre</label>
          <input
            id="reg-pass"
            type="password"
            placeholder="••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            aria-invalid={errors.password ? true : undefined}
          />
          <span className="hata-metni">{errors.password}</span>
        </div>

        <div className="form-grup">
          <label htmlFor="reg-pass2">Şifre (tekrar)</label>
          <input
            id="reg-pass2"
            type="password"
            placeholder="••••••"
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
            aria-invalid={errors.password2 ? true : undefined}
          />
          <span className="hata-metni">{errors.password2}</span>
        </div>

        <button type="submit" className="buton">
          Kayıt ol
        </button>

        <div className="alt-baglantilar">
          <span>
            Zaten hesabın var mı? <Link to="/login">Giriş yap</Link>
          </span>
        </div>
      </form>
    </>
  );
}

export default RegisterPage;
