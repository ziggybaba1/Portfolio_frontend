import { Assignment, Code, Devices, GitHub, QueryBuilder, SettingsBackupRestore, SupervisedUserCircle } from '@mui/icons-material';
import React, { useState } from 'react';
import { DescriptionTab, Technology, CodeRepo, Design, LinkTab, Contributor } from './components';
import "./tabs.scss";

function Tabs(props) {
    const [selected,setSelected]=useState(0);
    return (
        <div className='tabs'>
            <div className="tabContainer">
                <ul>
                    <li className="menu">
                        <button onClick={()=>setSelected(0)} className={selected==0?"items active":"items"}>
                            <Assignment className={selected==0?'itemIcon active':"itemIcon"} />
                           
                        </button>
                        <strong className={selected==0?'active':''}>Description</strong>
                    </li>
                    <li className="menu">
                        <button onClick={()=>setSelected(1)} className={selected==1?"items active":"items"}>
                            <Code className={selected==1?'itemIcon active':"itemIcon"}/>
                        </button>
                        <strong className={selected==1?'active':''}>Technology</strong>
                    </li>
                    <li className="menu">
                        <button onClick={()=>setSelected(2)} className={selected==2?"items active":"items"}>
                            <GitHub className={selected==2?'itemIcon active':"itemIcon"}/>
                           
                        </button>
                        <strong className={selected==2?'active':''}>Code Repository</strong>
                    </li>
                    <li className="menu">
                        <button onClick={()=>setSelected(3)} className={selected==3?"items active":"items"}>
                            <Devices className={selected==3?'itemIcon active':"itemIcon"}/>
                           
                        </button>
                        <strong className={selected==3?'active':''}>Design</strong>
                    </li>
                    <li className="menu">
                        <button onClick={()=>setSelected(4)} className={selected==4?"items active":"items"}>
                            <SettingsBackupRestore className={selected==4?'itemIcon active':"itemIcon"}/>
                           
                        </button>
                        <strong className={selected==4?'active':''}>Project Link</strong>
                    </li>
                    {/* <li className="menu">
                        <button onClick={()=>setSelected(5)} className={selected==5?"items active":"items"}>
                            <QueryBuilder className={selected==5?'itemIcon active':"itemIcon"}/>
                           
                        </button>
                        <strong className={selected==5?'active':''}>Time-Frame</strong>
                    </li> */}
                    <li className="menu">
                        <button onClick={()=>setSelected(6)} className={selected==6?"items active":"items"}>
                            <SupervisedUserCircle className={selected==6?'itemIcon active':"itemIcon"}/>
                           
                        </button>
                        <strong className={selected==6?'active':''}>Contributor</strong>
                    </li>
                </ul>

            </div>
            <div className="contentContainer">
                {selected==0&&
                <DescriptionTab  />}
                 {selected==1&&
                <Technology />}
                 {selected==2&&
                <CodeRepo />}
                 {selected==3&&
                <Design />}
                 {selected==4&&
                <LinkTab />}
                 {selected==6&&
                <Contributor />}
            </div>
            
        </div>
    );
}

export default Tabs;