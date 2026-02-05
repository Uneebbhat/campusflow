import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CampusFlow - Best School Management System | Attendance, Grades, Timetable",
  description: "CampusFlow is a comprehensive school management platform for admins, principals, teachers, students, and parents. Streamline attendance, grades, timetables, and internal communication efficiently.",
  keywords: [
    "CampusFlow",
    "school management system",
    "SMS",
    "attendance management",
    "grades management",
    "timetable management",
    "school portal",
    "teacher dashboard",
    "student portal",
    "parent portal",
    "academic management",
    "school software",
    "education platform",
    "school administration"
  ],
  authors: [{ name: "Uneeb", url: "https://www.linkedin.com/in/uneeb-bhatti/" }],
  creator: "Uneeb",
  publisher: "CampusFlow",
  // metadataBase: new URL("https://www.campusflow.com"),
  openGraph: {
    type: "website",
    url: "https://www.campusflow.com",
    title: "CampusFlow - Best School Management System",
    description: "Manage your school efficiently with CampusFlow. Track attendance, grades, timetables, and communicate seamlessly with teachers, students, and parents.",
    siteName: "CampusFlow",
    images: [
      {
        url: "https://www.campusflow.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "CampusFlow School Management System"
      }
    ]
  },
  alternates: {
    // canonical: "https://www.campusflow.com"
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Toaster />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
