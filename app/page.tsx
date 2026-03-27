import type { Metadata } from "next"
import HomeHero from "./home-hero"

export const metadata: Metadata = {
  title: "Irene Mercadal | Filmmaker & Cinematographer",
  description: "Irene Mercadal is a filmmaker and cinematographer based in NYC. Director of Aguas y restos and Baby Steps. NYU Tisch MFA.",
}

export default function Home() {
  return <HomeHero />
}
