import React from 'react';
import logo from '../iauro.jpeg';

import { animated, useSpring } from '@react-spring/web'

// const Home = () => {
//   const animationProps = useSpring({
//     from: { opacity: 0, transform: 'translate3d(0,-40px,0)' },
//     to: { opacity: 1, transform: 'translate3d(0,0px,0)' },
//   });

//   return (
//     <div style={{ textAlign: 'center' }}>
//       <img src={logo} alt="Logo" />
//       <br />
//       <br />
//       <animated.h1 style={animationProps}>Welcome to Iauro Systems!</animated.h1>
//     </div>
//   );
// };

// export default Home;


export const Home = ()  => {
  const animationProps = useSpring({
    from: { opacity: 0, transform: 'translate3d(0,-80px,0)' },
    to: { opacity: 1, transform: 'translate3d(0,0px,0)' },
  });
    
  return (
    <>
    <div style={{
      textAlign: 'center',
      marginTop: '5%'
    }}>
       <img style={{ borderRadius: '50%' }} src={logo} alt="Logo" />
     
     
      <br />
      <br />
      <animated.h1 style={animationProps}>Welcome to Iauro Systems!</animated.h1>
      
     
    </div>
   
    </>
  );
}
