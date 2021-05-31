export class UnexpectedError extends Error {
  constructor () {
    super('Ops! Algo deu errado. Tente novamente em breve')
    this.name = 'UnexpectedError'
  }
}
