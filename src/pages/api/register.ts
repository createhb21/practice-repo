import { v1 } from 'uuid'
import withHandler from '@/libs/server/withHandler'
import { RegisterServerModel, StandardResponse } from '@/types'
import { NextApiRequest, NextApiResponse } from 'next'

async function handler(req: NextApiRequest, res: NextApiResponse<StandardResponse<RegisterServerModel>>) {
  const { emailAddr } = req.body
  const user = emailAddr ? { emailAddr } : null
  if (!user?.emailAddr) {
    return res.status(400).json({ ok: false })
  }
  const token = v1()

  if (emailAddr) {
    console.log(emailAddr)
  }

  return res.json({
    ok: true,
    result: {
      token,
      isLogin: true,
    },
  })
}

export default withHandler({ methods: ['POST'], handler })
