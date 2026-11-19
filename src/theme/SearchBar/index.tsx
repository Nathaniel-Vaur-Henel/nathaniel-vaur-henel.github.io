import React, { useEffect, type ReactNode } from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { useColorMode, useWindowSize } from "@docusaurus/theme-common";
import styles from "./styles.module.css";

const PagefindModalTrigger = "pagefind-modal-trigger" as React.ElementType;
const PagefindModal = "pagefind-modal" as React.ElementType;

const STYLE_ID = "pagefind-component-ui-css";
const SCRIPT_ID = "pagefind-component-ui-js";

// L'index et l'UI sont générés par `pnpm build` (voir .build/index-search.mjs) :
// ils n'existent pas avec `pnpm start`, la recherche n'y est donc pas disponible.
function useLoadPagefindUi() {
  const bundlePath = useBaseUrl("/pagefind/");

  useEffect(() => {
    if (!document.getElementById(STYLE_ID)) {
      const link = document.createElement("link");
      link.id = STYLE_ID;
      link.rel = "stylesheet";
      link.href = `${bundlePath}pagefind-component-ui.css`;
      document.head.appendChild(link);
    }
    if (!document.getElementById(SCRIPT_ID)) {
      const script = document.createElement("script");
      script.id = SCRIPT_ID;
      script.type = "module";
      script.src = `${bundlePath}pagefind-component-ui.js`;
      document.head.appendChild(script);
    }
  }, [bundlePath]);
}

// Le composant ne reconnaît que data-pf-theme="dark", pas le data-theme de Docusaurus.
function useSyncPagefindTheme() {
  const { colorMode } = useColorMode();

  useEffect(() => {
    document.documentElement.setAttribute("data-pf-theme", colorMode);
  }, [colorMode]);
}

export default function SearchBar(): ReactNode {
  useLoadPagefindUi();
  useSyncPagefindTheme();
  const compact = useWindowSize() === "mobile";

  return (
    <div className={styles.search}>
      <PagefindModalTrigger
        key={String(compact)}
        placeholder="Rechercher"
        compact={compact}
        hide-shortcut={compact}
      />
      <PagefindModal />
    </div>
  );
}
