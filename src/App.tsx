import { cn } from "./utils/utils.ts";
import { useState } from "react";
import Button from "./components/ui/button.tsx";
import SocialIcons from "./components/SocialIcons.tsx";
import SignUpForm from "./components/SingUpForm.tsx";
import SingInForm from "./components/SingInForm.tsx";

function App() {
  const [active, setActive] = useState(false);
  function toggleActive() {
    setActive(!active);
  }
  return (
    <>
      <div className="relative min-h-120 w-3xl max-w-full overflow-hidden rounded-4xl bg-white shadow-lg shadow-white/75">
        <div
          className={cn(
            "absolute top-0 left-0 z-10 flex h-full w-1/2 flex-col items-center justify-center " +
              "border-none bg-white px-10 opacity-0 transition-all duration-[600ms] ease-in-out",
            active && "z-50 translate-x-full animate-[move_0.6s] opacity-100"
          )}
        >
          <h1 className="text-4xl font-medium">Create Account</h1>
          <SocialIcons />
          <span className="mb-5 text-xs">Register with E-mail</span>
          <SignUpForm />
        </div>

        <div
          className={cn(
            "absolute top-0 left-0 z-10 flex h-full w-1/2 flex-col items-center justify-center border-none bg-white px-10 transition-all duration-[600ms] ease-in-out outline-none",
            active && "translate-x-full"
          )}
        >
          <h1 className="text-4xl font-medium">Sign In</h1>
          <SocialIcons />
          <span className="my-5 text-xs">Login With Email & Password</span>
          <SingInForm />
        </div>

        <div
          className={cn(
            "absolute top-0 left-[50%] z-[1000] h-full w-1/2 overflow-hidden rounded-[20px] " +
              "transition-all duration-[600ms] ease-in-out",
            active && "-translate-x-full"
          )}
        >
          <div
            className={cn(
              "relative left-[-100%] h-full w-[200%] translate-0 translate-x-0 bg-red-600/95 text-white " +
                "transition-all duration-[600ms] ease-in-out",
              active && "translate-x-1/2"
            )}
          >
            <div
              className={cn(
                "absolute top-0 flex h-full w-1/2 -translate-x-[200%] flex-col items-center justify-center px-[30px] " +
                  "text-center transition-all duration-[600ms] ease-in-out",
                active && "translate-x-0"
              )}
            >
              <h1 className="text-4xl font-medium">Welcome To</h1>
              <p className="my-5 text-sm">Sign in With Email & Passowrd</p>
              <Button variant="outline" onClick={toggleActive}>
                Sign In
              </Button>
            </div>
            <div
              className={cn(
                "absolute top-0 right-0 flex h-full w-1/2 translate-x-0 flex-col items-center justify-center px-[30px] " +
                  "text-center transition-all duration-[600ms] ease-in-out",
                active && "translate-x-[200%]"
              )}
            >
              <h1 className="text-4xl font-medium">Welcome To</h1>
              <p className="my-5 text-sm">Sign Up With Email & Password</p>
              <Button variant="outline" onClick={toggleActive}>
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
