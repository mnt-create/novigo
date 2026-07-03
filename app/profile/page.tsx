import { redirect } from "next/navigation";

import { createMetadata } from "@/config/seo";
import { getCurrentUser } from "@/features/auth/services/auth.service";
import { Container } from "@/components/shared/container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata = createMetadata({
  title: "Profilim",
  description: "NOVIGO profil bilgileriniz.",
  path: "/profile",
  noIndex: true,
});

export default async function ProfilePage() {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/login?redirect=/profile");
  }

  return (
    <section className="bg-surface-subtle py-16">
      <Container size="narrow">
        <Card>
          <CardHeader>
            <CardTitle>Profilim</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <div>
              <p className="text-muted-foreground">Ad Soyad</p>
              <p className="font-medium">{user.fullName ?? "—"}</p>
            </div>
            <div>
              <p className="text-muted-foreground">E-posta</p>
              <p className="font-medium">{user.email}</p>
            </div>
          </CardContent>
        </Card>
      </Container>
    </section>
  );
}
