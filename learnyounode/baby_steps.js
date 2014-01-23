// console.log(process.argv);
var index = 2,
    args = process.argv,
    length = args.length,
    total = 0;
for (index; index < length; index++)
  total += Number(args[index]);
console.log(total);

// Official solution:
//
// var result = 0
//    
// for (var i = 2; i < process.argv.length; i++)
//   result += Number(process.argv[i])
//
// console.log(result)