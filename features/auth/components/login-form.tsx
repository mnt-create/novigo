"use client";

import Link from "next/link";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";

import { FormField } from "@/components/shared/form-field";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { signInAction } from "@/features/auth/actions/auth.actions";
import type { AuthActionState } from "@/features/auth/types";
import { routes } from "@/constants/routes";

const initialState: AuthActionState = { success: false };

type LoginFormProps = {
  redirectTo?: string;
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      className="w-full bg-brand-blue hover:bg-brand-blue/90"
      isLoading={pending}
      loadingText="Giriş yapılıyor..."
    >
      Giriş yap
    </Button>
  );
}

export function LoginForm({ redirectTo }: LoginFormProps) {
  const [state, formAction] = useActionState(signInAction, initialState);

  return (
    <Card className="border-border/60 shadow-lg">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">Giriş yap</CardTitle>
        <CardDescription>NOVIGO hesabınıza giriş yapın</CardDescription>
      </CardHeader>
      <CardContent>
        <form action={formAction} className="space-y-4">
          {redirectTo ? <input type="hidden" name="redirectTo" value={redirectTo} /> : null}

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
              autoComplete="current-password"
              placeholder="••••••••"
              inputSize="lg"
              aria-invalid={Boolean(state.fieldErrors?.password)}
            />
          </FormField>

          {state.message ? (
            <p className="text-sm text-destructive" role="alert">
              {state.message}
            </p>
          ) : null}

          <SubmitButton />

          <p className="text-center text-sm text-muted-foreground">
            Hesabınız yok mu?{" "}
            <Link href={routes.register} className="font-medium text-brand-blue hover:underline">
              Kayıt olun
            </Link>
          </p>
        </form>
      </CardContent>
    </Card>
  );
}
