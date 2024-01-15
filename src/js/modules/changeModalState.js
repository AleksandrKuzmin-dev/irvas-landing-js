import checkNumInputs from './checkNumInputs';

function changeModalState(state) {
    /* Отслежива   ть изменения инпутов, при изменении заносить данные в state */

    const forms = document.querySelectorAll('.balcon_icons_img'),
          width = document.querySelectorAll('#width'),
          height = document.querySelectorAll('#height'),
          glazing = document.querySelectorAll('#view_type'),
          temperature = document.querySelectorAll('.checkbox-test');

          checkNumInputs('#width');
          checkNumInputs('#height');

    function bindActionToElems(elements, event, prop){
        elements.forEach(elem => {
            elem.addEventListener(event, () => {
                switch(elem.nodeName){
                    case 'INPUT':
                        if (elem.getAttribute('type') != 'checkbox'){
                            state[prop] = elem.value;
                            if(state[prop] == false) delete state[prop];
                        } else {
                            if(elem.checked){
                                temperature.forEach((item) => {
                                    item.checked = false;
                                });
                                elem.checked = true;
                                state[prop] = elem.getAttribute('data-value');
                            } else {
                                delete state[prop];
                            };
                        };
                        break;

                    case 'SPAN':
                        state[prop] = elem.getAttribute('data-value');
                        break;
                    case 'SELECT':
                        state[prop] = elem.value;
                        break;
                };
            });
        });
    }     
                
        
    

    bindActionToElems(forms, 'click', 'form');
    bindActionToElems(width, 'input', 'width');
    bindActionToElems(height, 'input', 'height');
    bindActionToElems(glazing, 'change', 'viewType');
    bindActionToElems(temperature, 'change', 'checkbox');


};


export default changeModalState;