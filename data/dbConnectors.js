import mongoose from 'mongoose'
// import { Sequelize, DataTypes } from 'sequelize'
import _ from 'lodash'

// import casual from 'casual' //to create fake data

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/widgets', { useNewUrlParser: true })

const widgetSchema = mongoose.Schema({
  name: {
    type: String
  },
  description: {
    type: String
  },
  price: {
    type: Number
  },
  soldOut: {
    type: Boolean
  },
  stores: {
    type: Array
  }
})

const Widgets = mongoose.model('widgets', widgetSchema)

// const sequelize = Sequelize('sqlite::memory')

export { Widgets }
