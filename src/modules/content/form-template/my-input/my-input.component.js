import {template} from './my-input.template';

class Ctrl {
    getFormState($event) {
        // console.log(this)
        var data = this.myInput
        
        this.dependencyCtrl.getValidityState()
        //INFO: Getting data from child components into progress bar
        // this.dependencyCtrl.getValidityState(2, data.length)
        // this.dependencyCtrl.getValidityState(2, data)
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