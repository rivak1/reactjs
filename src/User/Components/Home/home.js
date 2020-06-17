import React, { Component } from 'react';
import Banner from 'user/Components/Home/Banner/banner';
import Feature from 'user/Components/Home/Features/features';
import Books from 'user/Components/Home/Books/books';
import HandNotes from 'user/Components/Home/HandNotes/handnotes';
import MockTest from 'user/Components/Home/MockTests/mock';
import Videos from 'user/Components/Home/Videos/videos';
class Home extends Component {
	render() {
		return (
          <div className="container">
            <Banner title={"BANNER"}/>
            <Feature title={"FEATURE"} />
            <Books title={"BOOKS"} />
            <HandNotes title={"HANDNOTES"} />
            <MockTest title={"MOCKTEST"} />
            <Videos title={"VIDEOS"}/>
          </div>  
        );
    }
}
export default Home;

