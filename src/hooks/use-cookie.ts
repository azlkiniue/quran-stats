import { useState, useEffect } from "react";

export function useCookie(cookieName: string): string | undefined {
  const [cookieValue, setCookieValue] = useState<string | undefined>();

  useEffect(() => {
    const cookies = document.cookie
      .split(";")
      .map((cookie) => cookie.split("="))
      .reduce<Record<string, string>>((acc, [key, value]) => ({ ...acc, [key.trim()]: value || "" }), {});

    setCookieValue(cookies[cookieName]);
  }, [cookieName]);

  return cookieValue;
}