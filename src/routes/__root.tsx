import { Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'
import { ErrorComponent } from '@/components/ui/ErrorComponent'

import '../styles.css'
import { Suspense } from 'react'
import { Header } from '@/components/layout/Header'
import { NotFound } from './not-found'

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: NotFound,
  errorComponent: ErrorComponent,
})

function RootComponent() {
  return (
    <>
      <Header />
      <Outlet />
      <Suspense>
        <TanStackDevtools
          config={{
            position: 'bottom-right',
          }}
          plugins={[
            {
              name: 'TanStack Router',
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
      </Suspense>
    </>
  )
}
