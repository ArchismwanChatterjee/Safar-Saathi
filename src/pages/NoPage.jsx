// import React from "react";

// const NoPage = () => {
//   console.log("No page");
//   return (
//     <div className="container mt-16 p-4 md:p-8">
//       <h2 className="text-base md:text-2xl font-semibold mb-4 whitespace-normal break-words text-center">
//         Please Login First
//       </h2>
//     </div>
//   );
//   // https://medium.com/frontendweb/how-to-pass-state-or-data-in-react-router-v6-c366db9ee2f4
//   // https://royeraadames.medium.com/open-react-router-link-at-top-of-page-c8e48a72da99
// };

// export default NoPage;

import React from "react";
import signUpImage from "../assets/sign_up.png";

const NoPage = () => {
  console.log("No page");
  return (
    <div className="container mt-16 p-4 md:p-8 flex items-center justify-center">
      <img
        src={signUpImage}
        alt="Please Login First"
        className="w-full h-auto md:max-w-md object-contain"
      />
    </div>
  );
};

export default NoPage;
