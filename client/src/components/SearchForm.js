import React from "react";

// This is where users can type in their searchs, and their queries are used when calling the API

function SearchForm(props) {

    const style = {
        marginTop: "15%",
        marginBottom: "15%"
    }

    return (

        <div className="columns is-desktop is-centered">
            <div className="column is-half">
                <div className="box" style={style}>
                <form className = "pl-5 pr-5">
                    <div className="field">
                        <label className="label mb-5 is-size-4">Search the Google Books API</label>
                        <div className="control">
                            <input onChange={props.onChange} name="query" 
                            className="input mb-5" type="text" id="booksearch" 
                            placeholder="Enter a book title, author, or topic..." />
                        </div>
                    </div>

                    <div className="control">
                        <button onClick={props.onClick} type="submit" className="button is-link is-size-5 mb-5">Submit</button>
                    </div>
                </form>
            </div>
            </div>
        </div>

    )
}

export default SearchForm;