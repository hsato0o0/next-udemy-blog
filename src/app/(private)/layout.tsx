import PrivateHeder from '@/components/layouts/PrivateHeder';

export default function PrivateLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <PrivateHeder />
      {children}
    </>
  );
}
