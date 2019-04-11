export interface GET {
  '/ping': {
    res: {
      count: number
    }
  }
  '/user/greet': {
    req: {
      params: { id: string }
    }
    res: {
      message: string
    }
  }
}
