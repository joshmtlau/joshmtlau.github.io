import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export function MobileMenuButton() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const mobileMenu = document.getElementById("mobile-menu");
    if (!mobileMenu) return;

    const updateState = () => {
      setIsOpen(!mobileMenu.classList.contains("hidden"));
    };

    // Initial state
    updateState();

    // Watch for class changes on the menu
    const observer = new MutationObserver(updateState);
    observer.observe(mobileMenu, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = () => {
    const mobileMenu = document.getElementById("mobile-menu");
    if (!mobileMenu) return;

    const isHidden = mobileMenu.classList.contains("hidden");
    if (isHidden) {
      mobileMenu.classList.remove("hidden");
      setIsOpen(true);
    } else {
      mobileMenu.classList.add("hidden");
      setIsOpen(false);
    }
  };

  return (
    <Button
      variant="ghost"
      className="md:hidden text-jet hover:text-amaranth hover:bg-transparent h-16 w-16 p-0 [&_svg]:!size-8"
      onClick={handleClick}
      aria-label="Toggle menu"
      aria-expanded={isOpen}
    >
      {isOpen ? (
        <X className="h-8 w-8" />
      ) : (
        <Menu className="h-8 w-8" />
      )}
    </Button>
  );
}

