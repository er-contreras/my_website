// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"

axios.defaults.headers.common['X-CSRF-Token'] = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

document.addEventListener("DOMContentLoaded", function() {
  var userLang = navigator.language || navigator.userLanguage;
  var langCode = userLang.split('-')[0]; // Extract the language code


  // Send an AJAX request to your Rails backend to set the locale
  // You can use libraries like Axios or jQuery for the AJAX request
  // Example using Axios:
  axios.post('/set_locale', { locale: langCode })
    .then(response => {
      console.log('Locale set successfully');
    })
    .catch(error => {
      console.log('Falling back to default locale (English)');
      console.error('Error setting locale:', error);
    });
});
