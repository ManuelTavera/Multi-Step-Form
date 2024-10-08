import "./style.css";
import { Ubuntu } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";

import StyledComponentsRegistry from "@/component/StyledComponentsRegistry";

export const metadata = {
  title: "Multi Step Form",
  description: "Generated by create next app",
};

const ubuntuFont = Ubuntu({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={ubuntuFont.className}>
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        <SpeedInsights />
      </body>
    </html>
  );
}
