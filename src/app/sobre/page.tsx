import { formatFullAddress, siteConfig } from "@/lib/siteConfig";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre nós",
  description: `${siteConfig.company.name} | ${siteConfig.about.short}`,
};

export default function SobrePage() {
  const { company, about, address } = siteConfig;

  return (
    <section>
      <div className="container stack">
        <header className="stack" style={{ gap: "0.6rem" }}>
          <span className="brand__tagline">Desde {company.foundedIn}</span>
          <h1 className="section-title">Construímos confiança no ambiente digital</h1>
          <p className="section-subtitle">{about.short}</p>
        </header>

        <div className="stack">
          {about.detailed.map((paragraph, index) => (
            <p key={index} className="section-subtitle" style={{ maxWidth: "78ch" }}>
              {paragraph}
            </p>
          ))}
        </div>

        <div className="grid" style={{ gap: "1.6rem" }}>
          <article className="card">
            <h2>Missão</h2>
            <p>{about.mission}</p>
          </article>
          <article className="card">
            <h2>Visão</h2>
            <p>{about.vision}</p>
          </article>
        </div>

        <div className="card">
          <h2>Valores que nos movem</h2>
          <ul className="value-list" style={{ marginTop: "1.4rem" }}>
            {about.values.map((value) => (
              <li key={value.title}>
                <h4>{value.title}</h4>
                <p>{value.description}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="card" style={{ display: "grid", gap: "0.8rem" }}>
          <h2>Onde estamos</h2>
          <p>
            {company.name} · CNPJ {company.cnpj}
          </p>
          <p>{formatFullAddress(address)}</p>
        </div>
      </div>
    </section>
  );
}
