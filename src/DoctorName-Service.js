import $ from 'jquery';


export class DoctorNameService {
  async getNameDoctors(inputLast) {
    try {
      let response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?last_name=${inputLast}&location=or-portland&skip=0&limit=10&user_key=${process.env.API_KEY}`);
        if (response.ok === false) {
          $("#docOutput").text("Sorry, there was an error handling your request. ");
        }
        let jsonifiedResponse = await response.json();
        return jsonifiedResponse;
      } catch(error) {
        $("#docOutput").text("Sorry, there was an error handling your request. " + error.message);
        console.error("There was an error handling your request: " + error.message);
      }
    }
  }
