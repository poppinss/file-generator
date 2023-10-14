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
import fileGenerator from '../index.js'

test.group('JPG', () => {
  test('generate a jpg file', async ({ assert }) => {
    const { contents, mime, size } = await fileGenerator.generateJpg(1000 * 1000 * 2)

    assert.equal(mime, 'image/jpeg')
    assert.equal(size, 1000 * 1000 * 2)
    assert.deepEqual(await fileTypeFromBuffer(contents), {
      ext: 'jpg',
      mime: 'image/jpeg',
    })
  })

  test('generate a jpg file with custom name', async ({ assert }) => {
    const { contents, mime, size, name } = await fileGenerator.generateJpg(
      1000 * 1000 * 2,
      'foo.jpg'
    )

    assert.equal(mime, 'image/jpeg')
    assert.equal(size, 1000 * 1000 * 2)
    assert.equal(name, 'foo.jpg')
    assert.deepEqual(await fileTypeFromBuffer(contents), {
      ext: 'jpg',
      mime: 'image/jpeg',
    })
  })

  test('do not generate jpg smaller than the fake on disk file', async ({ assert }) => {
    const { contents, mime, size } = await fileGenerator.generateJpg(10)

    assert.equal(mime, 'image/jpeg')
    assert.isAbove(size, 30)
    assert.deepEqual(await fileTypeFromBuffer(contents), {
      ext: 'jpg',
      mime: 'image/jpeg',
    })
  })
})
