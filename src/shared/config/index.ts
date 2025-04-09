import { __APPLICATION_CONFIG__ } from '@types'

export const __APPLICATION__: __APPLICATION_CONFIG__ = {
  routes: {
    origin: '/',
    tests: '/tests',
    results: '/results',
    result: '/result/:id',
    command: '/command',
    test: '/test/:id',
    help: '/help',
    any: '*',
  },
}
