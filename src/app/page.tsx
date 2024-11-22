import { Metadata } from "next";
import { Button } from "@/components/ui/button";

// import Image from "next/image";
export const metadata: Metadata = {
  title: "Landing Page",
  description: "This is landing page of Patungan Kelas  ",
};

const Home = () =>  {
  return (
    <section className="h-screen flex flex-col gap-3 items-center justify-center">
      <h1 className="text-3xl">Hello World</h1>
      <Button className="text-xl p-5">Click Here!</Button>
    </section>
  );
}
export default Home;
