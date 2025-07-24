import React from 'react'
import './Testimonials.css'
import user1 from '../../../assets/images/user1.jpg' // Adjust the path as necessary
import user2 from '../../../assets/images/user2.jpg' // Adjust the path as necessary


const Testimonials = () => {
  return (
    <div className='wrapper'> 
    <section className='testimonials-section'>
        <div className='left'>
            <div className='testimonial-card'>
                <div className='content'>
                    <p>"This course has transformed my understanding of game development. "</p>
                </div>
                <div className='info'>
                    <h4>Jane Cooper</h4>
                    <p className='company'> Developer, Sorry</p>

                </div>
                <img src={user1} />

            </div>


            <div className='testimonial-card'>
                <div className='content'>
                    <p>"The instructors are knowledgeable and the community is supportive."</p>
                </div>
                <div className='info'>
                    <h4>Juliana Fresh</h4>
                    <p className='company'> Designer Facebook</p>

                </div>
                <img src={user2} />

            </div>


        </div>
        <div className='right'>
            <h2>What our students say</h2>
            <p>Our students love us! Here's what they have to say about their experience with our game development courses.</p>
            <p>Our students love us! Here's what they have to say about their experience with our game development courses.</p>

            <a href="#" className='btn-light'>Learn More</a>


        </div>

    </section>
      
    </div>
  )
}

export default Testimonials
