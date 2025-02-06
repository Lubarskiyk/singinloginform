import Button from "./ui/button.tsx";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { Input } from "./ui/input.tsx";
import { object, ObjectSchema, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

interface ISingInForm {
  email: string;
  password: string;
}

const SignInSchema: ObjectSchema<ISingInForm> = object().shape({
  email: string().email("Invalid email").required("Email is required"),
  password: string().required("Password is required"),
});

export default function SingInForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ISingInForm>({
    defaultValues: { email: "", password: "" },
    resolver: yupResolver(SignInSchema),
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<ISingInForm> = data => {
    console.log(data);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full flex-col items-center justify-center"
      noValidate
    >
      <div className="relative w-full">
        <Controller
          control={control}
          name="email"
          render={({ field }) => (
            <Input
              {...field}
              type={"email"}
              placeholder={"Enter E-mail"}
              className={errors.email && "border border-red-500/80"}
            />
          )}
        />
        {errors.email && (
          <p className="absolute bottom-[-5px] left-2 rounded border border-red-500/80 bg-white px-2 py-0.5 text-xs text-red-500/80 shadow-lg">
            {errors.email.message}
          </p>
        )}
      </div>
      <div className="relative w-full">
        <Controller
          control={control}
          name={"password"}
          render={({ field }) => (
            <Input
              {...field}
              type={"password"}
              placeholder={"Enter Password"}
              className={errors.password && "border border-red-500/80"}
            />
          )}
        />
        {errors.password && (
          <p className="absolute bottom-[-5px] left-2 rounded border border-red-500/80 bg-white px-2 py-0.5 text-xs text-red-500/80 shadow-lg">
            {errors.password.message}
          </p>
        )}
      </div>
      <a className="mt-4 mb-2.5 text-sm text-neutral-600" href="#">
        Forget Password?
      </a>
      <Button>Sign In</Button>
    </form>
  );
}
