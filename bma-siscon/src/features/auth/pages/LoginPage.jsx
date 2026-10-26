function LoginPage({ formData, onChange, onLogin, onExit, onForgotPassword }) {
  return (
    <div className="app-shell app-shell--login">
      <div className="login-card">
        <header className="login-header">
          <div className="brand-block">
            <div className="brand-mark">
              <img
                className="brand-mark"
                src=".\public\images\BMA-Logo-Iso.webp"
                alt="SystemIcon"
              />
            </div>
            <div>
              <h1>BMA SisCon</h1>
            </div>
          </div>
        </header>

        <form
          className="login-form"
          onSubmit={(event) => {
            event.preventDefault();
            onLogin();
          }}
        >
          <label className="field">
            <span>Usuario</span>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={onChange}
              placeholder="Ingrese su usuario"
            />
          </label>

          <label className="field">
            <span>Contraseña</span>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={onChange}
              placeholder="Ingrese su contraseña"
            />
          </label>

          <label className="checkbox-row">
            <input
              type="checkbox"
              name="rememberUser"
              checked={formData.rememberUser}
              onChange={onChange}
            />
            <span>Recordar usuario</span>
          </label>

          <div className="button-group">
            <button type="submit" className="btn-default">
              Ingresar
            </button>
            <button type="button" className="btn-close" onClick={onExit}>
              Salir
            </button>
          </div>

          <button type="button" className="link-btn" onClick={onForgotPassword}>
            Olvidé mi contraseña
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
