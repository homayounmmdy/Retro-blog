import { ComponentProps } from 'react';

import styles from './button.module.css';

export type BUttonProps = ComponentProps<'button'> & {
  variant: 'primary' | 'secondary' | 'destructive';
};

export const Button = ({ variant, ...props }: BUttonProps) => {
  let className = styles.button;

  if (variant === 'secondary') className += ` ${styles.secondary}`;
  if (variant === 'destructive') className += ` ${styles.destructive}`;

  return <button className={className} {...props} />;
};
