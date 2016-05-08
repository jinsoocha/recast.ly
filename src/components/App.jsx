// var App = () => (
//   <div>
//     <Nav />
//     <div className="col-md-7">
//       <VideoPlayer video={window.exampleVideoData[0]}/>
//     </div>
//     <div className="col-md-5">
//       <VideoList videos={window.exampleVideoData}/>
//     </div>
//   </div>
// );

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: window.exampleVideoData[0]
    };
  }

  componentDidMount() {
    searchYouTube({
      key: window.YOUTUBE_API_KEY,
      query: 'cats' 
    }, (videos) => this.setState({
      clicked: videos[0]
    }));
  }

  onChildChange(video) {
    this.setState({
      clicked: video 
    }); 
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video={this.state.clicked}/>
        </div>
        <div className="col-md-5">
          <VideoList callbackParent={this.onChildChange.bind(this)} videos={window.exampleVideoData}/>
        </div>
      </div>
    );

  }



    


}



// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
