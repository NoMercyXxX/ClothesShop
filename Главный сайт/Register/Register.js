
    const inputLogin = document.getElementById("registerLogo"),
          inputPassword = document.getElementById("registerPassword")
    document.getElementById("registerButton").addEventListener("click", () => {
      const Data = []
      if(!inputLogin.value || !inputPassword.value) {
        alert("Don`t value")
        console.error("error register")
      } else {
        if(localStorage.getItem("data")) {
          Data.push(...JSON.parse(localStorage.getItem("data"))) 
        }

        Data.push({
          Name: inputLogin.value,
          Password: inputPassword.value
        })

        delete localStorage.data

        localStorage.setItem('data', JSON.stringify(Data))
      }
    })


    document.getElementById("openButtonRegister").addEventListener("click", (event) => {
      if(!inputLogin.value || !inputPassword.value) {
        alert("Don`t value")
        console.error("error open")
      } else {
        JSON.parse(localStorage.getItem("data")).map((el) => {
          if(inputLogin.value === el.Name && inputPassword.value === el.Password) {
            alert("Open gut")
          }
        })
      }
    })
  

