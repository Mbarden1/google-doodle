console.log('OK');

gsap.fromTo('#BIG_G',

  { x: 0, y: 0, opacity: 100 },

  { x: 150, 
   y: 100, 
   opacity: 1,
  duration: 6,
 //  repeat: -1,
  // delay: 2s;
  }
);


gsap.fromTo('#RED_O',

  { x: 0, y: 0, opacity: 100 },

  { x: 120, 
   y: 100, 
   opacity: 1,
  duration: 6,
 //  repeat: -1,
  // delay: 2s;
  }
);

gsap.fromTo('#PLAYER_A',

  { x: 400, y: 0, opacity: 100 },

  { x: -50, 
   y: 0, 
   opacity: 1,
  duration: 6,
  // repeat: -1,
  // delay: 2s;
  }
);


gsap.fromTo('#PLAYER_L',

  { x: 0, y: 0, opacity: 100 },

  { x: -175, 
   y: 100, 
   opacity: 1,
  duration: 6,
  // repeat: -1,
  // delay: 2s;
  }
);

gsap.fromTo('#ORANGE_O',

  { x: 0, y: 0, opacity: 100 },

  { x: 170, 
   y: -170, 
   opacity: 0,
  duration: 1,
 //  repeat: -1,
  // delay: 1'
  }
);


gsap.fromTo('#Ball',

  { x: 0, y: 0, opacity: 100 },

  { x: 170, 
   y: -170, 
   opacity: 0,
  duration: 5,
 //  repeat: -1,
  // delay: 1'
  }
);






