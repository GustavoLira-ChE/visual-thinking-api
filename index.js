const VisualPartnersController = require('./lib/controller/VisualPartnersController');
const VisualPartnersService = require('./lib/services/visualPartnersService');
const Reader = require('./lib/utils/reader');

const students = Reader.readJsonFile('./db/visualpartners.json');
//const email = VisualPartnersController.getVisualPartnersCertificate()

const studentsCertificate = VisualPartnersService.studentsCertificateEmail(students);

console.log(studentsCertificate);