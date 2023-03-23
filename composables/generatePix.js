import { QrCodePix } from 'qrcode-pix'
import { v4 as uuidv4 } from 'uuid'

export default async function generateCode (name, value) {
  const config = useRuntimeConfig()
  const transactionId  = await uuidv4().substring(0, 25)
  const { pixKey } = config.public

  const qrCodePix = QrCodePix({
    version: '01',
    key: pixKey,
    name,
    city: 'SAO PAULO',
    transactionId,
    message: 'Caixinha',
    cep: '99999999',
    value
  })

  const image = await qrCodePix.base64()
  const code = await qrCodePix.payload()

  return { image, code }
}
