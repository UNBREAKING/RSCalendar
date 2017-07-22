import React from 'react';

import Row from "./Row.jsx"

class Calendar extends React.Component{
    constructor(){
        super();

        this.createDatesInTable=this.createDatesInTable.bind(this);

        Date.prototype.getMonthName=function () {
            var month=['January','February','March','April','May','June','July','August','September','October', 'November','December'];
            return month[this.getMonth()];
        }

        this.state={
            date : new Date(),
            currentDate: new Date(),
            DayOfWeek: [{className:"Week", data:'Monday'},
                {className:"Week", data:'Tuesday'},
                {className:"Week", data:'Thursday'},
                {className:"Week", data:'Wednesday'},
                {className:"Week", data:'Friday'},
                {className:"Week" ,data:'Saturday'},
                {className:"Week" ,data:'Sunday'}],
            Table: ""
        };

        this.state.Table=this.createDatesInTable();
    }

    createDatesInTable(){
       let LastDate= new Date(this.state.date.getFullYear(),this.state.date.getMonth()+1,0).getDate(),
           D=new Date(this.state.date.getFullYear(),this.state.date.getMonth(),LastDate),
           DNlast=new Date(D.getFullYear(),D.getMonth(),LastDate).getDay(),
           DNfirst=new Date(D.getFullYear(),D.getMonth(),1).getDay();
       let DataOfTable=[];
           for(var i=1;i<DNfirst;i++){
        DataOfTable.push({className:"NotThisMonth",data:""});
       }
       for(var i=1;i<=LastDate;i++){
               if(i==new Date().getDate()&& D.getFullYear()==new Date().getFullYear()&& D.getMonth()==new Date().getMonth()){
                   DataOfTable.push({className:"Today",data:i});
               }else{
                   DataOfTable.push({className:"NotToday",data:i});
               }
       }
       for(var i=6-DNlast;i>=0;i--){
           DataOfTable.push({className:"NotThisMonth",data:""});
       }
       let FinalTable=[];
        for(i=0;i<DataOfTable.length;i+=7){
            FinalTable.push(DataOfTable.slice(i,i+7));
        }
        return FinalTable;

    }


    render(){
        return(

            <div>
                <div className="Date">
                    <span className="glyphicon glyphicon-circle-arrow-left"></span>
                    <a>{this.state.currentDate.getDate()+" "+this.state.currentDate.getMonthName()+", "+ this.state.currentDate.getFullYear()}</a>
                    <span className="glyphicon glyphicon-circle-arrow-right"></span>
                </div>
                <table>
                    <tbody>
                <Row data={this.state.DayOfWeek}/>
                {this.state.Table.map((x,i)=><Row key={i} data={x}/>)}
                    </tbody>
            </table>
            </div>


        );
    }


}


export default Calendar;