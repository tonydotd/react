import Header from "@/components/Header";
import "./globals.css";
import { ChildrenProp } from "@/types/common";

export const metadata = {
  title: "NextLevel Food",
  description: "Delicious meals, shared by a food-loving community.",
};

export default function RootLayout({ children }: ChildrenProp) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
