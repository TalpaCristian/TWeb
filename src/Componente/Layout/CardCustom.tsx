import {Card, Checkbox, Col, Input} from 'antd'
import {IContentModel} from "../../Interface/Interfaces";
import {useEffect} from "react";
import {observer} from "mobx-react-lite";

export const CustomCard=observer(({content}:{content:IContentModel}) => {

        const {title,description,notite,changeNotes,isSeen,changeSeen} =content
        useEffect(()=>{
            if(isSeen) {
                alert(`Is seen ${ title }`)
            }
        },[isSeen])
        return (

            <Card title={title} bordered={false}>
                {description}
                <Input value={notite}
                       placeholder={notite}
                       onChange={(e)=>changeNotes(e.target.value)}
                />
                <Checkbox defaultChecked={ isSeen } checked={isSeen} onChange={(e)=>changeSeen(e.target.checked)}/>

            </Card>


        )
    }
)