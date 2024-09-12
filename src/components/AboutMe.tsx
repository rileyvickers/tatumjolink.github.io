import React from 'react'
import Container from 'react-bootstrap/Container';


export class AboutMe extends React.Component {
  render() {
    return(
      <Container className='contentbox'>
        <div id='about'>
        <h2>ABOUT ME</h2>
        <img className='img' src='/images/couples.jpg' width={'65%'} style={{position: 'relative', marginLeft: '50px'}}/>
        <h5><b>Are there behavioral signatures of high-quality close relationships? How does the body shape perceptions and behavior to facilitate successful social interactions? Can we predict long-term compatibility from early, or even initial, romantic interactions?</b> These are some of the questions driving Tatum Jolink’s research on close relationships and health. She studies the behavioral and physiological components underpinning our best relationships, including those that are just beginning.</h5>
        
        <h5><b>Dr. Tatum Jolink is an NSF Postdoctoral Research Fellow in Social Psychology at the University of Michigan. She studies the social behavior and bodily contributions that shape new and existing close relationships. </b> Her work unites theories of relationship science and health psychology, and uses methods from experimental social psychology, psychoneuroimmunology, psychophysiology, psychopharmacology, and behavioral observation.</h5>

        <h5><b>Since 2023, Tatum has been a postdoctoral research fellow in Social Psychology at the University of Michigan (U-M).</b> Her research mentor at U-M is <a className='one' href='https://sites.lsa.umich.edu/whirl/research/'>Dr. Amie Gordon</a> and as of Fall 2024, Tatum’s postdoctoral training is being supported by the 2-year <a className='one' href='https://www.nsf.gov/awardsearch/showAward?AWD_ID=2404626'>NSF SPRF</a>. In her postdoc, Tatum is honing her skills on the measurement and analysis of dyadic social interactions, including longitudinal dyadic data analysis, synchronous psychophysiology measurement, and early dating interactions collected using <a className='one' href='#datingapp'>an online dating app for research purposes.</a> Of note, Tatum has been developing a framework <a className='one' href='#challenge'>for a dyadic biopsychosocial model of challenge and threat.</a></h5> 

        <h5><b>In May 2023, Tatum graduated from the University of North Carolina at Chapel Hill with a PhD in Social Psychology with a concentration in Quantitative Psychology.</b> There, Tatum worked with <a className='one' href='https://www.saraalgoe.com/'>Dr. Sara Algoe</a> and <a className='one' href='https://carolinasnhlab.com/'>Dr. Keely Muscatell</a> to investigate bidirectional links between close relationships and health, with a focus on the role of affiliative behavior (e.g., affectionate touch, shared laughter) and the body (i.e., inflammation) in close relationships.</h5> 

        <h5><b>Tatum received her BA in Psychology (Honors) and Plan II Liberal Arts Honors from the University of Texas at Austin.</b> Tatum loves research and mentorship, but also finds joy in her friendships and family, moving her body, reading, watching movies and television, and getting into shenanigans with her partner and their dog, Birddog. In another life, she would have been a film screenwriter.</h5>
          <img className='img' src='/images/GTW.jpg'  width={'40%'} style={{position: 'relative', right: '-5vw'}}/>
          
        <img className='img' src='/images/fam.jpg' width={'40%'} style={{position: 'relative', right: '-10vw'}}/>
        <figcaption style={{position: 'relative', right: '-4vw' , width:'30vw',textAlign:'center'}}> Tatum with her sisters Willa (twin, middle) and Georgia (right) in Port Aransas, Texas.</figcaption>
        <figcaption style={{position: 'relative', top: '-55px', right: '-37vw' , width:'30vw',textAlign:'center'}}> Tatum with her family Riley (middle) and Birddog ('Birdie', left) in the Texas Hill Country. </figcaption>
        </div>
      </Container>
    )
  }
}