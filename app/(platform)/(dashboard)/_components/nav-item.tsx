'use-client';

import { cn } from '@/lib/utils';

import { AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Image from 'next/image';

export type Organization = {
  id: string;
  slug: string;
  imageUrl: string;
  name: string;
};

export interface NavItemProps {
  isExpanded: boolean;
  isActive: boolean;
  organization: Organization;
  onExpand: (id: string) => void;
}

export const NavItem = ({
  isActive,
  isExpanded,
  onExpand,
  organization,
}: NavItemProps) => {
  return (
    <AccordionItem value={organization.id} className="border-none">
      <AccordionTrigger
        onClick={() => onExpand(organization.id)}
        className={cn(
          'flex items-center gap-x-2 p-1.5 text-neutral-700 rounded-md hover:bg-neutral-500/10 transtion text-start no-underline hover:no-underline',
          isActive && !isExpanded && 'bg-sky-500/10 text-sky-700'
        )}
      >
        <div className="flex items-center gap-x-2">
          <div className="w-7 h-7 relative">
            <Image
              fill
              src={organization.imageUrl}
              alt="Organization"
              className="rounded-sm object-cover"
            />
          </div>
        </div>
      </AccordionTrigger>
    </AccordionItem>
  );
};
