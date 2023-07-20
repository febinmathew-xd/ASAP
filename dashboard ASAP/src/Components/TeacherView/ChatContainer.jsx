import React, { useEffect, useState } from "react";
import { Post } from "../../Service/Api";
import { useNavigate } from "react-router-dom";

function ChatContainer({ data, saveMessage }) {
  const navigate = useNavigate();
  

  const [inputMessage, setInputMessage] = useState("");

  const [studentid, setStudentid] = useState();

  const userdata = JSON.parse(localStorage.getItem("userdata"));

  useEffect(() => {

    console.log('d',data)
    let search = data.filter((elem) => {
      return elem.userid != userdata.loginid;
    });

    setStudentid(search[0].loginid);
  });



  const save = () => {
    saveMessage(userdata.courseid, userdata.loginid, inputMessage, studentid);
  }
 
  return (
    /* MAIN CONTAINER */

    <div
      style={{
        width: "100%",
        height: "80vh",
        backgroundColor: "#426981",
        margin: "20px",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {/* HEADING CONTAINER */}

      <div
        className="head"
        style={{
          height: "80px",
          backgroundColor: "#1b4965",
          margin: "17px 0px",
          width: "98%",
          marginLeft: "auto",
          marginRight: "auto",
          borderRadius: "6px",
          padding: "10px 17px",
          display:'flex',
          alignItems:'center'
        }}
      >
        <h6 style={{ opacity: "0.7" }}>{data[0].username}</h6>
        
      </div>

      {/* HEADING CONTAINER ----ENDS */}

      {/* ALL MESSAGE CONTAINER */}

      <div
        className="all-msg-container"
        style={{ overflowY: "scroll", flexGrow: "1" }}
      >
        {/* OPPOSITE MESSAGE CONTAINER */}

        {data.map((messages,index) => {
          return (
            userdata.loginid!=messages.userid || studentid==messages.hostid?
          (  <div key={index}
              className="single-msg-container"
              style={{
                width: "70%",
                minHeight: "60px",
                backgroundColor:
                  userdata.loginid == messages.userid &&
                  messages.hostid == studentid
                    ? "#4c1d95"
                    : "#134e4a",
                marginBottom: "17px",
                marginLeft:userdata.loginid == messages.userid &&
                messages.hostid == studentid
                  ? "250px"
                  : "20px",
                
                
                borderRadius: "7px",
                padding: "0px 17px",
                display: "flex",
                alignItems: "center",
                opacity: "0.8",
              }}
            >
              <h6>
                {  messages.message }
              </h6>
            </div>):''
          );
        })}

        {/* HOST MESSAGE CONTAINER -----ENDS */}
      </div>

      {/* ALL MESSAGE CONTAINER------ENDS */}

      {/* INPUT GROUP CONTAINER */}

      <div>
        <input
          onChange={(event) => {
            setInputMessage(event.target.value);
          }}
          style={{
            marginBottom: "17px",
            width: "70%",
            height: "50px",
            marginLeft: "100px",
            borderRadius: "7px",
            border: "none",
            outline: "none",
          }}
          type="text"
          placeholder="Enter Message"
        />

        <input
          onClick={save}
          type="button"
          value="Sent"
          style={{
            fontSize: "15px",
            fontWeight: "700",
            marginLeft: "15px",
            padding: "12px 40px",
            borderRadius: "8px",
            border: "none",
            backgroundColor: "#1b4965",
            color: "whitesmoke",
          }}
        />
      </div>
      {/* INPUT GROUP CONTAINER ------ENDS */}
    </div>

    /* MAIN COONTAINER -----ENDS */
  );
}

export default ChatContainer;
