import { Card, Col, Row  } from 'antd';
import imagealex from '../plantilla/img-alex.jpg'
import imagecarlos from '../plantilla/img-carlos.jpg'
import imagemaxi from '../plantilla/img-maxi.jpg'
import imagemilton from '../plantilla/img-milton.jpg'
import imagefer from '../plantilla/img-fer.jpg'

function Plantilla(){
const { Meta } = Card;
return(
<>

<Row gutter={10}>
<Col span={5}>
 
</Col>
<Col span={5}>
<Card
    hoverable
    style={{
    width: 240,
    }}
    cover={<img alt="example" src={imagealex} />}
    >
    <Meta title="Posición" description="Delantero" />
   </Card>
</Col>
<Col span={5}>
<Card
    hoverable
    style={{
    width: 240,
    }}
    cover={<img alt="example" src={imagefer} />}
    >
    <Meta title="Posición" description="Defensa" />
   </Card>
</Col>
<Col span={5}>
<Card
    hoverable
    style={{
    width: 240,
    }}
    cover={<img alt="example" src={imagecarlos} />}
    >
    <Meta title="Posición" description="Defensa" />
   </Card>
</Col>
<Col span={5}>
<Card
    hoverable
    style={{
    width: 240,
    }}
    cover={<img alt="example" src={imagemilton} />}
    >
    <Meta title="Posición" description="Arquero" />
   </Card>
</Col>
<Col span={5}>
<Card
    hoverable
    style={{
    width: 240,
    }}
    cover={<img alt="example" src={imagemaxi} />}
    >
    <Meta title="Posición" description="Defensa" />
   </Card>
</Col>
</Row>
</>
);}

export {Plantilla};
