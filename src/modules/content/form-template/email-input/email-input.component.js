import {template} from './email-input.template';

class Ctrl {
    nameValidation($event) {
        // console.log(this.formReference.email.$$classCache)
        var value = this.email
        // console.log(value)
        this.onChange({
            $value: value
        })
        //FAILED:
        // console.log($ctrl.email.$valid)

        var data = this.email
        this.dependencyCtrl.getValidityState(1, data)
        // this.dependencyCtrl.getValidityState(1, data)
    }
}

function emailInput() {
    angular.module('myApp').component('myCustomInput2', {
        template: template,
        bindings: {
            value: '<',
            onChange: '&',
            formReference: '<'
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