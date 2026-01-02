import { ComponentProps } from 'react';

import clsx from 'clsx';
import styles from './button.module.css';

export type BUttonProps = ComponentProps<'button'> & {
  variant?: 'primary' | 'secondary' | 'destructive';
  size?: 'small' | 'medium' | 'large';
};

export const Button = ({
  variant = 'primary',
  size = 'medium',
  className,
  ...props
}: BUttonProps) => {
  const classes = clsx(styles.button, styles[variant], styles[size], className);

  return <button {...props} className={classes} />;
};
