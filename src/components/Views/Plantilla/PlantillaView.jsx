import React, { useState } from "react";
import { Card, Col, Row } from 'antd';
import imagealex from '../../../PolloRepositorio/plantilla/img-alex.jpg';
import imagecarlos from '../../../PolloRepositorio/plantilla/img-carlos.jpg';
import imagemaxi from '../../../PolloRepositorio/plantilla/img-maxi.jpg';
import imagemilton from '../../../PolloRepositorio/plantilla/img-milton.jpg';
import imagefer from '../../../PolloRepositorio/plantilla/img-fer.jpg';
import "../../styles/stylesheet.css";

const PlantillaView = () => {
    const [hola, setHola] = useState('');
    const [cargando,] = useState(false);
    const { Meta } = Card;


    const ejemploFuncion = () => {
        console.log(hola)
    };

    return (
        <>
            {cargando ? (
                <span className="loader position-absolute start-50 top-50 mt-3"></span>
            ) : (
                <div className="mainpage">
                    <h1>PLANTILLA VIEW</h1>
                    <h3>Lista de Jugadores de Futbol y Voley</h3>
                    <input
                        value={hola}
                        onChange={(e) => { setHola(e.target.value) }}
                    ></input>
                    <button onClick={ejemploFuncion}></button>

                    <Row gutter={10}>
                        <Col span={5}></Col>
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
                </div>
            )}
        </>
    );
};
export default PlantillaView;