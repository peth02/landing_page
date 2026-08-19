"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function TopNav() {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
  ];

  return (
    <div className="max-w-5xl mx-auto flex items-center justify-between h-16 px-4 sm:px-8">
      {/* Navigation Links */}
      <nav className="flex items-center gap-2 sm:gap-4">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`px-3 py-1.5 rounded-lg text-m font-bold text-white ${isActive && "underline underline-offset-8"}`}
            >
              {item.name}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
