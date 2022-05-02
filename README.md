# visual-thinking-api
Build a API to Code Challenge week 4 LaunchX

This API provides you with 3 endpoints, first one returns all Visual Partner students information, second one returns a list of students who are certificate, and third one returns a list of students in function of credits value passed as parameter to endpoint.

## Dependecies

### ***Jest***
This dependency is used to make test to all different components into the app, every file has its test suit.

### ***EsLint***
This dependency is used to find out error into the app, making the app accomplish syntax as JavaScript specific.

### ***Express***
This dependency is used to generate the server where the API will be consult, also it is used to build API endpoints.

## Component design
First component VisualPartnersService has three function:
1. `studentsCertificate` function filter students in function of `haveCertificate` property, is the property is true add the student into list.
2. `studentsCertificateEmail` function use `studentsCertificate` and then save emails into a list. Returning a list of email from students that have a certification.
3. `studentsWithCreditsGreaterThan` function take a list of students and a paramenter `credits` to filter the students depence of the `credits ` value.

Second component Reader just has one function, this function takes a json file a return a list with objects (students).

And Third component is VisualPartnersStudent; this component has three functions that are an extension of the First component to link services with the server.

