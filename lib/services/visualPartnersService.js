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
    static studentsWithCreditsGreaterThan(students,credits){
        const studentsWithCreditsGreatherThan = students.filter(student => student.credits >= credits);
        return studentsWithCreditsGreatherThan;
    }
}

module.exports = VisualPartnersService;