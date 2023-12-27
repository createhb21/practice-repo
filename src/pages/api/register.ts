import { randomUUID } from 'crypto'
import withHandler, { ResponseType } from '@/libs/server/withHandler'
import { NextApiRequest, NextApiResponse } from 'next'

async function handler(req: NextApiRequest, res: NextApiResponse<ResponseType>) {
  const { phone, email } = req.body
  const user = phone ? { phone } : email ? { email } : null
  if (!user) {
    return res.status(400).json({ ok: false })
  }
  const token = randomUUID()

  if (phone) {
    console.log(phone)
  } else if (email) {
    console.log(email)
  }

  return res.json({
    token,
    ok: true,
    isLogin: true,
  })
}

export default withHandler({ methods: ['POST'], handler })
