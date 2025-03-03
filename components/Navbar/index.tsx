"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-black shadow-md"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold">
              <Image src="/logo.webp" alt="logo" width={52} height={52} />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                href="/"
                className="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-white/20 transition"
              >
                Home
              </Link>
              <Link
                href="/terms"
                className="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-white/20 transition"
              >
                Terms
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger
                  className="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-white/20 flex items-center transition"
                >
                  Products
                  <ChevronDown className="ml-1 h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem asChild>
                    <Link href="/setup" className="w-full cursor-pointer">
                      How to Setup
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="https://forms.gle/XX9JRv5btQFmfEGV6" target="_blank" className="w-full cursor-pointer">
                      Buy a PC
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          {/* Contact */}
          <div className="hidden md:block">
            <button
              className="flex justify-center gap-2 items-center bg-black text-white hover:text-white mx-auto backdrop-blur-md lg:font-semibold isolation-auto before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-amber-500 transition-colors before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-2 py-1 overflow-hidden border border-white rounded-full group"
              onClick={() => router.push("mailto:support@a2dpcfactory.com")}
            >
              Contact
              <svg
                className="w-8 h-8 justify-end group-hover:rotate-90 text-gray-50 ease-linear duration-300 rounded-full border border-gray-50 group-hover:bg-black p-2 rotate-45"
                viewBox="0 0 16 19"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                  className="fill-gray-50 group-hover:fill-gray-50"
                ></path>
              </svg>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <X className="h-8 w-8" />
              ) : (
                <Menu className="h-8 w-8" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 rounded-b-lg bg-black/90">
              <Link
                href="/"
                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white/20"
              >
                Home
              </Link>
              <Link
                href="/terms"
                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white/20"
              >
                Terms
              </Link>
              <Link
                href="/setup"
                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white/20"
              >
                How to Setup
              </Link>
              <Link
                href="/products/buy"
                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white/20"
              >
                Buy a PC
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white/20"
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;