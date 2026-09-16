import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type HTMLAttributes,
  type ReactNode,
} from "react";

/*
 * Um único IntersectionObserver para todos os Reveals da página.
 * Antes eram ~25 observers independentes, cada um com seu próprio callback.
 */
const callbacks = new WeakMap<Element, () => void>();
let observer: IntersectionObserver | null = null;

function getObserver() {
  if (observer) return observer;
  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        callbacks.get(entry.target)?.();
        callbacks.delete(entry.target);
        observer?.unobserve(entry.target);
      }
    },
    { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
  );
  return observer;
}

export function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
  eager = false,
  ...props
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "header" | "footer";
  /**
   * Conteúdo acima da dobra: anima via CSS já no primeiro paint, sem depender
   * de JavaScript. Mantém exatamente a mesma animação do reveal padrão.
   */
  eager?: boolean;
} & HTMLAttributes<HTMLElement>) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (eager) return;
    const el = ref.current;
    if (!el) return;
    const obs = getObserver();
    callbacks.set(el, () => setVisible(true));
    obs.observe(el);
    return () => {
      callbacks.delete(el);
      obs.unobserve(el);
    };
  }, [eager]);

  if (eager) {
    return (
      <Tag
        {...props}
        style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
        className={`reveal-eager ${className}`}
      >
        {children}
      </Tag>
    );
  }

  return (
    <Tag
      {...props}
      ref={ref as never}
      data-visible={visible}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal ${className}`}
    >
      {children}
    </Tag>
  );
}
