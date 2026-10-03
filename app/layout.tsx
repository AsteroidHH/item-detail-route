import "./globals.css";

export const metadata = {
  title: "Mini Blog",
  description: "Item Detail Route assignment starter",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
