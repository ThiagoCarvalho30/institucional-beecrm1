import { siteConfig } from "@/lib/siteConfig";
import type { Metadata } from "next";
import Image from "next/image";
import "@/styles/pages/catalog.css";
export const metadata: Metadata = {
  title: "Catálogo",
  description: siteConfig.catalog.subtitle,
};

export default function CatalogoPage() {
  const { catalog, company } = siteConfig;

  if (!catalog.enabled) {
    return null;
  }


    return (
    <section className="catalog-simple">
      <div className="container">
        <header className="catalog-simple__header">
          <h1>{catalog.title}</h1>
          <p>{catalog.subtitle}</p>
        </header>

        <div className="catalog-simple__image">
          <Image
            src={catalog.image}
            alt={catalog.title}
            width={1200}
            height={800}
            priority
            style={{ width: "100%", height: "auto" }}
            className="catalog-simple__img" // { changed code }
          />
        </div>

        <div className="catalog-simple__cta">
          <p>Entre em contato para mais informações</p>
          <div className="catalog-simple__buttons">
            <a href={`tel:${company.phone}`} className="btn btn-primary">
              Ligar agora
            </a>
            <a href={`mailto:${company.email}`} className="btn btn-outline">
              Enviar e-mail
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
