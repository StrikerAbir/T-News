const { useEffect } = require("react")

const useTitle = (title) => {
    useEffect(() => {
        document.title = `${title} T-News`;
    },[title])
}
export default useTitle;