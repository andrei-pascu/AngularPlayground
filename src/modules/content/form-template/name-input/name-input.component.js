import {template} from './name-input.template';

class Ctrl {
    getFormState($event) {
        //prints only if it's valid
        // console.log(this.name);
        //dependencyCtrl == 'this' of parent
        
        // console.log(this.dependencyCtrl);
        // console.log(this.dependencyCtrl.myMethod());
        // this.myChildThisStuff({myInsideThisStuff: this.name})
        // return x

        // var $ctrl = this;
        // $ctrl.save = function(data) {
        //     $ctrl.childCallback({'keyName':data})
        //     // console.log($ctrl.childCallback)
        // }
        // // console.log($ctrl.save())

        // function omega(x) {
        //     alert('_' + x)
        // }
        // omega()
        console.log('name inputed')
        var data = this.name
        // this.dependencyCtrl.myMethod1(data)
        this.dependencyCtrl.getValidityState(0, data)
    }
}

function nameInput() {
    var app = angular.module('myApp');
    //How to check valid state
    //How to emit data to parent
    //How to emit valid state to form component
    app.component('myCustomInput1', {
        template: template,
        //Binds data to Ctrl
        bindings: {
            value: '<',
            onChange: '&',
            omega: '&',
            data: '='
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