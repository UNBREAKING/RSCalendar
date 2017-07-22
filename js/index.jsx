import React from 'react';

import Header from './Header.jsx';
import Menu from './Menu.jsx';
import LectorsAndEventsPage from "./EditLectorsAndEvents.jsx";
import LectorForm from "./LectorForm.jsx";
import EventForm from "./EventForm.jsx";
import Calendar from "./Calendar.jsx";

class Index extends React.Component {
    constructor(){
        super();
        this.LevelMenu=1;
        this.TypeOfForm=0;
        this.changeToAdminMenu=this.changeToAdminMenu.bind(this);
        this.changeToMainMenu=this.changeToMainMenu.bind(this);
        this.changeToLectorsPage=this.changeToLectorsPage.bind(this);
        this.changeToEventsPage=this.changeToEventsPage.bind(this);
        this.turnCalendarOn=this.turnCalendarOn.bind(this);
        this.StartMenu={
            data:[
                {
                    icon:"glyphicon glyphicon-calendar",
                    text:"Client",
                    fun:this.turnCalendarOn
                },
                {
                    icon:"glyphicon glyphicon-wrench",
                    text:"Administration",
                    fun:this.changeToAdminMenu
                }
            ]
        };
        this.AdminMenu={
            data:[
                {
                    icon:"glyphicon glyphicon-triangle-left",
                    text:"Back",
                    fun:this.changeToMainMenu
                },
                {
                    icon:"glyphicon glyphicon-user",
                    text:"Lector Profiles",
                    fun:this.changeToLectorsPage
                },
                {
                    icon:"glyphicon glyphicon-book",
                    text:"Event Types",
                    fun:this.changeToEventsPage
                },
                {
                    icon:"glyphicon glyphicon-calendar",
                    text:"Add Events",
                    fun:""
                }
            ]
        };
        this.LectorsPage={
            data:[
                {
                    ClassName:"ExitMenu",
                    icon:"glyphicon glyphicon-home",
                    text:"Back",
                    fun:this.changeToAdminMenu
                },
                {
                    ClassName:"EditLector",
                    icon:"glyphicon glyphicon-user",
                    text:"Add Lector",
                    fun:this.turnOnLectorForm
                }
            ]
        }
        this.EventTypes={
            data:[
                {
                    ClassName:"ExitMenu",
                    icon:"glyphicon glyphicon-home",
                    text:"Back",
                    fun:this.changeToAdminMenu
                },
                {
                    ClassName:"EditLector",
                    icon:"glyphicon glyphicon-bell",
                    text:"Add Event",
                    fun:this.turnOnEventForm
                }
            ]
        }
        this.CalendarOn=false;
        this.state={data: this.StartMenu.data};

    }

    changeToMainMenu(){
        this.setState(prevState=>({data: this.StartMenu.data}));
        this.LevelMenu=1;
        this.TypeOfForm=0;
    }

    changeToAdminMenu(){
        this.LevelMenu=1;
        this.setState(prevState=>({data: this.AdminMenu.data}));
        this.TypeOfForm=0;
    }

    changeToLectorsPage(){
        this.LevelMenu=2;
        this.setState(prevState=>({data: this.LectorsPage.data}));
        this.TypeOfForm=1;
    }

    changeToEventsPage(){
        this.LevelMenu=2;
        this.setState(prevState=>({data: this.EventTypes.data}));
        this.TypeOfForm=2;
    }

    turnOnLectorForm(){
        document.getElementById('LectorForm').style.visibility="visible";
    }

    turnOnEventForm(){
        document.getElementById('EventForm').style.visibility="visible";
    }

    turnCalendarOn(){
        this.setState(prevState=>({data: ""}));
        this.CalendarOn=true;
    }

    render() {
        return (
            <div>
        <Header/>

                {this.CalendarOn==true?
                    <Calendar/>
                    :<div id={this.LevelMenu== 1 ? "menu":"EditMenu" }>
            {this.LevelMenu==1?
                this.state.data.map((block,i)=> <Menu key={i} data={block}/>):
                this.state.data.map((block,i)=> <LectorsAndEventsPage key={i} data={block}/>)
            }
        </div>}
                {this.TypeOfForm!=0 ? this.LevelMenu==2&& this.TypeOfForm==1?<LectorForm/>:<EventForm/>:""}
            </div>
        );
    }
}

export default Index;
