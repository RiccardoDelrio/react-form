export default function Header() {
    return (
        <>
            <header className="bg-secondary">
                <div className="container">

                    <ul className="nav justify-content-end">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">
                                Tasks
                            </a>
                        </li>  <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">
                                Login
                            </a>
                        </li>  <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">
                                Submit
                            </a>
                        </li>
                    </ul>
                </div>

            </header>

        </>
    );
}
