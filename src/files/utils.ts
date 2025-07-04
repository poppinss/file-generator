/*
 * @poppinss/file-generator
 *
 * (c) Poppinss
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import bytes from 'bytes'
import { fileURLToPath } from 'node:url'
import { dirname as pathDirname } from 'node:path'

const E_INVALID_FILE_SIZE_EXPRESSION = (fileSize: number | string) => {
  return new Error(
    `Invalid fileSize value "${fileSize}". Expected value to be a number representing bytes or a string expression`
  )
}

/**
 * Generates a buffer for a given size with pre-filled contents
 */
export function toBuffer(fileSize: string | number, contents: Buffer) {
  const size = typeof fileSize === 'string' ? bytes(fileSize) : fileSize
  if (size === null) {
    throw E_INVALID_FILE_SIZE_EXPRESSION(fileSize)
  }

  const contentsSize = contents.length
  return Buffer.alloc(size < contentsSize ? contentsSize : size, contents, 'binary')
}

/**
 * Returns the dirname for a given URL
 */
export function dirname(url: string) {
  return pathDirname(fileURLToPath(url))
}
