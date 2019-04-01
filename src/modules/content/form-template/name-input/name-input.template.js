export const template = `
    <div class="form-block form-play-name">
    <span class="explanation">Checks if input contains only letters</span>  
    <div>
        <span ng-show="!aForm.name.$valid && aForm.name.$dirty" class="input-err">Must contain just letters</span>
        <span ng-hide="!aForm.name.$valid && aForm.name.$dirty" class="">Valid String: {{$ctrl.name | uppercase}}</span>
        <span ng-show="$ctrl.name">Haide bobby</span>
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