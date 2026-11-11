import { Button } from "@/components/ui/button";
import { routes } from "@/constants/routes";
import { Link } from "@/i18n/routing";

export async function AuthButtons() {
  return (
    <>
      <Button
        variant="ghost"
        size="sm"
        className="hidden text-slate-700 hover:bg-violet-50 hover:text-violet-800 md:inline-flex"
        asChild
      >
        <Link href={routes.login}>Log In</Link>
      </Button>
      <Button
        size="sm"
        className="bg-violet-700 text-white hover:bg-violet-800"
        asChild
      >
        <Link href={routes.register}>Get Started</Link>
      </Button>
    </>
  );
}
