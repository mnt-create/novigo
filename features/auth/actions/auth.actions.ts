"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { loginSchema, registerSchema } from "@/features/auth/schemas/auth.schema";
import {
  getCurrentUser,
  signInWithPassword,
  signOutUser,
  signUpWithPassword,
} from "@/features/auth/services/auth.service";
import type { AuthActionState } from "@/features/auth/types";
import { isSupabaseConfigured } from "@/lib/supabase/config";

function configError(): AuthActionState {
  return {
    success: false,
    message:
      "Supabase yapılandırması eksik. .env.local dosyasına NEXT_PUBLIC_SUPABASE_URL ve NEXT_PUBLIC_SUPABASE_ANON_KEY ekleyin.",
  };
}

function flattenZodErrors(error: { flatten: () => { fieldErrors: Record<string, string[]> } }) {
  return error.flatten().fieldErrors;
}

export async function signInAction(
  _prevState: AuthActionState,
  formData: FormData,
): Promise<AuthActionState> {
  if (!isSupabaseConfigured()) {
    return configError();
  }

  const parsed = loginSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!parsed.success) {
    return {
      success: false,
      fieldErrors: flattenZodErrors(parsed.error),
    };
  }

  const { error } = await signInWithPassword(parsed.data.email, parsed.data.password);

  if (error) {
    return {
      success: false,
      message: error.message === "Invalid login credentials"
        ? "E-posta veya şifre hatalı."
        : error.message,
    };
  }

  revalidatePath("/", "layout");

  const redirectTo = formData.get("redirectTo");
  redirect(typeof redirectTo === "string" && redirectTo.startsWith("/") ? redirectTo : "/");
}

export async function signUpAction(
  _prevState: AuthActionState,
  formData: FormData,
): Promise<AuthActionState> {
  if (!isSupabaseConfigured()) {
    return configError();
  }

  const parsed = registerSchema.safeParse({
    fullName: formData.get("fullName"),
    email: formData.get("email"),
    password: formData.get("password"),
    confirmPassword: formData.get("confirmPassword"),
  });

  if (!parsed.success) {
    return {
      success: false,
      fieldErrors: flattenZodErrors(parsed.error),
    };
  }

  const { data, error } = await signUpWithPassword(
    parsed.data.email,
    parsed.data.password,
    parsed.data.fullName,
  );

  if (error) {
    return {
      success: false,
      message: error.message,
    };
  }

  revalidatePath("/", "layout");

  if (data.session) {
    redirect("/");
  }

  return {
    success: true,
    message: "Hesabınız oluşturuldu. E-posta adresinize gelen bağlantı ile hesabınızı doğrulayın.",
  };
}

export async function signOutAction() {
  if (!isSupabaseConfigured()) {
    redirect("/");
  }

  await signOutUser();
  revalidatePath("/", "layout");
  redirect("/");
}

export async function getSessionUser() {
  return getCurrentUser();
}
