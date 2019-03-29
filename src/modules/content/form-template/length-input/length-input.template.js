export const template = `             
    <div class="form-block form-play-checklength">
    <p class="explanation">Checks if input the input's length is 10: {{checklength.length}}</p>
    <div class="status-wrapper">
        <p ng-style="checklengthLength" class="checklength-length"></p>
    </div> 
    <input 
        ng-model="checklength" 
        required 
        type="text" 
        ng-change="catchLength($event); getFormState();" 
        name="checklength" 
    />
    </div>
    `