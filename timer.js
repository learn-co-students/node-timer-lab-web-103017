let remaining = 0;

process.argv.shift();
process.argv.shift();
let arg = process.argv;
if (arg[0].indexOf("s") > -1) {
  remaining = parseInt(arg[0].slice(0, -1), 10);
} else {
  remaining = parseInt(arg[0].slice(0, -3), 10);
  remaining *= 60;
}

let timer = setInterval(() => {
  remaining--;
  console.log(`Left: ${remaining}s`);
  if (remaining == 0) {
    clearInterval(timer);
    process.exit(0);
  }
}, 1000);
