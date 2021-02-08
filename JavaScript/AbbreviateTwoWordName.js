// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// Patrick Feeney => P.F

function abbrevName(name){
    let initial = ''
    for (let i = 0; i < name.length; i++){
      if(i === 0){
        firstInit = name[i]+'.'
      }
      if (name[i] === ' '){
        secInit = firstInit + name[i +1]
       initial = secInit
      }
    }
    return initial.toUpperCase()
  }

//   this solution is much cleaner

function abbrevName(name){

    return name[0].toUpperCase() + "." + name[name.indexOf(" ")+1].toUpperCase();

}