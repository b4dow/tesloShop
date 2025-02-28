import { TopMenu } from "@/components";
import { ReactNode } from "react";

export default function ShopLayout({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-screen">
      <TopMenu />
      <div className="px-0 sm:px-5">{children}</div>
    </main>
  );
}
