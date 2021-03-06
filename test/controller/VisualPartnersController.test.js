const VisualPartnersController = require("./../../lib/controller/VisualPartnersController");

describe("Test for VisualPartnersController", () => {
    test("Requirement 1. return a list of all students with its properties", () => {
        //arrange and act
        const visualPartnersStudents = VisualPartnersController.getVisualPartners();
        //assert
        for(let i = 0; i < visualPartnersStudents.length; i++){
            expect(typeof visualPartnersStudents[i]).toBe("object");
        }
    });
    test("Requirement 2. return a list of visualPartners student emails that hace a certification property set as true", () => {
        //arrange and act
        const visualPartnersStudentsCertificateEmail = VisualPartnersController.getVisualPartnersCertificate();
        //assert
        for(let i = 0; i < visualPartnersStudentsCertificateEmail.length; i++){
            const expeted = /@/;
            expect(visualPartnersStudentsCertificateEmail[i]).toMatch(/@visualpartnership/);
        }
    });
    test("Requirement 3. return a list of students whose credits property is greater than or equals than 500", () => {
        //arrange and act
        const credits = 500;
        const visualPartnersStudentsCreditsGreater500 = VisualPartnersController.getVisualPartnersCreditsGreaterThanCredits(credits);
        //assert
        for(let i = 0; i < visualPartnersStudentsCreditsGreater500.length; i++){
            expect(visualPartnersStudentsCreditsGreater500[i].credits).toBeGreaterThanOrEqual(credits);
        }
    });
});