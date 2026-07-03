const display = document.getElementById("display");


const buttons = document.querySelectorAll("button");



buttons.forEach(button => {


    button.addEventListener("click",()=>{


        let value = button.innerText;



        // Clear button

        if(value === "C"){


            display.value = "";


        }



        // Equal button

        else if(value === "="){


            try{


                display.value = eval(display.value);


            }


            catch{


                display.value = "Error";


            }


        }



        // Numbers and operators

        else{


            display.value += value;


        }


    });


});