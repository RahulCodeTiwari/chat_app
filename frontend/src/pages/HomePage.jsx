import { useChatStore } from "../store/useAuthStore";
import Sidebar from "../components/Sidebar";
import NoChatSelected from "../components/NoChatSelected";
import ChatContainer from "../components/ChatContainer";

const HomePage = () => {
  const { selectedUser } = useChatStore();

  return (
    <div>
      <div>
        <div>
          <div>
            <Sidebar />

            {!selectedUser ? <NoChatSelected/> : <ChatContainer/>}

          </div>
        </div>
      </div>
    </div>
  );

};

export default HomePage;