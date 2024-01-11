const tabs = (headerSelector, tabSelector, contentSelector, activeSelector, display = 'block') => {
    const header = document.querySelector(headerSelector),
          tabs = document.querySelectorAll(tabSelector),
          content = document.querySelectorAll(contentSelector);

    function showContent(i){
        content.forEach((item, index) => {
            item.style.display = 'none';

            if(index == i){
                item.style.display = display;
            };
        });

    };

    function setActiveClass(i){
        tabs.forEach((item, index) => {
            item.classList.remove(activeSelector.replace(/\./, ''));

            if(index == i){
                item.classList.add(activeSelector.replace(/\./, ''));
            };
        });
    };

    header.addEventListener('click', (event) => {
        const target = event.target;
        if (target.classList.contains(tabSelector.replace(/\./, '')) || target.parentNode.classList.contains(tabSelector.replace(/\./, ''))){
            tabs.forEach((tab, index) => {
                if(target == tab || target.parentNode == tab){
                    showContent(index);
                    setActiveClass(index);
                }
            });
        }
    });
};

export default tabs;