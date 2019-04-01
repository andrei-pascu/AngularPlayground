export const template = `             
    <div class="form-block form-play-checklength">
    <p class="explanation">Checks if input the input's length is 10: {{$ctrl.checklength.length}}</p>
    <div class="status-wrapper">
        <p ng-style="checklengthLength" class="checklength-length"></p>
    </div> 
    <input 
        ng-model="$ctrl.checklength" 
        required 
        type="text" 
        ng-change="$ctrl.catchLength();" 
        name="checkLength" 
    />
    </div>
    `