import { TopMenu } from "@/components";
import { ReactNode } from "react";

export default function ShopLayout({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-screen">
      <TopMenu />
      {children}
    </main>
  );
}
