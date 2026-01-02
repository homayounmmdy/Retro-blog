import { ComponentProps } from 'react';

import { ButtonVariants, variants } from './button-variants';

export type BUttonProps = ComponentProps<'button'> &
  ButtonVariants & {
    size?: 'small' | 'medium' | 'large';
  };

export const Button = ({ variant = 'primary', size = 'medium', ...props }: BUttonProps) => {
  // const classes = clsx(styles.button, styles[variant], styles[size], className);

  return <button {...props} className={variants({ variant, size })} />;
};
