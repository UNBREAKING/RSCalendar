import React from 'react';

class LectorsAndEventsPage extends React.Component{

    render() {
        return (
            <button className={this.props.data.ClassName} onClick={this.props.data.fun}>
                <span className={this.props.data.icon} aria-hidden="true"></span>
                <a>{this.props.data.text}</a>
            </button>

        );
    }


};

export default LectorsAndEventsPage;