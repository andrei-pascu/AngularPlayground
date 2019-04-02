import {template} from './length-input.template';

class Ctrl {
    catchLength($event) {
        if (this.checklength == undefined) {
            this.checklengthDigitsLength = 0;
        } else if (this.checklength.length > 10 ) {
            this.dependencyCtrl.aForm.checkLength.$valid = false;
            this.checklengthDigitsLengthMax = "#881414";
        } else if (this.checklength.length == 10 ) {
            this.checklengthDigitsLengthMax = "#b58707";
            this.dependencyCtrl.aForm.checkLength.$valid = true;
        } else {
            this.dependencyCtrl.aForm.checkLength.$valid = false;
            this.checklengthDigitsLengthMax = "#3d4b8c";
            this.checklengthDigitsLength = (this.checklength.length) * 10;
        }
        this.checklengthLength = {
            "width" : this.checklengthDigitsLength + "%",
            "background-color" : this.checklengthDigitsLengthMax
        }
        this.dependencyCtrl.getValidityState()
    }
}

function lengthInput() {
    var app = angular.module('myApp');

    app.component('myCustomInput4', {
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

export {lengthInput};



            // console.log(this.dependencyCtrl.aForm.checkLength.$valid)
            // console.log(this.checklengthLength)
                          //'parentComponentName'
    // console.log('length-input.component.js loaded')
        // console.log(this.checklength)
        // var data = this.checklength
        
        // this.dependencyCtrl.getValidityState()
        //INFO: Getting data from child components into progress bar
        // this.dependencyCtrl.getValidityState(3, data)
        // console.log(this.checklength.length)

    


        
                // console.log(dataaa)
            // console.log($scope.aForm.checklength.$modelValue)
