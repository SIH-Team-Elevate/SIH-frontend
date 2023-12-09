import { useEffect, useRef, useState } from "react";
import { Box, CircularProgress, Input, MenuItem, Select } from '@mui/material';

export default function Report() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('');
  const searchbox = useRef(null);
  const search =async () => {
    try {
      const response = await fetch("http://localhost:3001/frontend/users?name="+searchbox.current.value+"&type="+filter, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          // "auth-token": localStorage.getItem("token"),
        },
      });
      const data = await response.json();
      setData(data.users);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3001/frontend/users", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            // "auth-token": localStorage.getItem("token"),
          },
        });
        const data = await response.json();
        setData(data.users);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3001/frontend/users?type="+filter+"&name="+searchbox.current.value, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            // "auth-token": localStorage.getItem("token"),
          },
        });
        const data = await response.json();
        setData(data.users);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [filter]);
  return (
    <>
    {loading ? (
      <div className="loading">
        <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <CircularProgress />
      </Box>
      </div>
    ) : (
      <div className="content">
        <div className="nav">
          <div className="searchbox">
            <span className="material-symbols-outlined">search</span>
            <div><Input disableUnderline inputRef={searchbox} placeholder="Search people"onChange={search}/></div>
          </div>

          <div className="filter">
            <span className="material-symbols-outlined">Filter_Alt</span>
            <div>
              <Select
                size="small"
                value={filter}
                onChange={(event)=>{setFilter(event.target.value)}}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
                sx={{
                  '&:focus': {
                    outline: 'none',
                  },
                }}
              >
                <MenuItem value="" disabled>
                  Filter
                </MenuItem>
                <MenuItem value={''}>No Filter</MenuItem>
                <MenuItem value={'driver'}>Driver</MenuItem>
                <MenuItem value={'worker'}>worker</MenuItem>
              </Select>
            </div>
          </div>
        </div>
        <div className="report">
          <table className="table">
            <tr className="noline">
              <th>Name</th>
              <th>Type</th>
              <th>Km travelled</th>
              <th>Working Efficiency</th>
            </tr>
            <tr>
              <td>Pratyaksh</td>
              <td>driver</td>
              <td>100</td>
              <td>100</td>
            </tr>
            {
              data.map((item) => {
                return (
                  <tr>
                    <td>{item.name}</td>
                    <td>{item.type}</td>
                    <td>{item.total}</td>
                    <td>{80}</td>
                    {/* TODO: Add working efficiency */}
                  </tr>
                )
              })
            }
            <tr className="noline">
              <td>Pratyaksh</td>
              <td>driver</td>
              <td>100</td>
              <td>100</td>
            </tr>
            <tr className="noline"></tr>
            <tr className="noline"></tr>
          </table>
        </div>
      </div>)
  }</>
  );
}
