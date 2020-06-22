import * as tap from 'tap'

import { foo } from './foo.js'

tap.test('basic', t => {
  foo()
  t.end()
})


