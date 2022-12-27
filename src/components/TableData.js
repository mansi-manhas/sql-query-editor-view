import React, { useMemo } from "react";

import { useData } from "../hooks/useData";

import Table from "./Table";
import Spinner from "./Spinner";

const TableData = ({query, dataFetched}) => {

  const { data, runtime, error } = useData(query);

  console.log('query runtime', runtime);

  const columnsData = useMemo(() => {
    if (data.length > 0) {
      return Object.keys(data[0]).map((key) => {
        let result = "";
        if (data[0][key]) {
            result = data[0][key]
                .replace(/([A-Z]+)/g, " $1")
                .replace(/([A-Z][a-z])/g, " $1");
        }

        return {
          Header: result,
          accessor: key,
        };
      });
    }
  }, [data]);

  const queryData = useMemo(() => data.slice(1), [data]);

  if (error) {
    return (
        <>
          Something went wrong
        </>
    )
  }

  if (columnsData) {
    dataFetched(true);
  }
    
    return (
        <> 
        {columnsData ? <Table columns={columnsData} data={queryData} /> : <Spinner />}
        </>
    )
}

export default TableData;