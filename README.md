### Overview

Live site: https://zingy-tiramisu-ab4818.netlify.app/

**Below is the list of essential features added:**
- Input for SQL queries (code editor)
- Button for running SQL queries
- Table for displaying the query results
- Executing one query
- Success notification to the user
- Displaying list of available tables and ability to display their results

### Dependencies

- [react-ace](https://www.npmjs.com/package/react-ace): code editor
- [react-table](https://www.npmjs.com/package/react-table): for creating output table
- [react-window](https://www.npmjs.com/package/react-window): for implementing virtualization and displaying large number of rows
- [styled-components](https://www.npmjs.com/package/styled-components): for styling
- [use-toast-notification](https://www.npmjs.com/package/styled-components): for displaying toast notifications
- [react-test-renderer](https://www.npmjs.com/package/react-test-renderer): testing component using snapshots

### Page Load Time

- Initial load time: 1248ms
- Avg. load time after initial loading: 506ms

Took the above readings using performance profiler from chrome web tools.

### Performance Optimizations

- The app is using `mockData.json` file to render large number of rows, which is placed inside `public` folder to reduce the size of `build`
- [useMemo hook](https://reactjs.org/docs/hooks-reference.html#usememo): using to return memoized value when executing same queries again
- [react-window](https://www.npmjs.com/package/react-window): to load rows on DOM on scroll of table

### Future Scope

Below are the list of features which will improve the application:
- display query runtime in seconds
- number of rows 
- sql query syntax validations
- database tables explorer/browser and view all its fields in the left nav
- selecting a table, and executing basic queries like displaying 10 records, filtering records, etc.
- executing multiple queries in one go (eg: insert + select + delete or select + select, etc.)
- add new tab (for executing multiple queries in multiple windows)
- formatting options (pretty print, beautify, fontsize, show/hide linenumbers)
- free search in the table results
- auto complete functionality while typing queries
- switch between the light and dark modes of the editor
- fullscreen of code editor
- copy queries from editor
- clear queries from editor
- save query functionality
- share query functionality
- display frequently used queries
- switch between different query languages
- show syntax help for each language like SQLite, MS SQL, PostgreSQL, MariaDB
- switching between versions like sqlite 3.6, 3.7, 3.8, etc.
- import SQL queries functionality
- export results in CSV, excel, json, SQL schema
- query builder functionality
- clear error messages with reason on why a query did not work (syntax error along with line number, type of error, table does not exist, invalid attributes, etc.)

**For data analysts:** query builders, saving queries and reusing them, importing queries, exporting queries would be beneficial

**Competitive analysis**

- pgAdmin query editor
- Atlan query editor
- online programiz SQL editor
- sqlite.com
- tutorialspoint.com
