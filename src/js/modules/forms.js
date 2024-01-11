/* Формы */
import notificationForm from './notificationForm';
import checkNumInputs from './checkNumInputs';

const forms = (formSelector) => {
    const forms = document.querySelectorAll(formSelector),
          inputs = document.querySelectorAll('input');

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

            notificationForm.make(item);
            postData('./assets/server.php', formData)
                .then(res => {
                    console.log(res);
                    notificationForm.setSucces();
                })
                .catch(() => {
                    notificationForm.setFailure();
                })
                .finally(() => {
                    notificationForm.clear();
                    clearAllInputs();
                })
        });
    });

    checkNumInputs('input[name="user_phone"]')
    
};

export default forms;