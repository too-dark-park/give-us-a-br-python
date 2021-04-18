const puppeteer = require('puppeteer');

module.exports = {
  cssCoverage: async function(url) {
    const browser = await puppeteer.launch({
      'args' : [
        '--no-sandbox',
        '--disable-setuid-sandbox'
      ]
    });
    const page = await browser.newPage();
  
    // Starts to gather coverage information for CSS files
    await Promise.all([page.coverage.startCSSCoverage()]);
  
    await page.goto(url);
    await page.waitForSelector('title');
  
    // Stops the coverage gathering
    const [cssCoverage] = await Promise.all([
      page.coverage.stopCSSCoverage()
    ]);
  
    // Calculates how many bytes are being used based on the coverage
    const calculateUsedBytes = (type, coverage) =>
       coverage.map(({ url, ranges, text }) => {
        let usedBytes = 0;
  
        //console.log(text);
  
        //ranges.forEach(range => (usedBytes += range.end - range.start - 1));
        //   ranges.forEach(range => (
        //         console.log(range)
        //   ));  
  
        return {
          url,
          type,
          usedBytes,
          totalBytes: text.length
        };
      });
  
    //   console.info([
    //     ...calculateUsedBytes('css', cssCoverage)
    //   ]);

    console.log(cssCoverage);
    calculateUsedBytes('css', cssCoverage)  
  
    await browser.close();

    return cssCoverage;
  }
}

// (async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();

//   // Starts to gather coverage information for CSS files
//   await Promise.all([page.coverage.startCSSCoverage()]);

//   await page.goto('http://testy.whiscode.dotnetcloud.co.uk/');
//   await page.waitForSelector('title');

//   // Stops the coverage gathering
//   const [cssCoverage] = await Promise.all([
//     page.coverage.stopCSSCoverage()
//   ]);

//   // Calculates how many bytes are being used based on the coverage
//   const calculateUsedBytes = (type, coverage) =>
//      coverage.map(({ url, ranges, text }) => {
//       let usedBytes = 0;

//         //console.log(text);

//       //ranges.forEach(range => (usedBytes += range.end - range.start - 1));
//     //   ranges.forEach(range => (
//     //         console.log(range)
//     //   ));


//       return {
//         url,
//         type,
//         usedBytes,
//         totalBytes: text.length
//       };
//     });

// //   console.info([
// //     ...calculateUsedBytes('css', cssCoverage)
// //   ]);
// console.log(cssCoverage);
// calculateUsedBytes('css', cssCoverage)

//   await browser.close();
// })();