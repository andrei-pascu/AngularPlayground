function nameInput() {
    var app = angular.module('myApp');

    let myCustomInput1Template = `
    <div class="form-block form-play-name">
    <span class="explanation">Checks if input contains only letters</span>  
    <div>
        <span ng-show="!aForm.name.$valid && aForm.name.$dirty" class="input-err">Must contain just letters</span>
        <span ng-hide="!aForm.name.$valid && aForm.name.$dirty" class="">Valid String: {{name | uppercase}}</span>
    </div>
    <input  
        ng-model="name" 
        required
        type="text"
        ng-pattern="/^[a-zA-Z]+$/"  
        ng-change="getFormState();"
        name="name" 
    />       
    </div>
    `
    app.component('myCustomInput1', {
        template: myCustomInput1Template
    })
}

export {nameInput};