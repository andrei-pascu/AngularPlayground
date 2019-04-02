export const template = `
    <div class="form-block form-play-name">
    <span class="explanation">Checks if input contains only letters</span>  
    <div>
        <span ng-show="!$ctrl.dependencyCtrl.aForm.name.$valid && $ctrl.dependencyCtrl.aForm.name.$dirty" class="input-err">Must contain only letters</span>
        <span ng-hide="!$ctrl.dependencyCtrl.aForm.name.$valid && $ctrl.dependencyCtrl.aForm.name.$dirty" class="">Valid String: {{$ctrl.name | uppercase}}</span>
    </div>
    <input  
        ng-model="$ctrl.name" 
        required
        type="text"
        ng-pattern="/^[a-zA-Z]+$/"  
        ng-change="$ctrl.getFormState();"
        name="name" 
        data = "$ctrl.data"
    />       
    </div>
    `