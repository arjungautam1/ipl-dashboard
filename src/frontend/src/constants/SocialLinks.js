import React from "react"
import {
    FaFacebookSquare,
    FaLinkedin,
    FaDribbbleSquare,
    FaBehanceSquare,
    FaTwitterSquare,
    FaInstagram,
    FaGithub,
    FaYoutube, FaYoutubeSquare
} from "react-icons/fa"

const data = [


    {
        id: 1,
        icon: <FaLinkedin className="social-icon"></FaLinkedin>,
        url: "https://www.linkedin.com/in/arjun-gautam-laser",
    },
    {
        id: 2,
        icon: <FaGithub className="social-icon"></FaGithub>,
        url: "https://www.github.com/arjungautam1",
    },
    {
        id: 7,
        icon: <FaYoutube className="social-icon"></FaYoutube>,
        url: "https://www.youtube.com/channel/UCJyDMA1hY0gWrCylFD963DA",
    },
    {
        id: 3,
        icon: <FaFacebookSquare className="social-icon"></FaFacebookSquare>,
        url: "https://www.facebook.com/people/Arjun-Gautam/100010140661075",
    },
    {
        id: 4,
        icon: <FaInstagram className="social-icon"></FaInstagram>,
        url: "https://www.instagram.com/arjungautam5431/",
    },

    {
        id: 5,
        icon: <FaTwitterSquare className="social-icon"></FaTwitterSquare>,
        url: "https://www.twitter.com/laserarjun876",
    },
]
const links = data.map(link => {
    return (
        <li key={link.id}>
            <a href={link.url} className="social-link"  target = "_blank">
                {link.icon}
            </a>
        </li>
    )
})

export default ({ styleClass }) => {
    return (
        <ul className={`social-links ${styleClass ? styleClass : ""}`}>{links}</ul>
    )
}
