import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useEffect, useMemo, useState } from 'react'
import { ResourceCard } from '../../components/ui/ResourceCard'
import { useResourceStore } from '../../features/resources/useResourceStore'
import { useDebounce } from '@/hooks/useDebounce'
import { Loader } from '@/components/ui/Loader'
import { ErrorComponent } from '@/components/ui/ErrorComponent'

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

  if (resourcesError) {
    return ErrorComponent({ error: resourcesError || categoriesError })
  }

  return (
    <div className='px-4'>

      <div className='bg-white dark:bg-gray-900 pt-6 pb-6'>
        <h3 className="text-2xl font-semibold text-black dark:text-white">Explore Resources</h3>
        <p className="text-s text-gray-600 dark:text-gray-400">Browse and search through available resources</p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-9 gap-4 p-4 border border-gray-200 dark:border-gray-700 rounded bg-white dark:bg-gray-800 shadow-sm'>

        <input
          className='border border-gray-200 dark:border-gray-700 rounded p-2 md:col-span-4 w-full bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all'
          type="search"
          placeholder='Search...'
          value={search}
          onChange={(e) => setSearch(e.target.value)} />

        {!categoriesError && <select
          className='border border-gray-200 dark:border-gray-700 rounded p-2 md:col-span-2 w-full bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all'
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
          className='border border-gray-200 dark:border-gray-700 rounded p-2 md:col-span-2 w-full bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all'
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

      <div className='mt-6 pb-8'>
        <p className='text-s text-gray-600 dark:text-gray-400 mb-4'>{filteredResources.length} results</p>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {filteredResources.map((resource) => (<ResourceCard resource={resource} />))}
        </div>
      </div>

    </div>
  )
}
