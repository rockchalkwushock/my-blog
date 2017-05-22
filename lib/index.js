import { compose } from 'redux'
import WithAnalytics from './WithAnalytics'
import WithLayout from './WithLayout'

export default compose(WithAnalytics, WithLayout)
