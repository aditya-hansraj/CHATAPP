import React, { useState } from 'react'
import './App.css'
import AuthPage from "./components/AuthPage";
import ChatPage from "./components/ChatPage";

function App() {
  const [user, setUser] = useState(undefined);

  return user ? <ChatPage user={user} />
              : <AuthPage onAuth={user => setUser(user)} />;
}

export default App;
