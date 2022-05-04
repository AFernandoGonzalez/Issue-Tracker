import React from 'react'
import ProTypes from 'prop-types'

const IssueRow = (props) => {
    
    const borderedStyle = { border: "1px solid silver", padding: 4 };
    // {console.log("Issue Table: ", props.issue.id)}
    // const { id, status, owner, created, effort, completionDate, title } = issue;
    return (
        
        <tr>
            <td>{props.issue.id}</td>
            <td>{props.issue.status}</td>
            <td>{props.issue.owner}</td> 
            <td>{props.issue.created.toDateString()}</td> 
            <td>{props.issue.effort}</td> 
            <td>{props.issue.completionDate ? props.issue.completionDate.toDateString() : ''}</td> 
            <td>{props.issue.title}</td>
        </tr>

    )
}

IssueRow.propTypes = {
    id: ProTypes.number,
    title: ProTypes.string
    // Default the property values when the parent does not supply the value
    // title: '-- no title --',
}


export default IssueRow