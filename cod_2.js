window.onload = () =>{
    let poate = false
    if(poate)
    {
        let intervalId = setInterval(() => {
            if(!poate)
            {
                clearInterval(intervalId)
                // console.log("am iesit")
                return
            }
            let valori = document.getElementsByName("color")
            // console.log(valori)
            function random(){
                return Math.floor(Math.random()*5) 
            }   
            var nr=random()
            const color = valori[nr].id
            JSON.stringify(localStorage.setItem('color',color))
            // console.log(color)
            document.body.style.background=color
        },3000)
    }
    window.addEventListener("click", ()=>{
        poate = !poate
        console.log(poate)
        if(poate)
        {
            let intervalId = setInterval(() => {
                if(!poate)
                {
                    clearInterval(intervalId)
                    // console.log("am iesit")
                    return
                }
                let valori = document.getElementsByName("color")
                // console.log(valori)
                function random(){
                    return Math.floor(Math.random()*5) 
                }   
                var nr=random()
                const color = valori[nr].id
                JSON.stringify(localStorage.setItem('color',color))
                // console.log(color)
                document.body.style.background=color
            },3000)
        }
    })
const color_2 = localStorage.getItem("color")
document.body.style.background=color_2
// console.log(color_2)
}

function ascundeFormular(myForm) {
    const form = document.getElementById(myForm);
    form.style.display = 'none';
  }

ascundeFormular('myForm');

  