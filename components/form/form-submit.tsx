'use client';

import { useFormStatus } from 'react-dom';

import { cn } from '@/lib/utils';
import { Button, ButtonProps } from '@/components/ui/button';

/**
 * Component to render a submit button
 * @param variant - variant of the button (shadcn ui variant)
 * @param children - children of the button
 * @param disabled - if the button is disabled
 * @param className - class name of the button
 * @returns React.ReactElement
 */
export const FormSubmit = ({
  variant,
  children,
  disabled,
  className,
  ...rest
}: ButtonProps) => {
  const { pending } = useFormStatus();

  return (
    <Button
      disabled={disabled || pending}
      type="submit"
      size="sm"
      className={cn(className)}
      {...rest}
    >
      {children}
    </Button>
  );
};
