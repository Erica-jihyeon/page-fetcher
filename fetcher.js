const request = require('request');
const fs = require('fs');

const args = process.argv.slice(2);
const url = args[0];
const filePath = args[1];


const req = request(url, (error, response, body) => {

})

req.on('data', (d) => {
  fs.writeFile(filePath, d, err => {
    if (err) {
      console.error(err)
      return
    }
    fs.stat(filePath, (err, fileStats) => {
      if (err) console.log(err);
      else console.log(`Downloaded and saved ${fileStats.size} bytes to ${filePath}`)
    })
  })
})



// request.get(url).on('data', (d) => {
//   fs.writeFile(filePath, d, err => {
//       if (err) {
//         console.error(err)
//         return
//       }
//   })
//   fs.stat(filePath, (err, fileStats) => {
//     if (err) console.log(err);
//     else console.log(`Downloaded and saved ${fileStats.size} bytes to ${filePath}`)
//   })
// });



// request(url, res => {

//   res.on('data', d => {
//     fs.writeFile(filePath, d, err => {
//       if (err) {
//         console.error(err)
//         return
//       }
//     })
//   })

// })