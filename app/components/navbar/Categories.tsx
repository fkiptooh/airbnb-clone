'use client'
import Container from "../Container";
import { TbBeach } from 'react-icons/tb'
import { GiWindmill } from 'react-icons/gi'
import { MdOutlineVilla } from 'react-icons/md'
import CategoryBox from "../CategoryBox";

export const categories = [
    {
        label: 'Beach',
        icon: TbBeach,
        description: "This property is next to the beach"
    },
    {
        label: 'Windmills',
        icon: GiWindmill,
        description: "This property has windmills"
    },
    {
        label: 'Morden',
        icon: MdOutlineVilla,
        description: "This property is next to the beach"
    }
]
const Categories = () => {
    return (
        <Container>
            <div className="
                pt-4
                flex
                flex-row
                items-center
                justify-between
                overflow-x-auto
            ">
                {categories.map((item)=>
                    (<CategoryBox
                        key={item.label}
                        label={item.label}
                        description= {item.description}
                        icon={item.icon}
                    />)
                )}
            </div>
        </Container>
    )
}
export default Categories;