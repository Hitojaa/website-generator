import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPhone(raw: string): string {
  const digits = raw.replace(/\D/g, '');
  if (digits.length === 10) {
    return digits.replace(/(\d{2})(?=\d)/g, '$1 ').trim();
  }
  return raw;
}
