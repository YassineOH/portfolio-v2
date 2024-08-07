type Input = {
  variant?: 'default' | 'secondary' | 'outline';
  size?: 'lg';
};

export const buttonVariants = ({ variant = 'default', size }: Input) => {
  return [
    'cursor-pointer rounded-full px-5 py-3 font-base font-semibold shadow-primary transition-all duration-300 hover:scale-95 hover:shadow-[0px_0px_200px_2px] hover:shadow-primary hover:brightness-105',
    {
      'px-7 py-3 text-base': size === 'lg',
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
  ];
};
