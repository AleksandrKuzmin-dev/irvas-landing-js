const images = () => {
    const imgPopup = document.createElement('div'),
          workSection = document.querySelector('.works'),
          bigImage = document.createElement('img');

    bigImage.style.maxWidth = '100%';
    bigImage.style.maxHeight = '100%';

    imgPopup.classList.add('popup');
    imgPopup.style.justifyContent = 'center';
    imgPopup.style.alignItems = 'center';
    imgPopup.style.display = 'none';
    imgPopup.appendChild(bigImage);

    workSection.appendChild(imgPopup);

    workSection.addEventListener('click', (event) => {
        event.preventDefault();

        const target = event.target;

        if (target && target.classList.contains('preview')){
            imgPopup.style.display = 'flex';
            const link = target.parentNode.getAttribute('href');
            bigImage.setAttribute('src', link);
        };

        if(target == imgPopup){
            imgPopup.style.display = 'none';
        };
    });
};

export default images;