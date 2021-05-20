import React from "react"
import './Footer.scss'

const Footer = () => {
    return (
        <footer className={"footer"}>
            <div className={"text"}>
                <h4>&copy;

                    <span>Arjun </span> {new Date().getFullYear()}, all rights reserved. Built by
                    <a href="https://arjungautam.netlify.com" target="_blank" rel="nofollow noopener noreferrer"
                    > Arjun Gautam</a>

                </h4>
            </div>
        </footer>
    )
}

export default Footer
