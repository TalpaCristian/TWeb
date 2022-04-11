import { Row } from 'antd';
import CustomCard from './CardCustom';
const content = [
    {
        id: 1,
        title: "Card title 1",
        content: "content"
    },
    {
        id: 2,
        title: "Card title 2",
        content: "content"
    },
    {
        id: 3,
        title: "Card title 3",
        content: "content"
    },
]


function ContentIn() {
    return (

        <Row gutter={16} >
            {
                content.map((element, i) => {
                    return (
                        <CustomCard key={element.id} title={element.title} content={element.content}/>
                    )
                })
            }
        </Row>
    )
}

export default ContentIn