import {template} from './email-input.template';

function emailInput() {
    angular.module('myApp').component('myCustomInput2', {
            template: template
        })
    }

export {emailInput};