import Link from "next/link";

import { AuthButtons } from "@/components/layout/auth-buttons";
import { UserMenu } from "@/features/auth/components/user-menu";
import { getCurrentUser } from "@/features/auth/services/auth.service";

export async function UserNav() {
  const user = await getCurrentUser();

  if (!user) {
    return <AuthButtons />;
  }

  return <UserMenu user={user} />;
}
