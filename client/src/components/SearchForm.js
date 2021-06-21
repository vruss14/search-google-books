import React from "react";

function SearchForm(props) {

    return (
        <form className="m-5 border p-3">
            <h4 className="mb-1">Book Search</h4>
            <div className="form-group">
                <label className="mt-2 mb-2">Book</label>
                <input onChange={props.onChange} name = "query" type="text" className="form-control mt-2 mb-2" id="booksearch" placeholder="Search a book here..." />
            </div>
            <div className="text-right">
                <button onClick={props.onClick} type="submit" className="btn btn-primary">Search</button>
            </div>

        </form>
    )
}

export default SearchForm;