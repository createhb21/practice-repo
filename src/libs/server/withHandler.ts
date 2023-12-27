/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextApiRequest, NextApiResponse } from 'next'

export interface ResponseType {
  ok: boolean
  [key: string]: any
}

type HttpMethod = 'GET' | 'POST' | 'DELETE'

interface ConfigType {
  methods: HttpMethod[]
  handler: (req: NextApiRequest, res: NextApiResponse) => Promise<void>
}

export default function withHandler({ methods, handler }: ConfigType) {
  return async function (req: NextApiRequest, res: NextApiResponse): Promise<any> {
    if (req.method && !methods.includes(req.method as any)) {
      return res.status(405).end()
    }

    try {
      await handler(req, res)
    } catch (error) {
      console.log(error)
      return res.status(500).json({ error })
    }
  }
}
