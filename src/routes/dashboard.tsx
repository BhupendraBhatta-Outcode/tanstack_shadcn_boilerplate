import { createFileRoute, Link, Outlet } from '@tanstack/react-router'
import { cn } from '@/lib/utils'
import { Separator } from '@/components/ui/separator'
import { LayoutDashboard, User, Settings, Menu } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { useIsMobile } from '@/hooks/use-mobile'

export const Route = createFileRoute('/dashboard')({
  component: DashboardLayout,
})

function NavItem({
  to,
  icon: Icon,
  label,
  exact = false,
  onClick,
}: {
  to: string
  icon: React.ElementType
  label: string
  exact?: boolean
  onClick?: () => void
}) {
  return (
    <Link
      to={to}
      activeOptions={{ exact }}
      activeProps={{
        className: 'bg-primary text-primary-foreground shadow-sm',
      }}
      inactiveProps={{
        className: 'text-muted-foreground hover:bg-muted hover:text-foreground',
      }}
      className={cn(
        'flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors',
      )}
      onClick={onClick}
    >
      <Icon className="h-4 w-4" />
      {label}
    </Link>
  )
}

function DashboardLayout() {
  const isMobile = useIsMobile()

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <h1 className="text-lg font-semibold">Dashboard</h1>

          {!isMobile && (
            <nav className="flex items-center gap-2">
              <NavItem
                to="/dashboard"
                icon={LayoutDashboard}
                label="Home"
                exact
              />
              <NavItem to="/dashboard/profile" icon={User} label="Profile" />
              <NavItem
                to="/dashboard/settings"
                icon={Settings}
                label="Settings"
              />
            </nav>
          )}

          {isMobile && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm">
                  <Menu className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent align="end" className="w-40">
                <DropdownMenuItem asChild>
                  <NavItem
                    to="/dashboard"
                    icon={LayoutDashboard}
                    label="Home"
                    exact
                  />
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <NavItem
                    to="/dashboard/profile"
                    icon={User}
                    label="Profile"
                  />
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <NavItem
                    to="/dashboard/settings"
                    icon={Settings}
                    label="Settings"
                  />
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
      </header>

      <Separator />

      <main className="mx-auto max-w-7xl p-6">
        <div className="rounded-xl border bg-card p-6 shadow-sm">
          <Outlet />
        </div>
      </main>
    </div>
  )
}
