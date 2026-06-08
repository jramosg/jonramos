/* global React, Icon */
function Contributions({ title, copy, repos }) {
  const { Tag, Prompt } = window.JonRamosDesignSystem_d2a695;
  const stats = [
    { n: '40+', label: copy.merged },
    { n: '10', label: copy.projects },
    { n: '6', label: copy.techs },
  ];
  return (
    <section id="opensource" className="pf-section pf-os">
      <div className="pf-os__head">
        <span className="ds-eyebrow">{copy.sub}</span>
        <h2 className="pf-section__title ds-section-title">{title}</h2>
      </div>
      <div className="pf-os__grid">
        <div className="pf-os__stats">
          {stats.map((s) => (
            <div className="pf-stat" key={s.label}>
              <div className="pf-stat__n">{s.n}</div>
              <div className="pf-stat__l">{s.label}</div>
            </div>
          ))}
        </div>
        <div className="pf-os__repos">
          <Prompt sigil="$" className="pf-os__cmd">git log --author="jon"</Prompt>
          <ul className="pf-os__list">
            {repos.map((r) => (
              <li key={r} className="pf-os__repo">
                <span className="pf-os__repo-icon"><Icon name="pr" size={15} /></span>
                <span className="pf-os__repo-name">{r}</span>
                <span className="pf-os__repo-arr"><Icon name="arrowUpRight" size={13} /></span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
window.Contributions = Contributions;
