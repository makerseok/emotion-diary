import React from "react";

const EmotionItem = ({
  emotionId,
  emotionImg,
  emotionDescribe,
  onClick,
  isSelected,
}) => {
  return (
    <div
      className={[
        "emotion-item",
        isSelected ? `emotion-item-on-${emotionId}` : `emotion-item-off`,
      ].join(" ")}
      onClick={() => onClick(emotionId)}
    >
      <img src={emotionImg} />
      <span>{emotionDescribe}</span>
    </div>
  );
};

export default EmotionItem;
