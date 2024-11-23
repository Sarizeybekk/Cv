function convertKaydet () {
    var firstnameInput= document.getElementById('firstname-input');
    var mesajInput = document.getElementById('mesaj-input');
    var phoneInput = document.getElementById('phone-input');

    var person = {
                  firstName: firstnameInput.value,
        mesaj: mesajInput.value,
        phoneNumber: phoneInput.value,
      };
    var jsonP = document.getElementById('kaydet-text');
    jsonP.innerText = JSON.stringify(person);
}
