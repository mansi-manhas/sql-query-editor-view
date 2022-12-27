import { useEffect, useState } from "react";
import alasql from "alasql";
import { useNotification } from "use-toast-notification";

import { getSampleRequest } from "./utils";
import { tableNames } from "./consts";

import mockData from "../mockData.json";

export const useData = (tableName) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [runtime, setRuntime] = useState("");

  const notification = useNotification();

  const convertToJson = (data) => {
    alasql
      .promise("SELECT * FROM CSV(?, {headers: false, separator:','})", [data])
      .then((data) => {
        setData(data);
        notification.show({
          message: "Query run successfully",
          variant: "success",
        });
      })
      .catch((e) => {
        notification.show({
          message: e.message,
          variant: "error",
        });
      });
  };

  useEffect(() => {
    const fetchData = (tableName) => {
      setData([]);
      if (!tableName.trim()) {
        notification.show({
          message: "Query cannot be empty",
          variant: "error",
        });
      } else {
        const name = tableNames.find((name) => name === tableName.trim());
        setError(false);
        if (!name) {
          new Promise(function (resolve, reject) {
            setTimeout(resolve, 0);
          }).then(() => {
            setData(mockData);
          });
        }
        if (name) {
          console.log("authentication", process.env.REACT_APP_API_KEY);
          fetch(getSampleRequest(tableName.trim()), {
            headers: {
              Accept: "application/vnd.github.v4+raw",
              authorization: `token ${process.env.REACT_APP_API_KEY}`,
            },
          })
            .then((res) => {
              if (res.ok) {
                return res.json();
              } else {
                throw new Error("Something went wrong");
              }
            })
            .then((data) => convertToJson(atob(data.content.replace("\n", ""))))
            .catch((error) => {
              notification.show({
                message: error.message,
                variant: "error",
              });
            });
        }
      }
    };
    let t0 = performance.now(); //start time
    fetchData(tableName);
    let t1 = performance.now(); //end time
    setRuntime(t1 - t0);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tableName]);

  return { data, runtime, error };
};
