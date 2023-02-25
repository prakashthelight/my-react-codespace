import React from "react";

const socialLinks = {
    linkedin: { url: "https://www.linkedin.com/in/prakashthelight/" },
    github: { url: "https://github.com/prakashthelight/" },
    facebook: { url: "https://www.facebook.com/prakash.thelight/" },
    instagram: { url: "https://www.instagram.com/prakash510/" }
}

const Contacts = () => {
    return (
        <div className="contact">
            <a href={socialLinks.linkedin.url}><img src="../../assets/linkedin-256.png" alt="Linked Icon"/></a>
            <a href={socialLinks.github.url}><img src="../../assets/github-256.png" alt="Github Icon"/></a>
            <a href={socialLinks.facebook.url}><img src="../../assets/facebook-256.png" alt="Facebook Icon"/></a>
            <a href={socialLinks.instagram.url}><img src="../../assets/instagram-256.png" alt="Instgram Icon"/></a>
        </div>
    );
}

export default Contacts;