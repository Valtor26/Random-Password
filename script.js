const characters = [
  "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R",
  "S", "T", "U", "V", "W", "X", "Y", "Z",
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q",
  "r", "s", "t", "u", "v", "w", "x", "y", "z",
  "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
  "~", "`", "!", "@","$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]",",",
  "|", ":", ";", "<", ">", ".", "?", "/"];

  let genBtn = document.getElementById("generate");
  let fPass = document.getElementById("firstPass");
  let sPass = document.getElementById("secondPass");

  function genPassword(){
    let n = characters.length;
    let password = "";
    for(let i=0;i<15;i++){
      let indx = Math.floor(Math.random()*n );
      password += characters[indx];
    }
    return password;
  }
  genBtn.addEventListener("click",function(){
    fPass.textContent = genPassword();
    sPass.textContent = genPassword();
  });
