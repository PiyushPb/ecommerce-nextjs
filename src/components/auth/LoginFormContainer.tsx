"use client";

import React, { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { BarLoader } from "react-spinners";
import { LoginFormData } from "@/schemas/login";
import toast from "react-hot-toast";
import { useAuth } from "@/context/AuthContext";

function LoginFormContainer() {
  const [formData, setFormData] = useState<LoginFormData>({
    identifier: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState<
    Partial<Record<keyof LoginFormData, string>>
  >({});
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const { login } = useAuth();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormErrors({});
    setLoading(true);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        // Handle validation errors
        if (data.errors) {
          const newErrors: any = {};
          data.errors.forEach((err: { field: string; message: string }) => {
            newErrors[err.field] = err.message;
          });
          setFormErrors(newErrors);
        }
        if (data.error) {
          toast.error(data.error);
        }
        return;
      }

      // Save to AuthContext
      login(data.token, data.user);

      router.push("/");
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <h2 className="calSans text-[32px]">Login to Whisper Clothing</h2>
      <p>Login with your email / phone and password</p>
      <form onSubmit={handleLogin} className="flex flex-col gap-5">
        <div>
          <Input
            type="text"
            placeholder="Email / Phone"
            variant="auth"
            required
            value={formData.identifier}
            onChange={(e) =>
              setFormData({
                ...formData,
                identifier: e.target.value.toLowerCase(),
              })
            }
          />
          {formErrors.identifier && (
            <p className="text-sm text-red-500 mt-1">{formErrors.identifier}</p>
          )}
        </div>

        <div>
          <Input
            type="password"
            placeholder="Password"
            variant="auth"
            required
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
          {formErrors.password && (
            <p className="text-sm text-red-500 mt-1">{formErrors.password}</p>
          )}
        </div>

        <Button type="submit" className="h-15" disabled={loading}>
          {loading ? (
            <BarLoader
              color="#ffffff"
              width={100}
              height={4}
              aria-label="Loading login"
            />
          ) : (
            "Login"
          )}
        </Button>
      </form>

      <p>
        Don&apos;t have an account?{" "}
        <Link href="/auth/signup" className="underline">
          Sign up
        </Link>
      </p>
    </div>
  );
}

export default LoginFormContainer;
