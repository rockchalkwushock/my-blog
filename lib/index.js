import { compose } from 'redux'

import WithAnalytics from './WithAnalytics'
import WithLayout from './WithLayout'
import colors from './constants'

export { colors }
export default compose(WithAnalytics, WithLayout)
