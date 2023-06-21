import React from 'react'
// Os demais componentes são usados e logo precisam ser importados
import MyButton from './MyButton'
import DecButton from './DecButton'
import DivPanel from './DivPanel';

const MainPanel = () => {
    return (
        <div>
            This is main panel <MyButton></MyButton>
            <DecButton></DecButton>
            <DivPanel></DivPanel>
        </div>
    );
}
export default MainPanel;