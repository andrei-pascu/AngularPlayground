export const template = `                 
    <div class="form-block form-play-email">
    <p class="explanation">Check if string has "@"</p>
    <div class="status-wrapper">
        <p class="input-err custom-valid {{$ctrl.dependencyCtrl.aForm.myInput.$valid ? 'invalid' : 'valid'}}"></p>
    </div> 
    <input
        ng-model="$ctrl.myInput"
        required 
        type="text"
        ng-change="$ctrl.getFormState();" 
        name="myInput"   
    />
    </div>
    `