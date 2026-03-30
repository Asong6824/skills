
interface ChipProps {
  label: string;
  variant?: 'default' | 'active';
  onClick?: () => void;
}

export const Chip: React.FC<ChipProps> = ({
  label,
  variant = 'default',
  onClick,
}) => {
  const baseStyles = 'inline-flex items-center px-3 py-1 text-label-sm rounded-full transition-colors';
  const variantStyles = {
    default: 'bg-surface-container-high text-on_surface_variant',
    active: 'bg-primary text-on_primary',
  };

  return (
    <span
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${onClick ? 'cursor-pointer hover:opacity-80' : ''}`}
    >
      {label}
    </span>
  );
};
