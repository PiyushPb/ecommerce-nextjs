import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { requireAuth } from "@/lib/authCheck";
import { redirect } from "next/navigation";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await requireAuth();

  if (!user) {
    redirect("/auth/signup");
  }
  return (
    <main>
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}
