export interface User {
  id: string
  email: string
  username: string
  avatar?: string
  role: 'admin' | 'reader'
  createdAt: Date
}

export interface Story {
  id: string
  title: string
  slug: string
  author: string
  description: string
  cover: string
  content: string
  genre: string[]
  tags: string[]
  readingTime: number
  wordCount: number
  views: number
  likes: number
  comments: number
  published: boolean
  scheduledDate?: Date
  createdAt: Date
  updatedAt: Date
}

export interface Poem {
  id: string
  title: string
  slug: string
  author: string
  content: string
  cover?: string
  tags: string[]
  published: boolean
  createdAt: Date
  updatedAt: Date
}

export interface Comment {
  id: string
  storyId: string
  userId: string
  userName: string
  userAvatar?: string
  content: string
  createdAt: Date
  updatedAt: Date
}

export interface Collection {
  id: string
  name: string
  description: string
  cover: string
  stories: string[]
  createdAt: Date
  updatedAt: Date
}

export type Theme = 'galaxy' | 'sakura' | 'ocean' | 'forest' | 'rain' | 'snow' | 'darkAcademia'

export type PaperStyle = 
  | 'vintage'
  | 'royal'
  | 'scroll'
  | 'dark'
  | 'minimal'
  | 'notebook'
  | 'manuscript'
  | 'golden'
  | 'leather'
  | 'kindle'
  | 'comic'

export interface ReaderPreferences {
  theme: Theme
  paperStyle: PaperStyle
  fontSize: number
  lineHeight: number
  fontFamily: 'serif' | 'sans'
  justifyText: boolean
}
