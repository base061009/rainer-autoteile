import Link from "next/link";
import { cn } from "@/lib/cn";

type CommonProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
};

type ButtonAsButton = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps & {
  href: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  "aria-label"?: string;
};

const baseStyles =
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg px-6 py-3 text-sm font-semibold transition-colors duration-200 w-full sm:w-auto touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 md:text-base";

function variantStyles(variant: CommonProps["variant"] = "primary") {
  if (variant === "secondary") {
    return "border border-white/70 bg-transparent text-white hover:bg-white/10";
  }

  return "bg-primary text-white hover:bg-primary-dark";
}

export function Button({
  children,
  className,
  variant = "primary",
  ...props
}: ButtonAsButton | ButtonAsLink) {
  const styles = cn(baseStyles, variantStyles(variant), className);

  if ("href" in props && props.href) {
    return (
      <Link
        href={props.href}
        className={styles}
        onClick={props.onClick}
        aria-label={props["aria-label"]}
      >
        <span className="inline-flex items-center justify-center whitespace-nowrap">
          {children}
        </span>
      </Link>
    );
  }

  const buttonProps = props as ButtonAsButton;

  return (
    <button className={styles} {...buttonProps}>
      <span className="inline-flex items-center justify-center whitespace-nowrap">
        {children}
      </span>
    </button>
  );
};
