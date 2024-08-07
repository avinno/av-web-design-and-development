import PropTypes from 'prop-types';
import { library } from '@fortawesome/fontawesome-svg-core'
import { all } from '@awesome.me/kit-d52ee281e2/icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

library.add(...all)

function Header(props) {
    return(
        <header className="flex flex-row justify-between p-2">
            <a href="">{props.title}</a>
            <FontAwesomeIcon icon="fa-regular fa-house" />
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