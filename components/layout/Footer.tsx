import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram, Mail } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  const footerLinks = {
    Platform: [
      { name: "Find Mentors", href: "/dashboard/mentors" },
      { name: "Become a Mentor", href: "/auth/register" },
      { name: "How It Works", href: "/#how-it-works" },
    ],
    Company: [
      { name: "About Us", href: "/about" },
      { name: "Contact", href: "/contact" },
      { name: "Sponsor", href: "/sponsor" },
    ],
    Legal: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Cookie Policy", href: "/cookie" },
    ],
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                <span className="text-white font-bold text-lg">BG</span>
              </div>
              <span className="text-lg font-poppins font-bold text-foreground">
                Bridge Gaza
              </span>
            </Link>
            <p className="text-muted-foreground text-sm mb-4">
              Connecting Gaza to the world through mentorship and collaboration.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-full bg-muted/20 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-smooth"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-poppins font-semibold text-foreground mb-4">
                {category}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-primary text-sm transition-smooth"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Bridge Gaza. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <Mail size={16} />
            <a
              href="mailto:hello@bridgegaza.org"
              className="hover:text-primary transition-smooth"
            >
              hello@bridgegaza.org
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
