import {template} from './name-input.template';

class Ctrl {
    getFormState($event) {
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
        
        console.log(this)
        var data = this.name
        
        this.dependencyCtrl.getValidityState(0, data.length)
        // this.dependencyCtrl.getValidityState(0, data)
    }
}

function nameInput() {
    var app = angular.module('myApp');
    //QUESTIONS:
    //How to check valid state
    //How to emit data to parent
    //How to emit valid state to form component
    app.component('myCustomInput1', {
        template: template,
        //Binds data to Ctrl
        bindings: {
            // value: '<',
            // onChange: '&',
            // omega: '&',
            // dataTest: '='
            passing: '='
        },
        controller: Ctrl,
        controllerAs: '$ctrl',
        require: {
                          //'parentComponentName'
          dependencyCtrl: '^myCustomForm'
        }
    })
}

export {nameInput};