import {Form, Input, Button, Menu} from 'antd';
import {useState} from "react";
import {FastBackwardOutlined} from "@ant-design/icons";
export const FormModel =() =>{

    const[fname,setfname]=useState('')
    const[lname,setlname]=useState('')
    const[jobs,setjobs]=useState('')

    const Afisare =()=>{
        alert("First name:"+fname+"\n"+"Last name:"+lname+"\n"+"Jobs:"+jobs)
        console.log("First name:"+fname+"\n"+"Last name:"+lname+"\n"+"Jobs:"+jobs)
    }
    return(

        <Form
            name="wrap"
            labelCol={{ flex: '100px' }}
            labelAlign="left"
            labelWrap
            wrapperCol={{ flex: 1 }}
            colon={false}
        >

            <Form.Item style={{paddingLeft:'500px'}}
                       label="First name" name="First name" rules={[{ required: true }]}>
                <Input value={fname} onChange={(e )=> setfname(e.target.value)}
                       style={{ width: '40%'}}
                />
            </Form.Item>

            <Form.Item style={{paddingLeft:'500px'}}
                       label="Last name" name="Last name" rules={[{ required: true }]}>
                <Input value={lname}  onChange={(e )=> setlname(e.target.value)}
                       style={{ width: '40%'}}
                />
            </Form.Item>

            <Form.Item style={{paddingLeft:'500px'}}
                       label="jobs"  name="jobs"   rules={[{ required: true }]}>
                <Input  value={jobs} onChange={(e )=> setjobs(e.target.value)}
                        style={{ width: '40%'}}
                />
            </Form.Item>

            <Form.Item label=" ">

                <Button style={{ width:'15%',
                    marginLeft:'40%',
                    marginRight:'25%'}}
                        onClick={Afisare}  type="primary" htmlType="submit">
                    Submit
                </Button>

            </Form.Item>
        </Form>
    )
}