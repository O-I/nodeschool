// console.log(process.argv);
var index = 2,
    args = process.argv,
    length = args.length,
    total = 0;
for (index; index < length; index++) {
  total += Number(args[index]);
}
console.log(total);