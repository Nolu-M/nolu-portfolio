import useTheme from "./useTheme";

const ThemeSwitcher = () => {
    const { switchTheme } = useTheme();

  return (
    <div className='container mx-auto'>
        <button onClick={() => switchTheme('theme1')} className="m-2 p-2 bg-blue-500 text-white rounded">Theme 1</button>
        <button onClick={() => switchTheme('theme2')} className="m-2 p-2 bg-green-500 text-white rounded">Theme 2</button>
        <button onClick={() => switchTheme('theme3')} className="m-2 p-2 bg-purple-500 text-white rounded">Theme 3</button>
      
    </div>
  )
}

export default ThemeSwitcher
