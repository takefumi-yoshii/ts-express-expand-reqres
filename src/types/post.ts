export interface POST {
  '/path/to/endpoint': {
    req: {
      body: { test: boolean }
    }
    res: {
      test: string
    }
  }
}
