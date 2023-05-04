import DarkModeToggle from "@/components/DarkModeToggle";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white/35 sticky top-0 z-50 w-full">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between gap-x-6 p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link
            className="flex cursor-pointer flex-row items-end gap-2"
            href="/"
          >
            <Image
              className="block dark:hidden"
              src="/geevee-trim.png"
              alt="GeeVee Studio"
              width={50}
              height={50}
            />
            <Image
              className="hidden dark:block"
              src="/geevee-light.png"
              alt="GeeVee Studio"
              width={50}
              height={50}
            />
            <h1 className="relative flex flex-row items-baseline gap-1 text-2xl font-bold">
              <span className="sr-only">Horizon</span>
              <span className="tracking-tight hover:cursor-pointer">
                geevee<span className="text-emerald-600">studio</span>
              </span>
              {/* <sup className="absolute left-[calc(100%+.1rem)] top-0 text-xs font-bold text-black">
                  [BETA]
                </sup> */}
            </h1>
          </Link>
        </div>
        <div className="hidden lg:flex lg:gap-x-12"></div>
        <div className="flex flex-1 items-center justify-end gap-x-6">
          <div className="flex items-center gap-4">
            <Link href="/dashboard">
              <span className="cursor-pointer text-sm font-semibold leading-6">
                Portfolio
              </span>
            </Link>
            <Link href="/dashboard">
              <span className="cursor-pointer text-sm font-semibold leading-6">
                Clients
              </span>
            </Link>
            <DarkModeToggle />
          </div>
        </div>
      </nav>
    </header>
  );
}
