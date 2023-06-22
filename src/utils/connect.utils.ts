import mongoose from 'mongoose'
import config from 'config'

const connect = () => {
  const dbUri = config.get<string>('dbUri')
  return mongoose
    .connect(dbUri)
    .then(() => {
      console.log('Connected to database')
    })
    .catch((error) => {
      console.log(error)
      process.exit(1)
    })
}

export default connect
