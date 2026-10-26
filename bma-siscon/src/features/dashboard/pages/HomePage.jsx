function HomePage({ onLogout }) {
  return (
    <div className="app-shell app-shell--dashboard">
      <header className="dashboard-header">
        <div>
          <p className="eyebrow">Panel principal</p>
          <h1>Inicio del sistema</h1>
        </div>

        <button type="button" className="secondary-btn" onClick={onLogout}>
          Cerrar sesión
        </button>
      </header>

      <nav className="dashboard-nav" aria-label="Menú de inicio">
        <button type="button" className="nav-item active">
          Inicio
        </button>
        <button type="button" className="nav-item">
          Gestiones
        </button>
        <button type="button" className="nav-item">
          Configuraciones
        </button>
      </nav>

      <main className="dashboard-main">
        <section className="hero-panel">
          <div>
            <p className="eyebrow">Bienvenido</p>
            <h2>¿Qué deseas realizar hoy?</h2>
          </div>
          <p>
            Desde aquí puedes acceder a los aplicativos principales del sistema y
            gestionar tus tareas cotidianas.
          </p>
        </section>

        <div className="module-grid">
          <article className="module-card">
            <div className="module-icon">G</div>
            <h3>Gestiones</h3>
            <p>Accede a procesos del día a día del sistema.</p>
            <button type="button" className="primary-btn">
              Entrar
            </button>
          </article>

          <article className="module-card">
            <div className="module-icon">C</div>
            <h3>Configuraciones</h3>
            <p>Administra parámetros y ajustes generales de la aplicación.</p>
            <button type="button" className="primary-btn">
              Entrar
            </button>
          </article>
        </div>
      </main>

      <footer className="dashboard-footer">
        <p>SisCon © 2026 | Sistema integrado de gestión</p>
      </footer>
    </div>
  );
}

export default HomePage;
