/*
 * @poppinss/file-generator
 *
 * (c) Poppinss
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import bytes from 'bytes'

/**
 * Generates a buffer for a given size with pre-filled contents
 */
export function generate(fileSize: string | number, contents: Buffer) {
  const size = typeof fileSize === 'string' ? bytes(fileSize) : fileSize
  const contentsSize = contents.length
  return Buffer.alloc(size < contentsSize ? contentsSize : size, contents, 'binary')
}
