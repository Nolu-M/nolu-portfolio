

const MenuItem = ({menu, index, theme}) => {
    return (<a href={menu.uril} className={`w-12 h-12 rounded-full flex items-center jusyify-center group cursor-pointer bg-gradient-to-br 
        ${theme === 'theme2' ? 'from-primary-green to-secondary-green' : 'from-primary-pink to-secondary-pink'}`}>
      <menu.Icon className={`text-textlight text-xl`} />
  </a>
    
  )
}

export default MenuItem
