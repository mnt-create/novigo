import Link from "next/link";

import { Button } from "@/components/ui/button";
import { routes } from "@/constants/routes";

export function AuthButtons() {
  return (
    <>
      <Button
        variant="ghost"
        size="sm"
        className="hidden text-white/90 hover:bg-white/10 hover:text-white md:inline-flex"
        asChild
      >
        <Link href={routes.login}>Giriş yap</Link>
      </Button>
      <Button size="sm" className="bg-brand-blue text-white hover:bg-brand-blue/90" asChild>
        <Link href={routes.register}>Kayıt ol</Link>
      </Button>
    </>
  );
}
