import { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <main className="flex justify-center  ">
      <div className="w-full sm:w-[350px] px-10">{children}</div>
    </main>
  );
}
