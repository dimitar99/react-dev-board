import type { Resource } from "../../features/resources/mock";
import { useLocation, useNavigate } from "@tanstack/react-router";

interface ResourceCardProps {
    resource: Resource;
}

export const ResourceCard = ({ resource }: ResourceCardProps) => {
    const location = useLocation()
    const isExplorePage = location.pathname === '/explore'
    const navigate = useNavigate()

    return (
        <div
            key={resource.id}
            className='p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm hover:border-[#4e8ef6] dark:hover:border-[#4e8ef6] transition-all cursor-pointer'
            onClick={() => { navigate({ to: `/explore/${resource.id}` }) }}
        >
            <span className="inline-block px-2 py-1 text-xs font-medium text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-700 rounded mb-4">
                {resource.category}
            </span>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {resource.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-2">
                {resource.description}
            </p>

            {isExplorePage && (
                <div>
                    {resource.tags.map((tag) => (
                        <span key={tag} className="mr-2 text-gray-500 dark:text-gray-500 text-xs">
                            #{tag}
                        </span>
                    ))}
                    <hr className="border-gray-200 dark:border-gray-700 my-4" />
                </div>
            )}

            <p className="text-gray-500 dark:text-gray-500 text-xs">
                {resource.author} · {resource.date}
            </p>
        </div>
    )
}