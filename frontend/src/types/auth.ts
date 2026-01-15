export type UserRole = 'super_admin' | 'admin' | 'kvk'

export interface User {
    id: string
    name: string
    email: string
    role: UserRole
    avatar?: string
}

export interface LoginCredentials {
    email: string
    password: string
}
