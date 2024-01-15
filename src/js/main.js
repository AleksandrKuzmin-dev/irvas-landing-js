import './slider';
import modals from './modules/modals';
import tabs from './modules/tabs';
import forms from './modules/forms';
import changeModalState from './modules/changeModalState';
import timer from './modules/timer';

window.addEventListener('DOMContentLoaded', () => {

    let deadLine = '2025,1,15',
        modalState = {
            form: 0,
            viewType: 'tree'
        };

    modals(modalState);
    tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
    tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', '.after_click');
    tabs('.balcon_icons', '.balcon_icons_img', '.big_img > img', '.do_image_more', 'inline-block');
    forms('form', modalState);
    changeModalState(modalState);
    timer('#timer', deadLine);
});