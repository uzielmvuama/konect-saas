import React from "react";

interface BreadcrumbItem {
  name: string;
  href?: string;
  icon?: React.ReactNode; // <- tu passes un JSX ici
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <ol className="flex items-center whitespace-nowrap md:mb-6 my-4">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <li className="inline-flex items-center" key={index}>
            {item.href && !isLast ? (
              <a
                href={item.href}
                className="flex items-center text-sm text-gray-500 hover:text-yellow-600 focus:outline-hidden focus:text-yellow-600 dark:text-neutral-500 dark:hover:text-yellow-500 dark:focus:text-yellow-500"
              >
                {item.icon && (
                  <span className="shrink-0 me-1.5 size-4 text-inherit">{item.icon}</span>
                )}
                {item.name}
              </a>
            ) : (
              <span
                className="inline-flex items-center text-sm font-semibold text-gray-800 truncate dark:text-neutral-200"
                aria-current="page"
              >
                {item.icon && (
                  <span className="shrink-0 me-1.5 size-4 text-inherit">{item.icon}</span>
                )}
                {item.name}
              </span>
            )}

            {!isLast && (
              <svg
                className="shrink-0 mx-2 size-4 text-gray-400 dark:text-neutral-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            )}
          </li>
        );
      })}
    </ol>
  );
};

export default Breadcrumb;
