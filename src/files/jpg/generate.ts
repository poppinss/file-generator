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
 * Generates a fake jpg file for the given file size.
 *
 * @example
 * generate(1000 * 1000 * 2) // Generates a 2mb file
 */
export async function generateJpg(
  fileSize: number | string,
  fileName?: string
): Promise<{ contents: Buffer; size: number; name: string; mime: string }> {
  const mime = 'image/jpeg'
  const name = fileName || `${randomUUID()}.jpg`
  const initialBytes = await readFile(join(dirname(import.meta.url), './fake.jpg'))
  const contents = toBuffer(fileSize, initialBytes)

  return { contents, mime, size: contents.length, name }
}
