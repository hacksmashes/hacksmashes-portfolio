import * as React from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface BaseProps {
  variant?: ButtonVariant;
  className?: string;
  children: React.ReactNode;
}

type ButtonAsLink = BaseProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type ButtonAsButton = BaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonProps = ButtonAsLink | ButtonAsButton;

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-accent-fg hover:opacity-90 border border-transparent",
  secondary:
    "bg-transparent text-fg border border-border hover:border-border-strong hover:bg-bg-subtle",
  ghost: "bg-transparent text-fg-muted hover:text-fg border border-transparent",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-md px-5 py-2.5 text-sm font-medium transition-colors duration-200 ease-editorial disabled:opacity-50 disabled:pointer-events-none";

export function Button({ variant = "primary", className, children, ...props }: ButtonProps) {
  const classes = cn(baseClasses, variantClasses[variant], className);

  if ("href" in props && props.href) {
    const { href, ...rest } = props as React.AnchorHTMLAttributes<HTMLAnchorElement> & {
      href: string;
    };
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
