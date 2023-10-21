import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div>
        <div id="centered" className="flex items-center justify-center mt-12">
          <Image src="/logo.png" alt="" width={500} height={500} />
        </div>

        <Link href="/log">Log</Link>
      </div>
    </main>
  );
}
