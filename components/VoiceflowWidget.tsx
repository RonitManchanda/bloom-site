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
        }) => void;
      };
    };
  }
}

export default function VoiceflowWidget() {
  useEffect(() => {
    // Prevent double-loading (Strict Mode, route changes)
    if (document.getElementById("voiceflow-widget-script")) return;

    const script = document.createElement("script");
    script.id = "voiceflow-widget-script";
    script.type = "module";
    script.src = "https://cdn.voiceflow.com/widget/bundle.mjs";

    script.onload = () => {
      window.voiceflow?.chat?.load({
        verify: { projectID: "697e9164ecd7ffd395df5895" },
        url: "https://general-runtime.voiceflow.com",
        versionID: "production",
      });
    };

    document.body.appendChild(script);
  }, []);

  return null;
}
