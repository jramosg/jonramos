/* global React, Icon */
function Contact({ title, copy }) {
  const { Card, Field, Input, Textarea, Button } = window.JonRamosDesignSystem_d2a695;
  const [sent, setSent] = React.useState(false);
  const links = [
    { icon: 'mail', label: 'Email', value: 'jonurnieta@gmail.com', href: 'mailto:jonurnieta@gmail.com' },
    { icon: 'github', label: 'GitHub', value: '@jramosg', href: 'https://github.com/jramosg' },
    { icon: 'linkedin', label: 'LinkedIn', value: 'Jon Ramos', href: 'https://linkedin.com/in/jramosg' },
  ];
  return (
    <section id="contact" className="pf-section">
      <h2 className="pf-section__title ds-section-title">{title}</h2>
      <div className="pf-contact">
        <div className="pf-contact__info">
          <p className="pf-contact__text">{copy.text}</p>
          <div className="pf-contact__links">
            {links.map((l) => (
              <a key={l.label} className="pf-link-card" href={l.href} target="_blank" rel="noreferrer">
                <span className="pf-link-card__icon"><Icon name={l.icon} size={20} /></span>
                <span className="pf-link-card__body">
                  <span className="pf-link-card__label">{l.label}</span>
                  <span className="pf-link-card__value">{l.value}</span>
                </span>
                <span className="pf-link-card__arr"><Icon name="arrowUpRight" size={14} /></span>
              </a>
            ))}
          </div>
        </div>

        <Card className="pf-form-card">
          <h3 className="pf-form__title">{copy.formTitle}</h3>
          <p className="pf-form__desc">{copy.formDesc}</p>
          <form className="pf-form" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
            <Field label={copy.name} htmlFor="c-name"><Input id="c-name" placeholder="Jon Ramos" required /></Field>
            <Field label={copy.email} htmlFor="c-email"><Input id="c-email" type="email" prefix="@" placeholder="you@example.com" required /></Field>
            <Field label={copy.message} htmlFor="c-msg"><Textarea id="c-msg" rows={3} placeholder="…" required /></Field>
            <div className="pf-form__foot">
              <Button type="submit" variant="primary" sigil="›">{copy.send}</Button>
              {sent && <span className="pf-form__ok"><Icon name="arrow" size={14} /> {copy.sent}</span>}
            </div>
          </form>
        </Card>
      </div>
    </section>
  );
}
window.Contact = Contact;
