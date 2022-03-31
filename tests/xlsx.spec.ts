/*
 * @poppinss/file-generator
 *
 * (c) Poppinss
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { test } from '@japa/runner'
import { generateXlsx } from '../src/files/xlsx'
import { fileTypeFromBuffer } from '../test_helpers'

test.group('XLSX', () => {
  test('generate a xlsx file', async ({ assert }) => {
    const { contents, mime, size } = await generateXlsx(1000 * 1000 * 2)

    assert.equal(mime, 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')
    assert.equal(size, 1000 * 1000 * 2)
    assert.deepEqual(await fileTypeFromBuffer(contents), {
      ext: 'xlsx',
      mime: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    })
  })

  test('generate a xlsx file with custom name', async ({ assert }) => {
    const { contents, mime, size, name } = await generateXlsx(1000 * 1000 * 2, 'foo.xlsx')

    assert.equal(mime, 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')
    assert.equal(size, 1000 * 1000 * 2)
    assert.equal(name, 'foo.xlsx')
    assert.deepEqual(await fileTypeFromBuffer(contents), {
      ext: 'xlsx',
      mime: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    })
  })

  test('do not generate gif smaller than the fake on disk file', async ({ assert }) => {
    const { contents, mime, size } = await generateXlsx(1000)

    assert.equal(mime, 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')
    assert.isAbove(size, 3000)
    assert.deepEqual(await fileTypeFromBuffer(contents), {
      ext: 'xlsx',
      mime: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    })
  })
})
