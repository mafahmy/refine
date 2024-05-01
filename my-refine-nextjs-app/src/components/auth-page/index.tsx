"use client";
import { AuthPage as AuthPageBase } from "@refinedev/antd";
import type { AuthPageProps } from "@refinedev/core";

export const AuthPage = (props: typeof AuthPageProps) => {
  return (
    <AuthPageBase
      {...props}
      formProps={{
        initialValues: {
          email: 'info@refine.dev',
          password: 'refine-supabase',
        },
      }}
    />
  );
};
