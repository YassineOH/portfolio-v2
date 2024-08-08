type Input = {
  variant?: 'default' | 'secondary' | 'outline';
  size?: 'lg' | 'sm' | 'default';
  className?: string;
};

export const buttonVariants = ({
  variant = 'default',
  size = 'default',
  className,
}: Input) => {
  return [
    'cursor-pointer w-auto rounded-full no-underline z-40  font-base font-semibold shadow-primary transition-all duration-300 hover:scale-95 hover:shadow-[0px_0px_200px_2px] hover:shadow-primary hover:brightness-105',
    {
      'px-5 py-3 text-base': size === 'default',
    },
    {
      'px-7 py-3 text-base': size === 'lg',
    },
    {
      'px-4 py-2 text-sm': size === 'sm',
    },
    {
      'bg-primary text-white hover:shadow-primary': variant === 'default',
    },
    {
      'bg-secondary text-white hover:shadow-secondary': variant === 'secondary',
    },
    {
      'border border-primary bg-transparent text-primary hover:bg-primary hover:text-background':
        variant === 'outline',
    },
    className,
  ];
};
