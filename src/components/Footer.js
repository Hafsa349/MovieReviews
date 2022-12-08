import logo from '../images/logo.png'

export function Footer(props) {
    return (
        <footer className="text-center bg-danger text-warning">
            {/* <div className="container-fluid">
                <p>&copy; {props.year} all rights reserved</p>
            </div> */}

            <div className="container">
                <section>
                    <div className="row text-center d-flex justify-content-center pt-4">
                        <div className="col-md-2">
                            <img src={logo} width="130"></img>

                        </div>
                    </div>
                </section>
                <section className="mt-5">
                    <div className="row text-center d-flex justify-content-center">
                        <div className="col-md-2">
                            <h6 className="text-uppercase font-weight-bold">
                                <a href="/Movies" className="text-warning">Movies</a>
                            </h6>
                        </div>
                        <div className="col-md-2">
                            <h6 className="text-uppercase font-weight-bold">
                                <a href="/Deals" className="text-warning">Deals</a>
                            </h6>
                        </div>

                        <div className="col-md-2">
                            <h6 className="text-uppercase font-weight-bold">
                                <a href="#!" className="text-warning">About us</a>
                            </h6>
                        </div>
                        <div className="col-md-2">
                            <h6 className="text-uppercase font-weight-bold">
                                <a href="#!" className="text-warning">Contact</a>
                            </h6>
                        </div>
                    </div>
                </section>
                
            </div>
            <hr class="my-5" />

            <div className="text-center p-3">
            &copy; {props.year}; Copyright: <a class="text-white" href="#">MovieReviews</a>
            </div>




        </footer>
    )
}