import { Tabs } from 'antd';
import React from 'react';
function MiComponente (){
    const onChange = (key) => {
        console.log(key);
      };
      const items = [
        {
          key: '1',
          label: `Misión `,
          children: `Competir y ser Mejores`,
        },
        {
          key: '2',
          label: `Visión`,
          children: `Content of Tab Pane 2`,
        },
        {
          key: '3',
          label: `Objetivos`,
          children: `Conseguir Autos y Gente con Dinero`,
        },
        {
          key: '4',
          label: `Plantilla`,
          children: `Lista de Jugadores de Futbol y Voley`,
        },
      ];
    return(
            <Tabs defaultActiveKey="1" items={items} onChange={onChange}/>
        
    );
}
export  {MiComponente};