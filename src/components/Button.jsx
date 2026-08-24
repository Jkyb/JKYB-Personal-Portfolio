import { forwardRef } from "react";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-wide transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:cursor-not-allowed disabled:opacity-50";

const variants = {
  primary:
    "bg-ink text-background hover:bg-accent hover:text-white active:scale-[0.98]",
  outline:
    "border border-ink/20 text-ink hover:border-accent hover:text-accent active:scale-[0.98]",
  accent:
    "bg-accent text-white hover:bg-ink active:scale-[0.98]",
};

/**
 * Renders as <a> when `href` is provided, otherwise as <button>.
 */
const Button = forwardRef(
  ({ as, href, variant = "primary", className = "", children, ...props }, ref) => {
    const classes = `${base} ${variants[variant] ?? variants.primary} ${className}`;

    if (href) {
      return (
        <a ref={ref} href={href} className={classes} {...props}>
          {children}
        </a>
      );
    }

    const Component = as || "button";
    return (
      <Component ref={ref} className={classes} {...props}>
        {children}
      </Component>
    );
  }
);

Button.displayName = "Button";

export default Button;
