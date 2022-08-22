declare global {
    namespace NodeJS {
        interface ProcessEnv {
            APP_HOST: string
            APP_PORT: string | number
            DEBUG: boolean
        }
    }
}

export {}