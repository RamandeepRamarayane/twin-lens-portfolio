import "./globals.css";
import Navbar from "@/components/Navbar";
import { Inter, Oswald, Patrick_Hand } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const oswald = Oswald({ subsets: ["latin"], variable: "--font-heading", display: "swap" });
const patrickHand = Patrick_Hand({
    weight: "400",
    subsets: ["latin"],
    variable: "--font-hand",
    display: "swap",
});

export const metadata = {
    title: process.env.NEXT_PUBLIC_BRAND_NAME || "Twin Lens Production",
    description: "Professional video editing & services for high impact conversions.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body
                className={`${inter.variable} ${oswald.variable} ${patrickHand.variable} bg-background text-text-main min-h-screen font-body antialiased`}
            >
                <Navbar />
                {children}
            </body>
        </html>
    );
}
