import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/not-found')({
  component: NotFound,
})

export function NotFound() {
  return (
    <div className='flex items-center justify-center h-full'>
      <div className='text-center'>
        <h1 className='text-4xl font-bold text-black'>404</h1>
        <p className='text-xl text-gray-600'>Route not found</p>
      </div>
    </div>
  )
}
