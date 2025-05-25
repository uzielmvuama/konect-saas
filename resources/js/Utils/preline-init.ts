export const initializePreline = () => {
  if (typeof window !== "undefined") {
    window.HSStaticMethods?.autoInit();
    // window.HSDropdown?.autoInit();
    // window.HSOverlay?.autoInit();
    // window.HSTooltip?.autoInit();
    // window.HSAccordion?.autoInit();
    // window.HSStepper?.autoInit();
    // Ajoute ici les autres composants Preline que tu utilises
  }
};
