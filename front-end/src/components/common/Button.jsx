import { motion } from 'framer-motion';

const variants = {
  primary: 'bg-forest-600 text-white hover:bg-forest-700 active:bg-forest-800',
  secondary: 'bg-transparent border-2 border-forest-600 text-forest-700 hover:bg-forest-50 active:bg-forest-100',
  outline: 'bg-transparent border border-charcoal-300 text-charcoal-700 hover:border-charcoal-400 hover:bg-charcoal-50',
  rust: 'bg-rust-600 text-white hover:bg-rust-700 active:bg-rust-800',
  white: 'bg-white text-forest-700 hover:bg-charcoal-50 active:bg-charcoal-100',
  ghost: 'bg-transparent text-forest-600 hover:bg-forest-50 hover:text-forest-700',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-3.5 text-base',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  type = 'button',
  disabled = false,
  className = '',
  icon: Icon,
  iconPosition = 'right',
  loading = false,
  ...props
}) {
  const baseClasses = `inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-200 focus-visible:outline-2 focus-visible:outline-forest-500 focus-visible:outline-offset-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer`;
  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <>
      {loading && (
        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
        </svg>
      )}
      {Icon && iconPosition === 'left' && !loading && <Icon size={16} />}
      {children}
      {Icon && iconPosition === 'right' && !loading && <Icon size={16} />}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={onClick}
        {...props}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      className={classes}
      disabled={disabled || loading}
      onClick={onClick}
      whileHover={!disabled ? { scale: 1.02 } : {}}
      whileTap={!disabled ? { scale: 0.98 } : {}}
      {...props}
    >
      {content}
    </motion.button>
  );
}
