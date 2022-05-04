import IssueRow from "./IssueRow"

const IssueTable = (props) => {
    const borderedStyle = { border: "1px solid silver", padding: 6 };

    return (
        <table className="bordered-table">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Status</th>
                    <th>Owner</th>
                    <th>Created</th>
                    <th>Effort</th>
                    <th>Completion Date</th>
                    <th>Title</th>
                </tr>
            </thead>
            <tbody>
                {props.issues.map((issue) => {
                    return (
                        <IssueRow key={issue.id} issue={issue} />
                    )
                })}
            </tbody>
        </table>
    )
}

export default IssueTable
