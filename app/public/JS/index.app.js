
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

methods: {
  fetchUser: function() {
    fetch('https:/randomuser.me/api/')
    .then(response => response.json())
    .then(data => {
      var userData = data.results[0];
      console.log(userData);
      this.userName = userData.name.first + " " + userData.name.last;

    });
  }
}
})
