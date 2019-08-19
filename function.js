




//     var passid = document.getElementById('passid');

// // Validating the pass id with the arrow function.

//     var passid_length = passid.value.length;
//     if(passid_length == 0 || passid_length >= 7 || passid_length < 12)
//     {
//         alert('passid must the length of 7 to 12');
//         passid.onSubmit();
//         return false;
//     }
//     return true;



 /* 
// below is the code that validates the regestrationtion form .
// validating the regestration form with an arrow function 
// with their variables according to the validation
// making the userid length from 5 to 12 in the form.
// making the length of password from 7 to 12.
// validating the email 
*/


const validate = () => {

    const form = document.getElementById('Regestration');
    // var formvalidation = (submit) =>
    form.addEventListener("submit", (e) => {

        e.preventDefault();

        let userid = document.getElementById('userid');

        //Validating the userid with the arrow function.

        let userid_length = userid.value.length;
        if (userid_length < 5 || userid_length > 12) {
            alert('userid must have the length of 5 to 12');
            // userid.onSubmit();
            // return false;
        } else{
            alert('thanks')
        }


        let username = document.getElementById('username');

        // Validating the username with the arrow function.
        
            let letters = /^[A-Za-z]+$/;
            if(letters.test(username.value) == false)
            {
                alert('username must have alphabetic characters only')
            }
            


            let address = document.getElementById('Address');

            // // Validating the address with the arrow function.
            
            let letter = /^[A-Za-z]+$/;
               if(letter.test(address) == false)
              {
                  alert('address must have alphanumeric characters only')

              
         }
                  

         let country = document.getElementById('country');

         //Validating the country with the arrow function.
         
         if(country.value == "Default")
            {
               alert('select your country from the country list');
              country.onsubmit();
                return false;
            }
             else
            {
                 return true;
              }
         

              let zipcode = document.getElementById('zipcode');

              // Validating the zipcode with the arrow function.
              
              let numbers = /^[0-9]+$/;
                  if(zipcode.value.match(numbers))
                   {
                       return true;
                   }
                   else
                   {
                       alert('zip code must have numeric values only');
                       
                   }


                   let email = document.getElementById('Email');

                     // Validating the Email withe the arrow function.
                   
                    //email input.
                   let emailformat = /^\w+([\.-]?\w+)* @ w+([\.-]?\w+)*(\.\w{2,3})+$/;
                   if(email.value.match(emailformat))
                   {
                      return true;
                    }
                    else
                    {
                        alert('you have entered the invalid email');
                      
                       
                   }


                   let sex = document.getElementById('gender');

                      // Validating the sex with the arrow function.
                   //selecting either male or female.
                   
                   x=0;
                       if(msex.noted)
                       {
                           x++;
                   
                       }
                      if(fsex.noted)
                       {
                           x++;
                       }
                      if(x ==0)
                       {
                       alert('select male/female');
                           
                           
                       }









    })
    
}



