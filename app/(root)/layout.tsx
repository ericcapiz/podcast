export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <p className="text-white-1">Left sidebar</p>
      {children}
      <p className="text-white-1">Right sidebar</p>
    </div>
  );
}
