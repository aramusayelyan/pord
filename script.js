const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Ուղարկվում է...';

   const serviceID = 'default_service';
   const templateID = 'template_z638g39';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Ուղարկել';
      alert('Հաղորթգրությունը հաջողությամբ տեղ է հասել!');
    }, (err) => {
      btn.value = 'Ուղարկել';
      alert(JSON.stringify(err));
    });
});
