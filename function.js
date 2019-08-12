function formvalidation = () =>{
    var userid = document.regestration.userid;
    var passid = document.regestration.passid;
    var username = document.regestration.username;
    var address = document.regestration.address;
    var country = document.regestration.country;
    var zipcode = document.regestration.zipcode;
    var email = document.regestration.email;
    var msex = document.regestration.msex;
    var fsex = document.regestration.fsex; if(userid_validation(userid,5,12))
    {
        if(passid_valadation(passid,7,12))
        {
            if(allletter(username))
            {
                if(alphanumeric(address))
                {
                    if(countryselect(country))
                    {
                        if(allnumeric(zipcode))
                        {
                            if(validateEmail(email))
                            {
                                if(validsex(msex,fsex))
                            }
                        }
                    }
                }
            }
        }
    }
    return false;
}
//Validating the userid with the arrow function.

function userid_validation=(userid,r,x) =>
{
    var userid_length = userid.value.length;
    if(userid_length == 0 || userid_length >= x || userid_length < r)
    {
        alert("userid is not empty");
        userid.focus();
        return false;
    }
    return true;
}

// Validating the pass id with the arrow function.

function passid_valadation = (passid,r,x) =>
{
    var passid_length = passid.value.length;
    if(passid_length == 0 || passid_length >= x || passid_length < r)
    {
        alert("passid is not empty");
        passid.focus();
        return false;
    }
    return true;
}

// Validating the username with the arrow function.

function allletter =(username) =>
{
    var letters = /^[A-Za-z]+$/;
    if(username.value.match(letters))
    {
        return true;
    }
    else
    {
        alert('username must have alphabet values only');
        username.focus();
        return false;
    }
}

// Validating the address with the arrow function.

function alphanumeric =(address) =>
{
    var letters = /^[0-9a-Za-Z]+$/;
    if(address.value.match(letters))
    {
        return true;
    }
    else
    {
        alert('address must have alphanumeric values only');
        address.focus();
        return false;
    }
}

// Validating the country with the arrow function.

function countryselect =(country) =>
{
    if(country.value == "Default")
    {
        alert('select your country from the country list');
        country.focus();
        return false;
    }
    else
    {
        return true;
    }
}

// Validating the zipcode with the arrow function.

function allnumeric =(zipcode) =>
{
    var numbers = /^[0-9]+$/;
    if(zipcode.value.match(numbers))
    {
        return true;
    }
    else
    {
        alert('zip code must have numeric values only');
        zipcode.focus();
        return false;
    }
}

// Validating the Email withe the arrow function.

function validateEmail =(email) =>
{
    var emailformat = /^\w+([\.-]?\w+)* @ w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(email.value.match(emailformat))
    {
        return true;
    }
    else
    {
        alert('you have entered the invalid email');
        email.focus();
        return false;
    }
}

// Validating the sex with the arrow function.

function validsex =(msex,fsex) =>
{
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
        sex.focus();
        return true;
    }
}














