import compose from 'compose-function'
import { withRouter } from '@/app/providers/with-router.provider.tsx'

export const withProviders = compose(withRouter)
