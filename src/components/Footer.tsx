import Image from "next/image";
import Link from "next/link";
import { navLinks, siteConfig } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-[100rem] mx-auto px-6 md:px-16 lg:px-20 py-14">
        <div className="relative w-40 aspect-[2.77/1] mb-10">
          <Image
            src="/images/logo/ATLAS_PRECAST_BLUE.png"
            alt="Atlas Precast"
            fill
            sizes="160px"
            className="object-contain object-left"
            style={{ filter: "brightness(0) invert(1)" }}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-6">
          <div className="space-y-4 text-sm">
            <p>Copyright © {new Date().getFullYear()} ATLAS PRECAST</p>
            <p className="font-bold cursor-pointer hover:text-accent transition-colors">
              Privacy Policy
            </p>
          </div>

          <div className="lg:px-10 lg:border-x-2 border-accent/50">
            <div className="flex flex-col gap-3 text-sm">
              {navLinks.map((link) =>
                link.external ? (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>
          </div>

          <div className="space-y-4 text-sm">
            <p>{siteConfig.phone}</p>
            <a href={`mailto:${siteConfig.email}`} className="font-bold hover:text-accent transition-colors">
              {siteConfig.email}
            </a>
            {siteConfig.addresses.map((a) => (
              <p key={a}>{a}</p>
            ))}
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 pt-2 hover:opacity-80 transition-opacity"
              aria-label="LinkedIn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 32 32" fill="none">
                <path
                  d="M16 0C7.1625 0 0 7.1625 0 16C0 24.8375 7.1625 32 16 32C24.8375 32 32 24.8375 32 16C32 7.1625 24.8375 0 16 0ZM11.525 22.6938H8.40625V12.7125H11.525V22.6938ZM9.88125 11.4625H9.85625C8.725 11.4625 7.99375 10.7 7.99375 9.73125C7.99375 8.74375 8.75 8 9.9 8C11.05 8 11.7563 8.74375 11.7812 9.73125C11.7875 10.6938 11.0563 11.4625 9.88125 11.4625ZM24 22.6938H20.4625V17.5312C20.4625 16.1812 19.9125 15.2563 18.6938 15.2563C17.7625 15.2563 17.2437 15.8813 17.0063 16.4813C16.9188 16.6938 16.9312 16.9937 16.9312 17.3V22.6938H13.425C13.425 22.6938 13.4688 13.5437 13.425 12.7125H16.9312V14.2812C17.1375 13.5938 18.2563 12.6187 20.0438 12.6187C22.2625 12.6187 24 14.0562 24 17.1437V22.6938Z"
                  fill="#ffffff"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
