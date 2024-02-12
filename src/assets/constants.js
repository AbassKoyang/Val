export const convincingTexts = [
    "In life's grand ballroom, where steps dance and hearts sing, your grace, warmth, and presence illuminate my world like twinkling stars. With love's melody in the air, I extend my hand: Will you be my Valentine?",
    "Even though you've said no, my heart still beats for you. I'll be here, patiently waiting for the moment you realize we're meant to be.",
    "Your 'no' only fuels my determination to show you the depth of my love. I'll cherish every opportunity to win your heart.",
    "While your answer may be no for now, I believe in the power of love to change minds and hearts. Let's write our own love story together.",
    "I understand your hesitation, but my love for you knows no bounds. I'll keep proving my devotion until you can't resist saying yes.",
    "A 'no' from you won't deter me, for my love for you grows stronger with every challenge. I'll be here, ready to prove my love in every way possible.",
    "Though you've said no, my love for you remains unwavering. I'll continue to shower you with affection, hoping one day you'll see us together.",
    "Your rejection won't diminish my feelings for you. I'll keep showing you the depth of my love until you realize we're meant to be.",
    "Your 'no' is just another step in our journey together. I'll keep pursuing you with unwavering devotion until you're mine.",
    "While I respect your decision, I can't help but hope for a change of heart. I'll be patiently waiting for the day you realize we belong together.",
    "Though your answer is no for now, I'll keep loving you fiercely. I'll be here, ready to catch you when you fall for me.",
    "Your 'no' is just a temporary setback in our love story. I'll continue to cherish you from afar until you're ready to say yes.",
    "My love for you is steadfast, even in the face of rejection. I'll prove my devotion to you every day until you can't resist saying yes.",
    "Even though you've turned me down, my love for you remains as strong as ever. I'll keep showing you how much you mean to me until you can't deny our connection.",
    "Your rejection only strengthens my resolve to win your heart. I'll continue to pursue you with unwavering determination until you realize we're meant to be.",
    "Your 'no' is just a bump in the road on our journey to love. I'll keep walking alongside you, hoping for the day you see me as your forever.",
    "Though you've said no, my love for you will never waver. I'll be here, patiently waiting for the day you realize we're meant to be together.",
    "Your rejection won't deter me from loving you. I'll keep showing you the depth of my affection until you can't resist saying yes.",
    "While your answer may be no now, I'll keep proving my love to you every day. I believe in us, and I'll never give up on our love.",
    "Even though you've rejected me, my feelings for you remain unchanged. I'll continue to shower you with love until you can't help but say yes.",
  ];
  
  const solveEquation = (a, b, c) => {
    const isNumber = typeof(a, b, c) === 'number';
    if(isNumber){
      const discriminant = b * b - ((4 * a )* c);
      console.log(discriminant);
    } else {
      console.log('One of the coefficients is not a number.');
    }
  }

  solveEquation(1,5,4)