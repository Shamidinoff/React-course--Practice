import { Component, useState, useEffect, useCallback } from "react";
import { Container } from "react-bootstrap";
import "./App.css";

const Slider = (props) => {
  const [slide, setSlide] = useState(0);
  const [autoplay, setAutoplay] = useState(false);

  const getSomeImages = useCallback(() => {
    console.log("fetching");
    return [
      "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      "https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1834&q=80",
    ];
  }, [slide]);

  function logging() {
    console.log("Log");
  }

  useEffect(() => {
    console.log("Render");
    document.title = `Slide: ${slide}`;
  }, [slide]);

  useEffect(() => {
    console.log("autoplay");
  }, [autoplay]);

  function changeSlide(i) {
    setSlide((slide) => slide + i);
  }

  function toggleAutoplay() {
    setAutoplay((autoplay) => !autoplay);
  }

  return (
    <Container>
      <div className="slider w-50 m-auto">
        {/* <img
          className="d-block w-100"
          src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
          alt="slide"
        /> */}

        {getSomeImages().map((url, i) => {
          return (
            <img key={i} className="d-block w-100" src={url} alt="slide" />
          );
        })}

        <div className="text-center mt-5">
          Active slide {slide} <br /> {autoplay ? "auto" : null}
        </div>
        <div className="buttons mt-3">
          <button
            className="btn btn-primary me-2"
            onClick={() => changeSlide(-1)}
          >
            -1
          </button>
          <button
            className="btn btn-primary me-2"
            onClick={() => changeSlide(1)}
          >
            +1
          </button>
          <button className="btn btn-primary me-2" onClick={toggleAutoplay}>
            toggle autoplay
          </button>
        </div>
      </div>
    </Container>
  );
};

function App() {
  const [slider, setSlider] = useState(true);

  return (
    <>
      <button onClick={() => setSlider(false)}>Click</button>
      {slider ? <Slider /> : null}
    </>
  );
}

export default App;

// class Slider extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       autoplay: false,
//       slide: 0,
//     };
//   }

//   componentDidMount() {
//     document.title = `Slide: ${this.state.slide}`;
//   }

//   componentDidUpdate() {
//     document.title = `Slide: ${this.state.slide}`;
//   }

//   changeSlide = (i) => {
//     this.setState(({ slide }) => ({
//       slide: slide + i,
//     }));
//   };

//   toggleAutoplay = () => {
//     this.setState(({ autoplay }) => ({
//       autoplay: !autoplay,
//     }));
//   };

//   render() {
//     return (
//       <Container>
//         <div className="slider w-50 m-auto">
//           <img
//             className="d-block w-100"
//             src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
//             alt="slide"
//           />
//           <div className="text-center mt-5">
//             Active slide {this.state.slide} <br />{" "}
//             {this.state.autoplay ? "auto" : null}
//           </div>
//           <div className="buttons mt-3">
//             <button
//               className="btn btn-primary me-2"
//               onClick={() => this.changeSlide(-1)}
//             >
//               -1
//             </button>
//             <button
//               className="btn btn-primary me-2"
//               onClick={() => this.changeSlide(1)}
//             >
//               +1
//             </button>
//             <button
//               className="btn btn-primary me-2"
//               onClick={this.toggleAutoplay}
//             >
//               toggle autoplay
//             </button>
//           </div>
//         </div>
//       </Container>
//     );
//   }
// }
