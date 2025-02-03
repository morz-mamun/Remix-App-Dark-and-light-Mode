import {
  isRouteErrorResponse,
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError,
} from "@remix-run/react";
import type { LinksFunction, MetaFunction } from "@remix-run/node";

import "./tailwind.css";
import { ThemeProvider } from "./client/components/ThemeProvider";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
  {
    rel: "icon",
    href: "/tabLogo.png",
    type: "image/png",
  }
];

export const meta: MetaFunction = () => {
  return [
    { charset: "utf-8" },
    { title: "New Remix App" },
    { name: "viewport", content: "width=device-width,initial-scale=1" },
  ];
};
export function Layout({ children }: { readonly children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        {/* this is for theme setting */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function() {
              const theme = localStorage.getItem('theme') || 'light';
              document.documentElement.classList.toggle('dark', theme === 'dark');
            })();
          `,
          }}
        />
      </head>
      <body className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 h-full">
        <ThemeProvider >
        {children}
        </ThemeProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
export default function App() {
  return <ThemeProvider><Outlet /></ThemeProvider>;
}

const CatchBoundary = ({
  error,
}: {
  readonly error: {
    readonly status: number;
    readonly statusText: string;
    readonly data?: { readonly message?: string };
  };
}) => {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
        <title>{error.statusText}</title>
      </head>
      <body className=" text-gray-800">
        <main className="flex flex-col items-center justify-center min-h-screen">
          <div className="p-6 text-center bg-white border border-gray-200 rounded-lg shadow-md">
            <h1 className="text-4xl font-bold text-red-600">
              {error.status} - {error.statusText}
            </h1>
            <p className="mt-4 text-lg">{error.data?.message ?? "Something went wrong!"}</p>
            <p className="mt-6">
              <Link
                to="/"
                className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
              >
                Back to Safety
              </Link>
            </p>
          </div>
        </main>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
};

export const ErrorBoundary = () => {
  const error = useRouteError();
  const response = isRouteErrorResponse(error);

  if (response) {
    return <CatchBoundary error={error} />;
  }

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
        <title>An error occurred!</title>
      </head>
      <body className=" text-gray-800">
        <main className="flex flex-col items-center justify-center min-h-screen">
          <div className="p-6 text-center bg-white border border-gray-200 rounded-lg shadow-md">
            <h1 className="text-4xl font-bold text-red-600">An error occurred!</h1>
            <p className="mt-4 text-lg">
              Something went wrong, but we&apos;re working on it!
            </p>
            <p className="mt-6">
              <Link
                to="/"
                className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
              >
                Back to Safety
              </Link>
            </p>
          </div>
        </main>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
};