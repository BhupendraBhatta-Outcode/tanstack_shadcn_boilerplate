import { createFileRoute } from '@tanstack/react-router'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Mail, Phone, MapPin } from 'lucide-react'

export const Route = createFileRoute('/dashboard/profile')({
  component: ProfilePage,
})

function ProfilePage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold tracking-tight">Profile</h2>
        <p className="text-sm text-muted-foreground">
          Manage your personal information
        </p>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center gap-4">
          <Avatar className="h-16 w-16">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>BB</AvatarFallback>
          </Avatar>

          <div className="flex-1">
            <CardTitle>Bhupendra Bhatta</CardTitle>
            <CardDescription>Full-Stack Developer</CardDescription>
            <div className="mt-2 flex gap-2">
              <Badge>Admin</Badge>
              <Badge variant="secondary">Active</Badge>
            </div>
          </div>

          <Button>Edit Profile</Button>
        </CardHeader>

        <CardContent className="grid gap-4 md:grid-cols-2">
          <InfoItem icon={Mail} label="Email" value="bhupendra@email.com" />
          <InfoItem icon={Phone} label="Phone" value="+977 98XXXXXXXX" />
          <InfoItem icon={MapPin} label="Location" value="Nepal" />
        </CardContent>
      </Card>
    </div>
  )
}

function InfoItem({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ElementType
  label: string
  value: string
}) {
  return (
    <div className="flex items-center gap-3 rounded-lg border p-3">
      <Icon className="h-4 w-4 text-muted-foreground" />
      <div>
        <p className="text-xs text-muted-foreground">{label}</p>
        <p className="text-sm font-medium">{value}</p>
      </div>
    </div>
  )
}
