'use client';

import { X } from 'lucide-react';

import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { useAction } from '@/hooks/use-action';
import { createBoard } from '@/actions/create-board';

import { FormInput } from './form-input';
import { FormSubmit } from './form-submit';

interface FormPopoverProps {
  children: React.ReactNode;
  side?: 'top' | 'right' | 'bottom' | 'left';
  align?: 'start' | 'center' | 'end';
  sideOffset?: number;
}

/**
 * Component to show form in popover
 * @param side - side of the popover
 * @param align - align of the popover
 * @param sideOffset - offset of the popover
 * @returns React.ReactNode
 */
export const FormPopover = ({
  children,
  side = 'bottom',
  align,
  sideOffset = 0,
}: FormPopoverProps) => {
  return (
    <Popover>
      <PopoverTrigger asChild>{children}</PopoverTrigger>
      <PopoverContent
        align={align}
        className="w-80 pt-3"
        side={side}
        sideOffset={sideOffset}
      >
        <div className="text-sm font-medium text-center text-neutral-600 pb-4">
          Create Board
        </div>
        <PopoverClose asChild>
          <Button
            className="h-auto w-auto p-2 absolute top-2 right-2 text-neutral-600"
            variant="ghost"
          >
            <X className="h-4 w-4" />
          </Button>
        </PopoverClose>
      </PopoverContent>
    </Popover>
  );
};
