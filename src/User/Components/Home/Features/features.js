import React, { Component } from 'react';
import './features.css';
class Feature extends Component {

    render() {
        return (
            <section id="feature" className="mt-5">
                <div className="row">
                    <div className="col-md-12">
                        <h2 className="text-muted">Featured Release</h2>
                        <p>Get inspired by the ways Material adapts to different kinds of brands and digital products – from travel apps to e-commerce and email</p>
                    </div>
                </div>
                <div className="feature-block">
                    <div className="col-md-6 col-sm-10 col-lg-5 col-12">
                        <img className="img-fluid" src="https://cdn-image.departures.com/sites/default/files/1551369896/raffles-city-chongqing-china-RAFFLESCITY0219.jpg" alt={"FEATURES RELEASE"}/>
                    </div>
                    <div className="col-md-6 feature-text-block">
                        <h4>Title and Description</h4>
                        <div className="desc text-wrap">
                            The Schutzstaffel was a major paramilitary 
                            organization under Adolf Hitler and the Nazi 
                            Party in Nazi Germany, and later throughout 
                            German-occupied Europe during World War II. 
                            It began with a small guard unit known as the Saal-Schutz made up 
                            of NSDAP volunteers to provide security for party meetings in Munich.
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}



export default Feature;

