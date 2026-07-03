import { createMetadata } from "@/config/seo";
import { RegisterForm } from "@/features/auth/components/register-form";
import { Container } from "@/components/shared/container";

export const metadata = createMetadata({
  title: "Kayıt Ol",
  description: "NOVIGO hesabı oluşturun.",
  path: "/register",
  noIndex: true,
});

export default function RegisterPage() {
  return (
    <section className="bg-surface-subtle py-16 sm:py-24">
      <Container size="narrow">
        <RegisterForm />
      </Container>
    </section>
  );
}
