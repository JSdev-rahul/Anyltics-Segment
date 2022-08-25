import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router-dom";
import { useAnalytics } from "use-analytics";

const idb = window.indexedDB;

const Dashbord = () => {
  const navigate = useNavigate();
  const { track, page, identify } = useAnalytics();
  const [allLogs, setAllLogs] = useState([{}]);

  const getDataFromIndexDb = () => {
    const dbPromise = idb.open("test-db", 2);
    dbPromise.onsuccess = () => {
      const db = dbPromise.result;
      const tx = db.transaction("logs", "readonly");
      const userData = tx.objectStore("logs");
      const user = userData.getAll();
      user.onsuccess = (query) => {
        // console.log("get", query.srcElement.result);
        setAllLogs(query.srcElement.result.filter((item) => item.id % 2 == 0));
      };
      tx.oncomplete = (query) => {
        db.close();
      };
    };
  };

  // useEffect(() => {
  //   page("  Page", {
  //     pageId:"Dashboard",
  //     title: "this is my Dashbord page",
  //   });
  // }, []);
  useEffect(() => {
    getDataFromIndexDb();
  });

  return (
    <div>
      <button onClick={() => getDataFromIndexDb()}>getData</button>
      <button onClick={() => navigate("/")}>Goto home</button>
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>id</th>
              <th> Type</th>
              <th> url</th>
              <th>path</th>
              <th>Date & Time</th>
              <th>Title</th>
            </tr>
          </thead>

          {allLogs?.length >= 1
            ? allLogs?.map((item, index) => {
                var timestamp = item?.payload?.meta?.ts;
                var date = new Date(timestamp);

                return (
                  <tbody>
                    <tr>
                      <td>{index + 1}</td>
                      <td>{item?.payload?.type}</td>
                      <td>{item?.payload?.properties?.url}</td>
                      <td>{item?.payload?.properties?.path}</td>
                      <td>
                        {+date.getDate() +
                          "/" +
                          (date.getMonth() + 1) +
                          "/" +
                          date.getFullYear() +
                          " " +
                          date.getHours() +
                          ":" +
                          date.getMinutes() +
                          ":" +
                          date.getSeconds()}
                      </td>
                    </tr>
                    {/* <tr>{item?.payload?.properties?.title}</tr> */}
                  </tbody>
                );
              })
            : null}
        </Table>
      </div>
    </div>
  );
};

export default Dashbord;
