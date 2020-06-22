import tap from 'tap'

import { foo } from './foo'

tap.test('basic', t => {
  foo()
  t.end()
})


