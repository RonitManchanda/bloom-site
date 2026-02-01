"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    voiceflow?: any;
  }
}

export default function VoiceflowWidget() {
  useEffect(() => {
    // Prevent double-loading in dev (React Strict Mode) or route transitions
    if (document.getElementById("voiceflow-widget-script")) return;

    const script = document.createElement("script");
    script.id = "voiceflow-widget-script";
    script.type = "text/javascript";
    script.src = "https://cdn.voiceflow.com/widget/bundle.mjs";

    script.onload = () => {
      window.voiceflow?.chat?.load({
        verify: { projectID: "697e9164ecd7ffd395df5895" },
        url: "https://general-runtime.voiceflow.com",
        versionID: "697e9164ecd7ffd395df5896",
      });
    };

    document.body.appendChild(script);
  }, []);

  return null;
}
