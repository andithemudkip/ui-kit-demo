"use client";

import Link from "next/link";
import { useForm, FormProvider, Controller, FieldPath } from "react-hook-form";
import {
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "@campnetwork/ui-kit/form";
import { Input } from "@campnetwork/ui-kit/input";
import { Button } from "@campnetwork/ui-kit/button";
import { toast } from "@campnetwork/ui-kit/toast";

interface FormValues {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export default function FormsPage() {
  const form = useForm<FormValues>({
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    if (data.password !== data.confirmPassword) {
      form.setError("confirmPassword", {
        type: "manual",
        message: "Passwords do not match",
      });
      return;
    }
    toast.success("Form submitted successfully!");
    console.log(data);
  };

  return (
    <main className="min-h-screen p-8 md:p-16">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/"
          className="text-sm text-text-secondary hover:text-pumpkin-600 mb-8 block"
        >
          &larr; Back to Home
        </Link>

        <h1 className="text-2xl font-semibold uppercase font-geist tracking-tight mb-8">
          Forms
        </h1>

        {/* Form with Validation */}
        <section className="mb-12">
          <h2 className="text-lg font-semibold uppercase font-geist mb-4 text-text-secondary">
            Registration Form
          </h2>
          <div className="max-w-md">
            <FormProvider {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <Controller
                  control={form.control}
                  name="username"
                  rules={{
                    required: "Username is required",
                    minLength: {
                      value: 3,
                      message: "Username must be at least 3 characters",
                    },
                  }}
                  render={({ field, fieldState }) => (
                    <div className="space-y-2">
                      <label
                        className={`text-sm font-semibold uppercase font-geist ${
                          fieldState.error ? "text-red-500" : ""
                        }`}
                      >
                        Username
                      </label>
                      <Input placeholder="johndoe" {...field} />
                      <p className="text-xs text-text-secondary">
                        This will be your public display name.
                      </p>
                      {fieldState.error && (
                        <p className="text-xs text-red-500">
                          {fieldState.error.message}
                        </p>
                      )}
                    </div>
                  )}
                />

                <Controller
                  control={form.control}
                  name="email"
                  rules={{
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  }}
                  render={({ field, fieldState }) => (
                    <div className="space-y-2">
                      <label
                        className={`text-sm font-semibold uppercase font-geist ${
                          fieldState.error ? "text-red-500" : ""
                        }`}
                      >
                        Email
                      </label>
                      <Input
                        type="email"
                        placeholder="you@example.com"
                        {...field}
                      />
                      <p className="text-xs text-text-secondary">
                        We&apos;ll never share your email with anyone.
                      </p>
                      {fieldState.error && (
                        <p className="text-xs text-red-500">
                          {fieldState.error.message}
                        </p>
                      )}
                    </div>
                  )}
                />

                <Controller
                  control={form.control}
                  name="password"
                  rules={{
                    required: "Password is required",
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters",
                    },
                  }}
                  render={({ field, fieldState }) => (
                    <div className="space-y-2">
                      <label
                        className={`text-sm font-semibold uppercase font-geist ${
                          fieldState.error ? "text-red-500" : ""
                        }`}
                      >
                        Password
                      </label>
                      <Input
                        type="password"
                        placeholder="••••••••"
                        {...field}
                      />
                      <p className="text-xs text-text-secondary">
                        Must be at least 8 characters long.
                      </p>
                      {fieldState.error && (
                        <p className="text-xs text-red-500">
                          {fieldState.error.message}
                        </p>
                      )}
                    </div>
                  )}
                />

                <Controller
                  control={form.control}
                  name="confirmPassword"
                  rules={{
                    required: "Please confirm your password",
                  }}
                  render={({ field, fieldState }) => (
                    <div className="space-y-2">
                      <label
                        className={`text-sm font-semibold uppercase font-geist ${
                          fieldState.error ? "text-red-500" : ""
                        }`}
                      >
                        Confirm Password
                      </label>
                      <Input
                        type="password"
                        placeholder="••••••••"
                        {...field}
                      />
                      {fieldState.error && (
                        <p className="text-xs text-red-500">
                          {fieldState.error.message}
                        </p>
                      )}
                    </div>
                  )}
                />

                <div className="flex gap-4">
                  <Button type="submit">Register</Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => form.reset()}
                  >
                    Reset
                  </Button>
                </div>
              </form>
            </FormProvider>
          </div>
        </section>

        {/* Form Anatomy */}
        <section className="mb-12">
          <h2 className="text-lg font-semibold uppercase font-geist mb-4 text-text-secondary">
            Form Component Anatomy
          </h2>
          <div className="bg-surface-muted p-4 border border-border overflow-x-auto">
            <pre className="text-sm">
              {`<Form {...form}>
  <form onSubmit={form.handleSubmit(onSubmit)}>
    <FormField
      control={form.control}
      name="fieldName"
      rules={{ required: "Field is required" }}
      render={({ field }) => (
        <FormItem>
          <FormLabel>Label</FormLabel>
          <FormControl>
            <Input {...field} />
          </FormControl>
          <FormDescription>
            Helper text appears here.
          </FormDescription>
          <FormMessage />  {/* Error message */}
        </FormItem>
      )}
    />
  </form>
</Form>`}
            </pre>
          </div>
        </section>

        {/* Form Field States */}
        <section className="mb-12">
          <h2 className="text-lg font-semibold uppercase font-geist mb-4 text-text-secondary">
            Form Field States
          </h2>
          <div className="max-w-md space-y-6">
            <div>
              <p className="text-xs text-text-secondary mb-2">Normal State</p>
              <div className="space-y-2">
                <label className="text-sm font-semibold uppercase font-geist">
                  Field Label
                </label>
                <Input placeholder="Enter value" />
                <p className="text-xs text-text-secondary">
                  This is a helpful description.
                </p>
              </div>
            </div>
            <div>
              <p className="text-xs text-text-secondary mb-2">Error State</p>
              <div className="space-y-2">
                <label className="text-sm font-semibold uppercase font-geist text-red-500">
                  Field Label
                </label>
                <Input
                  placeholder="Enter value"
                  className="border-red-500 focus:ring-red-500"
                />
                <p className="text-xs text-red-500">This field is required.</p>
              </div>
            </div>
            <div>
              <p className="text-xs text-text-secondary mb-2">Disabled State</p>
              <div className="space-y-2">
                <label className="text-sm font-semibold uppercase font-geist opacity-50">
                  Field Label
                </label>
                <Input placeholder="Cannot edit" disabled />
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
