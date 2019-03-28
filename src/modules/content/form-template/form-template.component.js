import {nameInput} from './name-input/name-input.component';
import {emailInput} from './email-input/email-input.component';
import {myInput} from './my-input/my-input.component';
import {lengthInput} from './length-input/length-input.component';
import {submit} from './submit/submit.component';
import {formCompletion} from './form-completion/form-completion.component';

function formTemplate() {
    var app = angular.module('myApp');

    
    nameInput()
    emailInput()
    myInput()
    lengthInput()

    submit()

    
    formCompletion()














    let myCustomFormTemplate = `
    <form  class="form-play" name="aForm" ng-submit="submitMockup()">
        <my-custom-input-1></my-custom-input-1>
        <my-custom-input-2></my-custom-input-2>
        <my-custom-input-3></my-custom-input-3>
        <my-custom-input-4></my-custom-input-4>
        <my-custom-input-submit></my-custom-input-submit>
    </form>
    <form-completion class="progress-bar"></form-completion>
    `
    app.component('myCustomForm', {
    template: myCustomFormTemplate
    })











    // //COMPONENT LVL_0
    // let test = `    
    // AAAADSADASDASDASDASDASDASDASD
    // `
    // app.component('testTest', {
    // template: test
    // // templateURL: 'component-my-form.html'
    // })
}


export {formTemplate};