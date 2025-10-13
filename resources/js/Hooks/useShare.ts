// useShare.ts
export function useShare() {
    async function share({ title, text, url }: { title?: string; text?: string; url: string; }) {
        try {
            if (navigator.share) {
                await navigator.share({ title, text, url });
                return { ok: true, native: true };
            }
            await navigator.clipboard.writeText(url);
            return { ok: true, native: false };
        } catch (err: any) {
            if (err?.name === "AbortError") return { ok: false, cancelled: true };
            // dernier recours
            try { await navigator.clipboard.writeText(url); } catch {}
            return { ok: false, error: err };
        }
    }

    return { share };
}
