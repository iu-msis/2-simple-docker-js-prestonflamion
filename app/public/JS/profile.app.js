
  var app = new Vue({
      el: '#userProfile',
      data: {
      "patientGuid": "SOME-REALLY-LONG-1234",
      "firstName": "Sylvia",
      "lastName": "Hernandez",
      "dob": "2012-09-01",
      "sexAtBirth": "F",
      "priority": "critical",
  },
  created() {
  console.log('this vue app has been created!');
},
methods: {}
  });
