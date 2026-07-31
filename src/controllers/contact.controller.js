export class ContactController {
  constructor(lang) {
    this.lang = lang;
  }

  init() {
    this.setupFormSubmit();
  }

  setupFormSubmit() {
    const form = document.querySelector('.php-email-form');
    if (!form) return;

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      
      const thisForm = form;
      const action = thisForm.getAttribute('action');
      const recaptcha = thisForm.getAttribute('data-recaptcha-site-key');
      
      if (!action) {
        this.displayError(thisForm, 'The form action property is not set!');
        return;
      }

      thisForm.querySelector('.loading').classList.add('d-block');
      thisForm.querySelector('.error-message').classList.remove('d-block');
      thisForm.querySelector('.sent-message').classList.remove('d-block');

      const formData = new FormData(thisForm);

      if (recaptcha) {
        if (typeof grecaptcha !== "undefined") {
          grecaptcha.ready(() => {
            try {
              grecaptcha.execute(recaptcha, {action: 'php_email_form_submit'})
              .then(token => {
                formData.set('recaptcha-response', token);
                this.submitForm(thisForm, action, formData);
              });
            } catch(error) {
              this.displayError(thisForm, error);
            }
          });
        } else {
          this.displayError(thisForm, 'The reCaptcha javascript API url is not loaded!');
        }
      } else {
        this.submitForm(thisForm, action, formData);
      }
    });
  }

  submitForm(thisForm, action, formData) {
    fetch(action, {
      method: 'POST',
      body: formData,
      headers: {'X-Requested-With': 'XMLHttpRequest'}
    })
    .then(response => {
      if (response.ok) {
        return response.text();
      } else {
        throw new Error(`${response.status} ${response.statusText} ${response.url}`); 
      }
    })
    .then(data => {
      thisForm.querySelector('.loading').classList.remove('d-block');
      if (data.trim() === 'OK') {
        thisForm.querySelector('.sent-message').classList.add('d-block');
        thisForm.reset(); 
      } else {
        throw new Error(data ? data : 'Form submission failed and no error message returned from: ' + action); 
      }
    })
    .catch((error) => {
      this.displayError(thisForm, error);
    });
  }

  displayError(thisForm, error) {
    thisForm.querySelector('.loading').classList.remove('d-block');
    thisForm.querySelector('.error-message').innerHTML = error;
    thisForm.querySelector('.error-message').classList.add('d-block');
  }

  updateLanguage(lang) {
    this.lang = lang;
  }
}
