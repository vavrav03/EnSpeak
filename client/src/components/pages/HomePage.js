import React from "react";
import { Redirect } from "react-router";

function HomePage() {
   return (
      <Redirect to="/offers" />
   );
}

export default HomePage;
export { HomePage };