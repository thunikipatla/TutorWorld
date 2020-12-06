import React from 'react';
import Header from './Header';
import image2 from './tutor-image-2.jpeg'
import image3 from './tutor-image-3.jpg';
import image4 from './tutor-image-4.jpeg';

class Home extends React.Component{
    render(){
        return(
            <React.Fragment>

                     <div id="carouselFadeExampleIndicators" class="carousel slide carousel-fade" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                  </ol>
                <div class="carousel-inner" role="listbox">
                  <div class="carousel-item active">
                    <img class="d-block w-100" src={image2} alt="900x400" data-holder-rendered="true" style= {{width: '500px',height: '300px'}} />
                  </div>
                  <div class="carousel-item">
                    <img class="d-block w-100" src={image3} alt="900x400" data-holder-rendered="true" style= {{ width: '500px', height: '300px' }} />
                  </div>
                  <div class="carousel-item">
                    <img class="d-block w-100" src={image4} alt="900x400" data-holder-rendered="true" style={{ width: '500px', height: '300px' }} />
                  </div>
                </div>
                <a class="carousel-control-prev" href="#carouselFadeExampleIndicators" role="button" data-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselFadeExampleIndicators" role="button" data-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="sr-only">Next</span>
                </a>
              </div>
  
       
        <div class="text-center font-weight-bold bg-info">
            
            <h1>Welcome to TutorsWorld website</h1>

        </div>
       <div class="card">
           <p class="card-body">This website is helpful for both Parents who are looking for Tutors for their chindrens and Tutors.</p>
           <div class="card-header">
                Tutor
                <div class="card-body">
                    <p class="card-text">If you are a graduate student and want to earn money and improve your teaching skills, this is the paltform you can register as tutor and get hired as a Tutor on your intrsted subjects.</p>
                </div>
           </div>
        <div class="card-header">
             Parent
            <div class="card-body">
               <p class="card-text">Parents also can find the best tutors for their childrens from this site by accessing the tutors profiles. And you can request for a Demo.Just you can register as a parent on this website and see all available tutors in your location.</p>
            </div>
        </div>
            
       </div>
            </React.Fragment>
        )
    }
}

export default Home;