import Landing from "@/components/Landing/Landing";
import Image from "next/image";
import { generateMetadata as genMeta } from "@/lib/metadata";

export const metadata = genMeta({
  title: "Teque Hub | Production Ready Software, AI & Fintech Systems",
  description: "We build production ready mobile apps, web applications, and fintech platforms processing $2M+ daily volume. Security audited, scalable systems for startups and enterprises across US, UK, and Middle East.",
  path: "/",
});

export default function Home() {
  return (
    <main>
      <Landing />
    </main>
  );
}
