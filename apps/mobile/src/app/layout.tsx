interface RootLayoutProps {
  children: React.ReactNode;
}

import "@/app/globals.css";

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* todo: removed the fixed outline border */}
      <body>{children}</body>
    </html>
  );
}
