import { useEffect, useState } from "react";
import "./dashboard.css"
function GoogleChart() {
    useEffect(() => {
      const script = document.createElement('script');
      script.src = 'https://www.gstatic.com/charts/loader.js';
      script.onload = () => {
        window.google.charts.load('current', { packages: ['corechart'] });
        window.google.charts.setOnLoadCallback(drawChart);
      };
      document.body.appendChild(script);
  
      function drawChart() {
        var data = window.google.visualization.arrayToDataTable([
          ['Time', 'Ore', 'Overburden'],
          ['7', 1000, 400],
          ['8', 1170, 460],
          ['9', 660, 1120],
          ['10', 1030, 540],
          ['11', 900, 726],
          ['12', 910, 720]
        ]);
  
        var options = {
          title: 'Extraction',
          curveType: 'function',
          width: 340,
          height: 340,
        };
  
        var chart = new window.google.visualization.LineChart(document.getElementById('chart_div'));
        chart.draw(data, options);
      }
    }, []);
  
    return <div id="chart_div" />;
  }
export default function Dashboard(){
    const [data, setData] = useState({trueDumper:"Pls wait",falseDumper:"Pls wait",trueShovel:"Pls wait",falseShovel:"Pls wait"});
    const [announcement, setAnnouncement] = useState([]);
    useEffect(() => {
        const getData = async () => {
        await fetch("http://localhost:3001/frontend/dumpers_shovels_summary").then(res => {
                if(res.status === 200){
                    return res.json();
                }
                else{
                    console.log(res.err);
                }
            }
            ).then(data => {
                setData(data);
            }).catch(err => {
                console.log(err);
            })
            await fetch("http://localhost:3001/frontend/annoucements").then(res => {
                if(res.status === 200){
                    return res.json();
                }
                else{
                    console.log(res.err);
                }
            }
            ).then(data => {
                if(data.length >5)
                    data = data.slice(0,5);
                setAnnouncement(data.annoucements);
            }).catch(err => {
                console.log(err);
            })
        };
        getData();
    },[])

    return (
        <>
        <div className="content">
        <div className="top">
            <div className="map"></div>
            <div className="r">
                <div className="showel">
                    <div className="headingss">Showel</div>
                    <div className="row">
                        <div>Active:</div>
                        <div>{data.trueShovel}</div>
                    </div>
                    <div className="row">
                        <div>Inactive:</div>
                        <div>{data.falseShovel}</div>
                    </div>
                </div>
                <div className="Dumper">
                    <div className="headingss">Dumper</div>
                    <div className="row">
                        <div>Active:</div>
                        <div>{data.trueDumper}</div>
                    </div>
                    <div className="row">
                        <div>Inactive:</div>
                        <div>{data.falseDumper}</div>
                    </div>
                </div>
            </div>
        </div>
        <div className="top bottom">
            <div className="report">
                <table className="table">
                    <tr className="noline">
                        <th>Alerts</th>                   
                    </tr>
                    {
                        announcement.map((item) => {
                            return (
                                <tr>
                                    <td>{new Date(item.createdAt).toLocaleString()}: {item.content}</td>
                                </tr>
                            )
                        })
                    }
                </table>
            </div>
            <div className="graph">
                <div id="curve_chart" style={{width: "340px", height: "340px"}}>
                    <GoogleChart />
                </div>
            </div>
        </div>
    </div>
        </>
    )
}