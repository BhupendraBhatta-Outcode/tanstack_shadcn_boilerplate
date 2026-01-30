import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  beforeLoad: () => {
    throw redirect({
      to: '/dashboard',
      replace: true,
    })
  },
})

// if you want to have a landing page at /, you can uncomment the following code and customize it

// export const Route = createFileRoute('/')({ component: App })
// function App() {
//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center">
//       <div className="font-medium">Hello World</div>
//     </div>
//   )
// }
