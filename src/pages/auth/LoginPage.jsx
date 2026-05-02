import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function LoginPage() {
  const [getUserName, setUserName] = useState("");
  const [getPassword, setPassword] = useState("");

  function login() {
    if (getUserName == "admin" && getPassword == "admin") {
      alert("Bienvenido...");
    }
  }

  return (
    <section className="auth-card" aria-label="Sign in">
      <header className="auth-card__header">
        <div className="auth-card__brand">
          <div className="auth-card__logo" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="18" height="18">
              <path
                d="M4 7.5 12 3l8 4.5v9L12 21l-8-4.5v-9Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinejoin="round"
              />
              <path
                d="M12 3v18M4 7.5l8 4.5 8-4.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div>
            <h1 className="auth-card__title">Candidate Management</h1>
            <p className="auth-card__subtitle">
              Sign in to manage offers, candidates and users
            </p>
          </div>
        </div>
      </header>

      <form className="form" aria-label="Login form">
        <div className="form__grid">
          <div className="field">
            <label className="label" htmlFor="username">
              Username
            </label>
            <input
              onChange={(e) => setUserName(e.target.value)}
              id="username"
              className="input"
              placeholder="jtorres"
              autoComplete="username"
            />
          </div>

          <div className="field">
            <label className="label" htmlFor="password">
              Password
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              className="input"
              type="password"
              placeholder="Your password"
              autoComplete="current-password"
            />
          </div>
        </div>

        <div className="form__row">
          <label className="check">
            <input type="checkbox" className="check__input" />
            <span className="check__label">Remember me</span>
          </label>
          <a className="link" href="#">
            Forgot password
          </a>
        </div>

        <div className="form__actions">
          <button
            type="button"
            onClick={login}
            className="btn btn--primary btn--block"
            to="/dashboard"
          >
            Sign in
          </button>
        </div>

        <footer className="auth-card__footer">
          <div className="muted">Roles supported: admin, recruiter</div>
        </footer>
      </form>
    </section>
  );
}
