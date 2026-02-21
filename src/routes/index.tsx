import { createFileRoute } from '@tanstack/react-router'
export const Route = createFileRoute('/')({ component: Home })
import { ResourceCard } from '../components/ui/ResourceCard'
import { useNavigate } from '@tanstack/react-router'
import { MyButton, MyButtonType } from '@/components/ui/MyButton'
import { useResourceStore } from '../features/resources/useResourceStore'
import { useEffect } from 'react'
import { Loader } from '@/components/ui/Loader'

function Home() {
  const { resources, fetchResources, isLoadingResources, resourcesError } = useResourceStore()

  useEffect(() => {
    fetchResources()
  }, []);

  const navigate = useNavigate();

  if (isLoadingResources) {
    return Loader()
  }

  if (resourcesError) {
    return <div>Error loading resources</div>
  }

  return (
    <div>

      <div className='bg-[#fcfbfc] p-4 py-12 border-t border-gray-200 border-b border-gray-200'>
        <h1 className="text-2xl font-semibold text-black">Developer Resource Management Platform</h1>
        <p className="text-s text-gray-600 py-4">Discover, organize, and manage all your development resources in one place.</p>
        <MyButton
          onClick={() => {
            navigate({
              to: '/explore',
              search: { q: '', category: 'All', sort: 'newest' }
            })
          }}
          text="Browse Resources"
          type={MyButtonType.PRIMARY}
        />
      </div>

      <div className='bg-white p-4 pt-6'>
        <h3 className="text-xl font-semibold text-black mb-6">Resources</h3>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {resources.map((resource) => (<ResourceCard resource={resource} />))}
        </div>

        <div className="my-8 mb-6">
          <MyButton
            onClick={() => {
              navigate({
                to: '/explore',
                search: { q: '', category: 'All', sort: 'newest' }
              })
            }}
            text="View All Resources"
            type={MyButtonType.SECONDARY}
          />
        </div>

      </div>

    </div>
  )
}
