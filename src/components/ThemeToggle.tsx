import { useTheme } from "../context/Themecontext.tsx";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2.5 rounded-full border border-slate-200 dark:border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 backdrop-blur-md cursor-pointer flex items-center justify-center"
      aria-label="Cambiar Tema"
    >
      {theme === "dark" ? (
        <svg className="w-5 h-5 text-inochi-lime" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707m2.828 9.9a5 5 0 117.072 0 5 5 0 01-7.072 0z" />
        </svg>
      ) : (
        <svg className="w-5 h-5 text-inochi-slate" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      )}
    </button>
  );
};