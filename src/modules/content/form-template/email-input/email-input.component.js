import {template} from './email-input.template';

class Ctrl {
    nameValidation($event) {
        var value = this.email
        console.log(value)
        this.onChange({
            $value: value
        })
        // console.log(value)
        // console.log($ctrl.email.$valid)

        // getFormState();
        // console.log(this)
        var data = this.email
        // this.dependencyCtrl.myMethod4(data)
        this.dependencyCtrl.getValidityState(1, data)
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
        controllerAs: '$ctrl',
        require: {
                          //'parentComponentName'
          dependencyCtrl: '^myCustomForm'
        }
    })
}

export {emailInput};