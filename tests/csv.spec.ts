/*
 * @poppinss/file-generator
 *
 * (c) Poppinss
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { test } from '@japa/runner'
import fileGenerator from '../index.js'

test.group('CSV', () => {
  test('generate a csv file', async ({ assert }) => {
    const { mime, size } = await fileGenerator.generateCsv(1000 * 1000 * 2)

    assert.equal(mime, 'text/csv')
    assert.equal(size, 1000 * 1000 * 2)
  })

  test('generate a csv file with custom name', async ({ assert }) => {
    const { mime, size, name } = await fileGenerator.generateCsv(1000 * 1000 * 2, 'foo.csv')

    assert.equal(mime, 'text/csv')
    assert.equal(size, 1000 * 1000 * 2)
    assert.equal(name, 'foo.csv')
  })
})
