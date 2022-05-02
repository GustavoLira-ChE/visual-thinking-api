const Reader = require('./../../lib/utils/reader');
const VisualPartnersService = require('./../../lib/services/visualPartnersService');

class VisualPartnersController {
    static getVisualPartners(){
        const visualPartnersStudents = Reader.readJsonFile('db/visualpartners.json');
        return visualPartnersStudents; 
    }
    static getVisualPartnersCertificate(){
        const visualPartnersStudents = Reader.readJsonFile('db/visualpartners.json');
        const visualPartnersStudentsCertificate = VisualPartnersService.studentsCertificateEmail(visualPartnersStudents);
        return visualPartnersStudentsCertificate;
    }
    static getVisualPartnersCreditsGreaterThan500(){
        const visualPartnersStudents = Reader.readJsonFile('db/visualpartners.json');
        const visualPartnersStudentsCreditsGreater500 = VisualPartnersService.studentsWithCreditsMajor500(visualPartnersStudents);
        return visualPartnersStudentsCreditsGreater500;
    }
}

module.exports = VisualPartnersController