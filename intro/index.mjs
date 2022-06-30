// --- GLOBALS ---
// console.log(__dirname, __filename)
// console.log(process)

// (function(){
//     var me = "hello"
// }())

// --- MODULES ---

// const module = (function(){
//     var me = 'hello'
//     return {}
// }())

//create a new file app.js
// v1-modules
// const action = () => {
//     console.log('hello')
// }

// module.exports = { action }

//v2-modules -----> rename the file index.mjs
// export const action = () => {
//     console.log('hello')
// }

// v3-modules ----->>> rename the file index.js but app.mjs
// const action = () => {
//     console.log ('hello')
// }

// module.exports = action

// --- FILE SYSTEM --- .mjs

// import fs from 'fs';
// console.log(fs)

// import fs from 'fs/promises'

// ------------->>>>>> create a new file template.html

// import { readFile } from 'fs/promises';
// ---->> in this case '__dirname' is not defined
// import path from 'path';
// const template = await readFile(path.join(__dirname, 'template.html'))

// import { readFile } from 'fs/promises';
//console.log(import.meta.url)
// const template = await readFile(new URL('template.html', import.meta.url))
// console.log(template); // buffer

// console.log(template.toString())

//---->> we can pass the second argument
// import { readFile } from 'fs/promises';
// const template = await readFile(new URL('template.html', import.meta.url), 'utf-8')
// console.log(template)

// ---->> we can pass the data 

// import { readFile } from 'fs/promises';

// let template = await readFile(new URL('template.html', import.meta.url), 'utf-8')

// const data = {
//     title: 'Learn Node.js',
//     body: 'This is the final HTML'
// }
// for (const[k,v] of Object.entries(data)){
//     template = template.replace(`{${k}}`, v)
// }

// console.log(template)

// ---->> we can write this file back to the disc

import { readFile, writeFile } from 'fs/promises';

let template = await readFile(new URL('template.html', import.meta.url), 'utf-8')

const data = {
    title: 'Learn Node.js',
    body: 'This is the final HTML'
}
for (const[k,v] of Object.entries(data)){
    template = template.replace(`{${k}}`, v)
}

await writeFile(new URL('index.html', import.meta.url), template)

// --- ERROR HANDLING --- new file errors.mjs
// terminal: node ------> process.exit(1) or node -----> process.exit(0)

