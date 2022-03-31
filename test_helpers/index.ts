/*
 * @poppinss/file-generator
 *
 * (c) Poppinss
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/**
 * Dynamic import allows using ESM modules within CJS projects. However
 * TypeScript compiles down the dynamic import to require calls.
 * Therefore we have fool it.
 */
async function importByFoolingTypeScript(moduleName: string) {
  // eslint-disable-next-line no-eval
  return new Function(
    `async function imp() { return await import('${moduleName}') }; return imp();`
  )()
}

/**
 * Returns the file type from buffer by inspecting its magic number
 */
export async function fileTypeFromBuffer(contents: Buffer) {
  const fileType = await importByFoolingTypeScript('file-type')
  return fileType.fileTypeFromBuffer(contents)
}
