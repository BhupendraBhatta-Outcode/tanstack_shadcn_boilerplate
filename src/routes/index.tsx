import { Table, TableBody, TableHeader } from '@/components/ui/table'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="font-medium">Hello World</div>
      <div>
        <Table>
          <TableHeader>
            <tr>
              <th>Name</th>
              <th>Age</th>
            </tr>
          </TableHeader>
          <TableBody>
            <tr>
              <td>Alice</td>
              <td>30</td>
            </tr>
            <tr>
              <td>Bob</td>
              <td>25</td>
            </tr>
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
