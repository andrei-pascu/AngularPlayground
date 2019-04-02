export const template = `
    <div class="form-block form-play-email">
        <span class="explanation">Typical email validation: </span>  
        <span ng-show="$ctrl.dependencyCtrl.aForm.email.$invalid && $ctrl.dependencyCtrl.aForm.email.$dirty" class="input-err">Invalid Email</span> 
        <input 
            ng-model="$ctrl.email" 
            required 
            type="email" 
            value="$ctrl.value"
            ng-change="$ctrl.nameValidation();"  
            name="email"  
        />  
    </div>
    `