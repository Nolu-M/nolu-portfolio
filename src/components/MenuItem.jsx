import PropTypes from "prop-types";


const MenuItem = ({menu, index, theme}) => {
    return (
    <a 
      href={menu.uri} 
      className={`w-12 h-12 rounded-full flex items-center jusyify-center group cursor-pointer bg-gradient-to-br 
        ${theme === 'theme2' ? 'from-primary-green to-secondary-green' : 'from-primary-pink to-secondary-pink relative'}`}>
      <menu.Icon className={`text-texlight group-hover:text-bgPrimary text-xl`} />
  </a>
    
  )
}

MenuItem.propTypes = {
  menu: PropTypes.arrayOf(PropTypes.string).isRequired,
  index: PropTypes.number.isRequired,
  theme: PropTypes.string.isRequired,
};

export default MenuItem
