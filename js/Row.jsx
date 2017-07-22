import  React from 'react';


class Row extends React.Component{

    render(){
        return(
            <tr>
                {this.props.data.map((x,i)=><td className={x.className} key={i}>{x.data}</td>)}
            </tr>

        );
    }
}

export default Row;