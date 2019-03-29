import {template} from './name-input.template';

class Ctrl {
    getFormState($event) {
        // const value = $event.target.value;
        // this.onChange({
        //     $value: value
        // })
        // console.log(value)
    }
}

function nameInput() {
    var app = angular.module('myApp');
    app.component('myCustomInput1', {
        template: template,
        bindings: {
            value: '<',
            onChange: '&'
        },
        controller: Ctrl,
        controllerAs: '$ctrl'
    })
}

export {nameInput};