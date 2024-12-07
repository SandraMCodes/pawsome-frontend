function CreateProject(){

    return (
        <form>
            <div>
                <label htmlFor="title">Title:</label>
                <input
                    type="text"
                    id="title"
                    placeholder="Enter title"
                    onChange={handleChange}
                />
            </div> 
            <button type="submit" onClick={handleSubmit}>
                Login
            </button>
        </form>
    )}
    export default CreateProject;