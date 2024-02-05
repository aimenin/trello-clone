import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';

export const Footer = () => {
  return (
    <footer className="fixed bottom-0 w-full p-4 border-t bg-slate-100">
      <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
        <Logo />
        <nav className="w-full md:w-auto space-x-4">
          <ul className="space-x-4 flex items-center justify-between w-full">
            <li>
              <Button size="sm" variant="ghost">
                Privacy Policy
              </Button>
            </li>
            <li>
              <Button size="sm" variant="ghost">
                Terms of Service
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};
