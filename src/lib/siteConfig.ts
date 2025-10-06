import siteConfigData from "../../config/config.json";

export type SiteConfig = typeof siteConfigData;
export type CompanyInfo = SiteConfig["company"];
export type Address = SiteConfig["address"];
export type Service = SiteConfig["services"][number];
export type LegalSection = SiteConfig["legal"][keyof SiteConfig["legal"]]["sections"][number];

export const siteConfig: SiteConfig = siteConfigData;

export const formatFullAddress = (address: Address): string => {
  const parts = [
    `${address.street}, ${address.number}`.trim(),
    address.neighborhood,
    `${address.city} - ${address.state}`.trim(),
    address.zip,
    address.country,
  ];

  return parts.filter(Boolean).join(" · ");
};
