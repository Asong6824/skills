
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
}

export const Input: React.FC<InputProps> = ({
  icon,
  className = '',
  ...props
}) => {
  return (
    <div className="relative">
      {icon && (
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-on_surface_variant">
          {icon}
        </div>
      )}
      <input
        className={`w-full bg-surface-container-low text-on_surface placeholder:text-on_surface_variant rounded-r-md px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all ${
          icon ? 'pl-10' : ''
        } ${className}`}
        {...props}
      />
    </div>
  );
};
