import PropTypes from "prop-types";
import { AnimatePresence, motion } from "framer-motion";


const MenuItem = ({menu, index, theme}) => {
    return (
    <a 
      href={menu.uri} 
      className={`w-12 h-12 rounded-full flex items-center jusyify-center group cursor-pointer bg-gradient-to-br 
        ${theme === 'theme2' ? 'from-primary-green to-secondary-green' : 'from-primary-pink to-secondary-pink relative'}`}>
      <menu.Icon className={`text-texlight group-hover:text-bgPrimary text-xl`} />
  
  <motion.div className="absolute bg-white rounded-md px-6 py-2
  -left-[140px]">


  </motion.div>
  
  
  </a>
    
  )
}

MenuItem.propTypes = {
  menu: PropTypes.shape({
      uri: PropTypes.string.isRequired,
      Icon: PropTypes.elementType.isRequired
  }).isRequired,
  index: PropTypes.number.isRequired,
  theme: PropTypes.string.isRequired
};
export default MenuItem
