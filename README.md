# File generator
> Generate fake in-memory files for varying sizes

[![github-actions-image]][github-actions-url] [![npm-image]][npm-url] [![license-image]][license-url] [![typescript-image]][typescript-url]

> **Note**: This package is ESM only

This package allows you generate fake in-memory files of varying sizes. The generated file can be used during testing to test the file uploads functionality of your Node server.

- Support for `docx`, `csv`, `xlsx`, `pdf`, `png`, `jpg`, and `gif` files.
- Passes the [magic number file](https://gist.github.com/leommoore/f9e57ba2aa4bf197ebc5) validation.
- The file contents are kept inside memory as a buffer. No files are written to the disk.

## Installation
Install the package from the npm registry as follows.

```sh
npm i @poppinss/file-generator

# Yarn
yarn add @poppinss/file-generator
```

## Usage
Use the exported functions as follows.

```ts
import fileGenerator from '@poppinss/file-generator'

const {
  contents,
  size,
  mime,
  name
} = await fileGenerator.generatePng('1mb')
```

- `contents` is a buffer.
- `size` is the size of the file in bytes.
- `mime` is the mime type for the generated file.
- `name` is a randomly assigned unique name to the file.

You can also define a custom file name as the second argument.

```ts
await fileGenerator.generatePng('1mb', 'avatar.png')
```

## Usage with form-data
You can pass the generated content to an instance of form data as follows.

```ts
import FormData from 'form-data'

const form = new FormData()
const file = await fileGenerator.generatePng('1mb')

form.append('avatar', file.contents, {
  filename: file.name,
  contentType: file.mime,
  knownLength: file.size,
})
```

## Points to note

- Only the first few bytes of the files are valid and rest of the bytes are empty. Therefore, further processing of the files will not work. For example: If you open the PDF file to read its content on the server, then using this package is not the right choice.
- Every file type has minimum bytes and you cannot generate files smaller than that. This is done to keep the initial bytes valid and them pass the standard validation rules.

## Available methods
Following are the available methods to generate different files.

- `generateDocx` - Generate a Microsoft word doc file (passes [file-type][1] validation).
- `generateGif` - Generate a gif file (passes [file-type][1] validation).
- `generateJpg` - Generate a jpeg file (passes [file-type][1] validation).
- `generatePdf` - Generate a pdf file (passes [file-type][1] validation).
- `generatePng` - Generate a png file (passes [file-type][1] validation).
- `generateXlsx` - Generate a Microsoft excel spreadsheet (passes [file-type][1] validation).
- `generateCsv` - Generate a CSV file.

[github-actions-image]: https://img.shields.io/github/actions/workflow/status/poppinss/file-generator/test.yml?style=for-the-badge
[github-actions-url]: https://github.com/poppinss/file-generator/actions/workflows/test.yml "github-actions"

[npm-image]: https://img.shields.io/npm/v/@poppinss/file-generator.svg?style=for-the-badge&logo=npm
[npm-url]: https://npmjs.org/package/@poppinss/file-generator "npm"

[license-image]: https://img.shields.io/npm/l/@poppinss/file-generator?color=blueviolet&style=for-the-badge
[license-url]: LICENSE.md "license"

[typescript-image]: https://img.shields.io/badge/Typescript-294E80.svg?style=for-the-badge&logo=typescript
[typescript-url]:  "typescript"

[1]: https://github.com/sindresorhus/file-type
