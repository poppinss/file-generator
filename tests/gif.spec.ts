/*
 * @poppinss/file-generator
 *
 * (c) Poppinss
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { test } from '@japa/runner'
import { fileTypeFromBuffer } from 'file-type'
import { generateGif } from '../src/files/gif/generate.js'

test.group('GIF', () => {
  test('generate a gif file with custom name', async ({ assert }) => {
    const { contents, mime, size, name } = await generateGif(1000 * 1000 * 2, 'foo.gif')

    assert.equal(mime, 'image/gif')
    assert.equal(size, 1000 * 1000 * 2)
    assert.equal(name, 'foo.gif')
    assert.deepEqual(await fileTypeFromBuffer(contents), {
      ext: 'gif',
      mime: 'image/gif',
    })
  })

  test('do not generate gif smaller than the fake on disk file', async ({ assert }) => {
    const { contents, mime, size } = await generateGif(10)

    assert.equal(mime, 'image/gif')
    assert.isAbove(size, 30)
    assert.deepEqual(await fileTypeFromBuffer(contents), {
      ext: 'gif',
      mime: 'image/gif',
    })
  })

  test('do not generate gif smaller than the fake on disk file', async ({ assert }) => {
    const { contents, mime, size } = await generateGif(10)

    assert.equal(mime, 'image/gif')
    assert.isAbove(size, 30)
    assert.deepEqual(await fileTypeFromBuffer(contents), {
      ext: 'gif',
      mime: 'image/gif',
    })
  })
})
