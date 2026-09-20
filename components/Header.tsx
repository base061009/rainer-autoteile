import { Logo } from "@/components/Logo";
import { LoginShareTrigger } from "@/components/LoginShareTrigger";
import { MailShareTrigger } from "@/components/MailShareTrigger";
import { PhoneShareTrigger } from "@/components/PhoneShareTrigger";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-[calc(1rem+env(safe-area-inset-top,0px))] z-50 px-2 sm:px-3">
      <nav
        className="header-bar relative mx-auto flex w-full max-w-5xl items-center overflow-hidden rounded-[26px] border border-navbar-line bg-navbar py-2"
        aria-label="Global"
      >
        <div className="header-bar-inner flex w-full items-center justify-between ps-4 pe-2 md:ps-5">
          <Logo href="/" priority className="h-7 rounded-md sm:h-8 md:h-9" />
          <div className="flex items-center gap-1.5">
            <PhoneShareTrigger />
            <MailShareTrigger />
            <LoginShareTrigger />
          </div>
        </div>
      </nav>
    </header>
  );
}
