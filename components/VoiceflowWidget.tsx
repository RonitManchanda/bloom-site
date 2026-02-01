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
  }
}

export default function VoiceflowWidget() {
  useEffect(() => {
    // Prevent double-loading (Strict Mode, route changes)
    if (document.getElementById("voiceflow-widget-script")) return;

    const script = document.createElement("script");
    script.id = "voiceflow-widget-script";
    script.type = "module";
    script.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs";

    script.onload = () => {
      window.voiceflow?.chat?.load({
        verify: { projectID: "697e9164ecd7ffd395df5895" },
        url: "https://general-runtime.voiceflow.com",
        versionID: "production",
        voice: {
          url: "https://runtime-api.voiceflow.com",
        },
      });
    };

    document.body.appendChild(script);

    // Optional cleanup (helps during hot reloads)
    return () => {
      // do not remove the script in production, it can cause re-init flicker
      // but during dev, you can uncomment next lines if you see duplicates
      // script.remove();
    };
  }, []);

  return null;
}
