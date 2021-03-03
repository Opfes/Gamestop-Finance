import React from "react";
import BaseApplication from "./BaseApplication";
import UserProvider from "./providers/UserProvider";
function App() {
  return (
    <UserProvider>
      <BaseApplication />
    </UserProvider>
  );
}
export default App;