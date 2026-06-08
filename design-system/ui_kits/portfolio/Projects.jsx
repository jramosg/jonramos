/* global React */
function Projects({ title, subtitle, lang, projects }) {
  const { Card, Tag } = window.JonRamosDesignSystem_d2a695;
  return (
    <section id="projects" className="pf-section">
      <div className="pf-section__head">
        <h2 className="pf-section__title ds-section-title">{title}</h2>
        <p className="pf-section__sub">{subtitle}</p>
      </div>
      <div className="pf-proj-grid">
        {projects.map((p, i) => (
          <Card key={p.title} href="#" className="pf-proj"
            eyebrow={p.type} index={'0' + (i + 1)} title={p.title}
            featured={p.featured}
            footer={p.tags.map((t) => <Tag key={t}>{t}</Tag>)}>
            {p.desc[lang]}
          </Card>
        ))}
      </div>
    </section>
  );
}
window.Projects = Projects;
