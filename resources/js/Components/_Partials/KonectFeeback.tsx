import React from "react";
import MainButton from "@/Components/Buttons/MainButton";
import {Save, Share2,Send} from "lucide-react";

type SubmitPayload = {
    firstname: string;
    name: string;
    email: string;
    phone: string;
    comment: string;
};

type Props = {
    open: boolean;
    onClose?: () => void;
    onSubmit?: (payload: SubmitPayload) => Promise<void> | void;
    defaultFirstname?: string;
    defaultName?: string;
    defaultEmail?: string;
    defaultPhone?: string;
};

const KonectFeeback: React.FC<Props> = ({
                                            open,
                                            onClose,
                                            onSubmit,
                                            defaultFirstname = "",
                                            defaultName = "",
                                            defaultEmail = "",
                                            defaultPhone = "",
                                        }) => {
    const overlayRef = React.useRef<HTMLDivElement | null>(null);

    const [firstname, setFirstname] = React.useState(defaultFirstname);
    const [name, setName] = React.useState(defaultName);
    const [email, setEmail] = React.useState(defaultEmail);
    const [phone, setPhone] = React.useState(defaultPhone);
    const [comment, setComment] = React.useState("");

    const [submitting, setSubmitting] = React.useState(false);
    const [done, setDone] = React.useState(false);
    const [error, setError] = React.useState<string | null>(null);

    React.useEffect(() => {
        if (open) {
            setError(null);
            setDone(false);
            setFirstname(defaultFirstname);
            setName(defaultName);
            setEmail(defaultEmail);
            setPhone(defaultPhone);
            setComment("");
        }
    }, [open, defaultFirstname, defaultName, defaultEmail, defaultPhone]);

    // ESC close
    React.useEffect(() => {
        if (!open) return;
        const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose?.();
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [open, onClose]);

    // Overlay click
    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === overlayRef.current) onClose?.();
    };

    // Disable scroll
    React.useEffect(() => {
        if (!open) return;
        const old = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = old;
        };
    }, [open]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        if (!firstname.trim() || !name.trim() || !email.trim() || !phone.trim()) {
            return setError("Veuillez remplir tous les champs obligatoires.");
        }

        try {
            setSubmitting(true);
            await onSubmit?.({ firstname, name, email, phone, comment });
            setDone(true);
        } catch (err: any) {
            setError(err?.message || "Une erreur est survenue.");
        } finally {
            setSubmitting(false);
        }
    };

    if (!open) return null;

    return (
        <div
            ref={overlayRef}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
            onMouseDown={handleOverlayClick}
        >
            <div className="w-full max-w-lg bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-700 rounded-2xl p-6 sm:p-8 shadow-2xl animate-[modalIn_.18s_ease-out]">

                {done ? (
                    <div className="text-center">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Merci 🎉</h3>
                        <p className="mt-2 text-sm text-gray-600 dark:text-neutral-300">
                            Votre retour a bien été enregistré.
                        </p>
                        <button
                            onClick={onClose}
                            className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                        >
                            Fermer
                        </button>
                    </div>
                ) : (
                    <>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white text-center">
                            Partager votre feedback
                        </h3>

                        {error && (
                            <p className="mt-3 text-red-600 text-sm text-center">{error}</p>
                        )}

                        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                            <div>
                                <label className="text-sm font-medium">Firstname *</label>
                                <input
                                    value={firstname}
                                    onChange={(e) => setFirstname(e.target.value)}
                                    className="w-full mt-1 px-4 py-3 rounded-lg border dark:bg-neutral-900  border-neutral-300 dark:border-neutral-700"
                                />
                            </div>

                            <div>
                                <label className="text-sm font-medium">Name *</label>
                                <input
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full mt-1 px-4 py-3 rounded-lg border border-neutral-300  dark:bg-neutral-900 dark:border-neutral-700"
                                />
                            </div>

                            <div>
                                <label className="text-sm font-medium">Email *</label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full mt-1 px-4 py-3 rounded-lg border border-neutral-300  dark:bg-neutral-900 dark:border-neutral-700"
                                />
                            </div>

                            <div>
                                <label className="text-sm font-medium">Phone *</label>
                                <input
                                    type="tel"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    className="w-full mt-1 px-4 py-3 rounded-lg border border-neutral-300 dark:bg-neutral-900 dark:border-neutral-700"
                                />
                            </div>

                            <div>
                                <label className="text-sm font-medium">Comment ( Optionnel )</label>
                                <textarea
                                    rows={3}
                                    value={comment}
                                    onChange={(e) => setComment(e.target.value)}
                                    className="w-full mt-1 px-4 py-3 rounded-lg border border-neutral-300 dark:bg-neutral-900 dark:border-neutral-700"
                                />
                            </div>

                            <MainButton
                                disabled={submitting}
                                title={submitting ? "Envoi..." : "Envoyer"}
                                asType={"button"}
                                paddindClassYX={" py-4 px-1.5"}
                                customClassName={"!bg-neutral-900 text-yellow-600 font-bold w-full"}
                                icon={Send}
                                iconClass={"h-6.5 w-6.5 p-1 rounded-full bg-yellow-800 text-black"}
                            />
                        </form>
                    </>
                )}
            </div>

            <style>{`
        @keyframes modalIn {
          from { opacity: 0; transform: translateY(12px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0)    scale(1); }
        }
      `}</style>
        </div>
    );
};

export default KonectFeeback;
