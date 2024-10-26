import { Nunito_Sans, Pacifico } from "next/font/google";

export const nunito = Nunito_Sans({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
});

export const pacifico = Pacifico({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});
