import { defineClientConfig } from "vuepress/client";

export default defineClientConfig({
  setup() {
    if (typeof window !== "undefined") {
      const shuffleFeatures = () => {
        const container = document.querySelector(".vp-features");
        if (!container) return false;

        if (container.getAttribute("data-shuffled") === "true") return true;

        const children = Array.from(container.children) as HTMLElement[];
        if (children.length <= 1) return false;

        const serverCards: HTMLElement[] = [];
        const fixedCards: HTMLElement[] = [];

        children.forEach((child) => {
          const href = child.getAttribute("href") || "";
          if (href.includes("/other/blacklist") || href.includes("/example")) {
            fixedCards.push(child);
          } else {
            serverCards.push(child);
          }
        });

        if (serverCards.length > 1) {
          for (let i = serverCards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = serverCards[i];
            serverCards[i] = serverCards[j];
            serverCards[j] = temp;
          }

          serverCards.forEach((card) => container.appendChild(card));
          fixedCards.forEach((card) => container.appendChild(card));
          container.setAttribute("data-shuffled", "true");
          return true;
        }
        return false;
      };

      const tryShuffle = () => {
        shuffleFeatures();
      };

      if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", tryShuffle);
      } else {
        setTimeout(tryShuffle, 0);
      }

      const observer = new MutationObserver(() => {
        tryShuffle();
      });

      observer.observe(document.body, { childList: true, subtree: true });
    }
  },
});
