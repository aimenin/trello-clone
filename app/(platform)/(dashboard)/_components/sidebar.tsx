'use client';

import Link from 'next/link';
import { Plus } from 'lucide-react';
import { useLocalStorage } from 'usehooks-ts';
import { useOrganization, useOrganizationList } from '@clerk/nextjs';

import { Button } from '@/components/ui/button';

interface SidebarProps {
  storageKey?: string;
}

export const Sidebar = ({ storageKey }: SidebarProps) => {
  return <aside>Sidebar!</aside>;
};
