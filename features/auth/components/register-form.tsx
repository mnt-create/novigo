"use client";

import Link from "next/link";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";

import { FormField } from "@/components/shared/form-field";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { signUpAction } from "@/features/auth/actions/auth.actions";
import type { AuthActionState } from "@/features/auth/types";
import { routes } from "@/constants/routes";

const initialState: AuthActionState = { success: false };

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      className="w-full bg-brand-blue hover:bg-brand-blue/90"
      isLoading={pending}
      loadingText="Kayıt olunuyor..."
    >
      Kayıt ol
    </Button>
  );
}

export function RegisterForm() {
  const [state, formAction] = useActionState(signUpAction, initialState);

  return (
    <Card className="border-border/60 shadow-lg">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">Kayıt ol</CardTitle>
        <CardDescription>NOVIGO ile akıllı seyahat deneyimine başlayın</CardDescription>
      </CardHeader>
      <CardContent>
        <form action={formAction} className="space-y-4">
          <FormField
            id="fullName"
            label="Ad Soyad"
            error={state.fieldErrors?.fullName?.[0]}
            required
          >
            <Input
              id="fullName"
              name="fullName"
              autoComplete="name"
              placeholder="Adınız Soyadınız"
              inputSize="lg"
              aria-invalid={Boolean(state.fieldErrors?.fullName)}
            />
          </FormField>

          <FormField
            id="email"
            label="E-posta"
            error={state.fieldErrors?.email?.[0]}
            required
          >
            <Input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="ornek@email.com"
              inputSize="lg"
              aria-invalid={Boolean(state.fieldErrors?.email)}
            />
          </FormField>

          <FormField
            id="password"
            label="Şifre"
            error={state.fieldErrors?.password?.[0]}
            required
          >
            <Input
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              placeholder="En az 8 karakter"
              inputSize="lg"
              aria-invalid={Boolean(state.fieldErrors?.password)}
            />
          </FormField>

          <FormField
            id="confirmPassword"
            label="Şifre Tekrar"
            error={state.fieldErrors?.confirmPassword?.[0]}
            required
          >
            <Input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              autoComplete="new-password"
              placeholder="Şifrenizi tekrar girin"
              inputSize="lg"
              aria-invalid={Boolean(state.fieldErrors?.confirmPassword)}
            />
          </FormField>

          {state.message ? (
            <p
              className={`text-sm ${state.success ? "text-emerald-600" : "text-destructive"}`}
              role="alert"
            >
              {state.message}
            </p>
          ) : null}

          <SubmitButton />

          <p className="text-center text-sm text-muted-foreground">
            Zaten hesabınız var mı?{" "}
            <Link href={routes.login} className="font-medium text-brand-blue hover:underline">
              Giriş yapın
            </Link>
          </p>
        </form>
      </CardContent>
    </Card>
  );
}
