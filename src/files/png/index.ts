/*
 * @poppinss/file-generator
 *
 * (c) Poppinss
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { join } from 'path'
import { randomUUID } from 'crypto'
import { readFile } from 'fs/promises'
import { generate } from '../generate'

/**
 * Generates a fake png file for the given file size.
 *
 * @example
 * generate(1000 * 1000 * 2) // Generates a 2mb file
 */
export async function generatePng(
  fileSize: number | string,
  fileName?: string
): Promise<{ contents: Buffer; size: number; name: string; mime: string }> {
  const mime = 'image/png'
  const name = fileName || `${randomUUID()}.png`
  const contents = generate(fileSize, await readFile(join(__dirname, './fake.png')))

  return { contents, mime, size: contents.length, name }
}
