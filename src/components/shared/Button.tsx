import Link from 'next/link';
import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'outline-white' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

interface ButtonBaseProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
  icon?: ReactNode;
  iconRight?: ReactNode;
}

interface ButtonAsButton extends ButtonBaseProps {
  as?: 'button';
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  disabled?: boolean;
}

interface ButtonAsLink extends ButtonBaseProps {
  as: 'link';
  href: string;
  external?: boolean;
}

interface ButtonAsAnchor extends ButtonBaseProps {
  as: 'a';
  href: string;
}

type ButtonProps = ButtonAsButton | ButtonAsLink | ButtonAsAnchor;

const variantClasses: Record<Variant, string> = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  'outline-white': 'btn-outline-white',
  ghost:
    'inline-flex items-center justify-center gap-2 text-brand-600 hover:text-brand-800 font-semibold transition-colors',
};

const sizeClasses: Record<Size, string> = {
  sm: 'text-sm px-4 py-2',
  md: '',
  lg: 'text-lg px-8 py-4',
};

function getClasses(variant: Variant, size: Size, className?: string) {
  return cn(variantClasses[variant], size !== 'md' && sizeClasses[size], className);
}

export function Button(props: ButtonProps) {
  const { variant = 'primary', size = 'md', className, children, icon, iconRight } = props;
  const classes = getClasses(variant, size, className);
  const content = (
    <>
      {icon && <span aria-hidden="true">{icon}</span>}
      {children}
      {iconRight && <span aria-hidden="true">{iconRight}</span>}
    </>
  );

  if (props.as === 'link') {
    return (
      <Link
        href={props.href}
        className={classes}
        {...(props.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {content}
      </Link>
    );
  }

  if (props.as === 'a') {
    return (
      <a href={props.href} className={classes}>
        {content}
      </a>
    );
  }

  return (
    <button
      type={props.type ?? 'button'}
      onClick={props.onClick}
      disabled={props.disabled}
      className={cn(classes, props.disabled && 'opacity-60 cursor-not-allowed')}
    >
      {content}
    </button>
  );
}
