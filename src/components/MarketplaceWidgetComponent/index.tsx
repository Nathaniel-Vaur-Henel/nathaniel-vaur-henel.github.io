import React, { useEffect, useId, useRef } from "react";
import styles from "./styles.module.css";

const SCRIPT_SRC = "https://plugins.jetbrains.com/assets/scripts/mp-widget.js";
const SCRIPT_ID = "jetbrains-marketplace-widget-script";

declare global {
  interface Window {
    MarketplaceWidget?: {
      setupMarketplaceWidget: (
        type: string,
        pluginId: number,
        selector: string,
      ) => void;
    };
  }
}

export interface MarketplaceWidgetComponentProps {
  pluginId: number;
  type?: "card";
}

// Widget officiel JetBrains (https://plugins.jetbrains.com/plugin/<id>, bouton "Add to your site").
// Le script mute le DOM lui-même : on l'injecte une seule fois et on ne fait tourner
// setupMarketplaceWidget qu'après son chargement, pour rester compatible avec la
// navigation SPA de Docusaurus (le script reste en mémoire d'une page à l'autre).
export default function MarketplaceWidgetComponent({
  pluginId,
  type = "card",
}: MarketplaceWidgetComponentProps) {
  const containerId = `jetbrains-mp-widget-${useId().replace(/[^a-zA-Z0-9-]/g, "")}`;
  const didSetup = useRef(false);

  useEffect(() => {
    const setup = () => {
      if (didSetup.current) {
        return;
      }
      window.MarketplaceWidget?.setupMarketplaceWidget(
        type,
        pluginId,
        `#${containerId}`,
      );
      didSetup.current = true;
    };

    if (window.MarketplaceWidget) {
      setup();
      return;
    }

    const existingScript = document.getElementById(
      SCRIPT_ID,
    ) as HTMLScriptElement | null;
    if (existingScript) {
      existingScript.addEventListener("load", setup);
      return () => existingScript.removeEventListener("load", setup);
    }

    const script = document.createElement("script");
    script.id = SCRIPT_ID;
    script.src = SCRIPT_SRC;
    script.async = true;
    script.addEventListener("load", setup);
    document.body.appendChild(script);

    return () => script.removeEventListener("load", setup);
  }, [containerId, pluginId, type]);

  return <div id={containerId} className={styles.widgetContainer} />;
}
