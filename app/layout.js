import Header from "./_components/Header";
import { ReservationProvider } from "./_components/ReservationContext";
import "./_styles/globals.css";

import { Josefin_Sans } from "next/font/google";

const josefinSans = Josefin_Sans({ subsets: ["latin"], display: "swap" });

export const metadata = {
  // title: "The Wild Oasis",
  title: {
    template: "%s - The Wild Oasis",
    default: "Welcome The Wild Oasis",
  },
  description: "Where nature's beauty and comfortable living blend seamlessly.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefinSans.className}  antialiased flex flex-col bg-primary-950 min-h-screen text-primary-100`}
      >
        <Header />
        <div className="flex-1 grid  px-8 py-12">
          <main className="max-w-7xl w-full mx-auto  ">
            <ReservationProvider>{children}</ReservationProvider>
          </main>
        </div>
      </body>
    </html>
  );
}
