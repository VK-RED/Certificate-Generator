import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster"
import { RecoilRoot} from "recoil"
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Certificate Generator",
  description: "Generate Certificate in Seconds",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <RecoilRoot>
              {children}
              <Toaster />
            </RecoilRoot>
            
          </ThemeProvider>
        </body>
      </html>
  );
}
