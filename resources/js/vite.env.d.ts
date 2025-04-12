/// <reference types="vite/client" />
import { IStaticMethods } from "preline/preline";

interface ImportMeta {
    glob: (path: string) => Record<string, () => Promise<unknown>>;
}

// resources/js/types/preline.d.ts ou resources/js/preline.d.ts
export {};

declare global {
    interface Window {
        // HSOverlay?: {
        //     autoInit: () => void;
        // };
        // HSDropdown?: {
        //     autoInit: () => void;
        // };
        // HSAccordion?: {
        //     autoInit: () => void;
        // };
        // HSTooltip?: {
        //     autoInit: () => void;
        // };
        // HSStepper?: {
        //     autoInit: () => void;
        // };
        HSStaticMethods?: {
            autoInit: () => void;
        };
    }
}
