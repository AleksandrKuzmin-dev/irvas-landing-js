const notificationForm = {
    loading: 'Загрузка...',
    succes: 'Спасибо! Скоро мы с вами свяжемся.',
    failure: 'Что-то пошло не так...',
    statusMessage: '',
    timeOutClear: '',

    make(form) {
        try{
            this.statusMessage.remove();
            clearInterval(this.timeOutClear);
        } catch {};

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
    setOtherText(text) {
        this.statusMessage.textContent = text;
    },
    clear(time = 5000) {
        this.timeOutClear = setTimeout(() => {
            try{
                this.statusMessage.remove();
            } catch {};
        }, time);
    }
};

export default notificationForm;