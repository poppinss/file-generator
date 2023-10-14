/*
 * @poppinss/file-generator
 *
 * (c) Poppinss
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { join } from 'node:path'
import { randomUUID } from 'node:crypto'
import { readFile } from 'node:fs/promises'
import { toBuffer, dirname } from '../utilities.js'

/**
 * Generates a fake docx file for the given file size.
 *
 * @example
 * generate(1000 * 1000 * 2) // Generates a 2mb file
 */
export async function generateDocx(
  fileSize: number | string,
  fileName?: string
): Promise<{ contents: Buffer; size: number; name: string; mime: string }> {
  const mime = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
  const name = fileName || `${randomUUID()}.docx`
  const initialBytes = await readFile(join(dirname(import.meta.url), './fake.docx'))
  const contents = toBuffer(fileSize, initialBytes)

  return { contents, mime, size: contents.length, name }
}
