const express = require("express"); 
const VisualPartnersController = require("./controller/VisualPartnersController");

//Create an server
const app = express();

//To use JSON in the server
app.use(express.json());

//Port 3000
const port = 3000;

//Use a HTML file like initial page
app.use(express.static("public"));
// If the html file is not ready use:
app.get("/",(req,res) => {
    res.send("Hello World! This is an API for Visual Partners");
});

//First requirement response:
app.get("/v1/students", (req,res) => {
    const visualPartnersStudent = VisualPartnersController.getVisualPartners();
    res.status(200).json(visualPartnersStudent);
});

//Second requirement response:
app.get("/v1/students/certificate/email", (req, res) => {
    const certificateStudentsEmail = VisualPartnersController.getVisualPartnersCertificate();
    res.status(200).json(certificateStudentsEmail);
});

//Third requirement response:
app.get("/v1/students/credits/:credits", (req, res) => {
    const credits = req.params.credits;
    const studentsScoreMin500 = VisualPartnersController.getVisualPartnersCreditsGreaterThanCredits(credits);
    res.status(200).json({creditsGreaterOrEqualThan: credits,students: studentsScoreMin500});
});

//listen app
app.listen(port, () => {
    console.log(`Visual Partners in Localhost:${port}`);
});