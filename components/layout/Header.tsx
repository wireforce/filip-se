import { ThemePills } from "@/components/ui/ThemePills";
import { FilipLogo } from "@/components/ui/FilipLogo";

// Server Component — ThemePills is the only client boundary
export function Header() {
  return (
    <header
      className="fixed top-0 inset-x-0 z-50 px-6 py-3 flex items-center justify-between border-b"
      style={{
        backgroundColor: "var(--color-header-bg)",
        backdropFilter: "var(--backdrop-header)",
        WebkitBackdropFilter: "var(--backdrop-header)",
        borderColor: "var(--color-border)",
      }}
    >
      <FilipLogo />
      <ThemePills />
    </header>
  );
}
