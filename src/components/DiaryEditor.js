import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DiaryDispatchContext } from "../App";
import EmotionItem from "./EmotionItem";
import MyButton from "./MyButton";
import MyHeader from "./MyHeader";

import { getStringDate } from "../util/date";
import { emotionList } from "../util/emotion";

const DiaryEditor = ({ isEdit, originData }) => {
  const contentRef = useRef();
  const [content, setContent] = useState("");
  const [emotion, setEmotion] = useState(3);
  const [date, setDate] = useState(getStringDate(new Date()));

  const { onCreate, onEdit, onDelete } = useContext(DiaryDispatchContext);

  const handleClickEmote = (emote) => {
    setEmotion(emote);
  };
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (content.length < 1) {
      contentRef.current.focus();
      return;
    }

    if (
      window.confirm(
        isEdit ? "일기를 수정하시겠습니까?" : "새로운 일기를 작성하시겠습니까?"
      )
    )
      if (!isEdit) {
        onCreate(date, content, emotion);
      } else {
        onEdit(originData.id, date, content, emotion);
      }
    navigate("/", { replace: true });
  };

  const handleDelete = () => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      onDelete(originData.id);
      navigate("/", { replace: true });
    }
  };

  useEffect(() => {
    if (isEdit) {
      setDate(getStringDate(new Date(parseInt(originData.date))));
      setEmotion(originData.emotion);
      setContent(originData.content);
      setDate(getStringDate(new Date(parseInt(originData.date))));
    }
  }, [isEdit, originData]);

  return (
    <div className="diary-editor">
      <MyHeader
        headText={isEdit ? "일기 수정하기" : "새 일기쓰기"}
        leftChild={
          <MyButton text={"< 뒤로가기"} onClick={() => navigate(-1)} />
        }
        rightChild={
          isEdit && (
            <MyButton
              text={"삭제하기"}
              type={"negative"}
              onClick={handleDelete}
            />
          )
        }
      />
      <div>
        <section>
          <h4>오늘은 언제인가요?</h4>
          <div className="input-box">
            <input
              className="input-date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              type="date"
            />
          </div>
        </section>
        <section>
          <h4>오늘의 감정</h4>
          <div className="input-box emotion-list-wrapper">
            {emotionList.map((it) => (
              <EmotionItem
                key={it.emotionId}
                {...it}
                onClick={handleClickEmote}
                isSelected={it.emotionId === emotion}
              />
            ))}
          </div>
        </section>
        <section>
          <h4>오늘의 일기</h4>
          <div className="input-box text-wrapper">
            <textarea
              placeholder="오늘은 어땠나요?"
              ref={contentRef}
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
        </section>
        <section>
          <div className="control-box">
            <MyButton text={"취소하기"} onClick={() => navigate(-1)} />
            <MyButton
              text={"작성완료"}
              type={"positive"}
              onClick={handleSubmit}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default DiaryEditor;
