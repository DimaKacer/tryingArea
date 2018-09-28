
// export const sortingByAlphabet = (currentArray, option) => {
// export const sortingByAlphabet = (a, b) => {
export const sortingByAlphabet = (array, option) => {
  const arrayModifier = array.slice(0);
  // const byTitle = arr.slice(0);
  // console.log(7, byTitle)
  // console.log(8, option)
// 
  arrayModifier.sort((a,b) => {
    const x = a[option].toLowerCase();
    const y = b[option].toLowerCase();
    return (
      x < y ? -1 : x > y ? 1 : 0
    )
  })

  return arrayModifier
}

// export const sortingByAlphabet2 = (currentArray, option) => {
//   console.log(currentArray, option)
//   if (option === undefined) {
//     console.log('1-----')
//       return currentArray.sort()
//   }

//   console.log(currentArray.length > 0 && option !== undefined)
//   if (currentArray.length > 0 && option !== undefined) {
//     console.log('2-----')
//       return currentArray.sort((a, b) => {
//         console.log(a, b)
//           if (a[option] > b[option]) {
//               return 1
//           }
//           if (a[option] < b[option]) {
//               return -1
//           }
//           return 0
//       })
//   }
//   console.log('3-----')
//   return currentArray
// }
