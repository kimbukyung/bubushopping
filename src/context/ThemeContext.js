import React, { createContext, useState, useEffect } from 'react';

// ThemeContext를 생성하여 테마 상태를 관리할 수 있도록 합니다.
export const ThemeContext = createContext();

// ThemeProvider 컴포넌트 정의
export const ThemeProvider = ({ children }) => {
  // localStorage에서 저장된 테마를 가져옵니다.
  const storedTheme = localStorage.getItem('theme');
  // 상태 변수를 초기화합니다. 저장된 테마가 없으면 기본값 'light'를 사용합니다.
  const [theme, setTheme] = useState(storedTheme || 'light');

  // 테마가 변경될 때마다 localStorage에 새로운 테마를 저장하고, body의 클래스 이름을 업데이트합니다.
  useEffect(() => {
    localStorage.setItem('theme', theme); // 현재 테마를 localStorage에 저장
    document.body.className = theme; // body 요소에 현재 테마 클래스 적용
  }, [theme]); // theme이 변경될 때마다 실행

  // 테마를 전환하는 함수
  const toggleTheme = () => {
    // 현재 테마가 'light'이면 'dark'로, 그렇지 않으면 'light'로 변경합니다.
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    // ThemeContext.Provider를 사용하여 자식 컴포넌트에게 theme과 toggleTheme을 제공합니다.
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children} {/* ThemeProvider의 자식 요소를 렌더링합니다. */}
    </ThemeContext.Provider>
  );
};
