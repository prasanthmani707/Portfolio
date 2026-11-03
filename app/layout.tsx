import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "./components/ClientLayout";

export const metadata: Metadata = {
  title: "Prasanth | DevOps & Cloud Engineer | AWS, Terraform, Ansible",
  description: "Portfolio of Prasanth - Associate Software Engineer specializing in AWS Serverless architecture, Infrastructure as Code with Terraform & Ansible, and Python automation.",
  keywords: ["DevOps Engineer", "Cloud Engineer", "AWS Serverless", "Terraform", "Ansible", "Python Automation", "Prasanth"],
  authors: [{ name: "Prasanth" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased min-h-screen flex flex-col bg-white text-slate-900">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
