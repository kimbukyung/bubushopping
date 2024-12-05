import React, { useContext } from 'react'; // React 및 useContext 훅을 가져옴
import { ThemeContext } from '../context/ThemeContext'; // ThemeContext를 가져와서 테마 상태를 관리

const ThemeToggle = () => {
  // ThemeContext에서 현재 테마와 테마 전환 함수를 가져옴
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="theme-toggle"> {/* 테마 전환 버튼을 감싸는 div */}
      <button onClick={toggleTheme}> {/* 버튼 클릭 시 toggleTheme 함수 호출 */}
        {theme === 'light' ? '다크 모드' : '라이트 모드'} {/* 현재 테마에 따라 버튼 텍스트 변경 */}
      </button>
    </div>
  );
};

export default ThemeToggle; // 컴포넌트를 내보냄
