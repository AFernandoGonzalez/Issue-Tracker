import { React, useState } from 'react'
import IssueFilter from './components/IssueFilter'
import IssueTable from './components/IssueTable'
import IssueAdd from './components/IssueAdd'

import issues from './data'

const App = () => {

  const styling = { margin: '1rem' }

  const [issue, setIssue] = useState(issues);


  // const createIssue = (newIssue) => {
  //   const newIssues = issue.slice();
  //   console.log("NewIssues: ", newIssues);
  //   newIssue.id = issue.length + 1;
  //   newIssues.push(newIssue);
  //   setIssue({ issue: newIssues });
  // }

  const createIssue = (newIssue) => {
    const newIssues = issue;
    newIssue.id = issue.length + 1;
    newIssues.push(newIssue);
    setIssue({ issue: newIssues });
    console.log('issue info', newIssues);
  }


  return (
    <div style={styling}>
      <h1>Issue Tracker</h1>
      <IssueFilter />
      <hr />
      <IssueTable issues={issues} />
      {/* <button onClick={createTestIssue}>Add</button> */}
      <hr />
      <IssueAdd createIssue={createIssue}/>
      <hr />

    </div>
  )
}

export default App