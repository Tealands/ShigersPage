import { useEffect, useState } from "react";

export default function TypingLoop() {
  const text = "welcome";
  const typingSpeed = 150;   // 入力速度(ms)
  const deletingSpeed = 100; // 削除速度(ms)
  const pauseTime = 1000;     // 完了時の待機時間(ms)
  const color = "#FFFFFF";

  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let timeout;

    if (!isDeleting && index < text.length) {
      // 入力中
      timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, index + 1));
        setIndex(index + 1);
      }, typingSpeed);
    } else if (!isDeleting && index === text.length) {
      // 入力完了後に一瞬停止
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, pauseTime);
    } else if (isDeleting && index > 0) {
      // 削除中
      timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, index - 1));
        setIndex(index - 1);
      }, deletingSpeed);
    } else if (isDeleting && index === 0) {
      // 全削除後に再入力へ
      timeout = setTimeout(() => {
        setIsDeleting(false);
      }, pauseTime / 2);
    }

    return () => clearTimeout(timeout);
  }, [index, isDeleting]);

  return (
    <span style={{ color: color, fontFamily: "monospace", fontSize: "200px" }}>
      {displayedText}
      <span>|</span>
    </span>
  );
}
// 参考元: https://zenn.dev/taichi_k/articles/typing-effect-in-react