import { DashboardNavbar } from '@/components/typemaster/DashboardNavbar';

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-black">
      <DashboardNavbar />
      <main className="pt-16">
        {children}
      </main>
    </div>
  );
}

