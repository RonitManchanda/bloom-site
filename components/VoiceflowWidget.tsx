"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    voiceflow?: {
      chat?: {
        load: (config: {
          verify: { projectID: string };
          url: string;
          versionID: string;
          voice?: { url: string };
        }) => void;
      };
    };
    __VOICEFLOW_WIDGET_LOADED__?: boolean;
    __VOICEFLOW_WIDGET_LOADING__?: boolean;
  }
}

export default function VoiceflowWidget() {
  useEffect(() => {
    // If we've already loaded (or are loading) the widget, don't do it again.
    if (
      window.__VOICEFLOW_WIDGET_LOADED__ ||
      window.__VOICEFLOW_WIDGET_LOADING__
    )
      return;

    window.__VOICEFLOW_WIDGET_LOADING__ = true;

    const existingScript = document.getElementById(
      "voiceflow-widget-script",
    ) as HTMLScriptElement | null;

    const loadWidget = () => {
      // If script loaded but voiceflow not ready yet, try again next tick.
      if (!window.voiceflow?.chat?.load) {
        requestAnimationFrame(loadWidget);
        return;
      }

      window.voiceflow.chat.load({
        verify: { projectID: "697e9164ecd7ffd395df5895" },
        url: "https://general-runtime.voiceflow.com",
        versionID: "production",
        voice: { url: "https://runtime-api.voiceflow.com" },
      });

      window.__VOICEFLOW_WIDGET_LOADED__ = true;
      window.__VOICEFLOW_WIDGET_LOADING__ = false;
    };

    if (existingScript) {
      // Script tag exists already; just load the widget.
      loadWidget();
      return;
    }

    const script = document.createElement("script");
    script.id = "voiceflow-widget-script";
    script.type = "text/javascript";
    script.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs";
    script.onload = loadWidget;

    document.body.appendChild(script);

    // IMPORTANT:
    // Do NOT remove the script on unmount. In dev Strict Mode, that causes double-load spam.
  }, []);

  return null;
}
