/* global React, Icon */
const DS = window.JonRamosDesignSystem_d2a695;

function Navbar({ lang, setLang, theme, toggleTheme, nav, active, onNav }) {
  const { IconButton } = DS;
  const langs = ['en', 'es', 'eu'];
  return (
    <header className="pf-nav">
      <div className="pf-nav__inner">
        <a className="pf-logo" href="#home" onClick={(e) => { e.preventDefault(); onNav('home'); }}>
          <img src="../../assets/logo/mark-mono.svg" alt="" className="pf-logo__mark" />
          <span className="pf-logo__name">Jon Ramos</span>
        </a>

        <nav className="pf-nav__links" aria-label="Main">
          {nav.map((label, i) => {
            const id = ['home', 'experience', 'projects', 'opensource', 'contact'][i];
            return (
              <a key={id} href={'#' + id}
                 className={'pf-nav__link' + (active === id ? ' is-active' : '')}
                 onClick={(e) => { e.preventDefault(); onNav(id); }}>
                <span className="pf-nav__idx">0{i + 1}</span>{label}
              </a>
            );
          })}
        </nav>

        <div className="pf-nav__right">
          <div className="pf-langs" role="group" aria-label="Language">
            {langs.map((l) => (
              <button key={l} className={'pf-lang' + (lang === l ? ' is-on' : '')}
                      onClick={() => setLang(l)}>{l.toUpperCase()}</button>
            ))}
          </div>
          <IconButton label="Toggle theme" onClick={toggleTheme}>
            <Icon name={theme === 'light' ? 'moon' : 'sun'} />
          </IconButton>
        </div>
      </div>
    </header>
  );
}
window.Navbar = Navbar;
