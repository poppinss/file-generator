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

test.group('DOCX', () => {
  test('generate a docx file', async ({ assert }) => {
    const { contents, mime, size } = await fileGenerator.generateDocx(1000 * 1000 * 2)

    assert.equal(mime, 'application/vnd.openxmlformats-officedocument.wordprocessingml.document')
    assert.equal(size, 1000 * 1000 * 2)
    assert.deepEqual(await fileTypeFromBuffer(contents), {
      ext: 'docx',
      mime: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    })
  })

  test('generate a docx file with custom name', async ({ assert }) => {
    const { contents, mime, size, name } = await fileGenerator.generateDocx(
      1000 * 1000 * 2,
      'foo.docx'
    )

    assert.equal(mime, 'application/vnd.openxmlformats-officedocument.wordprocessingml.document')
    assert.equal(size, 1000 * 1000 * 2)
    assert.equal(name, 'foo.docx')
    assert.deepEqual(await fileTypeFromBuffer(contents), {
      ext: 'docx',
      mime: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    })
  })

  test('generate a docx file with human readable size', async ({ assert }) => {
    const { contents, mime, size, name } = await fileGenerator.generateDocx('1mb', 'foo.docx')

    assert.equal(mime, 'application/vnd.openxmlformats-officedocument.wordprocessingml.document')
    assert.equal(size, 1024 * 1024)
    assert.equal(name, 'foo.docx')
    assert.deepEqual(await fileTypeFromBuffer(contents), {
      ext: 'docx',
      mime: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    })
  })

  test('do not generate gif smaller than the fake on disk file', async ({ assert }) => {
    const { contents, mime, size } = await fileGenerator.generateDocx(1000)

    assert.equal(mime, 'application/vnd.openxmlformats-officedocument.wordprocessingml.document')
    assert.isAbove(size, 3000)
    assert.deepEqual(await fileTypeFromBuffer(contents), {
      ext: 'docx',
      mime: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    })
  })
})
