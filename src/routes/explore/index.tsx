import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useEffect, useMemo, useState } from 'react'
import { ResourceCard } from '../../components/ui/ResourceCard'
import { useResourceStore } from '../../features/resources/useResourceStore'
import { useDebounce } from '@/hooks/useDebounce'
import { Loader } from '@/components/ui/Loader'

type ResourceSearch = {
  q?: string
  category?: string
  sort: string
}

export const Route = createFileRoute('/explore/')({
  validateSearch: (search: ResourceSearch) => {
    return {
      q: search.q ?? '',
      category: search.category ?? 'All',
      sort: search.sort ?? 'most-recent'
    }
  },
  component: Explore,
})

function Explore() {
  const {
    resources,
    fetchResources,
    isLoadingResources,
    resourcesError,
    categories,
    fetchCategories,
    isLoadingCategories,
    categoriesError
  } = useResourceStore()

  const { q, category, sort } = Route.useSearch()
  const navigate = useNavigate({ from: Route.fullPath })

  const [search, setSearch] = useState(q)
  const debouncedSearch = useDebounce(search, 300)

  useEffect(() => {
    fetchResources()
    fetchCategories()
  }, [fetchResources, fetchCategories])

  useEffect(() => {
    setSearch(q)
  }, [q])

  useEffect(() => {
    if (debouncedSearch !== q) {
      navigate({ search: (prev) => ({ ...prev, q: debouncedSearch }), replace: true })
    }
  }, [debouncedSearch, navigate, q])

  const updateFilters = (updates: Partial<ResourceSearch>) => {
    navigate({
      search: (prev) => ({ ...prev, ...updates }),
      replace: true
    })
  }

  const filteredResources = useMemo(() => {
    let filtered = [...resources]

    if (q) {
      filtered = filtered.filter((res) => res.title.toLowerCase().includes(q.toLowerCase()))
    }

    if (category !== 'All') {
      filtered = filtered.filter((res) => res.category === category)
    }

    if (sort === 'most-recent') {
      filtered = filtered.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    } else if (sort === 'older-first') {
      filtered = filtered.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    } else if (sort === 'a-z') {
      filtered = filtered.sort((a, b) => a.title.localeCompare(b.title))
    }

    return filtered

  }, [resources, q, category, sort]);

  function resetFilters() {
    setSearch('')
    updateFilters({ q: '', category: 'All', sort: 'most-recent' })
  }

  if (isLoadingResources || isLoadingCategories) {
    return Loader()
  }

  return (
    <div className='px-4'>

      <div className='bg-white pt-6 pb-6'>
        <h3 className="text-2xl font-semibold text-black">Explore Resources</h3>
        <p className="text-s text-gray-600">Browse and search through available resources</p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-9 gap-4 p-4 border border-gray-200 rounded'>

        <input
          className='border border-gray-200 rounded p-2 md:col-span-4 w-full'
          type="search"
          placeholder='Search...'
          value={search}
          onChange={(e) => setSearch(e.target.value)} />

        {!categoriesError && <select
          className='border border-gray-200 rounded p-2 md:col-span-2 w-full'
          value={category}
          onChange={(e) => updateFilters({ category: e.target.value })}
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>}

        <select
          className='border border-gray-200 rounded p-2 md:col-span-2 w-full'
          value={sort}
          onChange={(e) => updateFilters({ sort: e.target.value })}
        >
          <option value="most-recent">Most Recent</option>
          <option value="older-first">Older First</option>
          <option value="a-z">A-Z</option>
        </select>

        <button
          className='border border-gray-200 rounded p-2 font-semibold bg-black text-white hover:bg-[#3b82f6] hover:text-white transition-all md:col-span-1 w-full'
          type="button"
          onClick={resetFilters}
        >
          Reset
        </button>

      </div>

      <div className='mt-6'>
        <p className='text-s text-gray-600 mb-4'>{filteredResources.length} results</p>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {filteredResources.map((resource) => (<ResourceCard resource={resource} />))}
        </div>
      </div>

    </div>
  )
}
