import React from 'react';

class EventForm extends React.Component{
    constructor(props){
        super(props);
        this.changeColor=this.changeColor.bind(this);
        this.state={value:''};
    }


    closeForm(){
        document.getElementById('EventForm').style.visibility='hidden';
    }

    changeColor(event){
        this.setState({value: event.target.value});
    }


    render(){
        return(
            <div className="Form" id="EventForm">
                <form>
                    <fieldset>
                        <div className="CloseForm">
                            <span className="glyphicon glyphicon-remove"  aria-hidden="true" onClick={this.closeForm}></span>
                        </div>
                        <dl>
                            <dt><label htmlFor="Name">Name</label></dt>
                            <dd><input type="text" id="Name" name="Name"/></dd>
                            <dt><label htmlFor="Color">Color</label></dt>
                            <dd><input type="color" id="Color" value={this.state.value} onChange={this.changeColor}/></dd>
                        </dl>
                        <div className="SaveForm"><button type="button" onClick={this.closeForm}>Save</button></div>
                    </fieldset>
                </form>
            </div>
        );

    }
}

export default EventForm;