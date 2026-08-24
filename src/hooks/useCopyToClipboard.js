import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Copies text to the clipboard and tracks a short-lived "copied" state for
 * UI feedback (e.g. swapping a button's label to "Copied!").
 *
 * Falls back to a hidden textarea + execCommand for non-secure contexts or
 * browsers without the async Clipboard API.
 */
export function useCopyToClipboard(resetDelay = 2000) {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => () => clearTimeout(timeoutRef.current), []);

  const copy = useCallback(
    async (text) => {
      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(text);
        } else {
          const textarea = document.createElement("textarea");
          textarea.value = text;
          textarea.style.position = "fixed";
          textarea.style.opacity = "0";
          document.body.appendChild(textarea);
          textarea.select();
          document.execCommand("copy");
          document.body.removeChild(textarea);
        }
        setCopied(true);
        clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => setCopied(false), resetDelay);
        return true;
      } catch (err) {
        console.error("Copy to clipboard failed:", err);
        return false;
      }
    },
    [resetDelay]
  );

  return [copied, copy];
}
