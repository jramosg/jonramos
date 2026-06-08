/* global React, Icon */
function Experience({ title, copy }) {
  const { Card, Badge, Tag } = window.JonRamosDesignSystem_d2a695;
  return (
    <section id="experience" className="pf-section">
      <h2 className="pf-section__title ds-section-title">{title}</h2>
      <div className="pf-timeline">
        <div className="pf-timeline__rail" aria-hidden="true">
          <span className="pf-timeline__dot" />
          <span className="pf-timeline__line" />
        </div>
        <Card className="pf-timeline__card"
          eyebrow={<>{copy.since} Sep 2016</>}
          action={<Badge tone="teal" dot pulse>{copy.present}</Badge>}
          title={copy.role}
          footer={<><Tag lead=":">Clojure</Tag><Tag lead=":">ClojureScript</Tag><Tag>Datomic</Tag></>}>
          <a className="pf-company" href="https://ubikare.io" target="_blank" rel="noreferrer">
            <span className="pf-company__at">@</span>Ubikare
            <span className="pf-company__arr"><Icon name="arrowUpRight" size={13} /></span>
          </a>
          <p className="pf-timeline__desc">{copy.desc}</p>
        </Card>
      </div>
    </section>
  );
}
window.Experience = Experience;
