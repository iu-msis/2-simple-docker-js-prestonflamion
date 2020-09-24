
  var app = new Vue({
      el: '#userProfile',
      data: {
      userName: "John",
      userEmail: "ww@gmail.com",
      userImgLarge:'',
      userImgThumb:'',
      userAge: '',
      userCountry: '',
      userBirthday:'',
      times: 0
      },

      created() {
        this.fetchUser();
},

  methods: {
    yell: function() {
      this.times = this.times + 1
      var msg = "Clicked "  + this.times + " times.";
      alert(msg);
    },
    fetchUser: function() {
      fetch('https:/randomuser.me/api/')
      .then(response => response.json())
      .then(data => {
        var userData = data.results[0];
        console.log(userData);
        this.userName = userData.name.first + " " + userData.name.last;
        this.userEmail = userData.email;
        this.userImgLarge = userData.picture.large;
        this.userImgThumb = userData.picture.thumbnail;
        this.userAge = userData.dob.age;
        this.userCountry = userData.location.country;
        this.userBirthday = userData.dob.date[5] + userData.dob.date[6] + userData.dob.date[4] + userData.dob.date[8] +userData.dob.date[9];

      });
    }
  },

})
