class VisualPartnersService{
    static studentsCertificate(students){
        const studentsCertificate = students.filter(student => student.haveCertification === true);
        return studentsCertificate;
    }

    static studentsCertificateEmail(students){
        const studentsCertificate = this.studentsCertificate(students);
        const studentsCertificateEmail = studentsCertificate.map(student => student.email);
        return studentsCertificateEmail;
    }
    static studentsWithCreditsMajor500(students){
        const studentsWithCreditsMajor500 = students.filter(student => student.credits >= 500);
        return studentsWithCreditsMajor500;
    }
}

module.exports = VisualPartnersService;