

  

const currentUrl =window.location.href;
console.log(currentUrl);

//dividir URL
const everything = currentUrl.split('?')
console.log(everything)

//segundo array

let formData = everything[1].split('&')
console.log(formData)

//dividir formData

// formData=formData.split('&')
// console.log(formData)

function show(cup){
    console.log(cup)
    formData.forEach((element) => {
        console.log(element)
        if (element.startsWith(cup)){
            result=element.split('=')[1].replace("%40","@")
            // result=result[1]
            // result=result.replace("%40","@")
        }
        
    })
    return (result)
}

const showInfo = document.querySelector('#results')
// showInfo.innerHTML = formData[0] + formData[1]
// showInfo.innerHTML = show("email")

showInfo.innerHTML =`
<strong><p>First Name:</strong> ${show("applicant_first_name")} </p>
<strong><p>Last Name:</strong> ${show("applicant_last_name")} </p>

<strong><p>Title or Position:</strong> ${show("applicant_title")} </p>
<strong><p>Email Adress:</strong>${show("email")} </p>

<strong><p>Mobile Phone Number: </strong>${show("mobile_phone")} </p>


<strong><p>Business/Organization's Name:</strong> ${show("organization")} </p>
<strong><p>Membership Type:</strong> ${show("membership_type")} </p>
<strong><p>Organization Type:</strong> ${show("organizationType")} </p>
<strong><p>Timestamp:</strong> ${show("timestamp")} </p>

`
