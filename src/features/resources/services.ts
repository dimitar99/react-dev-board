import { categories, mockResources } from "./mock";
import type { Resource } from "./mock";

// Simulated delay
const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export const getCategories = async (): Promise<string[]> => {
    await sleep(800)
    // Copia para que no se modifique la variable original del archivo de mocks
    return [...categories]
}

export const getResources = async (): Promise<Resource[]> => {
    await sleep(800)
    return [...mockResources];
}

export const getResourceById = async (id: string): Promise<Resource | null> => {
    await sleep(800)
    return mockResources.find(r => r.id === id) || null
}
