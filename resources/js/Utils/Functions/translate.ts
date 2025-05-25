import { usePage } from "@inertiajs/react";

export const __ = (key: string, params: Record<string, string | number> = {}): string => {
  const { translations } = usePage().props as unknown as {
    translations: Record<string, any>; // Contient toutes les traductions
  };
  let text = key.split(".").reduce((o, i) => (o ? o[i] : null), translations) as unknown as string;

  if (!text) return key; // Retourne la clé brute si la traduction n'existe pas

  Object.keys(params).forEach((param) => {
    text = text.replace(`:${param}`, String(params[param]));
  });

  return text;
};
