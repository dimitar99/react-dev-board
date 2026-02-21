import { create } from "zustand";
import type { Resource } from "./mock";
import { getCategories, getResources, getResourceById } from "./services";

interface ResourceState {
    resources: Resource[],
    isLoadingResources: boolean,
    resourcesError: string | null,
    fetchResources: () => Promise<void>,

    categories: string[],
    isLoadingCategories: boolean,
    categoriesError: string | null,
    fetchCategories: () => Promise<void>,

    selectedResource: Resource | null,
    isLoadingSelected: boolean,
    selectedError: string | null,
    fetchResourceById: (id: string) => Promise<void>,
}

export const useResourceStore = create<ResourceState>((set) => ({
    resources: [],
    isLoadingResources: false,
    resourcesError: null,
    fetchResources: async () => {
        set({ isLoadingResources: true, resourcesError: null });
        try {
            const resources = await getResources();
            set({ resources, isLoadingResources: false });
        } catch (error: any) {
            const message = error instanceof Error ? error.message : "Failed to fetch resources";
            set({ resourcesError: message, isLoadingResources: false });
        }
    },

    categories: [],
    isLoadingCategories: false,
    categoriesError: null,
    fetchCategories: async () => {
        set({ isLoadingCategories: true, categoriesError: null });
        try {
            const categories = await getCategories();
            set({ categories, isLoadingCategories: false });
        } catch (error) {
            const message = error instanceof Error ? error.message : "Failed to fetch categories";
            set({ categoriesError: message, isLoadingCategories: false });
        }
    },

    selectedResource: null,
    isLoadingSelected: false,
    selectedError: null,
    fetchResourceById: async (id: string) => {
        set({ isLoadingSelected: true, selectedError: null });
        try {
            const selectedResource = await getResourceById(id);
            set({ selectedResource, isLoadingSelected: false });
        } catch (error: any) {
            const message = error instanceof Error ? error.message : "Failed to fetch resource";
            set({ selectedError: message, isLoadingSelected: false });
        }
    },
}));