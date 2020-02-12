import { connect } from "react-redux"
import MainContent from "./main_content"

const mSTP = state => {
    return{
        sidebar: state.ui.sidebar
    }
}

export default connect(mSTP, null)(MainContent);