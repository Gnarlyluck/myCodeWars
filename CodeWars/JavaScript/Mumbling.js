// This time no story, no theory. The examples below show you how to write function accum:

// Examples:

// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(s) {
  let arr = []
     //loop through string(s)
    //push elements to new array
    //for the first letter of each index in s capitalize it
    //then lowercase the rest
    //then given the array index  add 1 to said index
    //this way you have a number to multiply the letter with 
    //then repeat that letter (array[i]+1) times
    //and join it all together with - between each repeated letter 
        
       let loop = [...s].forEach((element, index) => {
         let capLett = element.charAt(0).toUpperCase()
          let lowercase = element.toLowerCase()
          let lettrMulti = lowercase.repeat(index)
          let splitter = lettrMulti.split()
          arr.push(capLett + splitter)
  
        } )
        return arr.join('-')
      }
console.log(accum("NyffsGeyylB"))