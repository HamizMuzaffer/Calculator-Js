// Calculator 
a = +prompt("Enter First Number")
    b = +prompt("Enter Second Number Number")
    c = prompt("Enter Operator (e.g + ,- ,* ,/)")

    if(c==='+'){
        var add = a+b;
      document.write(add)
    }
    else if(c==='*'){
        document.write(a*b)
      }
      else if(c==='-'){
        document.write(a-b)
      }
      else if(c==='/'){
        document.write(a/b)
      }
      else if (a === isNan || b === isNan){
          alert("Input can only be integer")
      }
      else{
        document.write("Error! You have put wrong input")
      }

