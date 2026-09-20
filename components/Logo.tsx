import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";

type LogoProps = {
  className?: string;
  href?: string | null;
  variant?: "full" | "mark" | "footer";
  onClick?: () => void;
  priority?: boolean;
};

const assets = {
  full: {
    src: "/logo.png",
    width: 2144,
    height: 520,
  },
  mark: {
    src: "/logo-mark.png",
    width: 560,
    height: 520,
  },
  footer: {
    src: "/logo-footer.png",
    width: 2144,
    height: 520,
  },
} as const;

export function Logo({
  className,
  href = "/",
  variant = "full",
  onClick,
  priority = false,
}: LogoProps) {
  const asset = assets[variant];
  const image = (
    <Image
      src={asset.src}
      alt="Rainer Autoteile"
      width={asset.width}
      height={asset.height}
      priority={priority}
      className={cn(
        "w-auto",
        variant === "mark" ? "h-8 sm:h-9" : "h-8 sm:h-10",
        className,
      )}
    />
  );

  if (!href) {
    return image;
  }

  return (
    <Link
      href={href}
      onClick={onClick}
      aria-label="Rainer Autoteile, zur Startseite"
      className="inline-flex shrink-0 items-center"
    >
      {image}
    </Link>
  );
}
