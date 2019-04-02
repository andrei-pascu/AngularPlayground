import {template} from './name-input.template';

class Ctrl {
    getFormState($event) {
        var data = this.name
        this.dependencyCtrl.getValidityState()
    }
}

function nameInput() {
    var app = angular.module('myApp');
    app.component('myCustomInput1', {
        template: template,
        bindings: {
            passing: '=',
            formReference: '<'
        },
        controller: Ctrl,
        controllerAs: '$ctrl',
        require: {
          dependencyCtrl: '^myCustomForm'
        }
    })
}

export {nameInput};







    //QUESTIONS:
    //How to check valid state
    //How to emit data to parent
    //How to emit valid state to form component
            // value: '<',
            // onChange: '&',
            // omega: '&',
            // dataTest: '='


        //Binds data to Ctrl
                          //'parentComponentName'
            
        // console.log(this.formReference)
        //INFO:
        //prints only if it's valid
        //dependencyCtrl == 'this' of parent
        

        //FAILED: [Child->Parent]
        // var $ctrl = this;
        // $ctrl.save = function(data) {
        //     $ctrl.childCallback({'keyName':data})
        //     // console.log($ctrl.childCallback)
        // }
        // // console.log($ctrl.save())

        // function omega(x) {
        //     alert('_' + x)
        // }
        
        // console.log(this)
        // console.log(this.dependencyCtrl.aForm.name.$valid)
        //INFO: Getting data from child components into progress bar
        // this.dependencyCtrl.getValidityState(0, data.length)
        // this.dependencyCtrl.getValidityState(0, data)