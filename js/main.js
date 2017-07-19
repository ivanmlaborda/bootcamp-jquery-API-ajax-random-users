// console.log('main.js loaded...')

// $.ajax({
//   url: 'https://randomuser.me/api/',
//   dataType: 'json',
//   success: function (data) {
//     console.log(data)
//   }
// })

var countries = {
  AU: 'Australia',
  BR: 'Brazil',
  CA: 'Canada',
  CH: 'Switzerland',
  DE: 'Germany',
  DK: 'Denmark',
  ES: 'Spain',
  FI: 'Finland',
  FR: 'France',
  GB: 'United Kingdom',
  IE: 'Ireland',
  IR: 'Iran',
  NL: 'Netherlands',
  NZ: 'New Zealand',
  TR: 'Turkey',
  US: 'United States of America'
}

// Button Listener
$('#get-profile-button').on('click', function (e) {
  e.preventDefault()
  // Calling API
  $.ajax({
    url: 'https://randomuser.me/api/',
    dataType: 'json',
    success: function (data) {
      console.log(data)
    }
  })
    .then(function (randData) {
      var name = randData.results['0'].name.first
      var lastName = randData.results['0'].name.last
      var title = randData.results['0'].name.title
      var regDate = randData.results['0'].registered
      var birthDate = randData.results['0'].dob
      var nation = randData.results['0'].nat.toUpperCase()
      var nationClass = 'flag-icon-' + nation.toLowerCase()
      var gender = randData.results['0'].gender
      var street = randData.results['0'].location.street
      var postcode = randData.results['0'].location.postcode
      var city = randData.results['0'].location.city
      var state = randData.results['0'].location.state
      var email = randData.results['0'].email
      var cell = randData.results['0'].cell
      var phone = randData.results['0'].phone
      var picture = randData.results['0'].picture.medium
      console.log(nation)
      console.log(nationClass)
      $('h3').text(title + ' ' + name + ' ' + lastName)
      $('.registration-date').text(dateTransform(regDate))
      $('.born-date').text(dateTransform(birthDate))
      $('.nationality i').removeClass().addClass('flag-icon').addClass(nationClass)
      $('.nationality span').text(countries[nation])
      $('.gender').text(gender)
      $('.address').html(street + '<br>' + postcode + '<br>' + city + '<br>' + state)
      $('.email').text(email)
      $('.phone').html(cell + '<br>' + phone)
      $('img').attr('src', picture)
    })
})

// Function dateTransform
function dateTransform (targDate) {
  date = new Date(targDate)
  var dd = date.getDate()
  var mm = date.getMonth() + 1
  var yyyy = date.getFullYear()
  if (dd < 10) {
    dd = '0' + dd
  }
  if (mm < 10) {
    mm = '0' + mm
  }
  return dd + '/' + mm + '/' + yyyy
}
