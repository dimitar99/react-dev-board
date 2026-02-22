export function Loader() {
    return (
        <div className="flex flex-col items-center justify-center py-12 w-full">
            <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-200 dark:border-gray-700 border-t-blue-600 dark:border-t-blue-500" />
            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 font-medium">Cargando contenido...</p>
        </div>
    )
}