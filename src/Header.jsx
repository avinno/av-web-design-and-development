import PropTypes from 'prop-types';

function Header(props) {
    return(
        <header className="flex flex-row justify-between p-2">
            <a href=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width={20}><path d="M303.5 5.7c-9-7.6-22.1-7.6-31.1 0l-264 224c-10.1 8.6-11.3 23.7-2.8 33.8s23.7 11.3 33.8 2.8L64 245.5 64 432c0 44.2 35.8 80 80 80l288 0c44.2 0 80-35.8 80-80l0-186.5 24.5 20.8c10.1 8.6 25.3 7.3 33.8-2.8s7.3-25.3-2.8-33.8l-264-224zM112 432l0-227.2L288 55.5 464 204.8 464 432c0 17.7-14.3 32-32 32l-48 0 0-152c0-22.1-17.9-40-40-40l-112 0c-22.1 0-40 17.9-40 40l0 152-48 0c-17.7 0-32-14.3-32-32zm128 32l0-144 96 0 0 144-96 0z"/></svg>
                {props.title}</a>
            <nav>
                <ul className="flex flex-row gap-4">
                    <li>
                        <a href="" className="text-blue-600 underline hover:no-underline">Link</a>
                    </li>
                    <li>
                        <a href="" className="text-blue-600 underline hover:no-underline">Link</a>
                    </li>
                    <li>
                        <a href="" className="text-blue-600 underline hover:no-underline">Link</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

Header.propTypes = {
    title: PropTypes.string,
}

Header.defaultProps = {
    title: "AV Web Design & Development",
}

export default Header;