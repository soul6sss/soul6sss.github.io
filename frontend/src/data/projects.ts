export type Project = {
  id: string
  name: string
  description: string
  tech: string[]
  image: string
  github?: string
  demo?: string
  category?: 'frontend' | 'ai' | 'tool'
}

export const sampleProjects: Project[] = [
  {
    id: 'p1',
    name: 'Neon Portfolio',
    description: '基于 Vue 的炫酷个人站点模板',
    tech: ['Vue', 'Vite', 'AOS'],
    image: 'https://images.unsplash.com/photo-1529333166437-7750aa0f73b0?w=800&q=80',
    github: 'https://github.com/',
    demo: '#',
    category: 'frontend',
  },
  {
    id: 'p2',
    name: 'AI Helper',
    description: '集成 OpenAI 的智能问答小工具',
    tech: ['JavaScript', 'API'],
    image: 'https://images.unsplash.com/photo-1550745165-9f2b0e44a883?w=800&q=80',
    category: 'ai',
  },
  {
    id: 'p3',
    name: 'Dev Toolkit',
    description: '常用开发小工具集合',
    tech: ['Node', 'Express'],
    image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800&q=80',
    category: 'tool',
  },
]