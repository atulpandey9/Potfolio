export default function TechBadge({ icon: Icon, text }) {
  return (
    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-surface border border-border-dark text-xs font-medium text-text-secondary select-none hover:bg-surface-hover hover:border-white/20 transition-all cursor-default whitespace-nowrap">
      {Icon && <Icon className="w-3.5 h-3.5 shrink-0" />}
      <span>{text}</span>
    </span>
  );
}
