import PropTypes from 'prop-types';

function Header(props) {
    return(
        <header className="flex flex-row justify-between p-2">
            <a href="">{props.title}</a>
            <i className="fa-regular fa-house"></i>
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