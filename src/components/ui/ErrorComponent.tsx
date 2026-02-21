export function ErrorComponent({ error }: { error: any }) {
    return (
        <div className="flex flex-col items-center justify-center py-12 w-full">
            <p className="text-sm">{error?.message || "Ha ocurrido un error"}</p>
            <button
                onClick={() => window.location.reload()}
                className="mt-4 px-4 py-2 bg-red-600 text-white rounded-md text-sm"
            >
                Reintentar
            </button>
        </div>
    )
}