export const siteConfig = {
  name: "Atlas Precast",
  description: "Atlas Precast website",
  phone: "(08) 6498 7050",
  email: "enquiry@atlasprecast.com",
  addresses: ["14 Leath Rd, Naval Base WA 6165", "PO Box 372 Kwinana, WA 6966"],
  linkedin: "https://www.linkedin.com/company/atlasprecast/",
  careersUrl: "https://ambrosiumgroup.careers.hibob.com/jobs",
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Our Work", href: "/our-work" },
  { label: "Careers", href: siteConfig.careersUrl, external: true },
  { label: "Contact", href: "/#contact-us" },
];

export const stats = [
  { end: 60, suffix: "+", label: "Years of Industry Experience" },
  { end: 1100, suffix: "m²", label: "Wet-Cast Production Bed Space" },
  { end: 3500, suffix: "m+", label: "A-CORE Produced Per Week" },
  { end: 4, suffix: "", label: "Adjustable Beam Moulds" },
];
