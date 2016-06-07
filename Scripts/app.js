/**
* File Name: app.js 
* @author: Larissa Zocche
* @date: June 3, 2016
*
* Student # : 300870340
* WebSite: http://comp125-assignment01.azurewebsites.net
*
* @description: This is the main JavaScript file for this website.
*/

//IIFE  - Immediately Invoked Function Expression
/**
 * 
 */
(function () {
    "use strict";


    /**
     * This variable define an array of HTML elements. Each element has a number, known as an index, it represents the element's position within the array.
     * */
    var resume = [];

    resume[0] = document.getElementById("highlights1");
    resume[1] = document.getElementById("highlights2");
    resume[2] = document.getElementById("highlights3");
    resume[3] = document.getElementById("education");
    resume[4] = document.getElementById("experience");
    //projects
    resume[5] = document.getElementById("researchDescription");
    resume[6] = document.getElementById("researchDescription2");
    resume[7] = document.getElementById("researchDescription3");

    /**
     * This variable define the resume array
     * */
    var resumeData = [];
    /**
     * data for the index page - assigning value to individual array elements.
     *  */
    resumeData[0] = "Methodical and strong organizational skills";
    resumeData[1] = "Excellent attention to details";
    resumeData[2] = "Highly motivated, patient, always willing to acquire new knowledge and willing to learn with  people with different opinions and backgrounds.";
    resumeData[3] = "<span class='title'>B. S.c in Biological Sciences</span><br> Pontifical Catholic University of Paraná, Curitiba, Brazil <br><span class='title'> Master’s in Biotechnology </span><br> Pequeno Príncipe University, Curitiba, Brazil <br><span class='title'> Software Engineering Technician</span> <br> Centennial College, Toronto, Canada";
    resumeData[4] = "<span class='title'>Quality Control Technician</span> <br> Baylis Medical Company, Mississauga, Canada <br><span class='title'> Research Assistant Volunteer</span> <br> Cell Therapy Translational Research Laboratory (Dr Armand Keating Lab), Princess Margaret Hospital, Toronto, Canada <br><span class='title'> Biology Teacher </span><br> Estadual Do Parana High School, Curitiba, Brazil";

    /**
     * data for the projects page
     *  */
    resumeData[5] = "<span class='title'>Development and characterization of a new inbred transgenic rat strain expressing DsRed monomeric fluorescent protein.</span><br> Authors: Montanari, S.; Wang, X-H.; Yannarelli, G.; Dayan, V.; Berger, T.; Zocche, L.; Kobayashi, E.;  Viswanathan, S.; Keating, A.";
    resumeData[6] = "<span class='title'>Pap Test as the First Step in Screening Genetic Stability in Cell-Based Therapy.</span><br> Authors: Carvalho, K.A.T.; Zocche, Larissa, Irioda, A.C., Souza, C., Ferreira, R.J.; Aliprandini, E.; Cunha, R.C.; Francisco, J.C.; Guarita-Souza, L.C.; Malvezzi, M.; Beltrame, M.; Mesquita, L.; Kuczera, D.; Vargas, R.";
    resumeData[7] = "<span class='title'>Functional Outcome of Bone Marrow Stem Cells (CD45+/CD34−) After Cell Therapy in Acute Spinal Cord Injury: In Exercise Training and in Sedentary Rats. </span><br> Authors: Carvalho, K. A. T.; Cunha, R. C.; Vialle E.N; Osiecki, R.; Moreira, GHG; Simeoni, R. B.; Francisco, J. C.; Guarita-Souza, L. C.; Oliveira, L.; Zocche, Larissa; Olandoski, M.";




//create a reference to the sendButton
var sendButton = document.getElementById ("sendButton");
//cancel the default behaviour of the button
sendButton.addEventListener("click", sendButtonClick);

function sendButtonClick(event){
    console.log("clicked");
}

//create a reference to the firstName field
var firstName = document.getElementById ("firstName");

//create a reference to the form
var contactForm = document.getElementById ("contactForm");

contactForm.addEventListener ("submit", function (event){
    event.preventDefault();
    console.log("submitted");
    showFormInput();
    contactForm.reset();
});
function showFormInput(){
    console.log("*******************************")
    console.log("First Name: " + firstName.value);
    console.log("Last Name: " + lastName.value);
    console.log("E-mail: " + email.value);
    console.log("E-mail: " + contactNumber.value);
    console.log("E-mail: " + message.value);
    console.log("*******************************")
}


    var resumeLength = resume.length - 1;
    // check to see if the data exists
    for (var index = resumeLength; index >= 0; index--) {
        //inject html tags along with the text
           
        if (resume[index]) {
            resume[index].innerHTML = resumeData[index];
        }
    }

})();
