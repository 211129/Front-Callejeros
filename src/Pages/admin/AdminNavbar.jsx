import React, { Component } from 'react'

function AdminNavbar() {
    return (
        <nav className="navbar navbar-light bg-light justify-content-between p-4">
            <a className="navbar-brand">Callejeros Admin</a>
            <form className="form-inline">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            </form>
        </nav>
    )
}

export default AdminNavbar;
