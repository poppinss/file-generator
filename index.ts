/*
 * @poppinss/file-generator
 *
 * (c) Poppinss
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { generateDocx } from './src/files/docx/generate.js'
import { generateGif } from './src/files/gif/generate.js'
import { generateJpg } from './src/files/jpg/generate.js'
import { generatePdf } from './src/files/pdf/generate.js'
import { generatePng } from './src/files/png/generate.js'
import { generateXlsx } from './src/files/xlsx/generate.js'
import { generateCsv } from './src/files/csv/generate.js'

export default {
  generateCsv,
  generateDocx,
  generateGif,
  generateJpg,
  generatePdf,
  generateXlsx,
  generatePng,
}
