import {template} from './name-input.template';

class Ctrl {
    getFormState($event) {
        //prints only if it's valid
        console.log(this);
        console.log(this.dependencyCtrl);
    }
}

function nameInput() {
    var app = angular.module('myApp');
    //How to check valid state
    //How to emit data to parent
    //How to emit valid state to form component
    app.component('myCustomInput1', {
        template: template,
        bindings: {
            value: '<',
            onChange: '&'
        },
        controller: Ctrl,
        controllerAs: '$ctrl',
        require: {
                          //'parentComponentName'
          dependencyCtrl: '^myCustomForm'
        },
    })
}

export {nameInput};