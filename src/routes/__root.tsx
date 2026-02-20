import {
  ErrorComponent,
  ErrorComponentProps,
  HeadContent,
  Link,
  Scripts,
  createRootRoute,
  rootRouteId,
  useMatch,
  useRouter,
} from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'

import appCss from '../styles.css?url'

// This is the root route of your application. All other routes will be children of this route.
export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'TanStack Boilerplate',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
    ],
  }),
  errorComponent: (props) => {
    return (
      <RootDocument>
        <DefaultCatchBoundary {...props} />
      </RootDocument>
    )
  },
  notFoundComponent: () => <NotFound />,
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <TanStackDevtools
          config={{
            position: 'bottom-right',
          }}
          plugins={[
            {
              name: 'Tanstack Router',
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
        <Scripts />
      </body>
    </html>
  )
}

export function NotFound({ children }: { children?: any }) {
  return (
    <div className="space-y-2 p-2">
      <div className="text-gray-600 dark:text-gray-400">
        {children || <p>The page you are looking for does not exist.</p>}
      </div>
      <p className="flex items-center gap-2 flex-wrap">
        <button
          onClick={() => window.history.back()}
          className="bg-emerald-500 text-white px-2 py-1 rounded-sm uppercase font-black text-sm"
        >
          Go back
        </button>
        <Link
          to="/"
          className="bg-cyan-600 text-white px-2 py-1 rounded-sm uppercase font-black text-sm"
        >
          Start Over
        </Link>
      </p>
    </div>
  )
}

export function DefaultCatchBoundary({ error }: ErrorComponentProps) {
  const router = useRouter()
  const isRoot = useMatch({
    strict: false,
    select: (state) => state.id === rootRouteId,
  })

  return (
    <div className="min-w-0 flex-1 p-4 flex flex-col items-center justify-center gap-6">
      <ErrorComponent error={error} />
      <div className="flex gap-2 items-center flex-wrap">
        <button
          onClick={() => {
            router.invalidate()
          }}
          className={`px-2 py-1 bg-gray-600 dark:bg-gray-700 rounded-sm text-white uppercase font-extrabold`}
        >
          Try Again
        </button>
        {isRoot ? (
          <Link
            to="/"
            className={`px-2 py-1 bg-gray-600 dark:bg-gray-700 rounded-sm text-white uppercase font-extrabold`}
          >
            Home
          </Link>
        ) : (
          <Link
            to="/"
            className={`px-2 py-1 bg-gray-600 dark:bg-gray-700 rounded-sm text-white uppercase font-extrabold`}
            onClick={(e) => {
              e.preventDefault()
              window.history.back()
            }}
          >
            Go Back
          </Link>
        )}
      </div>
    </div>
  )
}
