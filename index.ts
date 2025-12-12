/*
 * @poppinss/file-generator
 *
 * (c) Poppinss
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { generateDocx } from './src/files/docx/generate.ts'
import { generateGif } from './src/files/gif/generate.ts'
import { generateJpg } from './src/files/jpg/generate.ts'
import { generatePdf } from './src/files/pdf/generate.ts'
import { generatePng } from './src/files/png/generate.ts'
import { generateXlsx } from './src/files/xlsx/generate.ts'
import { generateCsv } from './src/files/csv/generate.ts'

const fileGenerator = {
  generateCsv,
  generateDocx,
  generateGif,
  generateJpg,
  generatePdf,
  generateXlsx,
  generatePng,
}

export default fileGenerator
