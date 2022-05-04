
const IssueAdd = (props) => {

    // const handleSubmit = (e) => {
    //     e.preventDefault();

    //     let form = document.forms.issueAdd;
    //     console.log("Form: ", form);
    //     props.createIssue({
    //         owner: form.owner.value,
    //         title: form.title.value,
    //         status: 'New',
    //         created: new Date(),
    //     });
    //     {console.log("Form Submited")}
    //     console.log("Form: ", props.createIssue);
    //     // clear the form for the next input
    //     form.owner.value = ""; form.title.value = "";
    // }

    const handleSubmit = (e) => {
        e.preventDefault()

        props.createIssue({
            owner: 'fer',
            title: e.target.value,
            status: 'New',
            created: new Date(),
        });
        console.log('adding new issue', props.createIssue);
        e.target.value = '';
    }

    return (
        <div>
            <form name="issueAdd" onSubmit={handleSubmit}>
                <input type="text" name="owner" placeholder="Owner" />
                <input type="text" name="title" placeholder="Title" />
                <button>Add</button>
            </form>
        </div>
    )
}

export default IssueAdd