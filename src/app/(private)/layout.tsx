import PrivateHeder from '@/components/layouts/PrivateHeder';

export default function PrivateLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <PrivateHeder />
      <div className="container mx-auto px-4 py-8">{children}</div>
    </>
  );
}
