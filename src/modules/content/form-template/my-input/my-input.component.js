import {template} from './my-input.template';

class Ctrl {
    getFormState($event) {
        if (this.myInput == undefined) {
            this.dependencyCtrl.aForm.myInput.$valid = false;
        } else if (this.myInput.indexOf("@") > -1) {
            this.dependencyCtrl.aForm.myInput.$valid = true;
        } else {
            this.dependencyCtrl.aForm.myInput.$valid = false;
        }
        this.dependencyCtrl.getValidityState()
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
          dependencyCtrl: '^myCustomForm'
        }
    })
}

export {myInput};








                          //'parentComponentName'
                // this.dependencyCtrl.aForm.myInput.$valid = true;
        // // console.log(this)
        // var data = this.myInput
        // console.log(this.myInput.indexOf("@"))
        //INFO: Getting data from child components into progress bar
        // this.dependencyCtrl.getValidityState(2, data.length)
        // this.dependencyCtrl.getValidityState(2, data)