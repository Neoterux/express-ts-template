import dotenv from 'dotenv'
import express from 'express'

dotenv.config()

const app = express()
const APP_PORT = process.env.APP_PORT
const APP_HOST = process.env.APP_HOST
if (!process.env.DEBUG) {
    console.debug = function() {}
}

/**
 * Express application root path
 */
app.get('/', (req, res) => {
    res.send('Hello world!')
})

/**
 * Express app initialization
 */
app.listen(APP_PORT, () => {
    if (process.env.DEBUG)
        console.log(`Express server running on DEBUG mode`)
    console.log(`[⚡] Express server is running on: ${APP_HOST}:${APP_PORT}`)
    console.log('[>] Listening for requests...')
    console.debug('Hola')
})

