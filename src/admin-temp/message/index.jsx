import { useEffect, useState } from "react";
import "./message.css"
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Message() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [message, setMessage] = useState({sender:"Please Select a Message",message:""});
    useEffect(() => {
        const getData = async () => {
            await fetch("http://localhost:3001/frontend/queries").then((res) => res.json()).then((res) => {
                setData(res.queries);
                setLoading(false);
            });
        }
        getData();
    }, []);
    return(<>
    {loading?<Box display="flex" justifyContent="center" alignItems="center" height="100vh"><CircularProgress /></Box>:
    <div className="message">
        <div className="content">
        <div className="catalog">
            <h1>Message</h1>
            {
                data.map((item) => {
                    return (
                        <div className="ele">
                            <div>
                                <div className="name">{item.user.name}</div>
                                <div className="detail">
                                    <div className="empid">{item.user._id.substring(0,10)}</div>
                                    <div className="empid">{item.user.type}</div>
                                </div>
                            </div>
                            <button className="mbutton" onClick={()=>{setMessage({sender:item.user.name,message:item.description})}}>Message</button>
                        </div>
                    )
                })
            }
        </div> 
        <div className="messagebox">
            <div className="header">
                <div className="photoo"></div>
                <div className="namee">{message.sender}</div>
            </div>
            <div className="linee">
            <Typography variant="h6" component="div" sx={{ p: 2 }}>
                {message.message}
            </Typography>
            </div>
        </div>
    </div>
    </div>}</>)
}