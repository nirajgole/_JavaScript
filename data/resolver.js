import { Widgets } from './dbConnectors'

const resolvers = {
  // get product
  getProduct: async ({ id }) => {
    let data = null
    await Widgets.findById({ _id: id })
      .then(result => {
        console.info(result.data)
        data = result
      })
      .catch(err => (data = err))
    return data
  },

  // get all products

  getAllProducts: async () => {
    let data = null
    await Widgets.find({})
      .then(res => (data = res))
      .catch(err => (data = err))
    return data
  },

  // create product
  createProduct: async ({ input }) => {
    const newWidget = new Widgets({
      name: input.name,
      price: input.price,
      description: input.description,
      soldOut: input.soldOut,
      inventory: input.inventory,
      stores: input.stores
    })
    newWidget.id = newWidget._id

    let data = null
    await newWidget
      .save()
      .then(res => {
        console.info(`saved ${res}`)
        data = res
      })
      .catch(err => (data = err))
    return data
  },

  updateProduct: async ({ input }) => {
    let data = null
    await Widgets.findOneAndUpdate({ _id: input.id }, input, {
      new: true
    })
      .then(result => {
        data = result
      })
      .catch(err => (data = err))
    return data
  },

  deleteProduct: async ({ id }) => {
    let data = null
    await Widgets.deleteOne({ _id: id })
      .then(_ => (data = 'Successfully deleted widget.'))
      .catch(err => (data = err))
    return data
  }
}

export default resolvers
