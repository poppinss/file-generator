/*
 * @poppinss/file-generator
 *
 * (c) Poppinss
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { test } from '@japa/runner'
import { toBuffer } from '../src/files/utils.ts'

test.group('Utils', () => {
  test('mutate buffer size', async ({ assert }) => {
    const mutatedBuffer = toBuffer('1mb', Buffer.from('hello'))
    assert.equal(mutatedBuffer.length, 1024 * 1024)
  })

  test('specify size in bytes', async ({ assert }) => {
    const mutatedBuffer = toBuffer(100, Buffer.from('hello'))
    assert.equal(mutatedBuffer.length, 100)
  })

  test('throw error when size expression is invalid', async () => {
    toBuffer('hello', Buffer.from('hello'))
  }).throws(
    'Invalid fileSize value "hello". Expected value to be a number representing bytes or a string expression'
  )
})
