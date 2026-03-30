
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}) => {
  const baseStyles = 'font-medium transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variantStyles = {
    primary: 'btn-primary hover:opacity-90 focus:ring-primary',
    secondary: 'bg-surface-container-high text-on_surface hover:bg-surface-container-highest focus:ring-secondary',
    ghost: 'text-primary hover:bg-surface-container-high focus:ring-primary',
  };

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-body-sm rounded-r-sm',
    md: 'px-4 py-2 text-body-lg rounded-r-md',
    lg: 'px-6 py-3 text-body-lg rounded-r-lg',
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
