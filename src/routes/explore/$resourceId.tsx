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
    return <h3 className="text- font-semibold text-black">Resource not found</h3>
  }

  return (
    <div className='p-4'>

      <button
        onClick={() => window.history.back()}
        className='text-black bg-white border border-gray-200 hover:bg-[#4e8ef6] hover:text-white transition-all my-4 px-4 py-1 rounded'
      >
        Back
      </button>

      <h3 className="text-2xl font-semibold text-black mb-4">{resource?.title}</h3>

      {resource.tags.map((tag) => (
        <span key={tag} className="bg-white border border-gray-200 rounded text-gray-800 text-xs font-medium px-2 py-1 mr-2">
          {tag}
        </span>
      ))}

      <div className='bg-white border border-gray-200 rounded p-4 mt-6'>
        <h4 className='text-xl font-semibold text-black mb-2'>Description</h4>
        <p className='text-gray-600 text-s'>{resource?.longDescription}</p>
      </div>

      <div className='my-6'>
        <MyButton
          onClick={() => { window.open(resource?.url) }}
          text="Visit Resource"
          type={MyButtonType.PRIMARY}
        />
      </div>

      <div className='bg-white border border-gray-200 rounded p-4 mt-8'>
        <h4 className='text-xl font-semibold text-black mb-2'>Details</h4>
        <p className='text-gray-600 text-s pb-1'>Author</p>
        <p className='text-black text-s pb-2'>{resource?.author}</p>
        <p className='text-gray-600 text-s pb-1'>Published</p>
        <p className='text-black text-s pb-2'>{resource?.date}</p>
        <p className='text-gray-600 text-s pb-1'>Category</p>
        <p className='text-black text-s pb-2'>{resource?.category}</p>
      </div>

    </div>
  )
}
