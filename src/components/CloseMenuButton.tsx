import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export function CloseMenuButton() {
  const handleClick = () => {
    const mobileMenu = document.getElementById("mobile-menu");
    if (mobileMenu) {
      mobileMenu.classList.add("hidden");
    }
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      className="text-jet hover:text-amaranth hover:bg-transparent h-12 w-12"
      onClick={handleClick}
      aria-label="Close menu"
    >
      <X className="h-6 w-6" />
    </Button>
  );
}

