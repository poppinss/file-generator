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

test.group('PNG', () => {
  test('generate a png file', async ({ assert }) => {
    const { contents, mime, size } = await fileGenerator.generatePng(1000 * 1000 * 2)

    assert.equal(mime, 'image/png')
    assert.equal(size, 1000 * 1000 * 2)
    assert.deepEqual(await fileTypeFromBuffer(contents), {
      ext: 'png',
      mime: 'image/png',
    })
  })

  test('generate a png file with custom name', async ({ assert }) => {
    const { contents, mime, size, name } = await fileGenerator.generatePng(
      1000 * 1000 * 2,
      'foo.png'
    )

    assert.equal(mime, 'image/png')
    assert.equal(size, 1000 * 1000 * 2)
    assert.equal(name, 'foo.png')
    assert.deepEqual(await fileTypeFromBuffer(contents), {
      ext: 'png',
      mime: 'image/png',
    })
  })

  test('do not generate png smaller than the fake on disk file', async ({ assert }) => {
    const { contents, mime, size } = await fileGenerator.generatePng(10)

    assert.equal(mime, 'image/png')
    assert.isAbove(size, 30)
    assert.deepEqual(await fileTypeFromBuffer(contents), {
      ext: 'png',
      mime: 'image/png',
    })
  })
})
