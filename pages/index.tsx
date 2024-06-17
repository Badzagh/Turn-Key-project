import Home from "@/components/home/Home";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function index() {
  return (
    <>
      <Home />
    </>
  );
}
