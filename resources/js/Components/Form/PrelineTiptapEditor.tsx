import { useEffect, useRef } from "react";
import { Editor } from "@tiptap/core";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import Paragraph from "@tiptap/extension-paragraph";
import Bold from "@tiptap/extension-bold";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import BulletList from "@tiptap/extension-bullet-list";
import OrderedList from "@tiptap/extension-ordered-list";
import ListItem from "@tiptap/extension-list-item";
import Blockquote from "@tiptap/extension-blockquote";
import Strike from "@tiptap/extension-strike";
import Code from "@tiptap/extension-code";

interface PrelineTiptapEditorProps {
  value?: string;
  onUpdate?: (content: string) => void;
}

export default function PrelineTiptapEditor({ value = "", onUpdate }: PrelineTiptapEditorProps) {
  const editorRef = useRef<HTMLDivElement>(null);
  const editorInstance = useRef<Editor | null>(null);

  useEffect(() => {
    if (!editorRef.current) return;

    const editor = new Editor({
      content: value,
      element: editorRef.current,
      editorProps: {
        attributes: {
          class:
            "relative min-h-40 p-3 prose dark:prose-invert sm:text-sm placeholder:text-gray-400" +
            " focus:border-yellow-500 focus:ring-yellwo-500 disabled:opacity-50" +
            " disabled:pointer-events-none dark:bg-transparent dark:border-neutral-700 dark:text-neutral-300 dark:placeholder:text-white/60 dark:focus:ring-neutral-600",
        },
      },
      extensions: [
        StarterKit.configure({ history: false }),
        Placeholder.configure({
          placeholder: "Add a message, if you'd like.",
          emptyNodeClass: "before:text-gray-500",
        }),
        Paragraph.configure({
          HTMLAttributes: {
            class: "text-inherit text-gray-800 dark:text-neutral-200",
          },
        }),
        Bold.configure({ HTMLAttributes: { class: "font-bold" } }),
        Underline,
        Link.configure({
          HTMLAttributes: {
            class: "text-blue-600 hover:underline dark:text-white",
          },
        }),
        BulletList.configure({
          HTMLAttributes: {
            class: "list-disc list-inside text-gray-800 dark:text-white",
          },
        }),
        OrderedList.configure({
          HTMLAttributes: {
            class: "list-decimal list-inside text-gray-800 dark:text-white",
          },
        }),
        ListItem.configure({ HTMLAttributes: { class: "marker:text-sm" } }),
        Blockquote.configure({
          HTMLAttributes: {
            class: "border-s-4 ps-4 sm:ps-6 dark:border-neutral-700",
          },
        }),
        Strike,
        Code,
      ],
      onUpdate: ({ editor }) => {
        const html = editor.getHTML();
        if (onUpdate) onUpdate(html);
      },
    });

    editorInstance.current = editor;

    const actions = [
      { id: "[data-hs-editor-bold]", fn: () => editor.chain().focus().toggleBold().run() },
      { id: "[data-hs-editor-italic]", fn: () => editor.chain().focus().toggleItalic().run() },
      {
        id: "[data-hs-editor-underline]",
        fn: () => editor.chain().focus().toggleUnderline().run(),
      },
      { id: "[data-hs-editor-strike]", fn: () => editor.chain().focus().toggleStrike().run() },
      {
        id: "[data-hs-editor-link]",
        fn: () => {
          const url = prompt("URL");
          if (url) editor.chain().focus().setLink({ href: url }).run();
        },
      },
      { id: "[data-hs-editor-ol]", fn: () => editor.chain().focus().toggleOrderedList().run() },
      { id: "[data-hs-editor-ul]", fn: () => editor.chain().focus().toggleBulletList().run() },
      {
        id: "[data-hs-editor-blockquote]",
        fn: () => editor.chain().focus().toggleBlockquote().run(),
      },
      { id: "[data-hs-editor-code]", fn: () => editor.chain().focus().toggleCode().run() },
    ];

    actions.forEach(({ id, fn }) => {
      const btn = document.querySelector(id);
      if (btn) btn.addEventListener("click", fn);
    });

    return () => {
      editor.destroy();
      editorInstance.current = null;
    };
  }, []);

  useEffect(() => {
    if (editorInstance.current && value !== editorInstance.current.getHTML()) {
      editorInstance.current.commands.setContent(value);
    }
  }, [value]);

  return (
    <>
      {/* Tiptap */}
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden dark:bg-neutral-800 dark:border-neutral-700">
        <div id="hs-editor-tiptap-blockquote-alt">
          <div className="sticky top-0 bg-white flex align-middle gap-x-0.5 border-b border-gray-200 p-2 dark:bg-neutral-900 dark:border-neutral-700">
            <button
              className="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
              type="button"
              data-hs-editor-bold=""
            >
              <svg
                className="shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14 12a4 4 0 0 0 0-8H6v8"></path>
                <path d="M15 20a4 4 0 0 0 0-8H6v8Z"></path>
              </svg>
            </button>
            <button
              className="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
              type="button"
              data-hs-editor-italic=""
            >
              <svg
                className="shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="19" x2="10" y1="4" y2="4"></line>
                <line x1="14" x2="5" y1="20" y2="20"></line>
                <line x1="15" x2="9" y1="4" y2="20"></line>
              </svg>
            </button>
            <button
              className="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
              type="button"
              data-hs-editor-underline=""
            >
              <svg
                className="shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 4v6a6 6 0 0 0 12 0V4"></path>
                <line x1="4" x2="20" y1="20" y2="20"></line>
              </svg>
            </button>
            <button
              className="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
              type="button"
              data-hs-editor-strike=""
            >
              <svg
                className="shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 4H9a3 3 0 0 0-2.83 4"></path>
                <path d="M14 12a4 4 0 0 1 0 8H6"></path>
                <line x1="4" x2="20" y1="12" y2="12"></line>
              </svg>
            </button>
            <button
              className="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
              type="button"
              data-hs-editor-link=""
            >
              <svg
                className="shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
              </svg>
            </button>
            <button
              className="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
              type="button"
              data-hs-editor-ol=""
            >
              <svg
                className="shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="10" x2="21" y1="6" y2="6"></line>
                <line x1="10" x2="21" y1="12" y2="12"></line>
                <line x1="10" x2="21" y1="18" y2="18"></line>
                <path d="M4 6h1v4"></path>
                <path d="M4 10h2"></path>
                <path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1"></path>
              </svg>
            </button>
            <button
              className="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
              type="button"
              data-hs-editor-ul=""
            >
              <svg
                className="shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="8" x2="21" y1="6" y2="6"></line>
                <line x1="8" x2="21" y1="12" y2="12"></line>
                <line x1="8" x2="21" y1="18" y2="18"></line>
                <line x1="3" x2="3.01" y1="6" y2="6"></line>
                <line x1="3" x2="3.01" y1="12" y2="12"></line>
                <line x1="3" x2="3.01" y1="18" y2="18"></line>
              </svg>
            </button>
            <button
              className="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
              type="button"
              data-hs-editor-blockquote=""
            >
              <svg
                className="shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M17 6H3"></path>
                <path d="M21 12H8"></path>
                <path d="M21 18H8"></path>
                <path d="M3 12v6"></path>
              </svg>
            </button>
            <button
              className="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
              type="button"
              data-hs-editor-code=""
            >
              <svg
                className="shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m18 16 4-4-4-4"></path>
                <path d="m6 8-4 4 4 4"></path>
                <path d="m14.5 4-5 16"></path>
              </svg>
            </button>
          </div>

          <div className="h-40 overflow-auto" data-hs-editor-field="" ref={editorRef}></div>
        </div>
      </div>
      {/* End Tiptap */}
    </>
  );
}
