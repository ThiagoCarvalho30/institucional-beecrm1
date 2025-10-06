import type { Metadata } from "next";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description: `Termos de Uso da ${siteConfig.company.name}`,
};

export default function TermosUsoPage() {
  const { company, legal } = siteConfig;
  const terms = legal.terms;

  return (
    <section>
      <div className="container stack">
        <header className="stack">
          <h1 className="section-title">Termos de Uso</h1>
          <p className="section-subtitle">
            Ao acessar os canais digitais da {company.name}, você concorda com as
            condições estabelecidas neste documento.
          </p>
          <small style={{ color: "var(--color-muted)" }}>
            Última atualização: {terms.lastUpdated}
          </small>
        </header>

        <div className="legal-wrapper">
          {terms.sections.map((section) => (
            <article key={section.title} className="legal-section">
              <h3>{section.title}</h3>
              <p>{section.body}</p>
            </article>
          ))}
        </div>

        <div className="card">
          <p>
            Qualquer dúvida sobre estes Termos de Uso pode ser esclarecida com
            nossa equipe jurídica pelo e-mail {company.email ?? "contato@beelabs.com.br"}.
          </p>
        </div>
      </div>
    </section>
  );
}
