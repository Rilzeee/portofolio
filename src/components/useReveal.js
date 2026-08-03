import { useEffect, useRef } from "react";

/**
 * Hook scroll-reveal sederhana.
 * Tambahkan `ref` dan class "reveal" ke sebuah elemen; saat elemen
 * masuk viewport, class "revealed" akan ditambahkan sehingga anak-anak
 * elemen dianimasikan (lihat .reveal > * di index.css).
 * Untuk section Skills, jangan gunakan hook ini.
 */
export default function useReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add("revealed");
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}

