import express from 'express'
import bodyParser from 'body-parser'
import flightRoutes from './features/flights/flight.routes'
import hotelRoutes from './features/hotels/hotel.routes'
// import idValidator from './middlewares/id-validator.middleware'

const server = express()

server
    .use(bodyParser.json())
    .use('/flights', flightRoutes)
    .use('/hotels', hotelRoutes)

export default server