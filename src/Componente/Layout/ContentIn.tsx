import { Row } from 'antd';
import {CustomCard} from './CardCustom';
import {useRootStore} from "../../index";
import {IContentModel} from "../../Interface/Interfaces";
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



export  const  ContentIn = () => {
    const {contents} = useRootStore()
    console.log(">>root_store",contents)
    return (

        <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
            <Row gutter={16} >
                {contents.map((content:IContentModel) => {
                    return (
                        <CustomCard key={content.id} content={content}/>
                    )
                } )}

            </Row>

        </div>
    )
}