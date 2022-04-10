import { Row } from 'antd';
import CardCustom from './CardCustom';
const continut = [
    {
        id: 1,
        title: "Card title 1",
        continut: "continut"
    },
    {
        id: 2,
        title: "Card title 2",
        continut: "continut"
    },
    {
        id: 3,
        title: "Card title 3",
        continut: "continut"
    },
    {
        id: 4,
        title: "Card title 4",
        continut: "continut"
    },
   
]


function Content() {
    return (

        <Row gutter={16} >
            {
                continut.map((element, i) => {
                    return (
                        <CardCustom key={element.id} title={element.title} contentcard={element.continut}/>
                    )
                })
            }
        </Row>
    )
}

export default Content