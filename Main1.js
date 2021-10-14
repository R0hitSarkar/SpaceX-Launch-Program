import React, {Component} from "react";
import Card1 from "./Card1";

class Main1 extends Component{
    render(){
        return(
            <React.Fragment>
               <div className="container">
                <div className="row">
                    <div className="col-3 col-xxl-12 only six f1 f2">
                        <Card1 imgpath="./1.png" id="FalconSat #1" ly="2006" slaunch="false" slanding="false" />
                    </div>
                    <div className="col-3 col-xxl-12 only six t1 t2">
                        <Card1 imgpath="./2.png" id="DemoSat #2" ly="2006" slaunch="true" slanding="true" />
                    </div>
                    <div className="col-3 col-xxl-12 only eight t1 f2">
                        <Card1 imgpath="./3.png" id="Trailblazer #3" ly="2008" slaunch="true" slanding="false" />
                    </div>
                    <div className="col-3 col-xxl-12 only forteen f1 f2">
                        <Card1 imgpath="./4.png" id="RatSat #4" ly="2014" slaunch="false" slanding="false" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-3 col-xxl-12 only sixteen t1 t2">
                        <Card1 imgpath="./5.png" mid="mission name" ly="2016" slaunch="true" slanding="true" />
                    </div>
                    <div className="col-3 col-xxl-12 only sixteen t1 t2">
                        <Card1 imgpath="./6.png" mid="mission name" ly="2016" slaunch="true" slanding="true" />
                    </div>
                    <div className="col-3 col-xxl-12 only nineteen t1 f2">
                        <Card1 imgpath="./7.png" mid="mission name" ly="2019" slaunch="true" slanding="false" />
                    </div>
                    <div className="col-3 col-xx l-12 only twenty t1 t2">
                        <Card1 imgpath="./8.png" mid="mission name" ly="2020" slaunch="true" slanding="true" />
                    </div>
                </div>
            </div> 
            </React.Fragment>
        );
    }
}

export default Main1;