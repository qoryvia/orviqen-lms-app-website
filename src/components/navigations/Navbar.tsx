"use client";

import React, {
  useEffect,
  useState,
} from "react";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import {
  FiMenu,
  FiX,
  FiSearch,
  FiShoppingCart,
  FiUser,
  FiLayout,
} from "react-icons/fi";

import faviconlogo from "../../assets/logos/favicon.png";

import {
  getStoredAccessToken,
} from "@/features/auth/auth.storage";

const CRIMSON = "#A41034";

const mainNavigation = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Courses",
    href: "/courses",
    hasDropdown: true,
  },
  {
    label: "Study Abroad",
    href: "/study-abroad",
  },
  {
    label: "About Us",
    href: "/about",
  },
  {
    label: "Instructors",
    href: "/instructors",
  },
  {
    label: "Blog",
    href: "/blogs",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

const Navbar = () => {
  const pathname = usePathname();

  const [mobileMenuOpen, setMobileMenuOpen] =
    useState(false);

  /*
   * Keep auth-dependent links hidden until localStorage
   * has been checked to avoid showing guest links on reload.
   */
  const [token, setToken] = useState<boolean | null>(null);

  /* =========================================================
     AUTH TOKEN
  ========================================================== */

  useEffect(() => {
    const checkAuthToken = () => {
      const accessToken =
        getStoredAccessToken();

      setToken(Boolean(accessToken));
    };

    /*
     * Initial token check.
     */
    checkAuthToken();

    /*
     * React to localStorage changes from
     * another browser tab/window.
     */
    const handleStorageChange = (
      event: StorageEvent
    ) => {
      if (
        event.key === "eklavya_access_token"
      ) {
        checkAuthToken();
      }
    };

    window.addEventListener(
      "storage",
      handleStorageChange
    );

    /*
     * React to authentication changes
     * within the same browser tab.
     */
    const handleAuthChange = () => {
      checkAuthToken();
    };

    window.addEventListener(
      "auth-storage-change",
      handleAuthChange
    );

    return () => {
      window.removeEventListener(
        "storage",
        handleStorageChange
      );

      window.removeEventListener(
        "auth-storage-change",
        handleAuthChange
      );
    };
  }, []);

  /* =========================================================
     MOBILE MENU
  ========================================================== */

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  /* =========================================================
     ACTIVE NAVIGATION
  ========================================================== */

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  };

  const navigationLinkClass = (
    href: string
  ) =>
    `relative flex items-center gap-1.5 py-2 text-[14px] font-medium transition-colors ${
      isActive(href)
        ? "text-[#A41034]"
        : "text-slate-700 hover:text-[#A41034]"
    }`;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur-md">
      <nav aria-label="Main navigation">
        <div className="mx-auto flex min-h-[78px] items-center justify-between gap-6 px-5 sm:px-6 xl:px-30">

          {/* =========================================================
              LEFT - BRAND
          ========================================================== */}

          <Link
            href="/"
            onClick={closeMobileMenu}
            className="group flex shrink-0 items-center gap-3"
            aria-label="Eklavya Education Home"
          >
            {/* Logo */}
            <div className="flex h-11 w-11 items-center justify-center overflow-hidden">
              <Image
                src={faviconlogo}
                alt="Eklavya Education logo"
                width={44}
                height={44}
                priority
                className="h-11 w-11 object-contain"
              />
            </div>

            {/* Brand */}
            <div className="leading-none">
              <div className="flex items-baseline gap-1">
                <span className="font-serif text-[21px] font-bold tracking-[-0.03em] text-slate-900 sm:text-[23px]">
                  Eklavya
                </span>

                <span
                  className="font-serif text-[21px] font-bold tracking-[-0.03em] sm:text-[23px]"
                  style={{
                    color: CRIMSON,
                  }}
                >
                  Education
                </span>
              </div>

              <div className="mt-1 text-[7px] font-semibold uppercase tracking-[0.25em] text-slate-500 sm:text-[8px]">
                Learn Today, Lead Tomorrow
              </div>
            </div>
          </Link>

          {/* =========================================================
              CENTER - DESKTOP NAVIGATION
          ========================================================== */}

          <div className="hidden flex-1 justify-center lg:flex">
            <div className="flex items-center gap-5 xl:gap-7">
              {mainNavigation.map(
                (item) => {
                  const active =
                    isActive(item.href);

                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      className={navigationLinkClass(
                        item.href
                      )}
                    >
                      <span>
                        {item.label}
                      </span>

                      {active && (
                        <span
                          className="absolute -bottom-[21px] left-0 h-[2px] w-full"
                          style={{
                            backgroundColor:
                              CRIMSON,
                          }}
                        />
                      )}
                    </Link>
                  );
                }
              )}
            </div>
          </div>

          {/* =========================================================
              RIGHT - DESKTOP ACTIONS
          ========================================================== */}

          <div className="hidden shrink-0 items-center gap-1.5 lg:flex">

            {/* Search */}
            <Link
              href="/search"
              aria-label="Search"
              className="flex h-10 w-10 items-center justify-center text-slate-700 transition-colors hover:text-[#A41034]"
            >
              <FiSearch size={18} />
            </Link>

            {/* Cart */}
            <Link
              href="/cart"
              aria-label="Shopping cart"
              className="relative flex h-10 w-10 items-center justify-center text-slate-700 transition-colors hover:text-[#A41034]"
            >
              <FiShoppingCart size={18} />

              <span
                className="absolute right-0.5 top-1 flex h-[15px] min-w-[15px] items-center justify-center rounded-full px-1 text-[8px] font-bold text-white"
                style={{
                  backgroundColor:
                    CRIMSON,
                }}
              >
                0
              </span>
            </Link>

            {/* =====================================================
                AUTHENTICATED USER
            ====================================================== */}

            <div className="ml-2 h-10 w-40 shrink-0">
              {token === null ? (
                <span
                  aria-hidden="true"
                  className="block h-full w-full"
                />
              ) : token ? (
                <Link
                  href="/dashboard"
                  className="inline-flex h-full w-full items-center justify-center gap-2 bg-[#A41034] px-3 text-[13px] font-semibold text-white transition-opacity hover:opacity-90"
                >
                  <FiLayout size={15} />
                  Dashboard
                </Link>
              ) : (
                <Link
                  href="/login"
                  className="inline-flex h-full w-full items-center justify-center gap-2 bg-[#A41034] px-3 text-[13px] font-semibold text-white transition-opacity hover:opacity-90"
                >
                  <FiUser size={15} />
                  Login / Sign Up
                </Link>
              )}
            </div>
          </div>

          {/* =========================================================
              MOBILE MENU BUTTON
          ========================================================== */}

          <button
            type="button"
            onClick={() =>
              setMobileMenuOpen(
                (prev) => !prev
              )
            }
            aria-label={
              mobileMenuOpen
                ? "Close menu"
                : "Open menu"
            }
            aria-expanded={
              mobileMenuOpen
            }
            className="flex h-10 w-10 items-center justify-center border border-slate-200 text-slate-800 transition-colors hover:border-[#A41034] hover:text-[#A41034] lg:hidden"
          >
            {mobileMenuOpen ? (
              <FiX size={20} />
            ) : (
              <FiMenu size={20} />
            )}
          </button>
        </div>
      </nav>

      {/* =============================================================
          MOBILE NAVIGATION
      ============================================================== */}

      {mobileMenuOpen && (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <div className="mx-auto max-h-[calc(100vh-78px)] overflow-y-auto px-5 py-5 sm:px-6">

            {/* Navigation */}
            <div className="space-y-1">
              {mainNavigation.map(
                (item) => {
                  const active =
                    isActive(item.href);

                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={
                        closeMobileMenu
                      }
                      className={`flex items-center justify-between px-4 py-3 text-sm font-medium transition-colors ${
                        active
                          ? "bg-[#A41034]/5 text-[#A41034]"
                          : "text-slate-800 hover:bg-slate-50 hover:text-[#A41034]"
                      }`}
                    >
                      <span>
                        {item.label}
                      </span>
                    </Link>
                  );
                }
              )}
            </div>

            {/* =====================================================
                MOBILE ACTIONS
            ====================================================== */}

            <div className="mt-5 border-t border-slate-200 pt-5">

              <div className="grid grid-cols-2 gap-3">

                {/* Search */}
                <Link
                  href="/search"
                  onClick={
                    closeMobileMenu
                  }
                  className="flex items-center justify-center gap-2 border border-slate-200 px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:border-[#A41034] hover:text-[#A41034]"
                >
                  <FiSearch size={16} />
                  Search
                </Link>

                {/* Cart */}
                <Link
                  href="/cart"
                  onClick={
                    closeMobileMenu
                  }
                  className="flex items-center justify-center gap-2 border border-slate-200 px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:border-[#A41034] hover:text-[#A41034]"
                >
                  <FiShoppingCart
                    size={16}
                  />
                  Cart
                </Link>
              </div>

              {/* Auth */}
              <div className="mt-3 grid grid-cols-1 gap-2">
                {token === null ? (
                  <>
                    <span
                      aria-hidden="true"
                      className="h-11"
                    />
                    <span
                      aria-hidden="true"
                      className="h-11"
                    />
                  </>
                ) : token ? (
                  <>
                    <Link
                      href="/dashboard"
                      onClick={closeMobileMenu}
                      className="flex h-11 items-center justify-center gap-2 bg-[#A41034] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#8C0D2A]"
                    >
                      <FiLayout size={16} />
                      Dashboard
                    </Link>

                    <Link
                      href="/profile"
                      onClick={closeMobileMenu}
                      className="flex h-11 items-center justify-center gap-2 border border-[#A41034] px-5 text-sm font-semibold text-[#A41034] transition-colors hover:bg-[#A41034]/5"
                    >
                      <FiUser size={16} />
                      My Profile
                    </Link>
                  </>
                ) : (
                  <>
                    <Link
                      href="/login"
                      onClick={closeMobileMenu}
                      className="flex h-11 items-center justify-center gap-2 bg-[#A41034] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#8C0D2A]"
                    >
                      <FiUser size={16} />
                      Login / Sign Up
                    </Link>

                    <Link
                      href="/register"
                      onClick={closeMobileMenu}
                      className="flex h-11 items-center justify-center gap-2 border border-[#A41034] px-5 text-sm font-semibold text-[#A41034] transition-colors hover:bg-[#A41034]/5"
                    >
                      Create an account
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;