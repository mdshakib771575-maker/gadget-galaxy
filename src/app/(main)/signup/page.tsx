"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import {
  Card,
  CardHeader,
  Button,
  Input,
  Form,
} from "@heroui/react";

import { FaGoogle } from "react-icons/fa";
import { useForm, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";


import { authClient } from "@/lib/auth-client";

import Logo from "@/app/components/shared/Logo";
import { uploadImage } from "@/utils/UploadImage";


type RegisterFormData = {
  name: string;
  email: string;
  password: string;
  image: FileList;
};

export default function RegisterPage() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>();

  const onSubmit: SubmitHandler<RegisterFormData> = async (data) => {
    try {
      const imageFile = data.image[0];

      const imageUrl = await uploadImage(imageFile);

      const { data: signUpData, error: signUpError, } = await authClient.signUp.email({
        email: data.email,
        password: data.password,
        name: data.name,
        image: imageUrl,

      });

      if (signUpError) {
        toast.error("Registration failed!");
        return;
      }

      toast.success("Registration successful!");

      console.log(signUpData);

      router.push("/");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!");
    }
  };

  return (
    <Card className="w-full max-w-lg border border-white/5 bg-slate-950/70 backdrop-blur-xl shadow-2xl p-4 mx-auto">
      <CardHeader className="flex flex-col items-center gap-1 pb-6 text-center">
        <Logo />

        <h1 className="bg-gradient-to-r from-white via-slate-100 to-green-500 bg-clip-text text-3xl font-extrabold tracking-tight text-transparent">
          Create an Account
        </h1>

        <p className="mt-1 text-sm text-slate-400">
          Join Gadget Galaxy today.
        </p>
      </CardHeader>

      <div className="gap-4">
        <Form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full space-y-4"
        >
          {/* Name */}
          <div className="w-full">
            <label className="mb-2 block">Full Name</label>

            <Input
              {...register("name", {
                required: "Name is Required",
              })}
              placeholder="John Doe"
             className="w-full bg-slate-900/50 border-white/10 hover:border-green-500/50 focus-within:!border-pink-500 hover:cursor-pointer border p-2 rounded-xl"
            />

            {errors.name && (
              <p className="text-sm text-red-500">
                {errors.name.message as string}
              </p>
            )}
          </div>

          {/* Email */}
          <div className="w-full ">
            <label className="mb-2 block">Email Address</label>

            <Input
              {...register("email", {
                required: "Email is Required",
              })}
              type="email"
              placeholder="john@example.com"
              className="w-full bg-slate-900/50 border-white/10 hover:border-green-500/50 focus-within:!border-pink-500 hover:cursor-pointer border p-2 rounded-xl"
            />

            {errors.email && (
              <p className="text-sm text-red-500">
                {errors.email.message as string}
              </p>
            )}
          </div>

          {/* Image */}
          <div className="w-full">
            <label className="mb-2 block">Profile Image</label>

            <Input
              {...register("image", {
                required: "Image is Required",
              })}
              type="file"
              accept="image/*"
              className="w-full bg-slate-900/50 border-white/10 hover:border-green-500/50 focus-within:!border-pink-500 hover:cursor-pointer border p-2 rounded-xl"
            />

            {errors.image && (
              <p className="text-sm text-red-500">
                {errors.image.message as string}
              </p>
            )}
          </div>

          {/* Password */}
          <div className="w-full">
            <label className="mb-2 block">Password</label>

            <Input
              {...register("password", {
                required: "Password is Required",
                minLength: {
                  value: 6,
                  message: "Minimum 6 characters.",
                },
                maxLength: {
                  value: 12,
                  message: "Maximum 12 characters.",
                },
              })}
              type="password"
              placeholder="********"
               className="w-full bg-slate-900/50 border-white/10 hover:border-green-500/50 focus-within:!border-pink-500 hover:cursor-pointer border p-2 rounded-xl"
            />

            {errors.password && (
              <p className="text-sm text-red-500">
                {errors.password.message as string}
              </p>
            )}
          </div>

          {/* Role
          <div className="flex w-full flex-col gap-2">
            <label className="text-sm font-semibold text-slate-300">
              Select Role
            </label>

            <select
              {...register("role", {
                required: "Role is Required",
              })}
              className="rounded-xl border border-white/10 bg-slate-900/50 p-3"
              defaultValue="attendee"
            >
              <option value="attendee">Attendee</option>
              <option value="organizer">Organizer</option>
            </select>

            {errors.role && (
              <p className="text-sm text-red-500">
                {errors.role.message as string}
              </p>
            )}
          </div> */}

          {/* Submit Button */}
          <Button
            type="submit"

            className="h-12 w-full bg-gradient-to-r from-blue-500 to-green-500 font-bold text-white rounded-xl"
          >
            Create Account
          </Button>
        </Form>

        {/* Divider */}
        <div className="my-4 flex items-center">
          <div className="flex-grow border-t border-white/10" />

          <span className="mx-4 text-xs font-semibold uppercase text-slate-500">
            Or Sign Up With
          </span>

          <div className="flex-grow border-t border-white/10" />
        </div>

        {/* Google Button */}
        <Button

          className="h-11 w-full flex justify-center items-center gap-5 border border-white/10 font-semibold bg-slate-900/50 border-white/10 "
        >
          <FaGoogle />
          Google OAuth
        </Button>

        {/* Login Link */}
        <p className="mt-6 text-center text-sm text-slate-400">
          Already have an account?{" "}
          <Link
            href="/signin"
            className="font-semibold text-green-500 hover:underline"
          >
            Log In
          </Link>
        </p>
      </div>
    </Card>
  );
}