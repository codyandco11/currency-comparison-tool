export const metadata = {
  title: "Currency Comparison Tool",
  description: "Compare IDR and USD to find the best exchange value.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
