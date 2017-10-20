# _Doctor Finder_

#### _An independent project exploring Asynchrony and APIs in JavaScript, 10.20.2017_

#### By _Riki Montgomery_

## Description

_A website for users to search by medical issue (ie: “sore throat”, "rash", etc.) and receive a list of doctors in their area who can treat their medical issue._

## User Stories

* A user should be able to enter a medical issue to receive a list of doctors in the Portland area that fit the search query.

* A user should be able to to enter a name to receive a list of doctors in the Portland area that fit the search query.

* If the query response includes any doctors, the following information should be included about each doctor: first name, last name, address, phone number, website and whether or not the doctor is accepting new patients (the API provides this data).
* If the API call results in an error (any message not a 200 OK), the application should return a notification that states what the error is.

* If the query response doesn't include any doctors (for instance, if no doctors meet the search criteria), the application should return a notification that states that no doctors meet the criteria. (This is not an error so it should be handled separately from any errors.)


## Technologies Used

* JavaScript
* Node
* jQuery
* HTML
* CSS
* Bootstrap

## Setup/Installation Requirements

1. _`$ git clone` [https://github.com/mostriki/doctor-finder](https://github.com/mostriki/doctor-finder)_

2. _`$ cd doctor-finder/`_

3. _`$ npm install`_

4. _`$ bower install`_

5. _`$ gulp build`_

6. _`$ gulp serve`_

## Support and contact details

_If you have any updates or suggestions please contact [Riki Montgomery] (mostriki820@gmail.com) or make a contribution to my repository._

### License

GPL License

Copyright (c) 2017 Riki Montgomery
