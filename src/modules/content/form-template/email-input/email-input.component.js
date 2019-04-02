import {template} from './email-input.template';

class Ctrl {
    nameValidation($event) {
        var value = this.email
        this.onChange({
            $value: value
        })
        this.dependencyCtrl.getValidityState()
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
          dependencyCtrl: '^myCustomForm'
        }
    })
}

export {emailInput};








        // console.log(this.formReference.email.$$classCache)
        // console.log(value)
        //FAILED:
        // console.log($ctrl.email.$valid)
                          //'parentComponentName'
        // var data = this.email
        //INFO: Getting data from child components into progress bar
        // this.dependencyCtrl.getValidityState(1, data.length)
        // this.dependencyCtrl.getValidityState(1, data)