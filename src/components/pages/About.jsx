export default function About() {
  return (
    <div>
      <div className="container container-fluid">
      <h1 className="pageHeader">About Me</h1>
      {/* <div className="card">
      <p>
        Hi! My name is Jack Lunchick-Seymour, I am an aspiring Web Developer with a recent MERN full-stack certification acquired through UC Berkeley Extension's bootcamp program.
      </p>
      <img className="card-img-top" id="selfie" src="assets/images/selfie.jpg"></img>
      <img id="games" src="assets/images/Games.webp"></img>
      <img id="magic" src="assets/images/magic.jpg"></img>
      <img id="frisbee" src="assets/images/frisbee.png"></img>
      <img id="friends" src="assets/images/friends.png"></img>
      <p id="below-pics">
        My hobbies include video games, Magic the Gathering, ultimate frisbee and most importantly spending time with my close friends.
      </p>
      </div> */}
      <div className="card" id="aboutMe">
      <img src="assets/images/selfie.jpg" className="card-img-top"/>
      <div className="card-body">
      <p id="below-pics" className="card-text"> Hi! My name is Jack Lunchick-Seymour, I am an aspiring Web Developer with a recent MERN full-stack certification acquired through UC Berkeley Extension's bootcamp program.</p>
      </div>
      </div>
      <p id="aboutMeMain">With a background in customer service and a deep aspiration to make a difference through the power of software and web development, my goal is to design and create something to help change the world for the better! Please enjoy my portfolio and all projects that I've worked on.</p>
  </div>
      
    </div>
  );
}
