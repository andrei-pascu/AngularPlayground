import {template} from './email-input.template';

class Ctrl {
    nameValidation($event) {
        var value = this.email
        console.log(value)
        this.onChange({
            $value: value
        })
        //FAILED:
        // console.log($ctrl.email.$valid)

        var data = this.email
        this.dependencyCtrl.getValidityState(1, data.length)
        // this.dependencyCtrl.getValidityState(1, data)
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