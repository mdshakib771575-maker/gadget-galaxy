    "use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { useForm, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";

import { FaGoogle } from "react-icons/fa";


import { authClient } from "@/lib/auth-client";

// HeroUI Components
import {
  Card,
  CardHeader,
 
  Input,
  Button,
  Form,
} from "@heroui/react";
import Logo from "@/app/components/shared/Logo";

type LoginFormData = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();

  const onSubmit: SubmitHandler<LoginFormData> = async (data) => {
    const { data: signInData, error: signInError } =
      await authClient.signIn.email({
        email: data.email,
        password: data.password,
      });

    if (signInError) {
      toast.error("Login failed!");
      return;
    }

    toast.success("Login Successful!");

    console.log(signInData);

    router.push("/");
  };

  return (
    <Card className="mx-auto w-full max-w-md border border-white/5 bg-slate-950/70 p-4 shadow-2xl backdrop-blur-xl">
      <CardHeader className="flex flex-col items-center gap-1 pb-6 text-center">
        <Logo />

        <h1 className="bg-gradient-to-r from-white via-slate-100 to-green-500 bg-clip-text text-3xl font-extrabold tracking-tight text-transparent">
          Welcome Back
        </h1>

        <p className="mt-1 text-sm text-slate-400">
          Access your account and continue shopping.
        </p>
      </CardHeader>

      <div className="gap-4">
        <Form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full space-y-4"
        >
          {/* Email */}
          <div className="w-full">
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-white"
            >
              Email Address
            </label>

            <Input
              {...register("email", {
                required: "Email is required",
              })}
              id="email"
              type="email"
              placeholder="john@example.com"
              className="w-full bg-slate-900/50 text-white border-white/10 hover:border-green-500/50 focus-within:!border-pink-500 hover:cursor-pointer border p-2 rounded-xl"
            />

            {errors.email && (
              <p className="mt-1 text-sm text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div className="w-full">
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium text-white"
            >
              Password
            </label>

            <Input
              {...register("password", {
                required: "Password is required",
              })}
              id="password"
              type="password"
              placeholder="********"
           className="w-full bg-slate-900/50 text-white border-white/10 hover:border-green-500/50 focus-within:!border-pink-500 hover:cursor-pointer border p-2 rounded-xl"
            />

            {errors.password && (
              <p className="mt-1 text-sm text-red-500">
                {errors.password.message}
              </p>
            )}
          </div>

          <Button
            type="submit"
            className="h-12 w-full bg-gradient-to-r from-blue-500 to-green-600 font-bold text-white rounded-lg"
          
          >
            Sign In
          </Button>
        </Form>

        {/* Divider */}
        <div className="my-4 flex items-center">
          <div className="flex-grow border-t border-white/10" />

          <span className="mx-4 text-xs font-semibold uppercase text-slate-500">
            Or Login With
          </span>

          <div className="flex-grow border-t border-white/10" />
        </div>

        {/* Google Login */}
        <Button
                className="h-11 w-full flex justify-center items-center gap-5 border border-white/10 font-semibold bg-slate-900/50 border-white/10 ">
         <FaGoogle /> Google Account
        </Button>

        {/* Register */}
        <p className="mt-6 text-center text-sm text-slate-400">
          Do not have an account?{" "}
          <Link
            href="/register"
            className="font-semibold text-green-500 hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </Card>
  );
};

export default LoginPage;