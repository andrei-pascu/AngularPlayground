import {nameInput} from './name-input/name-input.component';
import {emailInput} from './email-input/email-input.component';
import {myInput} from './my-input/my-input.component';
import {lengthInput} from './length-input/length-input.component';
import {submit} from './submit/submit.component';
import {formCompletion} from './form-completion/form-completion.component';
import {displayData} from './display-data/display-data.component';
import   './email-input/test';

class Ctrl {
    getValidityState () {
        let validN = (this.aForm.name.$valid && this.aForm.name.$dirty) ? 1 : 0;
        let validE = this.aForm.email.$valid ? 1 : 0;
        let validM = this.aForm.myInput.$valid ? 1 : 0;
        let validP = this.aForm.checkLength.$valid ? 1 : 0;
        let formValidState = parseInt(validN + validE + validM + validP) ;
        let formValidStateAnimation =  -100 + formValidState*25;
        this.passing = {'transform': `translateY(${formValidStateAnimation}%)`};

        if (formValidState !== 4) {
            this.aForm.$invalid = true;
        } else {
            this.aForm.$invalid = false;
        }
        
        
        this.submitMockup = () => {
            // var that = this;
            let name = this.aForm.name.$viewValue;
            let email = this.aForm.email.$viewValue;
            let myInput = this.aForm.myInput.$viewValue;
            let checkLength = this.aForm.checkLength.$viewValue;
            console.log(this.aForm.name.$viewValue)
            console.log(this.aForm.email.$viewValue)
            console.log(this.aForm.myInput.$viewValue)
            console.log(this.aForm.checkLength.$viewValue)
            this.submitted = {
                "Name": name, 
                "Email": email, 
                "At": myInput, 
                "LengthCheck": checkLength
            };
        }
    }

}

function formTemplate() {
    var app = angular.module('myApp');
    
    nameInput();
    emailInput();
    myInput();
    lengthInput();
    submit();
    formCompletion();
    displayData()
    let myCustomFormTemplate = `
    <div class="form-system-container">
        <form class="form-play" name="$ctrl.aForm" ng-submit="$ctrl.submitMockup()">
            <my-custom-input-1 form-reference="aForm" passing="$ctrl.passing"></my-custom-input-1>
            <my-custom-input-2 form-reference="aForm"></my-custom-input-2>
            <my-custom-input-3></my-custom-input-3>
            <my-custom-input-4></my-custom-input-4>
            <my-custom-input-submit></my-custom-input-submit>
            <component-name></component-name>
        </form>
        <form-completion passing="$ctrl.passing" class="progress-bar"></form-completion>
    </div>
    
    <display-data-component class="data-table-container" submitted="$ctrl.submitted"></display-data-component>
        `

    app.component('myCustomForm', {
        template: myCustomFormTemplate,
        controller: Ctrl,
        controllerAs: '$ctrl',
        bindings: {
            // dataTest: '<'
            aForm: '&'
        }
    })
}

export {formTemplate};








// console.log(`Form input states: ${validN} + ${validE} + ${validM} + ${validP}`)
    // console.log('form-template.component.js loaded')
    //angular.module('myApp') Refferencing <- outside the function block 
    //causes it to be called before angular.module('myApp', []) == crash
// angular.module('myApp').component('componentName', {
//     template: 'sapdkapdpa'
// })
    //Cant get the value directly because my-custom-input is a div
    //There must be some kind of attribute to pass data
                // this.submitShow = formValidState !== 4;
                // console.log(this.submitShow)
                // console.log(this.aForm.name.$$classCache["ng-valid-pattern"])
                // console.log(this.aForm.name.$valid ? 1 : 0)
                // console.log(this.aForm.email.$valid ? 1 : 0)
                // console.log(this.aForm.myInput.$valid ? 1 : 0)
                // console.log(this.aForm.checkLength.$valid ? 1 : 0)
// console.log(this.aForm.checkLength.$valid)
            // this.passing = 'Ssss';
            // this.state = [0,0,0,0]
                // // console.log(this.aForm.name.$$classCache["ng-valid-pattern"])
                // console.log(formValidState)
                // console.log(this.passing)
                // console.log(this.aForm)
                // this.state[index] = data;
                // console.log(this.state)
                //PLACEHOLDER_FOR(valid input states)
                // this.passing = {'transform': `translateY(${(this.state.filter(data => data > 0).length)*25}%)`};
                // console.log(this.passing)
        //INFO: Getting data from child components into progress bar
        // controller: function() {
        //     this.passing = 'Ssss';
        //     this.state = [0,0,0,0]
        //     this.getValidityState = function(index, data) {
        //         this.state[index] = data;
        //         // console.log(this.state)
        //         //PLACEHOLDER_FOR(valid input states)
        //         this.passing = {'transform': `translateY(${(this.state.filter(data => data > 0).length)*25}%)`};
        //         // console.log(this.passing)
        //     }
        // },


