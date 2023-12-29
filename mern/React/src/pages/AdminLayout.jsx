import { Outlet } from "react-router-dom"
function AdminLayout() {
    return (
        <div>
            AdminLayout
            <Outlet /> {/*  is used to use the child routes of this route */}
        </div>
    )
}

export default AdminLayout