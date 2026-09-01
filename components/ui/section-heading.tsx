import { cn } from "@/lib/utils";

export function SectionHeading({
  tag,
  title,
  description,
  align = "left",
  className,
}: {
  tag: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <p className="gutter-mark mb-3">{`// ${tag}`}</p>
      <h2 className="font-display text-display-md font-medium text-fg text-balance">{title}</h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-fg-muted text-pretty">{description}</p>
      ) : null}
    </div>
  );
}
