import express from 'express'
import config from 'config'
import connect from './utils/connect.utils'
import logger from './utils/logger.utils'

const port = config.get<number>('port')

const app = express()

app.listen(port, async () => {
  logger.info(`App is running at http://localhost:${port}`)
  await connect()
})
