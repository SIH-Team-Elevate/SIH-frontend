import { Box, CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";

export default function HelpSupport() {
  const [query, setQuery] = useState([]);
  const [loading, setLoading] = useState(true);
  const deleteQuery = async (id) => {
    try {
      const res = await fetch("http://localhost:3001/frontend/queries/"+id, {
        method: "DELETE",
        headers: { jwt_token: localStorage.token },
      });
      setQuery(query.filter((query) => query._id !== id));
    } catch (err) {
      console.error(err.message);
    }
  }
  const resolve=async(id)=>{
    try {
      const body = { id };
      const res = await fetch("http://localhost:3001/frontend/queries/"+id, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
      });
      setQuery(query.filter((query) => query._id !== id));
    } catch (err) {
      console.error(err.message);
    }
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3001/frontend/queries", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            // "auth-token": localStorage.getItem("token"),
          },
        });
        const data = await response.json();
        setQuery(data.queries);
        setLoading(false);
        console.log(data.queries)
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  return (
    <>{loading ? (
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
            <div>search Query</div>
          </div>

          <div className="filter">
            <span className="material-symbols-outlined">Filter_Alt</span>
            <div>Filter</div>
          </div>
        </div>
        <div className="report">
          <table className="table">
            <tr className="noline">
              <th>Username</th>
              <th>Description</th>
              <th></th>
            </tr>
            {
              query.map((query)=>(
                <tr>
                  <td>{query.user.name}</td>
                  <td>{query.description}</td>
                  <td>
                    <div className="response">
                      <div className="message">Message</div>
                      <div className="resolved" onClick={()=>{console.log(query._id);resolve(query._id)}}>Resolved</div>
                      <div className="reject" onClick={()=>{console.log(query._id);deleteQuery(query._id)}}>Reject</div>
                    </div>
                  </td>
                </tr>
              ))
            }
            <tr className="noline">
              <td>Utkarsh Dhairya Panwar</td>
              <td>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur, incidunt officiis? Aliquid voluptatum suscipit,
                nisi tenetur asperiores, sunt esse ratione delectus maxime
                corporis atque magni aperiam praesentium dicta, architecto
                repellendus.
              </td>
              <td>
                <div className="response">
                  <div className="message">Message</div>
                  <div className="resolved">Resolved</div>
                  <div className="reject">Reject</div>
                </div>
              </td>
            </tr>

            <tr className="noline"></tr>
            <tr className="noline"></tr>
          </table>
        </div>
      </div>)}
    </>
  );
}
