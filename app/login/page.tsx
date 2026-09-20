import { Container } from "@/components/Container";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Button } from "@/components/Button";
import { SITE } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
  description: `Kundenlogin für ${SITE.name}.`,
  alternates: {
    canonical: "/login",
  },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

export default function LoginPage() {
  return (
    <>
      <main id="main" className="bg-white">
        <Header />
        <Container className="max-w-md pt-28 pb-16 sm:pt-32 sm:pb-20">
          <h1 className="text-3xl font-semibold tracking-tight text-ink">Login</h1>
          <p className="mt-3 text-base leading-relaxed text-muted">
            Der Login ist bald verfügbar. Bis dahin können Sie Ihr Konto über das
            Formular anfragen.
          </p>
          <Button href="/" className="mt-8">
            Zur Startseite
          </Button>
        </Container>
      </main>
      <Footer />
    </>
  );
}
