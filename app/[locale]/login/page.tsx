import { createMetadata } from "@/config/seo";
import { LoginForm } from "@/features/auth/components/login-form";
import { Container } from "@/components/shared/container";

export const metadata = createMetadata({
  title: "Giriş Yap",
  description: "NOVIGO hesabınıza giriş yapın.",
  path: "/login",
  noIndex: true,
});

type LoginPageProps = {
  searchParams: Promise<{ redirect?: string }>;
};

export default async function LoginPage({ searchParams }: LoginPageProps) {
  const params = await searchParams;

  return (
    <section className="bg-surface-subtle py-16 sm:py-24">
      <Container size="narrow">
        <LoginForm redirectTo={params.redirect} />
      </Container>
    </section>
  );
}
