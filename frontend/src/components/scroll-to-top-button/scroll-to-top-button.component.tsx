import { type FunctionComponent, useCallback, useEffect, useRef, useState } from "react";
import { Icon } from "@/components/icon/icon.component";

export const ScrollToTopButton: FunctionComponent = () => {
  const [showButton, setShowButton] = useState<boolean>(false);
  const ref = useRef<HTMLButtonElement>(null);

  const handleScroll = useCallback(() => {
    if (!document) return;

    const root = document.documentElement;
    const scrollTotal = root.scrollHeight - root.clientHeight;
    if (root.scrollTop / scrollTotal > 0.25) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    const btn = ref.current;
    const handleClick = () => document.documentElement.scrollTo({ top: 0, behavior: "smooth" });

    btn.addEventListener("click", handleClick);
    return () => btn.removeEventListener("click", handleClick);
  }, []);

  return (
    <button
      ref={ref}
      className={`btn-secondary btn-sm btn-circle btn fixed bottom-3 right-10 z-10 md:bottom-20 ${
        showButton ? "translate-y-0 opacity-100" : "translate-y-24 opacity-0"
      } transition-all duration-500 ease-linear`}
      aria-label="Scroll to the top of the page"
    >
      <Icon type="arrow-up" color="hsl(var(--pc))" className="w-6" />
    </button>
  );
};
