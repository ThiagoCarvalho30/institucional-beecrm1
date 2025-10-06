import type { Metadata } from "next";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: `Política de Privacidade da ${siteConfig.company.name}`,
};

export default function PoliticaPrivacidadePage() {
  const { company, legal, contact } = siteConfig;
  const privacy = legal.privacy;

  return (
    <section>
      <div className="container stack">
        <header className="stack">
          <h1 className="section-title">Política de Privacidade</h1>
          <p className="section-subtitle">
            Este documento descreve como a {company.name} trata os dados pessoais
            em conformidade com a Lei Geral de Proteção de Dados (LGPD).
          </p>
          <small style={{ color: "var(--color-muted)" }}>
            Última atualização: {privacy.lastUpdated}
          </small>
        </header>

        <div className="legal-wrapper">
          {privacy.sections.map((section) => (
            <article key={section.title} className="legal-section">
              <h3>{section.title}</h3>
              <p>{section.body}</p>
            </article>
          ))}
        </div>

        <div className="card">
          <h2>Entre em contato</h2>
          <p>
            Em caso de dúvidas sobre esta política ou para exercer seus direitos
            como titular de dados, fale conosco pelo e-mail {contact.email} ou
            pelo telefone {contact.phone}.
          </p>
        </div>
      </div>
    </section>
  );
}
