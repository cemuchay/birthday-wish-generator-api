const generateWish = (name?: string, sender?: string) => {
   let wish = wishes[Math.floor(Math.random() * wishes.length)];

   console.log(name, sender);

   //change all name to small caps
   wish = wish.replace("NAME", capitalizeFistLetter(name as string) || "");
   wish = wish.replace("Sender", capitalizeFistLetter(sender as string) || "");

   return wish;
};

export default generateWish;

const capitalizeFistLetter = (str: string) => {
   const capitalizedStr = str.charAt(0).toUpperCase() + str.slice(1);
   return capitalizedStr;
};

const wishes = [
   `NAME, Happy Birthday 🎂 
 I pray for all your birthday wishes to come true and I wish you all the very best there is ❤
 Sender`,
   `
 Dear NAME, live your life with smiles. Beat your age and celebrate. 
 Happy Birthday! 🎂 
 
 Sender`,

   `
 🎂 NAME, I wish you a Happy Birthday🎂  
 I pray for all the good things to come to you! ❤🙏 
 Enjoy your day! 🎉
 
 Sender 
 `,

   `
 🎉 Dear NAME,
 All my good thoughts and wishes are with you on your birthday. May you enjoy its wonders to the fullest. 
 Be sure to have a great day!  🎂 
 
 `,

   `
 My Dear NAME, on your special day I wish you all shades of happiness and that you be celebrated by your loved ones. Do have a Happy Birthday! 🎉 ❤
 
 `,

   `
 
 ❤ My Dear NAME, May your day be full of unforgettable moments and fulfillment of all things that bring you happiness and true joy🎂
 Happy birthday 🎂 !
 `,

   `
 
 💃  🎂 Happy Birthday🎂 💃 
 I wish you long life, prosperity, pristine health, success and all the other good things 😊
 ❤ Be sure to enjoy your day! Dear NAME🎉 
 
 `,
   `
 
 ❤ 🎂 NAME, Happy Birthday to you 🎂 ❤ 
 I wish you all the good things.
 Make sure you enjoy your day! 🎉 
 
 `,
   `
 
 🎉 Dear NAME,
 This day marks the start of more days to make more beautiful and awesome memories with your family and friends. I wish you a very Happy birthday. 🎉 
 Enjoy 🍻 🎂 
 `,

   `
 
 🎉 Dear NAME
 I wish you more fun and wonderful years. Your bright smile is the rarest of gifts. Enjoy your day! ❤
 Happy Birthday 🎂 
 
 `,
   `
 NAME, Happy Birthday 🎂 
 I pray for all your birthday wishes to come true. ❤
 `,

   `
 Dear NAME, live your life with smiles, not tears. Beat your age and celebrate with friends. 
 Happy Birthday! 🎂 
 `,

   `
 🎂 
 Here is a wish for your birthday. May you receive whatever you ask for, may you find whatever you seek. Happy Birthday NAME! 🎂
 
 `,
   `
 
  NAME, yet another adventurous year awaits you, and to celebrate your birthday, I wish you all the very best.
 `,

   `
 NAME, May all the joy you have spread around come back to you many times over. Happy Birthday to you 🎂 
 `,

   `
 
 May you receive the greatest of joys and everlasting blessings. You are a gift yourself, and you deserve the best of everything. Happy Birthday NAME 🎂 
 
 `,
   `
 Live in the present and look forward to the future because it's a gift.
 Happy Birthday NAME ❤
 `,

   `
 Happy Birthday! NAME 🎂 Remember that the best is yet to come.
 `,
   `
 Your birthday has come around after 365 days. That is a long time. 
 I wish you all the very best ❤
 Happy Birthday NAME.
 `,
   `
 🎂 Be happy, for today; you were born to bring blessings and inspiration to all. Happy Birthday NAME!
 `,
   `
 You are older than you were yesterday, but don't worry; you are younger than you will be tomorrow.
 I wish you all the very best ❤
 🎂 Happy Birthday NAME.
 `,

   `
 May your birthday be the special day that you receive all you ever desired. Happy Birthday NAME.
 `,

   `
 🎂 , I do wish you a very Happy Birthday 🎂  
 I pray for all the good things to come to you! ❤🙏 
 Be sure you enjoy your day! 🎉 
 
 Sender`,
   `
 🎉 Dear ,
 All my good thoughts and wishes are with you on this occasion of your birthday. May you enjoy todays wonders. 
 Be sure to enjoy your day!  🎂 
 
 Sender`,
   `
 My Dear , on your birthday, I wish you all the good things and that you be celebrated by your loved ones. Do have a wonderful day ! 🎉 ❤
 
 Sender`,
];
