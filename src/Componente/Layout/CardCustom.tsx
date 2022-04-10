import { Card, Col } from 'antd'
function CardCustom({title, contentcard}) {

    return (

        <Col span={8}>
            <div style={{ paddingBottom: '8px',paddingTop:'8px'}}>
            <Card title={title} bordered={false}>
                {contentcard}
            </Card>
            </div>
        </Col>

    )
}

export default CustomCard