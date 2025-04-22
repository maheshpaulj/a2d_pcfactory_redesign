"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useTransitionRouter } from "next-view-transitions";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useTransitionRouter();

  function slideInOut() {
    document.documentElement.animate(
      [
        {
          opacity: 1,
          scale: 1,
          transform: "translateY(0)",
        },
        {
          opacity: 0.2,
          scale: 0.9,
          transform: "translateY(-35%)",
        },
      ],
      {
        duration: 1500,
        easing: "cubic-bezier(0.87, 0, 0.13, 1)",
        fill: "forwards",
        pseudoElement: "::view-transition-old(root)",
      }
    );

    document.documentElement.animate(
      [
        {
          clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
        },
        {
          clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
        },
      ],
      {
        duration: 1500,
        easing: "cubic-bezier(0.87, 0, 0.13, 1)",
        fill: "forwards",
        pseudoElement: "::view-transition-new(root)",
      }
    );
  }

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
        isScrolled ? "bg-black shadow-md" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              onClick={(e) => {
                e.preventDefault();
                router.push("/", { onTransitionReady: slideInOut });
              }}
              href="/"
              className="text-xl font-bold"
            >
              <Image src="/logo.webp" alt="logo" width={52} height={52} />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/" passHref>
                    <NavigationMenuLink
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "text-white hover:bg-white/20 transition bg-transparent hover:text-white"
                      )}
                      onClick={(e) => {
                        e.preventDefault();
                        router.push("/", { onTransitionReady: slideInOut });
                      }}
                    >
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/terms" passHref>
                    <NavigationMenuLink
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "text-white hover:text-white hover:bg-white/20 transition bg-transparent "
                      )}
                      onClick={(e) => {
                        e.preventDefault();
                        router.push("/terms", { onTransitionReady: slideInOut });
                      }}
                    >
                      Terms
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-white hover:text-white hover:bg-white/20 bg-transparent">
                    Products
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 w-[200px] bg-black/90 border-black">
                      <li>
                        <NavigationMenuLink asChild>
                          <a
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors text-white hover:bg-white/20"
                            href="/setup"
                            onClick={(e) => {
                              e.preventDefault();
                              router.push("/setup", {
                                onTransitionReady: slideInOut,
                              });
                            }}
                          >
                            How to Setup
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors text-white hover:bg-white/20"
                            href="https://forms.gle/XX9JRv5btQFmfEGV6"
                            target="_blank"
                          >
                            Buy a PC
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
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
                  d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18V1H7V18H9Z"
                  className="fill-gray-50 group-hover:fill-gray-50"
                />
              </svg>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/20"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  <span className="sr-only">Open main menu</span>
                  {isMobileMenuOpen ? (
                    <X className="h-8 w-8" />
                  ) : (
                    <Menu className="h-8 w-8" />
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-black/90 border-none">
                <div className="flex flex-col gap-2 mt-8">
                  <Link
                    href="/"
                    className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white/20"
                    onClick={(e) => {
                      e.preventDefault();
                      router.push("/", { onTransitionReady: slideInOut });
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    Home
                  </Link>
                  <Link
                    href="/terms"
                    className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white/20"
                    onClick={(e) => {
                      e.preventDefault();
                      router.push("/terms", { onTransitionReady: slideInOut });
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    Terms
                  </Link>
                  <Link
                    href="/setup"
                    className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white/20"
                    onClick={(e) => {
                      e.preventDefault();
                      router.push("/setup", { onTransitionReady: slideInOut });
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    How to Setup
                  </Link>
                  <Link
                    href="https://forms.gle/XX9JRv5btQFmfEGV6"
                    target="_blank"
                    className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white/20"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Buy a PC
                  </Link>
                  <Link
                    href="/contact"
                    className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white/20"
                    onClick={(e) => {
                      e.preventDefault();
                      router.push("/contact", { onTransitionReady: slideInOut });
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    Contact
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;