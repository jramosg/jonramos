/* global React, Navbar, Hero, Experience, Projects, Contributions, Contact, Icon */
function App() {
  const D = window.DATA;
  const [lang, setLang] = React.useState('en');
  const [theme, setTheme] = React.useState('dark');
  const [active, setActive] = React.useState('home');

  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const onNav = (id) => {
    setActive(id);
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  // scroll-spy
  React.useEffect(() => {
    const ids = ['home', 'experience', 'projects', 'opensource', 'contact'];
    const onScroll = () => {
      const y = window.scrollY + 120;
      let cur = 'home';
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y) cur = id;
      }
      setActive(cur);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="pf-root ds-ground">
      <Navbar lang={lang} setLang={setLang} theme={theme}
        toggleTheme={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
        nav={D.nav[lang]} active={active} onNav={onNav} />
      <main>
        <div className="pf-container">
          <Hero copy={D.hero[lang]} onNav={onNav} />
          <Experience title={D.sections[lang].exp} copy={D.experience[lang]} />
          <Projects title={D.sections[lang].proj} subtitle={D.sections[lang].projSub}
            lang={lang} projects={D.projects} />
          <Contributions title={D.sections[lang].os} copy={D.contributions[lang]} repos={D.contributions.repos} />
          <Contact title={D.sections[lang].contact} copy={D.contact[lang]} />
        </div>
      </main>
      <footer className="pf-footer">
        <div className="pf-container pf-footer__inner">
          <span className="pf-footer__sig">
            <img src="../../assets/logo/mark-mono.svg" alt="" className="pf-footer__mark" />
            jonramos<span className="pf-accent">.dev</span>
          </span>
          <span className="pf-footer__meta">© {new Date().getFullYear()} Jon Ramos · Urnieta, Euskal Herria</span>
        </div>
      </footer>
    </div>
  );
}
window.App = App;
