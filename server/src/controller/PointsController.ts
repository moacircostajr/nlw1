import { Request, Response } from 'express'
import knex from '../database/connection'

class PointsController {

  async show(request: Request, response: Response) {
    const { id } = request.params
    const point = await knex('points').where('id', id).first()
    if (!point) {
      return response.status(400).json({ message: 'Point not found.' })
    }
    /**
     * SELECT * FROM items
     *  JOIN point_items ON items_id = point_items.item_id
     *  WHERE point_items.point_id = {id}
     */
    const items = await knex('items')
      .join('point_items', 'item_id', '=', 'point_items.item_id')
      .where('point_items.point_id', id)

    return response.json({ point, items })
  }

  async create(request: Request, response: Response) {
    try {
      const {
        name,
        email,
        whatsapp,
        latitude,
        longitude,
        city,
        uf,
        items
      } = request.body

      const trx = await knex.transaction()
      const point = {
        image: 'image-fake',
        name,  // short syntax
        email,
        whatsapp,
        latitude,
        longitude,
        city,
        uf
      }
      const insertedIds = await trx('points').insert(point)
      const point_id = insertedIds[0]
      const pointItems = items.map((item_id: number) => {
        return {
          item_id,
          point_id
        }
      })
      await trx('point_items').insert(pointItems)
      return response.json({
        id: point_id,
        ...point
      })
    } catch (error) {
      response.json({
        error: true,
        message: error.message
      });
    }
  }

}

export default PointsController