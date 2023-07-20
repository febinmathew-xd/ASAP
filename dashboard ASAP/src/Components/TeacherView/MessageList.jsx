import React, { useEffect, useState } from "react";
import MessageSenderCard from "./MessageSenderCard";
import { Post } from "../../Service/Api";
import ChatContainer from "./ChatContainer";

function MessageList() {
  const [uniqueUsers, setUniqueUsers] = useState([]);
  const [messages, setMessages] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [dummymessages, setDummyMessages] = useState([]);
  const userdata = JSON.parse(localStorage.getItem("userdata"));
  useEffect(() => {
    Post("getmessagesbycourseid", { courseid: userdata.courseid }).then(
      (data) => {
        setMessages(data);
        setDummyMessages(data);

        const unique = [
          ...new Map(data.map((item) => [item["username"], item])).values(),
        ];

        let msgobject = [];

        setUniqueUsers(unique);
      }
    );
  }, []);

  const changeMessage = (loginid) => {
    setIsLoaded(true);
    let message = dummymessages.filter((element) => { 
      return element.loginid == loginid || element.userid == userdata.loginid;
    });
 

    setMessages(message);
  };

  return (
    <>
      <div
        style={{
          height: "100vh",
          width: "400px",
          backgroundColor: "#426981",
          margin: "20px",
          borderRadius: "10px",
          padding: "10px 10px",
        }}
      >
        {uniqueUsers.map((data) => {
          return data.userid != userdata.loginid ? (
            <div
              onClick={() => {
                changeMessage(data.loginid);
              }}
            >
              <MessageSenderCard data={data} />
            </div>
          ) : (
            ""
          );
        })}
      </div>
      {isLoaded && <ChatContainer data={messages} />}
    </>
  );
}

export default MessageList;
