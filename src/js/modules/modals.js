import notificationForm from './notificationForm';

/* Модальное окно */
const modals = (state) => {
    function bindModal(triggerSelector, modalSelector, closeSelector, closeFormClickBg = true, fieldsStateForCheck = ''){
        const trigger = document.querySelectorAll(triggerSelector),
              modal = document.querySelector(modalSelector),
              close = document.querySelector(closeSelector),
              allModals = document.querySelectorAll('[data-modal]');


        trigger.forEach((item) => {
            item.addEventListener('click', (e) => {
                if (e.target){
                    if(fieldsStateForCheck) {
                        let valid = true;

                        fieldsStateForCheck.forEach(item => {
                            state.hasOwnProperty(item) ? '' : valid = false;  
                        });

                        if(valid) {
                            e.preventDefault();
                            closeModal(allModals);
                            showModal(modal);
                        } else {
                            notificationForm.make(item.parentNode);
                            notificationForm.setOtherText('Заполните все необходимые поля');
                        }
                    } else {
                        e.preventDefault();
                        notificationForm.clear(0);
                        closeModal(allModals);
                        showModal(modal);
                    }
                }
            })
        });

        close.addEventListener('click', () => {
            closeModal(allModals);
        });

        modal.addEventListener('click', (e) => {
            if(e.target === modal && closeFormClickBg == true){
                closeModal(allModals);
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.code == 'Escape' && modal.style.display == 'block'){
                closeModal(allModals);
            }
        });
    };

    function showModal(modal){
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    };

    function closeModal(modals){
        modals.forEach(item => item.style.display = 'none');
        document.body.style.overflow = '';
        notificationForm.clear(0);
    };

    function showModalToTime(modalSelector, time){
        const modal = document.querySelector(modalSelector);
        setTimeout(() => {
            showModal(modal);
        }, time);
    };

    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
    bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false, /* ['form', 'width', 'height'] */);
    bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false, /* ['viewType', 'checkbox'] */);
    /* showModalToTime('.popup', 60000); */
};

export default modals;