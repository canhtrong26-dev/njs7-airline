import "./globals.css";

export const metadata = {
  title: "Air Algérie",
  description: "Airline website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}