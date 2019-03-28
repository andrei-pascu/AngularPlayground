function emailInput() {
    var app = angular.module('myApp');
    
    let myCustomInput2Template = `
    <div class="form-block form-play-email">
        <span class="explanation">Typical email validation: </span>  
        <span ng-show="aForm.email.$invalid && aForm.email.$dirty" class="input-err">Invalid Email</span> 
        <input 
            ng-model="email" 
            required 
            type="email" 
            ng-change="nameValidation(); getFormState();"  
            name="email"  
        />  
    </div>
    `
    app.component('myCustomInput2', {
        template: myCustomInput2Template
    })
}

export {emailInput};