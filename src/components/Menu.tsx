type MenuProps = {
    icon: React.ReactNode
    text: string
}
const Menu: React.FC<MenuProps> = ({icon, text}) => {
    return (
        <div className={`flex items-center space-x-2 my-3 px-2 py-3 rounded-xl ${text === "Menus" ? "bg-secondary text-black" : "hover:bg-secondary hover:text-black"}`}>
           {icon}
           <p>{text}</p>
        </div>
    )
}

export default Menu