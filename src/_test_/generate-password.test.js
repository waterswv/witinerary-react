describe('method gneneratePassword', () => {
  let password
  generatePassword = require('./generate-password')
  it('returns a generated password of lower-case characters and numbers with the length of 8', (done) => {
      password = generatePassword()
      expect(password).toMatch(/^[a-z0-9]{8}/)
      done()
    })
})
