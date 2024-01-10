/* Модальное окно */

const modals = () => {
    function bindModal(triggerSelector, modalSelector, closeSelector){
        const trigger = document.querySelectorAll(triggerSelector),
              modal = document.querySelector(modalSelector),
              close = document.querySelector(closeSelector);

        trigger.forEach((item) => {
            item.addEventListener('click', (e) => {
                if (e.target){
                    e.preventDefault();
                    showModal(modal);
                }
            })
        });

        close.addEventListener('click', () => {
            closeModal(modal);
        });

        modal.addEventListener('click', (e) => {
            if(e.target === modal){
                closeModal(modal);
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.code == 'Escape' && modal.style.display == 'block'){
                closeModal(modal);
            }
        });
    };

    function showModal(modal){
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    };

    function closeModal(modal){
        modal.style.display = 'none';
        document.body.style.overflow = '';
    };

    function showModalToTime(modalSelector, time){
        const modal = document.querySelector(modalSelector);
        setTimeout(() => {
            showModal(modal);
        }, time);
    };

    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    /* showModalToTime('.popup', 60000); */
};

export default modals;