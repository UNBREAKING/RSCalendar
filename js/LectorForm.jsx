import React from 'react';

class LectorForm extends React.Component{


    closeForm(){
        document.getElementById('LectorForm').style.visibility='hidden';
    }


    render(){
        return(
            <div className="Form" id="LectorForm">
                <form>
                    <fieldset>
                        <div className="CloseForm">
                            <span className="glyphicon glyphicon-remove"  aria-hidden="true" onClick={this.closeForm}></span>
                        </div>
                    <dl>
                        <dt><label htmlFor="Name">Name</label></dt>
                        <dd><input type="text" id="Name" name="Name"/></dd>
                        <dt><label htmlFor="Surname">Surname</label></dt>
                        <dd><input type="text" id="Surname" name="Surname"/></dd>
                        <dt><label htmlFor="GitHubAcc">GitHub profile</label></dt>
                        <dd><input type="text" id="GitHubAcc" name="GitHubAcc"/></dd>
                        <dt><label>Status</label></dt>
                    <dd><select name="Status">
                        <option disabled>Choose status</option>
                        <option value="Available">Available</option>
                        <option value="Unavailable">Unavailable</option>
                    </select></dd>
                    </dl>
                        <div className="SaveForm"><button type="button" onClick={this.closeForm}>Save</button></div>
                    </fieldset>
                </form>
            </div>
        );

    }
}

export default LectorForm;