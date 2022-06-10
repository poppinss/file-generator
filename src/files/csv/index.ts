/*
 * @poppinss/file-generator
 *
 * (c) Poppinss
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { randomUUID } from 'crypto'
import bytes from 'bytes'

/**
 * Generates a fake csv file for the given file size.
 *
 * @example
 * generateCsv(1000 * 1000 * 2, 'foo.csv')
 */
export async function generateCsv(
  fileSize: number | string,
  fileName?: string
): Promise<{ contents: Buffer; size: number; name: string; mime: string }> {
  const mime = 'text/csv'
  const name = fileName ?? `${randomUUID()}.csv`
  const size = typeof fileSize === 'string' ? bytes(fileSize) : fileSize

  const contents = Buffer.alloc(size, 'h1,h2,h3\nr1c1,r1c2,r1c3\nr2c1,r2c2,r2c3', 'binary')

  return { contents, mime, size: contents.length, name }
}
