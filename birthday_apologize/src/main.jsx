
import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

const CASE_ID = "2026-BDAY-1027";

const excuses = [
  "잠깐만요. 피고인이 깊이 반성하고 있습니다.",
  "재판장님... 한 번만 선처 부탁드립니다.",
  "피고인은 현재 눈물을 흘리고 있습니다. (진짜임)",
  "사과의 진정성을 증명하기 위해 버튼 크기를 반납합니다.",
  "이제 버튼도 사라지고 있습니다...",
  "피고인의 마지막 희망이 사라지는 중입니다.",
  "제발 용서해 주세요 ㅠㅠ",
];

function App() {
  const [page, setPage] = useState(0);
  const [rejects, setRejects] = useState(0);
  const [popup, setPopup] = useState(false);
  const [showVerdict, setShowVerdict] = useState(false);
  const [typed, setTyped] = useState("");
  const [confetti, setConfetti] = useState(false);

  const next = () => setPage(p => Math.min(p + 1, 5));

  useEffect(() => {
    if (page !== 5) return;

    const message = "쟈기야, 생일 정말 축하해 ♡";
    let i = 0;

    const timer = setInterval(() => {
      i++;
      setTyped(message.slice(0, i));

      if (i >= message.length) {
        clearInterval(timer);
      }
    }, 90);

    return () => clearInterval(timer);
  }, [page]);

  useEffect(() => {
    if (!confetti) return;

    const timer = setTimeout(() => {
      setConfetti(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [confetti]);

  const forgive = () => {
    setShowVerdict(true);
    setConfetti(true);
  };

  const restart = () => {
    setPage(0);
    setRejects(0);
    setPopup(false);
    setShowVerdict(false);
    setTyped("");
    setConfetti(false);
  };

  return (
    <main className={`desktop ${page === 5 ? "warm-desktop" : ""}`}>

      {/* 바탕화면 아이콘 */}
      <div className="desktop-icons">
        <div className="desktop-icon">
          <span>🖥️</span>
          <small>내 컴퓨터</small>
        </div>

        <div className="desktop-icon">
          <span>🗑️</span>
          <small>양심 휴지통</small>
        </div>

        <div className="desktop-icon">
          <span>🎁</span>
          <small>미완성 선물</small>
        </div>
      </div>

      {/* 메인 윈도우 */}
      <div className="main-window">

        <div className="titlebar">
          <div className="title-left">
            <span>💾</span>
            <span>
              {page === 5
                ? "FOR_JAGI.txt"
                : "BIRTHDAY_GIFT_ERROR.exe"}
            </span>
          </div>

          <div className="window-controls">
            <span>_</span>
            <span>□</span>
            <span>×</span>
          </div>
        </div>

        <div className="menu-bar">
          <span>파일(F)</span>
          <span>편집(E)</span>
          <span>보기(V)</span>
          <span>도움말(H)</span>
        </div>

        <div className="window-body">

          {/* 0. 오류 화면 */}
          {page === 0 && (
            <div className="screen error-screen">

              <div className="error-icon">✕</div>

              <div className="system-label">
                CRITICAL SYSTEM ERROR
              </div>

              <h1>치명적인 오류가 발생했습니다.</h1>

              <div className="system-message">
                <p>
                  지은이의 생일이 종료되었습니다.
                </p>

                <p>
                  생일 축하 메시지는 정상적으로 전달되었으나,
                  선물 준비 절차가 완료되지 않았습니다.
                </p>

                <div className="error-code">
                  오류 코드: JIEUN_GIFT_NOT_FOUND
                </div>
              </div>

              <div className="warning-box">
                ⚠ 시스템이 심각한 죄책감을 감지했습니다.
              </div>

              <div className="button-row">
                <button
                  className="win-button primary"
                  onClick={next}
                >
                  피고인 해명 듣기
                </button>

                <button
                  className="win-button"
                  onClick={() => setPopup(true)}
                >
                  무시
                </button>
              </div>

              {popup && (
                <div className="modal-overlay">
                  <div className="popup-window">

                    <div className="titlebar">
                      <span>⚠ 경고</span>
                      <span>×</span>
                    </div>

                    <div className="popup-content">
                      <span className="popup-icon">⚠️</span>

                      <p>
                        무시할 수 없는 오류입니다.
                        <br />
                        선물 미선정에 대한
                        사과를 진행해 주세요.
                      </p>
                    </div>

                    <button
                      className="win-button"
                      onClick={() => setPopup(false)}
                    >
                      확인
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* 1. 사건 조사 보고서 */}
          {page === 1 && (
            <div className="screen">

              <div className="section-tag">
                사건 조사 보고서
              </div>

              <h1>사건 개요</h1>

              <p className="subtitle">
                생일 선물 미선정 사건
              </p>

              <div className="report">
                <div className="report-row">
                  <b>사건번호</b>
                  <span>{CASE_ID}</span>
                </div>

                <div className="report-row">
                  <b>피해자</b>
                  <span>최지은</span>
                </div>

                <div className="report-row">
                  <b>피고인</b>
                  <span>이혜빈</span>
                </div>

                <div className="report-row">
                  <b>사건 유형</b>
                  <span>생일 선물 준비 지연</span>
                </div>

                <div className="report-row">
                  <b>생일 축하</b>
                  <span>정상 완료 ✓</span>
                </div>

                <div className="report-row">
                  <b>선물 준비</b>
                  <span className="status-red">
                    미완료
                  </span>
                </div>

                <div className="report-row">
                  <b>현재 상태</b>
                  <span className="status-red">
                    반성 중
                  </span>
                </div>
              </div>

              <div className="evidence">
                <h3>📁 확보된 증거</h3>

                <p>☑ 생일 날짜를 알고 있었음</p>
                <p>☑ 생일 축하는 정상적으로 진행함</p>
                <p>☑ 선물을 끝내 고르지 못했음</p>
                <p>☑ 선물 대신 웹사이트 제작을 시도함</p>
                <p>☑ 생일이 끝난 뒤에도 선물 미선정 상태임</p>
              </div>

              <button
                className="win-button primary"
                onClick={next}
              >
                피고인 진술 확인 →
              </button>
            </div>
          )}

          {/* 2. 공식 사과문 */}
          {page === 2 && (
            <div className="screen">

              <div className="section-tag">
                피고인 최후 진술
              </div>

              <h1>공식 사과문</h1>

              <div className="document">
                <div className="doc-heading">
                  사 과 문
                </div>

                <p>존경하는 지은님께.</p>

                <p>
                  본 피고인은 귀하의 생일을 맞이하여
                  적절한 선물을 준비했어야 하나,
                  이를 이행하지 못하였습니다.
                </p>

                <p>
                  생일 축하 자체는 정상적으로
                  진행하였으나, 선물을 결정하지 못한
                  중대한 과실이 확인되었습니다.
                </p>

                <p>
                  이에 본 피고인은 선물을 대신하여
                  사과용 웹사이트를 제작하는
                  다소 이상한 행동을 하기에 이르렀습니다.
                </p>

                <p>
                  본 피고인은 해당 사안에 대해
                  깊이 반성하고 있으며,
                  향후 적절한 선물을 준비할 것을
                  약속드립니다.
                </p>

                <p>
                  부디 넓은 아량으로
                  선처해 주시기를 간곡히 요청드립니다.
                </p>

                <div className="document-sign">
                  피고인: 이혜빈
                  <br />
                  (서명) 반성 중...
                </div>
              </div>

              <button
                className="win-button primary"
                onClick={next}
              >
                사과 심사 시작 →
              </button>
            </div>
          )}

          {/* 3. 사과 심사위원회 */}
          {page === 3 && (
            <div className="screen judge-screen">

              <div className="section-tag">
                사과 심사위원회
              </div>

              <div className="judge-icon">⚖️</div>

              <h1>
                지은 재판장님,
                <br />
                용서해 주시겠습니까?
              </h1>

              <p className="subtitle">
                피고인은 현재 판결을 기다리고 있습니다.
              </p>

              <div className="judge-buttons">

                <button
                  className="win-button accept"
                  onClick={forgive}
                >
                  💗 용서한다
                </button>

                {rejects < 8 && (
                  <button
                    className="win-button reject"
                    style={{
                      transform: `scale(${Math.max(
                        0.08,
                        1 - rejects * 0.13
                      )})`,
                      opacity: Math.max(
                        0.25,
                        1 - rejects * 0.09
                      ),
                    }}
                    onClick={() =>
                      setRejects(r => Math.min(r + 1, 8))
                    }
                  >
                    아직 부족해
                  </button>
                )}
              </div>

              {rejects > 0 && (
                <div className="court-message">
                  {excuses[
                    Math.min(
                      rejects - 1,
                      excuses.length - 1
                    )
                  ]}
                </div>
              )}

              {showVerdict && (
                <div className="modal-overlay">
                  <div className="popup-window verdict-popup">

                    <div className="titlebar">
                      <span>⚖️ 판결 결과</span>
                      <span>□</span>
                    </div>

                    <div className="verdict-content">

                      <div className="stamp">
                        선 처
                      </div>

                      <h2>조건부 집행유예</h2>

                      <p>
                        피고인에게 선물 준비를 위한
                        추가 기회를 부여합니다.
                      </p>

                      <small>
                        단, 선물 준비 의무는
                        소멸하지 않습니다.
                      </small>
                    </div>

                    <button
                      className="win-button primary"
                      onClick={() => {
                        setShowVerdict(false);
                        next();
                      }}
                    >
                      판결 확인
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* 4. 판결 완료 */}
          {page === 4 && (
            <div className="screen celebration-screen">

              <div className="section-tag">
                재판 종료
              </div>

              <div className="big-emoji">🎁</div>

              <h1>선물 준비 기한 연장 승인!</h1>

              <div className="success-box">
                <div className="success-title">
                  ✓ 선처 요청 승인
                </div>

                <p>
                  피고인에게 선물을 준비할
                  추가 시간이 주어졌습니다.
                </p>
              </div>

              <div className="birthday-message">
                <h2>MISSION NOT COMPLETED YET!</h2>

                <p>
                  선물은 아직 미정이지만,
                  <br />
                  쟈기를 축하하는 마음만큼은
                  <br />
                  세상에서 내가 가장 커. 장담해.
                </p>
              </div>

              <button
                className="win-button primary"
                onClick={next}
              >
                마지막 파일 열기 💌
              </button>
            </div>
          )}

          {/* 5. 마지막 편지 */}
          {page === 5 && (
            <div className="screen final-screen">

              <div className="letter-decoration">
                ✦ ♡ ✦
              </div>

              <h1>
                {typed}
                <span className="cursor">|</span>
              </h1>

              <div className="heart-letter">

                <div className="letter-to">
                  To. 지은이
                </div>

                <p>
                  지은아, 생일 정말 축하해!
                </p>

                <p>
                  생일 축하는 했지만
                  선물을 아직 못 정해서
                  이렇게 사과 사이트까지
                  만들어버렸네 ㅋㅋㅋㅋ
                </p>

                <p>
                  사실 선물을 고르는 게
                  생각보다 쉽지 않더라.
                  아무거나 주고 싶지는 않았고,
                  네가 좋아할 만한 걸
                  주고 싶었거든.
                </p>

                <p>
                  그래도 선물을 못 정했다고
                  그냥 넘어가기는 아쉬워서
                  이렇게라도 뭔가 만들어봤어.
                </p>

                <p>
                  나랑 친구해줘서 고맙고,
                  지은이랑 많은 시간은 못 보내지만
                  그 시간 하나하나가 다 소중해
                </p>

                <p>
                  앞으로도 작게 하나씩 추억 만들자.
                </p>

                <p>
                  네 스물세 번째 생일을
                  다시 한번 진심으로 축하해.
                </p>

                <p>
                  이렇게 멋진 사람이 내 친구라서 너무 자랑스러워
                  내 친구여서 고마워 ♡♡♡
                </p>

                <div className="letter-from">
                  From. 비니 💗
                </div>
              </div>

              <button
                className="win-button"
                onClick={restart}
              >
                처음부터 다시 보기 ↻
              </button>
            </div>
          )}
        </div>

        {/* 상태 표시줄 */}
        <div className="statusbar">
          <span>
            상태: {page === 5
              ? "마음 전달 중 ♡"
              : "선물 미선정 사건 처리 중"}
          </span>

          <span>{page + 1} / 6</span>
        </div>
      </div>

      {/* Windows 작업 표시줄 */}
      <div className="taskbar">

        <button
          className="start-button"
          onClick={restart}
        >
          🪟 시작
        </button>

        <div className="task-item">
          💾 BIRTHDAY_GIFT_ERROR.exe
        </div>

        <div className="task-clock">
          ♡ 23
        </div>
      </div>

      {/* 축하 색종이 */}
      {confetti && (
        <div className="confetti">
          {Array.from({ length: 45 }, (_, i) => (
            <span
              key={i}
              style={{
                left: `${(i * 37) % 100}%`,
                animationDelay: `${(i % 10) * 0.1}s`,
                background: [
                  "#f5a0bd",
                  "#f6d96c",
                  "#91c7e9",
                ][i % 3],
              }}
            />
          ))}
        </div>
      )}
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
