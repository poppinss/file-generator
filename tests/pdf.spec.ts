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
import { generatePdf } from '../src/files/pdf/generate.js'

test.group('PDF', () => {
  test('generate a pdf file', async ({ assert }) => {
    const { contents, mime, size } = await generatePdf(1000 * 1000 * 2)

    assert.equal(mime, 'application/pdf')
    assert.equal(size, 1000 * 1000 * 2)
    assert.deepEqual(await fileTypeFromBuffer(contents), {
      ext: 'pdf',
      mime: 'application/pdf',
    })
  })

  test('generate a pdf file with custom name', async ({ assert }) => {
    const { contents, mime, size, name } = await generatePdf(1000 * 1000 * 2, 'foo.pdf')

    assert.equal(mime, 'application/pdf')
    assert.equal(size, 1000 * 1000 * 2)
    assert.equal(name, 'foo.pdf')
    assert.deepEqual(await fileTypeFromBuffer(contents), {
      ext: 'pdf',
      mime: 'application/pdf',
    })
  })

  test('do not generate gif smaller than the fake on disk file', async ({ assert }) => {
    const { contents, mime, size } = await generatePdf(1000)

    assert.equal(mime, 'application/pdf')
    assert.isAbove(size, 3000)
    assert.deepEqual(await fileTypeFromBuffer(contents), {
      ext: 'pdf',
      mime: 'application/pdf',
    })
  })
})
