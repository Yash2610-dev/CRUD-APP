const employeeFormEle = document.getElementById("employee-form")
const FirstnameEle = document.getElementById("firstname")
const middlenameEle = document.getElementById("middlename")
const  lastnameEle = document.getElementById("lastname")
const dobEle = document.getElementById ("dob")
const emailEle = document.getElementById("email")
const maritalStatusEle = document.getElementById("maritalstatus")
const phonenoEle= document.getElementById("phoneno")
const streetEle = document.getElementById("address")
const cityEle = document.getElementById("city")
const stateEle = document.getElementById("state")
const countryEle = document.getElementById("country")
const zipCodeEle = document.getElementById("zipcode")


employeeFormEle.addEventListener("submit", async (e) => {
    e.preventDefault();
    console.log("form Submitted");


    // CREATE NEW EMPLOYEES OBJECT
let newEmployeeData = {
    Firstname: FirstnameEle.value.trim(),
    middlename: middlenameEle.value.trim(),
    lastname: lastnameEle.value.trim(),
    dob: dobEle.value.trim(),
    email: emailEle.value.trim(),
    maritalStatus: maritalStatusEle.value,
    phoneno: phonenoEle.value,
    address: {
        street: streetEle.value.trim(),
        city: cityEle.value.trim(),
        state: stateEle.value.trim(),
        country: countryEle.value.trim(),
        zipCode: zipCodeEle.value.trim(),

    },
};

try {


let resp = await fetch("http://localhost:5000/employees",{
    method : "POST",
    header : {
        "Content-Type": "application/json",

    },
    body: JSON.stringify(newEmployeeData),// <---- SEND EMP DATA IN JSON-FORMAT
});

console.log(resp);
window.location.href = "ALlEmployees.html"

} catch (err) {
    console.log(err);
    alert("something went wrong ❌")
}

});


