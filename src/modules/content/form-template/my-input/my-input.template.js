export const template = `                 
    <div class="form-block form-play-email">
    <p class="explanation">Check if string has "@"</p>
    <div class="status-wrapper">
        <p class="input-err custom-valid {{aForm.myInput.$valid ? 'invalid' : 'valid'}}"></p>
    </div> 
    <input
        ng-model="myInput"
        required 
        my-directive
        ng-change="getFormState();" 
        name="myInput"   
    />
    </div>
    `