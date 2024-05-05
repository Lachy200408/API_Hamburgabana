const crypto = require('node:crypto')

for (let i = 0; i < 11; i++) {
  const id = crypto.randomUUID()
  console.log(id)
}
