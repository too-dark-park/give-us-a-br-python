module.exports = {
      // Calculates how many bytes are being used based on the coverage
  calculateUsedBytes: (type, coverage) =>
  coverage.map(({ url, ranges, text }) => {
   let usedBytes = 0;
  
   ranges.forEach(range => (usedBytes += range.end - range.start - 1));

   return {
     url,
     type,
     usedBytes,
     totalBytes: text.length,
     ranges,
     text
   };
  })
}

