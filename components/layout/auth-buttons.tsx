import { getTranslations } from "next-intl/server";

import { Button } from "@/components/ui/button";
import { routes } from "@/constants/routes";
import { Link } from "@/i18n/routing";

export async function AuthButtons() {
  const t = await getTranslations("Auth");

  return (
    <>
      <Button
        variant="ghost"
        size="sm"
        className="hidden text-white/90 hover:bg-white/10 hover:text-white md:inline-flex"
        asChild
      >
        <Link href={routes.login}>{t("signIn")}</Link>
      </Button>
      <Button size="sm" className="bg-brand-blue text-white hover:bg-brand-blue/90" asChild>
        <Link href={routes.register}>{t("signUp")}</Link>
      </Button>
    </>
  );
}
