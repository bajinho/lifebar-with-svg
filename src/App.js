import React from 'react'
// import logo from './logo.svg';
import './App.css';
import Slider from 'antd/lib/slider'

import 'antd/dist/antd.css'

function App() {

    const [life, setLife] = React.useState(100)

    return (
        <div className="App" >
            <div className='container'>
                <br />
                <br />
                <div className='row'>
                    <Slider step={1} defaultValue={100} tooltipVisible onChange={(e) => setLife(e)} />
                </div>

                <div className='row'>

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="210mm"
                        height="297mm"
                        viewBox="0 0 210 297"
                        version="1.1"
                        id="svg8"
                    >
                        <defs
                            id="defs2" />
                        <sodipodiNamedview
                            id="base"
                            pagecolor="#ffffff"
                            bordercolor="#666666"
                            borderopacity="1.0"
                        />

                        <g
                            id="layer1">
                            <rect
                                style={{ opacity: 1, fill: "#f08978", fillOpacity: 1, stroke: "#020204", strokeWidth: 1.02699995, strokeLinecap: "round", strokeMiterlimit: 2, strokeDasharray: "none", strokeOpacity: 0 }}
                                id="rect815"
                                width="123.97619"
                                height="149.67857"
                                x="29.482143"
                                y="47.535713" />
                            <rect
                                style={{ opacity: 1, fill: "#ff0000", fillOpacity: 1, stroke: "#020204", strokeWidth: 1.02699995, strokeLinecap: "round", strokeMiterlimit: 2, strokeDasharray: "none", strokeOpacity: 0 }}
                                id="rect817"
                                width="17.386906"
                                height="100"
                                x="127.75595"
                                y="80" />
                            <rect
                                style={{ opacity: 1, fill: "#ffff00", fillOpacity: 1, stroke: "#020204", strokeWidth: 1.02699995, strokeLinecap: "round", strokeMiterlimit: 2, strokeDasharray: "none", strokeOpacity: 0 }}
                                id="rect817-3"
                                width="17.386906"
                                height={life}
                                x="127.75594"
                                y={80 - (life - 100)} />
                        </g>
                    </svg >

                </div>
            </div>
        </div >
    );
}

export default App;