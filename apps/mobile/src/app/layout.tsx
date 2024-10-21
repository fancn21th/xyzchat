import "@/app/globals.css";
import { cn } from "@/lib/utils";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* todo: removed the fixed outline border */}
      <body
        className={cn(
          "font-sans antialiased w-screen full-viewport-height m-auto overflow-hidden"
        )}
      >
        {children}
      </body>
    </html>
  );
}
