import {nameInput} from './name-input/name-input.component';
import {emailInput} from './email-input/email-input.component';
import {myInput} from './my-input/my-input.component';
import {lengthInput} from './length-input/length-input.component';
import {submit} from './submit/submit.component';
import {formCompletion} from './form-completion/form-completion.component';
import   './email-input/test';



function formTemplate() {
    console.log('form-template.component.js loaded')
    //angular.module('myApp') Refferencing <- outside the function block 
    //causes it to be called before angular.module('myApp', []) == crash
    var app = angular.module('myApp');

    nameInput();
    emailInput();
    myInput();
    lengthInput();
    submit();
    formCompletion();
// angular.module('myApp').component('componentName', {
//     template: 'sapdkapdpa'
// })


    //Cant get the value directly because my-custom-input is a div
    //There must be some kind of attribute to pass data
    let myCustomFormTemplate = `
        <form  class="form-play" name="aForm" ng-submit="submitMockup()">
            <my-custom-input-1 data="$ctrl.data"></my-custom-input-1>
            <my-custom-input-2></my-custom-input-2>
            <my-custom-input-3></my-custom-input-3>
            <my-custom-input-4></my-custom-input-4>
            <my-custom-input-submit></my-custom-input-submit>
            <component-name></component-name>
        </form>
        <form-completion class="progress-bar"></form-completion>
        <h1 style="position: absolute; top: 0;">From ComponentChildNAME -> Parent: {{$ctrl.interpolationTest}}</h1>
        `
    app.component('myCustomForm', {
        template: myCustomFormTemplate,
        controller: function() {
            //Succesfull pass data to child controller //require:{dependencyCtrl:'parentComponentName'}
            this.hhh = 'X';
            console.log(this)

            // this.myMethod = () => 1;
            this.myMethod = function(data) {
                console.log('_DYMANIC_FROM_INPUT: ' + data)
                this.interpolationTest = data;
            }

//             function methodOnParent(myInsideThisStuff) {
// console.log(myInsideThisStuff)
//             }
        },
        controllerAs: '$ctrl',
        bindings: {
            data: '<'
        }
    })
}

export {formTemplate};



