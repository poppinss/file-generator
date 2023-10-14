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
 * Generates a fake png file for the given file size.
 *
 * @example
 *  // Generates a 2mb file
 * generate('2mb')
 *
 *  // Generates a 300kb file with name avatar.png
 * generate('300kb', 'avatar.png')
 */
export async function generatePng(
  fileSize: number | string,
  fileName?: string
): Promise<{ contents: Buffer; size: number; name: string; mime: string }> {
  const mime = 'image/png'
  const name = fileName || `${randomUUID()}.png`
  const initialBytes = await readFile(join(dirname(import.meta.url), './fake.png'))
  const contents = toBuffer(fileSize, initialBytes)

  return { contents, mime, size: contents.length, name }
}
