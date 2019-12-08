import $ from 'jquery';


export function cardElement(doctorsList) {
  if (doctorsList.data.length === 0) {
    $('#docOutput').append(`<div class='doctorCard'>
    <p>Sorry, this search returned zero results.</p>`);
  } else {
    for (let i=0; i<doctorsList.data.length; i++) {
      if (doctorsList.data[i].practices[0].accepts_new_patients === 'false') {
        var patients = "Sorry, this physician is not currently accepting patients.";
      } else {
        patients = "This physician is currently accepting patients.";
      }

      let infoArray = [doctorsList.data[i].practices[0].name, doctorsList.data[i].practices[0].visit_address.street, doctorsList.data[i].practices[0].visit_address.street2, doctorsList.data[i].practices[0].visit_address.city, doctorsList.data[i].practices[0].visit_address.state, doctorsList.data[i].practices[0].visit_address.zip, doctorsList.data[i].practices[0].phones[0].number, doctorsList.data[i].practices[0].website, patients];

      let cleanArray = []

      infoArray.forEach(function(info){
        if (info === "undefined") {
          cleanArray.push("");
        } else {
          cleanArray.push(info);
        }
      });

      $('#docOutput').append(`<div class='doctorCard'>
      <p>${cleanArray[0]}</p>
      <p>${cleanArray[1]}, ${cleanArray[2]}</p>
      <p>${cleanArray[3]}, ${cleanArray[4]}, ${cleanArray[5]}</p>
      <p>${cleanArray[6]}</p>
      <p>${cleanArray[7]}</p>
      <p>${patients}</p>
      </div>`
    );
    }
  }
}
