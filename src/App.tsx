import { cn } from "./utils/utils.ts";
import { useState } from "react";

function App() {
  const [activ, setActiv] = useState(false);
  function toggleActiv() {
    setActiv(!activ);
  }
  return (
    <>
      <div
        className="relative min-h-120 w-3xl max-w-full overflow-hidden rounded-4xl bg-white shadow-lg shadow-white/75"
        id="container"
      >
        <div
          className={cn(
            "absolute top-0 left-0 z-10 h-full w-1/2 opacity-0 transition-all duration-[600ms] ease-in-out",
            activ && "z-50 translate-x-full animate-[move_0.6s] opacity-100"
          )}
        >
          <form className="flex h-full flex-col items-center justify-center border-none bg-white px-10">
            <h1 className="text-4xl font-medium">Create Account</h1>

            <span className="my-5 text-xs">Register with E-mail</span>
            <input
              type="text"
              placeholder="Name"
              className="my-2 w-full rounded-lg border-none bg-zinc-100 px-4 py-2.5 text-base outline-none"
            />
            <input
              type="email"
              placeholder="Enter E-mail"
              className="my-2 w-full rounded-lg border-none bg-zinc-100 px-4 py-2.5 text-base outline-none"
            />
            <input
              type="password"
              placeholder="Enter Password"
              className="my-2 w-full rounded-lg border-none bg-zinc-100 px-4 py-2.5 text-base outline-none"
            />
            <button className="mt-2 cursor-pointer rounded-lg border border-transparent bg-red-600 px-12 py-2.5 text-xs font-semibold tracking-wide text-white uppercase">
              Sign Up
            </button>
          </form>
        </div>

        <div
          className={cn(
            "absolute top-0 left-0 z-10 h-full w-1/2 transition-all duration-[600ms] ease-in-out",
            activ && "translate-x-full"
          )}
        >
          <form className="flex h-full flex-col items-center justify-center border-none bg-white px-10 outline-none">
            <h1 className="text-4xl font-medium">Sign In</h1>

            <span className="my-5 text-xs">Login With Email & Password</span>
            <input
              type="email"
              placeholder="Enter E-mail"
              className="my-2 w-full rounded-lg border-none bg-zinc-100 px-4 py-2.5 text-base outline-none"
            />
            <input
              type="password"
              placeholder="Enter Password"
              className="my-2 w-full rounded-lg border-none bg-zinc-100 px-4 py-2.5 text-base outline-none"
            />
            <a className="mt-4 mb-2.5 text-sm text-neutral-600" href="#">
              Forget Password?
            </a>
            <button className="mt-2 cursor-pointer rounded-lg border border-transparent bg-red-600 px-12 py-2.5 text-xs font-semibold tracking-wide text-white uppercase">
              Sign In
            </button>
          </form>
        </div>

        <div
          className={cn(
            "absolute top-0 left-[50%] z-[1000] h-full w-1/2 overflow-hidden rounded-[20px] transition-all duration-[600ms] ease-in-out",
            activ && "-translate-x-full"
          )}
        >
          <div
            className={cn(
              "relative left-[-100%] h-full w-[200%] translate-0 translate-x-0 bg-red-600/95 text-white transition-all duration-[600ms] ease-in-out",
              activ && "translate-x-1/2"
            )}
          >
            <div
              className={cn(
                "absolute top-0 flex h-full w-1/2 -translate-x-[200%] flex-col items-center justify-center px-[30px] text-center transition-all duration-[600ms] ease-in-out",
                activ && "translate-x-0"
              )}
            >
              <h1 className="text-4xl font-medium">Welcome To</h1>
              <p className="my-5 text-sm">Sign in With Email & Passowrd</p>
              <button
                className="mt-2 cursor-pointer rounded-lg border border-white bg-transparent px-12 py-2.5 text-xs font-semibold tracking-wide text-white uppercase"
                id="login"
                onClick={toggleActiv}
              >
                Sign In
              </button>
            </div>
            <div
              className={cn(
                "absolute top-0 right-0 flex h-full w-1/2 translate-x-0 flex-col items-center justify-center px-[30px] text-center transition-all duration-[600ms] ease-in-out",
                activ && "translate-x-0"
              )}
            >
              <h1 className="text-4xl font-medium">Welcome To</h1>
              <p className="my-5 text-sm">Sign Up With Email & Passowrd</p>
              <button
                className="mt-2 cursor-pointer rounded-lg border border-white bg-transparent px-12 py-2.5 text-xs font-semibold tracking-wide text-white uppercase"
                id="register"
                onClick={toggleActiv}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
