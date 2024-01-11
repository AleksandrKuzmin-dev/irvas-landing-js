/* Формы */

const forms = (formSelector) => {
    const forms = document.querySelectorAll(formSelector),
          inputs = document.querySelectorAll('input'),
          phoneInputs = document.querySelectorAll('input[name="user_phone"]')

    const messages = {
        loading: 'Загрузка...',
        succes: 'Спасибо! Скоро мы с вами свяжемся.',
        failure: 'Что-то пошло не так...',
        statusMessage: '',
        timeOutClear: '',

        make(form) {
            try{
                this.statusMessage.remove();
                clearInterval(this.timeOutClear);
            } catch {
                
            }
            this.statusMessage = document.createElement('div');
            this.statusMessage.classList.add('status');
            this.statusMessage.textContent = this.loading;
            form.appendChild(this.statusMessage);
        },
        setSucces() {
            this.statusMessage.textContent = this.succes;
        },
        setFailure() {
            this.statusMessage.textContent = this.failure;
        },
        clear(time = 5000) {
            this.timeOutClear = setTimeout(() => {
                this.statusMessage.remove();
            }, time);
            
        }
    };

    const postData = async function(url, data){
       const result = await fetch(url, {
            method: "POST",
            body: data
        });

        return await result.text();
    };

    const clearAllInputs = () => {
        inputs.forEach(item => {
            item.value = '';
        })
    };

    forms.forEach((item) => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(item);

            messages.make(item);
            postData('./assets/server.php', formData)
                .then(res => {
                    console.log(res);
                    messages.setSucces();
                })
                .catch(() => {
                    messages.setFailure();
                })
                .finally(() => {
                    messages.clear();
                    clearAllInputs();
                })
        });
    });

    phoneInputs.forEach(item => {
        item.addEventListener('input', () => {
            item.value = item.value.replace(/\D/, '');
        })
    })
};

export default forms;