import { QrCodePix } from 'qrcode-pix'
import { v4 as uuidv4 } from 'uuid'

export default async function generateCode (name, value) {
  const transactionId  = await uuidv4().substring(0, 25)

  const qrCodePix = QrCodePix({
    version: '01',
    key: 'contato@casamentotafe.com',
    name,
    city: 'SAO PAULO',
    transactionId,
    message: '',
    cep: '99999999',
    value
  })

  const image = await qrCodePix.base64()
  const code = qrCodePix.payload()

  return { image, code }
}
