import { FaHome } from "react-icons/fa";
import { RiAlbumFill } from "react-icons/ri";
import { FaPersonRays } from "react-icons/fa6";
import { MdLibraryMusic } from "react-icons/md";
import { FaLaptopFile } from "react-icons/fa6";
const MenuList=[

    {
        id:1,
        icon: <FaLaptopFile />,
        name: "File Manager",
        to:"/fileManager",
    },
    {
        id:2,
        icon: <FaHome />,
        name: "Home",
        to:"/",

    },
    
    {
        id:3,
        icon: <MdLibraryMusic />,
        name: "All Music List",
        to:"/all_list_music",

    },
   
    {
        id:4,
        icon: <FaPersonRays />,
        name: "Artist",

    },
    {
        id:5,
        icon: <RiAlbumFill />,
        name: "Genre",

    },
]

export {MenuList}