/* global React, Icon */
function Hero({ copy, onNav }) {
  const { Button, Prompt, Avatar, Badge } = window.JonRamosDesignSystem_d2a695;
  return (
    <section id="home" className="pf-hero">
      <div className="pf-hero__grid">
        <div className="pf-hero__content">
          <div className="pf-hero__prompt">
            <Prompt sigil="$" cursor boxed>whoami</Prompt>
          </div>
          <h1 className="pf-hero__name">
            <span>Jon</span> <span className="pf-accent">Ramos</span>
          </h1>
          <p className="pf-hero__title">{copy.title}</p>
          <p className="pf-hero__desc">
            {copy.desc}
            <a className="pf-link" href="https://ubikare.io" target="_blank" rel="noreferrer">Ubikare</a>.
          </p>
          <div className="pf-hero__actions">
            <Button variant="primary" sigil="›" onClick={() => onNav('projects')}>{copy.view}</Button>
            <Button variant="secondary" onClick={() => onNav('contact')}>{copy.contact}</Button>
          </div>
        </div>

        <div className="pf-hero__media">
          <Avatar src="../../assets/jonramos.webp" alt="Jon Ramos" size={360} frame
                  label={<><b>//</b> jon_ramos.jpeg</>} />
          <div className="pf-hero__avail">
            <Badge tone="teal" dot pulse>Available for work</Badge>
          </div>
        </div>
      </div>
    </section>
  );
}
window.Hero = Hero;
