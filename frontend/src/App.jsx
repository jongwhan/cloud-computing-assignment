import { useEffect, useState } from "react";

function App() {
  const [backendMessage, setBackendMessage] = useState("백엔드 연결 중...");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/hello")
      .then((response) => response.json())
      .then((data) => {
        setBackendMessage(data.message);
      })
      .catch(() => {
        setBackendMessage("백엔드 연결 실패");
      });
  }, []);

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "40px auto",
        padding: "30px",
        fontFamily: "Arial, sans-serif",
        lineHeight: "1.6",
      }}
    >
      <h1>개인 소개</h1>

      <hr />

      <h2>안녕하세요.</h2>

      <p>
        클라우드컴퓨팅실습 개인과제를 위해 만든 개인 소개 페이지입니다.
      </p>

      <h3>About Me</h3>

      <p>이름: 김종환</p>

      <p>소속: 한국예탁결제원</p>

      <p>관심 분야: 디지털금융, AI, 클라우드 컴퓨팅</p>

      <h3>Frontend - Backend 연동 실습</h3>

      <p>
        아래 내용은 FastAPI 백엔드에서 가져온 데이터입니다.
      </p>

      <div
        style={{
          marginTop: "20px",
          padding: "20px",
          backgroundColor: "#f4f4f4",
          borderRadius: "8px",
        }}
      >
        {backendMessage}
      </div>
    </div>
  );
}

export default App;