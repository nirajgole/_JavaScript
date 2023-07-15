import { Widgets } from './dbConnectors'

const resolvers = {
  // get product
  getProduct: async ({ id }) => {
    const data = await Widgets.findById({ _id: id })
      .then(result => {
        console.info(result.data)
        return result
      })
      .catch(err => console.error(err))

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

    const data = await newWidget
      .save()
      .then(res => {
        console.info(`saved ${res}`)
        return res
      })
      .catch(err => console.error(err))

    return data
  }
}

export default resolvers
