export interface Resource {
    id: string;
    title: string;
    description: string;
    longDescription: string;
    category: string;
    tags: string[];
    author: string;
    date: string;
    url: string;
}

export const categories: string[] = [
    'All',
    'Documentation',
    'Tutorial',
    'Tool',
    'Library',
    'Framework',
    'API',
    'Template',
];

export const mockResources: Resource[] = [
    {
        id: '1',
        title: 'React Performance Optimization Guide',
        description: 'Learn advanced techniques to optimize your React applications for better performance and user experience.',
        longDescription:
            'This comprehensive guide covers everything you need to know about React performance optimization. From understanding the React reconciliation algorithm to implementing memoization strategies, code splitting, and lazy loading. You will learn practical techniques that can be applied immediately to your projects. The guide includes real-world examples, benchmarks, and best practices gathered from production applications.',
        category: 'Documentation',
        tags: ['React', 'Performance', 'Optimization'],
        author: 'Sarah Chen',
        date: '2026-02-15',
        url: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800',
    },
    {
        id: '2',
        title: 'TypeScript Advanced Patterns',
        description: 'Master advanced TypeScript patterns including generics, conditional types, and mapped types.',
        longDescription:
            'Dive deep into TypeScript\'s type system and discover powerful patterns that will make your code more type-safe and maintainable. This resource covers advanced generics, utility types, conditional types, mapped types, and template literal types. Each pattern is explained with practical examples and use cases. You will also learn how to design better APIs using TypeScript\'s advanced features and how to leverage the type system to catch bugs at compile time.',
        category: 'Tutorial',
        tags: ['TypeScript', 'Advanced', 'Patterns'],
        author: 'Michael Rodriguez',
        date: '2026-02-12',
        url: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800',
    },
    {
        id: '3',
        title: 'Modern CSS Layout Techniques',
        description: 'Explore modern CSS layout methods including Grid, Flexbox, and Container Queries.',
        longDescription:
            'CSS has evolved significantly in recent years with powerful layout tools like CSS Grid, Flexbox, and Container Queries. This guide explores all these modern techniques with practical examples and real-world use cases. Learn how to create responsive layouts that adapt to any screen size, build complex grid systems, and use container queries for component-based responsive design. Includes comparisons of different approaches and when to use each one.',
        category: 'Tutorial',
        tags: ['CSS', 'Layout', 'Design'],
        author: 'Emily Watson',
        date: '2026-02-10',
        url: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800',
    },
    {
        id: '4',
        title: 'Node.js Authentication Best Practices',
        description: 'Implement secure authentication in Node.js applications with JWT, sessions, and OAuth.',
        longDescription:
            'Security is paramount in modern web applications. This comprehensive guide covers authentication best practices in Node.js, including JWT implementation, session management, OAuth 2.0 integration, and password hashing strategies. Learn about common security vulnerabilities and how to prevent them. Includes code examples for Express.js, security headers configuration, rate limiting, and two-factor authentication implementation.',
        category: 'Documentation',
        tags: ['Node.js', 'Authentication', 'Security'],
        author: 'David Kim',
        date: '2026-02-08',
        url: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800',
    },
    {
        id: '5',
        title: 'GraphQL API Design Principles',
        description: 'Design scalable and maintainable GraphQL APIs following industry best practices.',
        longDescription:
            'GraphQL offers a powerful alternative to REST APIs, but designing a good GraphQL schema requires careful planning. This resource covers schema design principles, resolvers optimization, error handling, pagination strategies, and security considerations. Learn how to structure your types, design efficient queries and mutations, implement subscriptions, and handle complex data requirements. Includes examples from real production APIs and common pitfalls to avoid.',
        category: 'API',
        tags: ['GraphQL', 'API', 'Design'],
        author: 'Alexandra Park',
        date: '2026-02-05',
        url: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800',
    },
    {
        id: '6',
        title: 'Docker Development Workflow',
        description: 'Streamline your development process with Docker containers and docker-compose.',
        longDescription:
            'Docker has revolutionized how we develop and deploy applications. This guide shows you how to set up an efficient Docker-based development workflow. Learn how to write optimized Dockerfiles, use docker-compose for multi-container applications, manage volumes and networks, and debug applications running in containers. Includes best practices for development vs production configurations, layer caching strategies, and how to integrate Docker into your CI/CD pipeline.',
        category: 'Tool',
        tags: ['Docker', 'DevOps', 'Containers'],
        author: 'James Wilson',
        date: '2026-02-03',
        url: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800',
    },
    {
        id: '7',
        title: 'Tailwind CSS Component Library',
        description: 'A comprehensive collection of reusable Tailwind CSS components for rapid development.',
        longDescription:
            'This component library provides a complete set of pre-built, accessible, and customizable components built with Tailwind CSS. Includes buttons, forms, modals, navigation menus, cards, and more. All components follow accessibility best practices and are fully responsive. The library is designed to accelerate your development workflow while maintaining flexibility for customization. Each component comes with multiple variants and detailed documentation.',
        category: 'Library',
        tags: ['Tailwind', 'Components', 'UI'],
        author: 'Lisa Anderson',
        date: '2026-02-01',
        url: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800',
    },
    {
        id: '8',
        title: 'Next.js App Router Deep Dive',
        description: 'Comprehensive guide to Next.js 13+ App Router, Server Components, and streaming.',
        longDescription:
            'The Next.js App Router represents a paradigm shift in how we build React applications. This in-depth guide covers everything from basic routing to advanced patterns like parallel routes, intercepting routes, and streaming. Learn about React Server Components, Server Actions, and how to optimize your application for performance. Includes migration strategies from Pages Router, caching strategies, and best practices for data fetching.',
        category: 'Framework',
        tags: ['Next.js', 'React', 'Server Components'],
        author: 'Robert Taylor',
        date: '2026-01-28',
        url: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800',
    },
    {
        id: '9',
        title: 'SaaS Landing Page Template',
        description: 'Modern, conversion-optimized landing page template for SaaS products.',
        longDescription:
            'This professional landing page template is specifically designed for SaaS products with conversion optimization in mind. Features include a hero section with animated backgrounds, feature showcases, pricing tables, testimonial sections, FAQ accordions, and call-to-action sections. Built with React and Tailwind CSS, it is fully responsive and includes dark mode support. The template follows modern design trends and includes smooth animations and micro-interactions.',
        category: 'Template',
        tags: ['SaaS', 'Landing Page', 'Template'],
        author: 'Jennifer Martinez',
        date: '2026-01-25',
        url: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800',
    },
];

export const mockResourceById: (id: string) => Resource | undefined = (id: string) => mockResources.find((r) => r.id === id)
