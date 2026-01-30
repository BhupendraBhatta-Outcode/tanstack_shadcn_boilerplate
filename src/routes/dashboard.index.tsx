import { createFileRoute } from '@tanstack/react-router'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import {
  Activity,
  Users,
  DollarSign,
  TrendingUp,
  ArrowUpRight,
} from 'lucide-react'

export const Route = createFileRoute('/dashboard/')({
  component: DashboardHome,
})

function DashboardHome() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">Overview</h2>
          <p className="text-sm text-muted-foreground">
            Welcome back! Here's what's happening today.
          </p>
        </div>
        <Button>
          <ArrowUpRight className="mr-2 h-4 w-4" />
          New Report
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Revenue"
          value="$45,231"
          change="+20.1%"
          icon={DollarSign}
        />
        <StatCard
          title="Active Users"
          value="2,350"
          change="+12.4%"
          icon={Users}
        />
        <StatCard
          title="Conversion Rate"
          value="3.45%"
          change="+2.1%"
          icon={TrendingUp}
        />
        <StatCard
          title="System Health"
          value="98.9%"
          change="Stable"
          icon={Activity}
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <ActivityItem
              title="New user registered"
              time="2 minutes ago"
              status="success"
            />
            <ActivityItem
              title="Payment processed"
              time="1 hour ago"
              status="success"
            />
            <ActivityItem
              title="Server maintenance scheduled"
              time="Yesterday"
              status="warning"
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>System Usage</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Usage label="CPU Usage" value={72} />
            <Usage label="Memory Usage" value={58} />
            <Usage label="Storage" value={81} />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function StatCard({
  title,
  value,
  change,
  icon: Icon,
}: {
  title: string
  value: string
  change: string
  icon: React.ElementType
}) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground">
          {change} from last month
        </p>
      </CardContent>
    </Card>
  )
}

function ActivityItem({
  title,
  time,
  status,
}: {
  title: string
  time: string
  status: 'success' | 'warning'
}) {
  return (
    <div className="flex items-center justify-between rounded-lg border p-3">
      <div>
        <p className="text-sm font-medium">{title}</p>
        <p className="text-xs text-muted-foreground">{time}</p>
      </div>
      <Badge variant={status === 'success' ? 'default' : 'secondary'}>
        {status}
      </Badge>
    </div>
  )
}

function Usage({ label, value }: { label: string; value: number }) {
  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between text-sm">
        <span>{label}</span>
        <span className="text-muted-foreground">{value}%</span>
      </div>
      <Progress value={value} />
    </div>
  )
}
