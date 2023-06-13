import { PIX } from 'gpix/dist'
import { v4 as uuidv4 } from 'uuid'

export default async function generateCode (name, value) {
  const transactionId  = await uuidv4().substring(0, 25)

  // const image = Pix('contato@casamentotafe.com', name, "SAO PAULO", value, transactionId, true);
  let pix = PIX.static()
    .setReceiverName('Felipe Santos')
    .setReceiverCity('SAO PAULO')
    .setKey('contato@casamentotafe.com')
    .setIdentificator('casamentotafe')
    .setDescription(`De: ${name}-Um mimozinho para vocês!`)
    .setAmount(value)

  const image = await pix.getQRCode()
  const code = pix.getBRCode()

  return { image, code }
}
