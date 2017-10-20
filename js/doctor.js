export class Doctor {
  constructor() {

 }

 testAPI (condition, apiKey) {
     let promise = new Promise(function(resolve, reject) {
       let request = new XMLHttpRequest();
       let url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${condition}&location=or-portland&user_location=45.5206%2C-122.6774&sort=best-match-asc&skip=0&limit=25&user_key=${apiKey}`;
       request.onload = function() {
         if (this.status === 200) {
           resolve(request.response);
         } else {
           reject(Error(request.statusText));
         }
       };
       request.open("GET", url, true);
       request.send();
     });

     promise.then(function(response) {
       let list = JSON.parse(response);
       debugger;


   }, function(error) {
     $('.showErrors').text(`There was an error processing your request: ${error.message}`);
   });
 }

}
