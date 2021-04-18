module.exports = {
  calculateUsedBytes: (type, coverage) =>
  coverage.map(({ url, ranges, text }) => {
   let usedBytes = 0;
  
   return {
     url,
     type,
     usedBytes,
     totalBytes: text.length
   };
  })
}

