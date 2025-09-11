"use client";

import React, { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { BarLoader } from "react-spinners";
import { Separator } from "@radix-ui/react-separator";
import { SignupFormData } from "@/schemas/signup";

function SignupFormContainer() {
  const [formData, setFormData] = useState<SignupFormData>({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: {
      street: "",
      city: "",
      state: "",
      zip: "",
      country: "India",
    },
  });

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      // TODO: Replace with actual signup API call
      // await signupUser(formData);

      router.push("/"); // Redirect to home after successful signup
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Signup failed");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <h2 className="calSans text-[32px]">Sign up to Whisper Clothing</h2>
      <p>Create an account to start shopping</p>

      <form onSubmit={handleSignup} className="flex flex-col gap-5">
        <Input
          placeholder="Full Name"
          required
          variant={"auth"}
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <Input
          placeholder="Email"
          type="email"
          required
          variant={"auth"}
          value={formData.email}
          onChange={(e) =>
            setFormData({ ...formData, email: e.target.value.toLowerCase() })
          }
        />
        <Input
          variant={"auth"}
          placeholder="Phone"
          required
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
        <Input
          placeholder="Password"
          type="password"
          required
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          variant={"auth"}
        />
        <Separator className="w-full" />
        {/* Address Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <Input
            placeholder="Street"
            required
            value={formData.address.street}
            onChange={(e) =>
              setFormData({
                ...formData,
                address: { ...formData.address, street: e.target.value },
              })
            }
            variant={"auth"}
          />
          <Input
            placeholder="City"
            required
            value={formData.address.city}
            onChange={(e) =>
              setFormData({
                ...formData,
                address: { ...formData.address, city: e.target.value },
              })
            }
            variant={"auth"}
          />
          <Input
            placeholder="State"
            required
            value={formData.address.state}
            onChange={(e) =>
              setFormData({
                ...formData,
                address: { ...formData.address, state: e.target.value },
              })
            }
            variant={"auth"}
          />
          <Input
            placeholder="ZIP Code"
            required
            value={formData.address.zip}
            onChange={(e) =>
              setFormData({
                ...formData,
                address: { ...formData.address, zip: e.target.value },
              })
            }
            variant={"auth"}
          />
          <Input
            placeholder="Country"
            required
            value={formData.address.country}
            onChange={(e) =>
              setFormData({
                ...formData,
                address: { ...formData.address, country: e.target.value },
              })
            }
            disabled
            variant={"auth"}
          />
        </div>
        <Button type="submit" className="h-15" disabled={loading}>
          {loading ? (
            <BarLoader color="#ffffff" width={100} height={4} />
          ) : (
            "Sign Up"
          )}
        </Button>
      </form>

      {error && <p className="text-red-500 mt-2">{error}</p>}

      <p>
        Already have an account?{" "}
        <Link href={"/auth/login"} className="underline">
          Login
        </Link>
      </p>
    </div>
  );
}

export default SignupFormContainer;
