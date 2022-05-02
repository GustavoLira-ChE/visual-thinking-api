const Reader = require("./../../lib/utils/reader");
const VisualPartnersService = require("./../../lib/services/visualPartnersService");

class VisualPartnersController {
    static getVisualPartners(){
        const visualPartnersStudents = Reader.readJsonFile("db/visualpartners.json");
        return visualPartnersStudents; 
    }
    static getVisualPartnersCertificate(){
        const visualPartnersStudents = Reader.readJsonFile("db/visualpartners.json");
        const visualPartnersStudentsCertificate = VisualPartnersService.studentsCertificateEmail(visualPartnersStudents);
        return visualPartnersStudentsCertificate;
    }
    static getVisualPartnersCreditsGreaterThanCredits(credits){
        const visualPartnersStudents = Reader.readJsonFile("db/visualpartners.json");
        const visualPartnersStudentsCreditsGreaterCredits = VisualPartnersService.studentsWithCreditsGreaterThan(visualPartnersStudents,credits);
        return visualPartnersStudentsCreditsGreaterCredits;
    }
}

module.exports = VisualPartnersController;