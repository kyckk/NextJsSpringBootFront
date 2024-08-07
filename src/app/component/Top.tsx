
export default function Top(){
    return <><nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark" >
    <div className="container-fluid">
        <a className="navbar-brand" href="#">Spring boot Tutorial</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
                <li className="nav-item" >
                    <a className="nav-link " aria-current="page" href="#">홈</a>

                </li>
                <li className="nav-item" >
                    <a className="nav-link" href="#">게시판</a>

                </li>


            </ul>
            <form className="d-flex" role="search">
                
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
        </div>
    </div>
  </nav></>
}