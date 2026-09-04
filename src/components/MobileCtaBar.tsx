import { CtaButton } from "./CtaButtons";

export function MobileCtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-navy/10 bg-cream/95 p-3 pb-[calc(0.75rem+env(safe-area-inset-bottom,0px))] backdrop-blur-xl md:hidden">
      <div className="grid grid-cols-3 gap-2">
        <CtaButton variant="register" size="sm" className="w-full px-2" />
        <CtaButton variant="volunteer" size="sm" className="w-full px-2" />
        <CtaButton variant="donate" size="sm" className="w-full px-2" />
      </div>
    </div>
  );
}
