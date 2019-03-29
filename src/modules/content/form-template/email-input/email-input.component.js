import {template} from './email-input.template';

class Ctrl {
    nameValidation($event) {
        // const value = $event.target.value;
        // this.onChange({
        //     $value: value
        // })
        // console.log(value)
        // console.log($ctrl.email.$valid)

        // getFormState();
    }
}

function emailInput() {
    angular.module('myApp').component('myCustomInput2', {
        template: template,
        bindings: {
            value: '<',
            onChange: '&'
        },
        controller: Ctrl,
        controllerAs: '$ctrl'
    })
}

export {emailInput};