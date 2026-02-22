import { createFileRoute } from '@tanstack/react-router'
import { mockResourceById } from '../../features/resources/mock'
import { MyButton, MyButtonType } from '../../components/ui/MyButton'

export const Route = createFileRoute('/explore/$resourceId')({
  component: RouteComponent,
})

function RouteComponent() {
  const { resourceId } = Route.useParams()
  const resource = mockResourceById(resourceId)

  if (!resource) {
    return <h3 className="text-xl font-semibold text-black dark:text-white">Resource not found</h3>
  }

  return (
    <div className='p-4 min-h-screen bg-white dark:bg-gray-900'>

      <button
        onClick={() => window.history.back()}
        className='text-black dark:text-gray-200 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:bg-[#4e8ef6] dark:hover:bg-[#4e8ef6] hover:text-white transition-all my-4 px-4 py-1 rounded shadow-sm'
      >
        Back
      </button>

      <h3 className="text-2xl font-semibold text-black dark:text-white mb-4">{resource?.title}</h3>

      <div className="flex flex-wrap gap-2 mb-6">
        {resource.tags.map((tag) => (
          <span key={tag} className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded text-gray-800 dark:text-gray-200 text-xs font-medium px-2 py-1">
            {tag}
          </span>
        ))}
      </div>

      <div className='bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded p-4 mt-6 shadow-sm'>
        <h4 className='text-xl font-semibold text-black dark:text-white mb-2'>Description</h4>
        <p className='text-gray-600 dark:text-gray-400 text-s'>{resource?.longDescription}</p>
      </div>

      <div className='my-6'>
        <MyButton
          onClick={() => { window.open(resource?.url) }}
          text="Visit Resource"
          type={MyButtonType.PRIMARY}
        />
      </div>

      <div className='bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded p-4 mt-8 shadow-sm'>
        <h4 className='text-xl font-semibold text-black dark:text-white mb-2'>Details</h4>
        <div className="space-y-4">
          <div>
            <p className='text-gray-600 dark:text-gray-400 text-xs uppercase tracking-wider font-semibold'>Author</p>
            <p className='text-black dark:text-white text-s'>{resource?.author}</p>
          </div>
          <div>
            <p className='text-gray-600 dark:text-gray-400 text-xs uppercase tracking-wider font-semibold'>Published</p>
            <p className='text-black dark:text-white text-s'>{resource?.date}</p>
          </div>
          <div>
            <p className='text-gray-600 dark:text-gray-400 text-xs uppercase tracking-wider font-semibold'>Category</p>
            <p className='text-black dark:text-white text-s'>{resource?.category}</p>
          </div>
        </div>
      </div>

    </div>
  )
}
