import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const Nabvar = () => {
  return (
    <header className="fixed top-0 w-full h-14 px-4 border-b shadow-sm bg-white flex items-center">
      <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
        <Logo />
        <nav className="w-full md:w-auto space-x-4">
          <ul className="space-x-4 flex items-center justify-between w-full">
            <li>
              <Button size="sm" variant="outline" asChild>
                <Link href="sign-in">Login</Link>
              </Button>
            </li>
            <li>
              <Button size="sm" asChild>
                <Link href="sign-up">Get Taskify for free</Link>
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
