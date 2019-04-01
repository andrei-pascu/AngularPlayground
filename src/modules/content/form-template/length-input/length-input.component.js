import {template} from './length-input.template';

class Ctrl {
    catchLength($event) {
        // console.log(this.checklength)
        var data = this.checklength
        
        this.dependencyCtrl.getValidityState(3, data.length)
        // this.dependencyCtrl.getValidityState(3, data)
    }
}

function lengthInput() {
    // console.log('length-input.component.js loaded')
    var app = angular.module('myApp');

    app.component('myCustomInput4', {
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

export {lengthInput};