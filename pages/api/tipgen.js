import "./App.css";
import useWebSocket from "react-use-websocket";

function App() {
  //Public API that will echo messages sent to it back to the client
  const socketUrl = "wss://www.cryptofacilities.com/ws/v1";

  const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl, {
    onOpen: () => {
      console.log("connection opened");
    },
    share: true,
    onMessage: (message) => {
      //handle response
      console.log(message);
    },
    onClose: () => {
      //handle connection termination
      console.log("connection closed");
    },

    //Will attempt to reconnect on all close events, such as server shutting down
    shouldReconnect: (closeEvent) => true,
  });
  return (
    <div className="App">
      <h1>WebSocket Implementation on React</h1>
    </div>
  );
}

export default App;