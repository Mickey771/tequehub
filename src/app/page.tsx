import Landing from "@/components/Landing/Landing";
import Image from "next/image";
import { generateMetadata as genMeta } from "@/lib/metadata";

export const metadata = genMeta({
  title: "Teque Hub | Custom Software Development & AI Automation Agency",
  description: "We build high performance mobile apps, web applications, automate complex workflows, and integrate AI agents. Trusted by startups and enterprises across US, UK, and Middle East.",
  path: "/",
});

export default function Home() {
  return (
    <main>
      <Landing />
    </main>
  );
}
