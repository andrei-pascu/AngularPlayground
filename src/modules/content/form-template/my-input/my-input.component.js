import {template} from './my-input.template';

class Ctrl {
    getFormState($event) {
        console.log(this)
        var data = this.myInput
        this.dependencyCtrl.myMethod2(data)
        this.dependencyCtrl.getValidityState(2, data)
    }
}

function myInput() {
    var app = angular.module('myApp');
    app.component('myCustomInput3', {
        template: template,
        bindings: {
            onChange: '&'
        },
        controller: Ctrl,
        controllerAs: '$ctrl',
        require: {
                          //'parentComponentName'
          dependencyCtrl: '^myCustomForm'
        }
    })
}

export {myInput};