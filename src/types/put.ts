export interface PUT {
  '/path/to/endpoint': {
    req: {
      body: { test: boolean }
    }
    res: {
      test: string
    }
  }
}
