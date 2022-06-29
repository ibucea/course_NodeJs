// import {readFile} from 'fs';
// readFile(new URL('app.mj', import.meta.url), 'utf-8', (err, data) => {
//     if (err){
//         // handle the error
//         // console.error(err);
//         throw err
//     } else {
//         //
//     }
// })

// ----->>>>> we use fs/promises
// import {readFile} from 'fs/promises';

// const result = await readFile(new URL('app.mj', import.meta.url), 'utf-8')

//------->>>>> we can use try-catch with await 

// ex 1
// import {readFile} from 'fs/promises';

// try{
// const result = await readFile(new URL('app.mj', import.meta.url), 'utf-8')
// } catch (e){
//     console.error(e);
//     console.log('hello');
// }

// ex 2
// import {readFile} from 'fs/promises';

// try{
// const result = await readFile(new URL('app.mj', import.meta.url), 'utf-8')
// } catch (e){
//     throw e
//     console.log('hello');
// }

//------->>>>> we can use try-catch without await 

// import {readFile} from 'fs/promises';

// const result =  readFile(new URL('app.mj', import.meta.url), 'utf-8')
// .catch (e => {
//     console.log('hello');
// })

// ------>>>> ASYNC ERRORS ----- Catch all

import {readFile} from 'fs/promises';

process.on('uncaughtException', (e) => {
    console.log(e)
})

const result = await readFile(new URL('app.mj', import.meta.url), 'utf-8')
console.log('hello')