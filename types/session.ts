export type Session = {
  id: string
  createdAt: Date
  auth?: {
    name?: {
      firstname?: string
      lastname?: string
    }
    id?: number
    token?: string
  } | null
}
