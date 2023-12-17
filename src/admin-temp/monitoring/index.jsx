import { useEffect, useState } from "react"
import "./monitoring.css"
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

function Vehicle(){
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    useEffect(() => {
        const getData = async () => {
            await fetch("http://localhost:3001/frontend/dumpsters_shovels").then((res) => res.json()).then((res) => {
                setData(res);
                setLoading(false);
            });
        }
        getData();
    }, []);
    return(<>{loading?<Box display="flex" justifyContent="center" alignItems="center" height="100vh"><CircularProgress /></Box>:
        <div className="reportt">
            <table className="table">
                <tr className="noline">
                    <th>Vechile Id</th>
                    <th>Type</th>
                    <th>Model</th>
                    <th>Capactity</th>
                    <th>Status</th>
                </tr>
                {
                    data.shovel.map((item)=>{
                        return(<tr>
                            <td>{item.id}</td>
                            <td>Shovel</td>
                            <td>{item.name}</td>
                            <td>{item.capacity}</td>
                            <td>{item.status?"Working":"Not Working"}</td>
                        </tr>)
                    })     
                }
                {
                    data.dumper.map((item)=>{
                        return(<tr>
                            <td>{item.id}</td>
                            <td>Dumper</td>
                            <td>{item.name}</td>
                            <td>{item.capacity}</td>
                            <td>{item.status?"Working":"Not Working"}</td>
                        </tr>)
                    })     
                }
                <tr className="noline"></tr>
                <tr className="noline"></tr>
            </table>
        </div>}
    </>)
}
function Live(){
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    useEffect(() => {
        const getData = async () => {
            await fetch("http://localhost:3001/frontend/users").then((res) => res.json()).then((res) => {
                console.log(res)
                setData(res);
                setLoading(false);
            });
        }
        getData();
    }, []);
    return(<>
        {loading?<Box display="flex" justifyContent="center" alignItems="center" height="100vh"><CircularProgress /></Box>:
        <div className="reportt">
            <table className="table">
                <tr className="noline">
                    <th>Employee ID</th>
                    <th>Name</th>
                    <th>Operator</th>
                    <th>Location</th>
                    <th>Status</th>
                    <th>Trips</th>
                    <th></th>
                </tr>
                <tr>
                    <td>SH102</td>
                    <td>Pratyaksh</td>
                    <td>Shovel</td>
                    <td>Dump1</td>
                    <td>Working</td>
                    <td>5</td>
                    <td><div>View Profie</div></td>
                </tr>
                {
                    data.users.map((item)=>{
                        return(<tr>
                            <td>{item._id}</td>
                            <td>{item.name}</td>
                            <td>{item.type}</td>
                            <td>{"Update this"}</td>
                            <td>{item.status?"Working":"Not Working"}</td>
                            <td>{item.total}</td>
                            <td><div>View Profie</div></td>
                        </tr>)
                    })
                }
                
                <tr className="noline"></tr>
                <tr className="noline"></tr>
            </table>
        </div>}
    </>)
}
function History(){
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    useEffect(() => {
        const getData = async () => {
            await fetch("http://localhost:3001/frontend/users").then((res) => res.json()).then((res) => {
                console.log(res)
                setData(res);
                setLoading(false);
            });
        }
        getData();
    }, []);
    return (<>
        {loading?<Box display="flex" justifyContent="center" alignItems="center" height="100vh"><CircularProgress /></Box>:
        <div className="reportt">
            <table className="table">
                <tr className="noline">
                    <th>Name</th>
                    <th>Operator</th>
                    <th>Km travelled</th>
                </tr>
                <tr>
                    <td>Pratyaksh</td>
                    <td>Dumper</td>
                    <td>100</td>
                </tr>
                {data.users.map((item)=>{
                        return(<tr>
                            <td>{item.name}</td>
                            <td>{item.type}</td>
                            <td>{item.total}</td>
                        </tr>)
                    })
                }

                <tr className="noline">
                    <td>Shivam</td>
                    <td>Shovel</td>
                    <td>50</td>
                </tr>
                <tr className="noline"></tr>
                <tr className="noline"></tr>
            </table>
        </div>}
    </>)
}
export default function Monitoring(){
    const [state,setState]=useState(0)
    return(<>
        <div className="content">
        <div className="nav">
            <div className="navheading">
                <div className={`vecstatus ${state === 0 ? 'active' : ''}`} onClick={()=>{setState(0)}}>Vehicle Status</div>
                <div className={`livedata ${state === 1 ? 'active' : ''}`} onClick={()=>{setState(1)}}>Live data</div>
                <div className={`history ${state === 2 ? 'active' : ''}`} onClick={()=>{setState(2)}}>history</div>
            </div>
    
            <div className="filter">
                <span className="material-symbols-outlined">
                    Filter_Alt
                </span>
                <div>Filter</div>
            </div>
        </div>
        {
            state === 0 ? <Vehicle/> : state === 1 ? <Live/> : <History/>
        }
    </div>
    </>)
}