
function isIsogram(str) {
    if (str.length===1) {
      return true 
    }
  }
  
  isIsogram("Dermatoglyphics")// == true
  isIsogram("aba")// == false
  isIsogram("moOse") //== false // -- ignore letter case
  