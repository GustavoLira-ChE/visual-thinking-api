const VisualPartnersService = require('./../../lib/services/visualPartnersService');
const Reader = require('./../../lib/utils/reader');

describe("Test for VisualPartnersService class", () => {
    test("Requirement test: return a list of students objects that have the haveCertification property as true", () => {
        //arrange and act
        const students = Reader.readJsonFile('db/visualpartners.json');
        const studentsCertificate = VisualPartnersService.studentsCertificate(students);
        //assert
        for(let i = 0; i < studentsCertificate.length; i++){
            expect(studentsCertificate[i].haveCertification).toBeTruthy();
        }
    });
    test("Requirement test: return a list of emails from students whose haveCertification property is true", () => {
        //arrange and act
        const students = Reader.readJsonFile('db/visualpartners.json');
        const studentsCertificateEmail = VisualPartnersService.studentsCertificateEmail(students);
        //assert
        for(let i = 0; i < studentsCertificateEmail.length; i++){
            expect(studentsCertificateEmail[i].haveCertification()).toBeTruthy(); 
        }
    });
    test("Requirement test: return a list with student objects whose credits property is =>500", () => {
        //arrange and act
        const students = Reader.readJsonFile('db/visualpartners.json');
        const studentsWithCreditsMajor500 = VisualPartnersService.studentsWithCreditsMajor500(students);
        //assert
        for(let i = 0; i < studentsWithCreditsMajor500.length; i++){
            expect(studentsWithCreditsMajor500[i].credits).toBeGreaterThanOrEqual(500);
        }
    });
});